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

/**
 * Compétences d'un exercice : celles déclarées dans le cahier, plus
 * celles attribuées par le fondateur depuis l'espace professeur pour les
 * exercices que le cahier ne couvre pas.
 */
export function competencesDe(exercise: Exercise, attribuees: string[] = []): string[] {
  const bloc = exercise.statement.find(
    (b): b is Extract<ContentBlock, { type: "p" }> =>
      b.type === "p" && BLOC_COMPETENCES.test(b.text)
  );
  const ajouts = attribuees.map(nettoyer).filter((t) => t.length > 3);
  if (!bloc) return ajouts;
  const apres = bloc.text.replace(new RegExp(`^.*?${BLOC_COMPETENCES.source}`, "i"), "");
  const declarees = apres
    .split("•")
    .map(nettoyer)
    .filter((t) => t.length > 3);
  const cles = new Set(declarees.map(cleCompetence));
  return [...declarees, ...ajouts.filter((a) => !cles.has(cleCompetence(a)))];
}

/**
 * Compétences d'un jeu d'exercices, dédoublonnées, avec le nombre
 * d'applications qui travaillent chacune — l'ordre est celui de première
 * apparition dans le cahier.
 */
export function competencesDuChapitre(
  exercises: Exercise[],
  attributions: Record<string, string[]> = {}
): { texte: string; cle: string; applications: number }[] {
  const vues = new Map<string, { texte: string; cle: string; applications: number }>();
  for (const ex of exercises) {
    for (const texte of competencesDe(ex, attributions[ex.id])) {
      const cle = cleCompetence(texte);
      const existante = vues.get(cle);
      if (existante) existante.applications++;
      else vues.set(cle, { texte, cle, applications: 1 });
    }
  }
  return [...vues.values()];
}

/**
 * Toutes les compétences connues du site — cahiers et attributions du
 * fondateur confondus — avec leur nombre d'applications. C'est la banque
 * dans laquelle un chapitre puise les siennes.
 */
export function toutesLesCompetences(
  chapitres: { slug: string; exercises?: Exercise[] }[],
  attributions: Record<string, string[]> = {}
): { texte: string; cle: string; applications: number }[] {
  const vues = new Map<string, { texte: string; cle: string; applications: number }>();
  for (const ch of chapitres) {
    for (const ex of ch.exercises ?? []) {
      for (const texte of competencesDe(ex, attributions[`${ch.slug}:${ex.id}`])) {
        const cle = cleCompetence(texte);
        const existante = vues.get(cle);
        if (existante) existante.applications++;
        else vues.set(cle, { texte, cle, applications: 1 });
      }
    }
  }
  return [...vues.values()];
}

/**
 * Applications d'un chapitre lorsque sa chaîne de compétences est active :
 * tout exercice du site — quel que soit son cahier d'origine — dont une
 * compétence croise celles du chapitre.
 *
 * Les exercices venus d'un autre cahier sont ré-identifiés en
 * « slug:d'origine:id » — deux cahiers numérotent tous deux « ex1 » — et
 * leur repère signale le chapitre d'origine. Le second résultat donne,
 * par identifiant affiché, les compétences attribuées à transmettre au
 * filtre client.
 */
export function applicationsParCompetences(
  slug: string,
  competencesDuChap: string[],
  chapitres: { slug: string; number: number; exercises?: Exercise[] }[],
  attributions: Record<string, string[]> = {}
): { exercises: Exercise[]; attributionsAffichees: Record<string, string[]> } {
  const cles = new Set(competencesDuChap.map(cleCompetence));
  const exercises: Exercise[] = [];
  const attributionsAffichees: Record<string, string[]> = {};

  for (const ch of chapitres) {
    for (const ex of ch.exercises ?? []) {
      const attribuees = attributions[`${ch.slug}:${ex.id}`] ?? [];
      const comps = competencesDe(ex, attribuees);
      if (!comps.some((c) => cles.has(cleCompetence(c)))) continue;

      const affiche =
        ch.slug === slug
          ? ex
          : { ...ex, id: `${ch.slug}:${ex.id}`, label: `${ex.label} · ch. ${ch.number}` };
      exercises.push(affiche);
      if (attribuees.length) attributionsAffichees[affiche.id] = attribuees;
    }
  }
  return { exercises, attributionsAffichees };
}
