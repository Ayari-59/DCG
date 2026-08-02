import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-rapport-de-stage.generated";
import { quiz } from "./dcg-ue13-rapport-de-stage.quiz.generated";
import { sansCadrageSeance } from "../filtrer-seances";

export const rapportDeStage: Chapter = {
  ...generated,
  sections: sansCadrageSeance(generated.sections),
  quiz,
};
