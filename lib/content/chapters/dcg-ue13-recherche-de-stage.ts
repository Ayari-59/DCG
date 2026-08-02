import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-recherche-de-stage.generated";
import { quiz } from "./dcg-ue13-recherche-de-stage.quiz.generated";
import { sansCadrageSeance } from "../filtrer-seances";

export const rechercheDeStage: Chapter = {
  ...generated,
  sections: sansCadrageSeance(generated.sections),
  quiz,
};
