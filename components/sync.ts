"use client";

import { enregistrerProgression } from "@/app/compte/actions";
import { COOKIE_DRAPEAU_CLIENT } from "@/lib/drapeau";

/**
 * Synchronisation de la progression vers le compte.
 *
 * Les composants Quiz et Flashcards continuent d'écrire dans le
 * navigateur — c'est la source de vérité locale, elle marche sans compte
 * et sans réseau. Quand l'apprenant est connecté, la même écriture part
 * aussi vers la base, en différé et sans bloquer l'interface.
 *
 * Le drapeau de connexion est un cookie lisible : il évite d'appeler le
 * serveur pour rien quand personne n'est connecté — la quasi-totalité des
 * visites.
 */

function connecte(): boolean {
  return document.cookie.split("; ").some((c) => c.startsWith(`${COOKIE_DRAPEAU_CLIENT}=`));
}

const enAttente = new Map<string, ReturnType<typeof setTimeout>>();

/**
 * Programme l'envoi, en absorbant les rafales : marquer dix cartes
 * acquises à la suite ne part qu'une fois.
 */
export function synchroniser(entree: {
  chapitre: string;
  quizScore?: number;
  quizTotal?: number;
  cartes?: string[];
}): void {
  if (!connecte()) return;
  const cle = entree.chapitre + (entree.quizScore !== undefined ? ":quiz" : ":cartes");
  clearTimeout(enAttente.get(cle));
  enAttente.set(
    cle,
    setTimeout(() => {
      enAttente.delete(cle);
      enregistrerProgression(entree).catch(() => {
        // hors ligne ou serveur indisponible : la copie locale fait foi,
        // la prochaine action retentera
      });
    }, 1200)
  );
}
