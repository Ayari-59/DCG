import type { Exercise } from "../types";
import { exercises as analyseRisqueLoiNormale } from "./dcg-ue11-analyse-risque-loi-normale.generated";
import { exercises as budgetDesVentes } from "./dcg-ue11-budget-des-ventes.generated";
import { exercises as cadreMetierOrganisation } from "./dcg-ue11-cadre-metier-organisation.generated";
import { exercises as controleBudgetaireEcarts } from "./dcg-ue11-controle-budgetaire-ecarts.generated";
import { exercises as coutCible } from "./dcg-ue11-cout-cible.generated";
import { exercises as fondementsConstructionCouts } from "./dcg-ue11-fondements-construction-couts.generated";
import { exercises as gestionApprovisionnements } from "./dcg-ue11-gestion-approvisionnements.generated";
import { exercises as gestionMasseSalariale } from "./dcg-ue11-gestion-masse-salariale.generated";
import { exercises as gestionProduction } from "./dcg-ue11-gestion-production.generated";
import { exercises as gestionQualite } from "./dcg-ue11-gestion-qualite.generated";
import { exercises as imputationRationnelle } from "./dcg-ue11-imputation-rationnelle.generated";
import { exercises as methodeAbc } from "./dcg-ue11-methode-abc.generated";
import { exercises as methodeCoutsComplets } from "./dcg-ue11-methode-couts-complets.generated";
import { exercises as methodeCoutsPartiels } from "./dcg-ue11-methode-couts-partiels.generated";
import { exercises as modeleVolumeCoutProfit } from "./dcg-ue11-modele-volume-cout-profit.generated";
import { exercises as prixCessionInterne } from "./dcg-ue11-prix-cession-interne.generated";
import { exercises as procedureBudgetaire } from "./dcg-ue11-procedure-budgetaire.generated";
import { exercises as tableauxDeBordReporting } from "./dcg-ue11-tableaux-de-bord-reporting.generated";

/** Applications par slug de chapitre (générées depuis les cahiers).  */
export const exercisesBySlug: Record<string, Exercise[]> = {
  "dcg-ue11-analyse-risque-loi-normale": analyseRisqueLoiNormale,
  "dcg-ue11-budget-des-ventes": budgetDesVentes,
  "dcg-ue11-cadre-metier-organisation": cadreMetierOrganisation,
  "dcg-ue11-controle-budgetaire-ecarts": controleBudgetaireEcarts,
  "dcg-ue11-cout-cible": coutCible,
  "dcg-ue11-fondements-construction-couts": fondementsConstructionCouts,
  "dcg-ue11-gestion-approvisionnements": gestionApprovisionnements,
  "dcg-ue11-gestion-masse-salariale": gestionMasseSalariale,
  "dcg-ue11-gestion-production": gestionProduction,
  "dcg-ue11-gestion-qualite": gestionQualite,
  "dcg-ue11-imputation-rationnelle": imputationRationnelle,
  "dcg-ue11-methode-abc": methodeAbc,
  "dcg-ue11-methode-couts-complets": methodeCoutsComplets,
  "dcg-ue11-methode-couts-partiels": methodeCoutsPartiels,
  "dcg-ue11-modele-volume-cout-profit": modeleVolumeCoutProfit,
  "dcg-ue11-prix-cession-interne": prixCessionInterne,
  "dcg-ue11-procedure-budgetaire": procedureBudgetaire,
  "dcg-ue11-tableaux-de-bord-reporting": tableauxDeBordReporting,
};
