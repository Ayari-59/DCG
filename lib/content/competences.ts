import type { ContentBlock, Exercise } from "./types";

/**
 * Les compétences visées par les applications.
 *
 * Pas de table à remplir : les cahiers de l'auteur déclarent déjà, dans
 * l'énoncé de chaque exercice, un bloc « **Compétences visées** » suivi de
 * puces « • ». C'est cette déclaration qui fait foi — les rattachements
 * compétence ↔ application viennent des cahiers, pas d'une saisie
 * parallèle qui finirait par dériver. 81 des 131 exercices en portent ;
 * les autres restent visibles hors filtre.
 */

const BLOC_COMPETENCES = /\*\*Comp[ée]tences vis[ée]es?\s*\*\*/i;

/** Deux libellés désignent la même compétence à l'espace et au point près. */
export const cleCompetence = (texte: string) =>
  texte.toLowerCase().replace(/\s+/g, " ").replace(/[.;:]\s*$/, "").trim();

function nettoyer(texte: string): string {
  return texte
    .replace(/\*\*/g, "")
    .replace(/\s+/g, " ")
    .replace(/[.;:]\s*$/, "")
    .trim();
}

/** Compétences déclarées par un exercice, dans l'ordre du cahier. */
export function competencesDe(exercise: Exercise): string[] {
  const bloc = exercise.statement.find(
    (b): b is Extract<ContentBlock, { type: "p" }> =>
      b.type === "p" && BLOC_COMPETENCES.test(b.text)
  );
  if (!bloc) return [];
  const apres = bloc.text.replace(new RegExp(`^.*?${BLOC_COMPETENCES.source}`, "i"), "");
  return apres
    .split("•")
    .map(nettoyer)
    .filter((t) => t.length > 3);
}

/**
 * Compétences d'un jeu d'exercices, dédoublonnées, avec le nombre
 * d'applications qui travaillent chacune — l'ordre est celui de première
 * apparition dans le cahier.
 */
export function competencesDuChapitre(
  exercises: Exercise[]
): { texte: string; cle: string; applications: number }[] {
  const vues = new Map<string, { texte: string; cle: string; applications: number }>();
  for (const ex of exercises) {
    for (const texte of competencesDe(ex)) {
      const cle = cleCompetence(texte);
      const existante = vues.get(cle);
      if (existante) existante.applications++;
      else vues.set(cle, { texte, cle, applications: 1 });
    }
  }
  return [...vues.values()];
}
