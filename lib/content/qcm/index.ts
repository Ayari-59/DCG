// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
import type { Flashcard, QuizQuestion } from "../types";
import { flashcards as fccadreMetierOrganisation } from "./dcg-ue11-cadre-metier-organisation.flashcards.generated";
import { quiz as qzcadreMetierOrganisation } from "./dcg-ue11-cadre-metier-organisation.quiz.generated";
import { flashcards as fcfondementsConstructionCouts } from "./dcg-ue11-fondements-construction-couts.flashcards.generated";
import { quiz as qzfondementsConstructionCouts } from "./dcg-ue11-fondements-construction-couts.quiz.generated";
import { flashcards as fcmodeleVolumeCoutProfit } from "./dcg-ue11-modele-volume-cout-profit.flashcards.generated";
import { quiz as qzmodeleVolumeCoutProfit } from "./dcg-ue11-modele-volume-cout-profit.quiz.generated";
import { flashcards as fcanalyseRisqueLoiNormale } from "./dcg-ue11-analyse-risque-loi-normale.flashcards.generated";
import { quiz as qzanalyseRisqueLoiNormale } from "./dcg-ue11-analyse-risque-loi-normale.quiz.generated";
import { flashcards as fcmethodeCoutsComplets } from "./dcg-ue11-methode-couts-complets.flashcards.generated";
import { quiz as qzmethodeCoutsComplets } from "./dcg-ue11-methode-couts-complets.quiz.generated";
import { flashcards as fcmethodeAbc } from "./dcg-ue11-methode-abc.flashcards.generated";
import { quiz as qzmethodeAbc } from "./dcg-ue11-methode-abc.quiz.generated";
import { flashcards as fcimputationRationnelle } from "./dcg-ue11-imputation-rationnelle.flashcards.generated";
import { quiz as qzimputationRationnelle } from "./dcg-ue11-imputation-rationnelle.quiz.generated";
import { flashcards as fcmethodeCoutsPartiels } from "./dcg-ue11-methode-couts-partiels.flashcards.generated";
import { quiz as qzmethodeCoutsPartiels } from "./dcg-ue11-methode-couts-partiels.quiz.generated";
import { flashcards as fcprocedureBudgetaire } from "./dcg-ue11-procedure-budgetaire.flashcards.generated";
import { quiz as qzprocedureBudgetaire } from "./dcg-ue11-procedure-budgetaire.quiz.generated";
import { flashcards as fcbudgetDesVentes } from "./dcg-ue11-budget-des-ventes.flashcards.generated";
import { quiz as qzbudgetDesVentes } from "./dcg-ue11-budget-des-ventes.quiz.generated";
import { flashcards as fcgestionApprovisionnements } from "./dcg-ue11-gestion-approvisionnements.flashcards.generated";
import { quiz as qzgestionApprovisionnements } from "./dcg-ue11-gestion-approvisionnements.quiz.generated";
import { flashcards as fcgestionProduction } from "./dcg-ue11-gestion-production.flashcards.generated";
import { quiz as qzgestionProduction } from "./dcg-ue11-gestion-production.quiz.generated";
import { flashcards as fcgestionMasseSalariale } from "./dcg-ue11-gestion-masse-salariale.flashcards.generated";
import { quiz as qzgestionMasseSalariale } from "./dcg-ue11-gestion-masse-salariale.quiz.generated";
import { flashcards as fccontroleBudgetaireEcarts } from "./dcg-ue11-controle-budgetaire-ecarts.flashcards.generated";
import { quiz as qzcontroleBudgetaireEcarts } from "./dcg-ue11-controle-budgetaire-ecarts.quiz.generated";
import { flashcards as fctableauxDeBordReporting } from "./dcg-ue11-tableaux-de-bord-reporting.flashcards.generated";
import { quiz as qztableauxDeBordReporting } from "./dcg-ue11-tableaux-de-bord-reporting.quiz.generated";
import { flashcards as fcgestionQualite } from "./dcg-ue11-gestion-qualite.flashcards.generated";
import { quiz as qzgestionQualite } from "./dcg-ue11-gestion-qualite.quiz.generated";
import { flashcards as fccoutCible } from "./dcg-ue11-cout-cible.flashcards.generated";
import { quiz as qzcoutCible } from "./dcg-ue11-cout-cible.quiz.generated";
import { flashcards as fcprixCessionInterne } from "./dcg-ue11-prix-cession-interne.flashcards.generated";
import { quiz as qzprixCessionInterne } from "./dcg-ue11-prix-cession-interne.quiz.generated";
import { flashcards as fcperformanceGlobaleDurabilite } from "./dcg-ue11-performance-globale-durabilite.flashcards.generated";
import { quiz as qzperformanceGlobaleDurabilite } from "./dcg-ue11-performance-globale-durabilite.quiz.generated";

