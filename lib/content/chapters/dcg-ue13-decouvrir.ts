import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-decouvrir.generated";
import { quiz } from "./dcg-ue13-decouvrir.quiz.generated";
import { sansCadrageSeance } from "../filtrer-seances";

export const decouvrirComPro: Chapter = {
  ...generated,
  sections: sansCadrageSeance(generated.sections),
  quiz,
};
