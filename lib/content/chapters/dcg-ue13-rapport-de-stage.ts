import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-rapport-de-stage.generated";
import { quiz } from "./dcg-ue13-rapport-de-stage.quiz.generated";

/**
 * Séances générées depuis les diaporamas du kit (voir .generated.ts).
 * Le quiz reprend le support interactif du kit (voir .quiz.generated.ts).
 * Les flashcards restent à rédiger ici.
 */
export const rapportDeStage: Chapter = {
  ...generated,
  quiz,
};
