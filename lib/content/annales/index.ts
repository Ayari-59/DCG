import type { Annale } from "../types";
import { annales as methodeCoutsComplets } from "./dcg-ue11-methode-couts-complets.generated";
import { annales as methodeAbc } from "./dcg-ue11-methode-abc.generated";
import { annales as methodeCoutsPartiels } from "./dcg-ue11-methode-couts-partiels.generated";
import { annales as modeleVolumeCoutProfit } from "./dcg-ue11-modele-volume-cout-profit.generated";
import { annales as analyseRisqueLoiNormale } from "./dcg-ue11-analyse-risque-loi-normale.generated";
import { annales as procedureBudgetaire } from "./dcg-ue11-procedure-budgetaire.generated";
import { annales as budgetDesVentes } from "./dcg-ue11-budget-des-ventes.generated";
import { annales as gestionProduction } from "./dcg-ue11-gestion-production.generated";
import { annales as gestionApprovisionnements } from "./dcg-ue11-gestion-approvisionnements.generated";
import { annales as gestionMasseSalariale } from "./dcg-ue11-gestion-masse-salariale.generated";
import { annales as controleBudgetaireEcarts } from "./dcg-ue11-controle-budgetaire-ecarts.generated";
import { annales as gestionQualite } from "./dcg-ue11-gestion-qualite.generated";
import { annales as coutCible } from "./dcg-ue11-cout-cible.generated";
import { annales as tableauxDeBordReporting } from "./dcg-ue11-tableaux-de-bord-reporting.generated";

/** Annales par slug de chapitre. */
export const annalesBySlug: Record<string, Annale[]> = {
  "dcg-ue11-methode-couts-complets": methodeCoutsComplets,
  "dcg-ue11-methode-abc": methodeAbc,
  "dcg-ue11-methode-couts-partiels": methodeCoutsPartiels,
  "dcg-ue11-modele-volume-cout-profit": modeleVolumeCoutProfit,
  "dcg-ue11-analyse-risque-loi-normale": analyseRisqueLoiNormale,
  "dcg-ue11-procedure-budgetaire": procedureBudgetaire,
  "dcg-ue11-budget-des-ventes": budgetDesVentes,
  "dcg-ue11-gestion-production": gestionProduction,
  "dcg-ue11-gestion-approvisionnements": gestionApprovisionnements,
  "dcg-ue11-gestion-masse-salariale": gestionMasseSalariale,
  "dcg-ue11-controle-budgetaire-ecarts": controleBudgetaireEcarts,
  "dcg-ue11-gestion-qualite": gestionQualite,
  "dcg-ue11-cout-cible": coutCible,
  "dcg-ue11-tableaux-de-bord-reporting": tableauxDeBordReporting,
};
