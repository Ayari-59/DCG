import type { Chapter, Program } from "./types";
import { cadreMetierOrganisation } from "./chapters/dcg-ue11-cadre-metier-organisation";
import { fondementsConstructionCouts } from "./chapters/dcg-ue11-fondements-construction-couts";
import { modeleVolumeCoutProfit } from "./chapters/dcg-ue11-modele-volume-cout-profit";
import { analyseRisqueLoiNormale } from "./chapters/dcg-ue11-analyse-risque-loi-normale";
import { methodeCoutsComplets } from "./chapters/dcg-ue11-methode-couts-complets";
import { methodeAbc } from "./chapters/dcg-ue11-methode-abc";
import { imputationRationnelle } from "./chapters/dcg-ue11-imputation-rationnelle";
import { methodeCoutsPartiels } from "./chapters/dcg-ue11-methode-couts-partiels";
import { procedureBudgetaire } from "./chapters/dcg-ue11-procedure-budgetaire";
import { budgetDesVentes } from "./chapters/dcg-ue11-budget-des-ventes";
import { gestionApprovisionnements } from "./chapters/dcg-ue11-gestion-approvisionnements";
import { gestionProduction } from "./chapters/dcg-ue11-gestion-production";
import { gestionMasseSalariale } from "./chapters/dcg-ue11-gestion-masse-salariale";
import { controleBudgetaireEcarts } from "./chapters/dcg-ue11-controle-budgetaire-ecarts";
import { tableauxDeBordReporting } from "./chapters/dcg-ue11-tableaux-de-bord-reporting";
import { gestionQualite } from "./chapters/dcg-ue11-gestion-qualite";
import { coutCible } from "./chapters/dcg-ue11-cout-cible";
import { prixCessionInterne } from "./chapters/dcg-ue11-prix-cession-interne";
import { performanceGlobaleDurabilite } from "./chapters/dcg-ue11-performance-globale-durabilite";
import { pilotageProcessusProduction } from "./chapters/dscg-ue3-pilotage-processus-production";
import { pilotageProjets } from "./chapters/dscg-ue3-pilotage-projets";
import { pilotageFonctionsSupport } from "./chapters/dscg-ue3-pilotage-fonctions-support";
import { managementChangement } from "./chapters/dscg-ue3-management-changement";
import { managementRisques } from "./chapters/dscg-ue3-management-risques";
import { controleGestionSociale } from "./chapters/dscg-ue3-controle-gestion-sociale";
import { gestionBudgetaire } from "./chapters/dscg-ue3-gestion-budgetaire";
import { durabilitePerformanceGlobale } from "./chapters/dscg-ue3-durabilite-performance-globale";
import { seanceZero } from "./chapters/dcg-ue13-seance-zero";
import { decouvrirComPro } from "./chapters/dcg-ue13-decouvrir";
import { rechercheInformation } from "./chapters/dcg-ue13-recherche-information";
import { rechercheDeStage } from "./chapters/dcg-ue13-recherche-de-stage";
import { analyserSituation } from "./chapters/dcg-ue13-analyser-situation";
import { rapportDeStage } from "./chapters/dcg-ue13-rapport-de-stage";
import { soutenance } from "./chapters/dcg-ue13-soutenance";
import { annexeReference } from "./chapters/dscg-ue3-annexe-reference";
import { methodesBySlug } from "./methodes";
import { annalesBySlug } from "./annales";

const rawPrograms: Program[] = [
  {
    level: "DCG",
    ue: "UE11",
    title: "Contrôle de gestion",
    description:
      "Calcul et analyse des coûts, gestion budgétaire, pilotage de la performance : l'UE11 du DCG, chapitre par chapitre.",
    chapters: [
      cadreMetierOrganisation,
      fondementsConstructionCouts,
      modeleVolumeCoutProfit,
      analyseRisqueLoiNormale,
      methodeCoutsComplets,
      methodeAbc,
      imputationRationnelle,
      methodeCoutsPartiels,
      procedureBudgetaire,
      budgetDesVentes,
      gestionApprovisionnements,
      gestionProduction,
      gestionMasseSalariale,
      controleBudgetaireEcarts,
      tableauxDeBordReporting,
      gestionQualite,
      coutCible,
      prixCessionInterne,
      performanceGlobaleDurabilite,
    ],
    upcoming: [],
  },
  {
    level: "DCG",
    ue: "UE13",
    title: "Communication professionnelle",
    description:
      "Communiquer en milieu professionnel, rechercher l'information, analyser une situation de travail, puis rédiger le rapport de stage et le soutenir : l'UE13 du DCG, période par période.",
    chapters: [
      seanceZero,
      decouvrirComPro,
      rechercheInformation,
      rechercheDeStage,
      analyserSituation,
      rapportDeStage,
      soutenance,
    ],
    upcoming: [],
  },
  {
    level: "DSCG",
    ue: "UE3",
    title: "Management et contrôle de gestion",
    description:
      "Stratégie et contrôle, pilotage de la performance organisationnelle, prix de cession interne, gestion par processus : le programme de l'UE3 du DSCG.",
    chapters: [
      pilotageProcessusProduction,
      pilotageProjets,
      pilotageFonctionsSupport,
      managementChangement,
      managementRisques,
      controleGestionSociale,
      gestionBudgetaire,
      durabilitePerformanceGlobale,
      annexeReference,
    ],
    upcoming: [],
  },
];

/**
 * Les applications issues des cahiers d'énoncés et de corrigés sont générées
 * dans lib/content/exercises mais volontairement pas publiées pour l'instant.
 * Pour les réactiver, rattacher exercisesBySlug aux chapitres ici :
 *   chapters: p.chapters.map((c) =>
 *     exercisesBySlug[c.slug]?.length ? { ...c, exercises: exercisesBySlug[c.slug] } : c)
 */
export const programs: Program[] = rawPrograms.map((p) => ({
  ...p,
  chapters: p.chapters.map((c) =>
    ({
      ...c,
      ...(methodesBySlug[c.slug]?.length ? { methodes: methodesBySlug[c.slug] } : {}),
      ...(annalesBySlug[c.slug]?.length ? { annales: annalesBySlug[c.slug] } : {}),
    })
  ),
}));

export const allChapters: Chapter[] = programs.flatMap((p) => p.chapters);

export function getChapter(slug: string): Chapter | undefined {
  return allChapters.find((c) => c.slug === slug);
}

/** Premier programme du diplôme — le DCG en compte désormais deux. */
export function getProgram(level: string): Program | undefined {
  return programs.find((p) => p.level.toLowerCase() === level.toLowerCase());
}

/** Programme d'une unité d'enseignement précise (UE11, UE13, UE3…). */
export function getProgramByUe(ue: string): Program | undefined {
  return programs.find((p) => p.ue.toLowerCase() === ue.toLowerCase());
}
