import type { Methode } from "../types";
import { methodes as analyseRisqueLoiNormale } from "./dcg-ue11-analyse-risque-loi-normale.generated";
import { methodes as budgetDesVentes } from "./dcg-ue11-budget-des-ventes.generated";
import { methodes as cadreMetierOrganisation } from "./dcg-ue11-cadre-metier-organisation.generated";
import { methodes as controleBudgetaireEcarts } from "./dcg-ue11-controle-budgetaire-ecarts.generated";
import { methodes as coutCible } from "./dcg-ue11-cout-cible.generated";
import { methodes as fondementsConstructionCouts } from "./dcg-ue11-fondements-construction-couts.generated";
import { methodes as gestionApprovisionnements } from "./dcg-ue11-gestion-approvisionnements.generated";
import { methodes as gestionMasseSalariale } from "./dcg-ue11-gestion-masse-salariale.generated";
import { methodes as gestionProduction } from "./dcg-ue11-gestion-production.generated";
import { methodes as gestionQualite } from "./dcg-ue11-gestion-qualite.generated";
import { methodes as imputationRationnelle } from "./dcg-ue11-imputation-rationnelle.generated";
import { methodes as methodeAbc } from "./dcg-ue11-methode-abc.generated";
import { methodes as methodeCoutsComplets } from "./dcg-ue11-methode-couts-complets.generated";
import { methodes as methodeCoutsPartiels } from "./dcg-ue11-methode-couts-partiels.generated";
import { methodes as modeleVolumeCoutProfit } from "./dcg-ue11-modele-volume-cout-profit.generated";
import { methodes as procedureBudgetaire } from "./dcg-ue11-procedure-budgetaire.generated";
import { methodes as tableauxDeBordReporting } from "./dcg-ue11-tableaux-de-bord-reporting.generated";

/** Démarches méthodologiques par slug de chapitre. */
export const methodesBySlug: Record<string, Methode[]> = {
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
  "dcg-ue11-procedure-budgetaire": procedureBudgetaire,
  "dcg-ue11-tableaux-de-bord-reporting": tableauxDeBordReporting,
};