/** Flashcards tirées des QCM du manuel, par slug de chapitre. */
export const flashcardsQcmBySlug: Record<string, Flashcard[]> = {
  "dcg-ue11-cadre-metier-organisation": fccadreMetierOrganisation,
  "dcg-ue11-fondements-construction-couts": fcfondementsConstructionCouts,
  "dcg-ue11-modele-volume-cout-profit": fcmodeleVolumeCoutProfit,
  "dcg-ue11-analyse-risque-loi-normale": fcanalyseRisqueLoiNormale,
  "dcg-ue11-methode-couts-complets": fcmethodeCoutsComplets,
  "dcg-ue11-methode-abc": fcmethodeAbc,
  "dcg-ue11-imputation-rationnelle": fcimputationRationnelle,
  "dcg-ue11-methode-couts-partiels": fcmethodeCoutsPartiels,
  "dcg-ue11-procedure-budgetaire": fcprocedureBudgetaire,
  "dcg-ue11-budget-des-ventes": fcbudgetDesVentes,
  "dcg-ue11-gestion-approvisionnements": fcgestionApprovisionnements,
  "dcg-ue11-gestion-production": fcgestionProduction,
  "dcg-ue11-gestion-masse-salariale": fcgestionMasseSalariale,
  "dcg-ue11-controle-budgetaire-ecarts": fccontroleBudgetaireEcarts,
  "dcg-ue11-tableaux-de-bord-reporting": fctableauxDeBordReporting,
  "dcg-ue11-gestion-qualite": fcgestionQualite,
  "dcg-ue11-cout-cible": fccoutCible,
  "dcg-ue11-prix-cession-interne": fcprixCessionInterne,
  "dcg-ue11-performance-globale-durabilite": fcperformanceGlobaleDurabilite,
};

/** QCM du manuel, complets — ils remplacent les questions générées. */
export const quizQcmBySlug: Record<string, QuizQuestion[]> = {
  "dcg-ue11-cadre-metier-organisation": qzcadreMetierOrganisation,
  "dcg-ue11-fondements-construction-couts": qzfondementsConstructionCouts,
  "dcg-ue11-modele-volume-cout-profit": qzmodeleVolumeCoutProfit,
  "dcg-ue11-analyse-risque-loi-normale": qzanalyseRisqueLoiNormale,
  "dcg-ue11-methode-couts-complets": qzmethodeCoutsComplets,
  "dcg-ue11-methode-abc": qzmethodeAbc,
  "dcg-ue11-imputation-rationnelle": qzimputationRationnelle,
  "dcg-ue11-methode-couts-partiels": qzmethodeCoutsPartiels,
  "dcg-ue11-procedure-budgetaire": qzprocedureBudgetaire,
  "dcg-ue11-budget-des-ventes": qzbudgetDesVentes,
  "dcg-ue11-gestion-approvisionnements": qzgestionApprovisionnements,
  "dcg-ue11-gestion-production": qzgestionProduction,
  "dcg-ue11-gestion-masse-salariale": qzgestionMasseSalariale,
  "dcg-ue11-controle-budgetaire-ecarts": qzcontroleBudgetaireEcarts,
  "dcg-ue11-tableaux-de-bord-reporting": qztableauxDeBordReporting,
  "dcg-ue11-gestion-qualite": qzgestionQualite,
  "dcg-ue11-cout-cible": qzcoutCible,
  "dcg-ue11-prix-cession-interne": qzprixCessionInterne,
  "dcg-ue11-performance-globale-durabilite": qzperformanceGlobaleDurabilite,
};
