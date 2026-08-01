import "server-only";
import {
  createHash,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";
import { cookies } from "next/headers";
import { prisma, dbConfigured } from "./db";
import type { Apprenant } from "@prisma/client";

/**
 * Authentification des apprenants.
 *
 * Email et mot de passe, sans dépendance ni service tiers : l'empreinte du
 * mot de passe est calculée avec le scrypt de Node. Le compte est
 * facultatif — tout le site se consulte sans — et se supprime lui-même,
 * données comprises, depuis la page Mon espace.
 *
 * Deux cookies : le jeton de session, illisible par le navigateur ; et un
 * simple drapeau « connecté », lisible lui, qui évite aux composants
 * client d'appeler le serveur pour rien quand personne n'est connecté.
 */

import { COOKIE_DRAPEAU_CLIENT as COOKIE_DRAPEAU } from "./drapeau";

const COOKIE_SESSION = "apprenant_session";
const DUREE_MS = 90 * 24 * 60 * 60 * 1000; // 90 jours : une année scolaire, pas plus

// ── Mot de passe ─────────────────────────────────────────────────────

export function hacherMotDePasse(motDePasse: string): string {
  const sel = randomBytes(16).toString("hex");
  const empreinte = scryptSync(motDePasse, sel, 64).toString("hex");
  return `${sel}.${empreinte}`;
}

export function motDePasseCorrespond(motDePasse: string, stocke: string): boolean {
  const [sel, empreinte] = stocke.split(".");
  if (!sel || !empreinte) return false;
  const candidate = scryptSync(motDePasse, sel, 64);
  const attendue = Buffer.from(empreinte, "hex");
  return candidate.length === attendue.length && timingSafeEqual(candidate, attendue);
}

// ── Sessions ─────────────────────────────────────────────────────────

/** Seule l'empreinte du jeton est stockée : un vol de base ne vole pas les sessions. */
const empreinteJeton = (jeton: string) => createHash("sha256").update(jeton).digest("hex");

export async function ouvrirSessionApprenant(apprenantId: string): Promise<void> {
  const jeton = randomBytes(32).toString("hex");
  const expire = new Date(Date.now() + DUREE_MS);
  await prisma.sessionApprenant.create({
    data: { jeton: empreinteJeton(jeton), apprenantId, expire },
  });

  const store = await cookies();
  const options = {
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: DUREE_MS / 1000,
  };
  store.set(COOKIE_SESSION, jeton, { ...options, httpOnly: true });
  store.set(COOKIE_DRAPEAU, "1", options);
}

export async function fermerSessionApprenant(): Promise<void> {
  const store = await cookies();
  const jeton = store.get(COOKIE_SESSION)?.value;
  if (jeton && dbConfigured) {
    await prisma.sessionApprenant
      .delete({ where: { jeton: empreinteJeton(jeton) } })
      .catch(() => undefined);
  }
  store.delete(COOKIE_SESSION);
  store.delete(COOKIE_DRAPEAU);
}

/** L'apprenant de la requête courante, ou null. */
export async function apprenantConnecte(): Promise<Apprenant | null> {
  if (!dbConfigured) return null;
  const jeton = (await cookies()).get(COOKIE_SESSION)?.value;
  if (!jeton) return null;

  const session = await prisma.sessionApprenant.findUnique({
    where: { jeton: empreinteJeton(jeton) },
    include: { apprenant: true },
  });
  if (!session || session.expire < new Date()) return null;
  return session.apprenant;
}

// ── Réglages de visibilité ───────────────────────────────────────────

export const CLE_RESSOURCES_RESERVEES = "ressources-reservees";

/**
 * Types de ressources que l'auteur peut réserver aux apprenants connectés.
 * La leçon n'y figure pas : le cours reste la vitrine du site.
 */
export const RESSOURCES_RESERVABLES = [
  { id: "methodes", libelle: "Méthodologie" },
  { id: "fiche", libelle: "Fiches de révision" },
  { id: "annales", libelle: "Annales" },
  { id: "flashcards", libelle: "Flashcards" },
  { id: "quiz", libelle: "Quiz" },
  { id: "videos", libelle: "Vidéos" },
] as const;

export type RessourceReservable = (typeof RESSOURCES_RESERVABLES)[number]["id"];

/** Liste des ressources actuellement réservées, vide si la base est absente. */
export async function ressourcesReservees(): Promise<RessourceReservable[]> {
  if (!dbConfigured) return [];
  const reglage = await prisma.reglage.findUnique({ where: { cle: CLE_RESSOURCES_RESERVEES } });
  if (!reglage) return [];
  try {
    const ids = JSON.parse(reglage.valeur) as string[];
    return RESSOURCES_RESERVABLES.map((r) => r.id).filter((id) => ids.includes(id));
  } catch {
    return [];
  }
}
