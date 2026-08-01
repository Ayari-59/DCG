import "server-only";
import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";
import { prisma, dbConfigured } from "./db";
import type { Enseignant } from "@prisma/client";

/**
 * Authentification des enseignants.
 *
 * Même mécanique que les apprenants — empreinte scrypt du mot de passe,
 * empreinte SHA-256 du jeton de session — mais un espace distinct : un
 * enseignant n'est pas un apprenant qui aurait des droits en plus, c'est
 * un autre métier, une autre table, un autre cookie.
 *
 * Le premier compte — le fondateur — se crée depuis /prof avec la clé
 * d'activation (ADMIN_PASSWORD) ; il invite ensuite ses collègues, qui
 * n'ont jamais besoin de cette clé.
 */

const COOKIE = "enseignant_session";
const DUREE_MS = 30 * 24 * 60 * 60 * 1000; // 30 jours

const empreinteJeton = (jeton: string) => createHash("sha256").update(jeton).digest("hex");

export async function ouvrirSessionEnseignant(enseignantId: string): Promise<void> {
  const jeton = randomBytes(32).toString("hex");
  await prisma.sessionEnseignant.create({
    data: { jeton: empreinteJeton(jeton), enseignantId, expire: new Date(Date.now() + DUREE_MS) },
  });
  (await cookies()).set(COOKIE, jeton, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: DUREE_MS / 1000,
  });
}

export async function fermerSessionEnseignant(): Promise<void> {
  const store = await cookies();
  const jeton = store.get(COOKIE)?.value;
  if (jeton && dbConfigured) {
    await prisma.sessionEnseignant
      .delete({ where: { jeton: empreinteJeton(jeton) } })
      .catch(() => undefined);
  }
  store.delete(COOKIE);
}

/** L'enseignant de la requête courante, ou null. */
export async function enseignantConnecte(): Promise<Enseignant | null> {
  if (!dbConfigured) return null;
  const jeton = (await cookies()).get(COOKIE)?.value;
  if (!jeton) return null;

  const session = await prisma.sessionEnseignant.findUnique({
    where: { jeton: empreinteJeton(jeton) },
    include: { enseignant: true },
  });
  if (!session || session.expire < new Date()) return null;
  return session.enseignant;
}

export const estFondateur = (e: Enseignant | null): boolean => e?.role === "fondateur";
