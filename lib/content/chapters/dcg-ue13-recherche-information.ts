import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue13-recherche-information.generated";
import { quiz } from "./dcg-ue13-recherche-information.quiz.generated";
import { sansCadrageSeance } from "../filtrer-seances";

export const rechercheInformation: Chapter = {
  ...generated,
  sections: sansCadrageSeance(generated.sections),
  quiz,
};
