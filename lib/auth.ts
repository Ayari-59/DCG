import { timingSafeEqual } from "node:crypto";

/**
 * Clé d'activation de l'espace professeur.
 *
 * Il n'y a plus de session « admin » : les enseignants ont leurs comptes
 * (voir lib/enseignant.ts). L'ADMIN_PASSWORD de l'environnement ne sert
 * plus qu'à une chose — amorcer le tout premier compte, celui du
 * fondateur, depuis /prof. Celui qui déploie le site est celui qui le
 * fonde.
 */

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

export const cleActivationConfiguree = () => Boolean(process.env.ADMIN_PASSWORD);
