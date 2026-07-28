import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Authentification de l'espace professeur. Il n'y a qu'un seul auteur :
 * un mot de passe unique et un cookie signé suffisent. Pas de table
 * utilisateur, pas d'inscription — cela viendra avec les comptes élèves.
 */

const COOKIE = "prof_session";
const DUREE_MS = 30 * 24 * 60 * 60 * 1000; // 30 jours

function secret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s) throw new Error("ADMIN_SESSION_SECRET manquant");
  return s;
}

function signe(expiration: number): string {
  return createHmac("sha256", secret()).update(String(expiration)).digest("hex");
}

/** Comparaison à durée constante : ne renseigne pas sur le mot de passe. */
function egal(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

export function motDePasseValide(saisi: string): boolean {
  const attendu = process.env.ADMIN_PASSWORD;
  if (!attendu) return false;
  return egal(saisi, attendu);
}

export async function ouvrirSession(): Promise<void> {
  const expiration = Date.now() + DUREE_MS;
  const store = await cookies();
  store.set(COOKIE, `${expiration}.${signe(expiration)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: DUREE_MS / 1000,
  });
}

export async function fermerSession(): Promise<void> {
  (await cookies()).delete(COOKIE);
}

export async function sessionOuverte(): Promise<boolean> {
  const valeur = (await cookies()).get(COOKIE)?.value;
  if (!valeur) return false;
  const [expiration, signature] = valeur.split(".");
  if (!expiration || !signature) return false;
  if (Number(expiration) < Date.now()) return false;
  try {
    return egal(signature, signe(Number(expiration)));
  } catch {
    return false;
  }
}

export const adminConfigure = () =>
  Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);
