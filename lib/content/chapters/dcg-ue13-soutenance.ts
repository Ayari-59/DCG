import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-soutenance.generated";
import { quiz } from "./dcg-ue13-soutenance.quiz.generated";
import { sansCadrageSeance } from "../filtrer-seances";

export const soutenance: Chapter = {
  ...generated,
  sections: sansCadrageSeance(generated.sections),
  quiz,
};
