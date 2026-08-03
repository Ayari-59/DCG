import type { Chapter } from "./content/types";

/**
 * Progression d'un apprenant sur un chapitre.
 *
 * Quatre axes pondérés — la leçon pèse le plus lourd, c'est le socle ;
 * le quiz valide la compréhension ; les flashcards ancrent la mémorisation ;
 * les applications exercent le savoir-faire.
 */

const POIDS = { lecon: 0.4, quiz: 0.25, flashcards: 0.2, applications: 0.15 };

export interface ProgressionChapitre {
  lecon: number;
  quiz: number;
  flashcards: number;
  applications: number;
  global: number;
}

export function progressionDuChapitre(
  chapitre: Chapter,
  donnees: {
    sectionsLues?: string[];
    quizScore?: number | null;
    quizTotal?: number | null;
    cartes?: string[];
    applications?: Record<string, string>;
  },
): ProgressionChapitre {
  const sectionsLues = donnees.sectionsLues ?? [];
  const totalSections = chapitre.sections.length;
  const lecon = totalSections > 0 ? sectionsLues.length / totalSections : 0;

  const quiz =
    donnees.quizScore != null && donnees.quizTotal
      ? donnees.quizScore / donnees.quizTotal
      : 0;

  const totalCartes = chapitre.flashcards.length;
  const flashcards =
    totalCartes > 0 ? (donnees.cartes?.length ?? 0) / totalCartes : 0;

  const totalApplis = chapitre.exercises?.length ?? 0;
  const nbApplis = Object.keys(donnees.applications ?? {}).length;
  const applications = totalApplis > 0 ? nbApplis / totalApplis : 0;

  const poidsLecon = totalSections > 0 ? POIDS.lecon : 0;
  const poidsQuiz = chapitre.quiz.length > 0 ? POIDS.quiz : 0;
  const poidsFlashcards = totalCartes > 0 ? POIDS.flashcards : 0;
  const poidsApplis = totalApplis > 0 ? POIDS.applications : 0;
  const sommePoids = poidsLecon + poidsQuiz + poidsFlashcards + poidsApplis;

  const global =
    sommePoids > 0
      ? (poidsLecon * lecon +
          poidsQuiz * quiz +
          poidsFlashcards * flashcards +
          poidsApplis * applications) /
        sommePoids
      : 0;

  return {
    lecon: Math.min(1, lecon),
    quiz: Math.min(1, quiz),
    flashcards: Math.min(1, flashcards),
    applications: Math.min(1, applications),
    global: Math.min(1, global),
  };
}

export function progressionGlobale(
  progressions: ProgressionChapitre[],
): number {
  if (progressions.length === 0) return 0;
  return (
    progressions.reduce((s, p) => s + p.global, 0) / progressions.length
  );
}
