import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-analyser-situation.generated";

/**
 * Séances générées depuis les diaporamas du kit (voir .generated.ts).
 * Flashcards et quiz sont à rédiger ici, à partir des QCM du kit.
 */
export const analyserSituation: Chapter = {
  ...generated,
};
