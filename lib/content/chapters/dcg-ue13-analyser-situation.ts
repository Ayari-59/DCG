import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-analyser-situation.generated";
import { quiz } from "./dcg-ue13-analyser-situation.quiz.generated";
import { sansCadrageSeance } from "../filtrer-seances";

export const analyserSituation: Chapter = {
  ...generated,
  sections: sansCadrageSeance(generated.sections),
  quiz,
};
