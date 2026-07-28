import type { Chapter, Section } from "./types";

/**
 * Sections du cours qui constituent la fiche de révision : les manuels
 * sources terminent chaque chapitre par une fiche, une synthèse ou un
 * tableau récapitulatif. On les regroupe dans un onglet dédié plutôt que
 * de les rédiger à nouveau.
 */
const FICHE_TITLE =
  /(fiche de r[ée]vision|r[ée]capitulatif|synth[èe]se|à retenir|a retenir|l'essentiel|definitions incontournables|d[ée]finitions incontournables)/i;

export function getFicheSections(chapter: Chapter): Section[] {
  return chapter.sections.filter((s) => FICHE_TITLE.test(s.title));
}

export function hasFiche(chapter: Chapter): boolean {
  return getFicheSections(chapter).length > 0 || chapter.flashcards.length > 0;
}
