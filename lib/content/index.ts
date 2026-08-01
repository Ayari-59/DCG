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
import { flashcardsQcmBySlug, quizQcmBySlug } from "./qcm";

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
 * Unités publiées sur le site.
 *
 * L'UE13 en est retirée pour l'instant. Son contenu reste entier dans le
 * dépôt — sept séances, leurs sections et leurs cent questions de quiz —
 * et il suffit de remettre "UE13" dans cette liste pour la republier :
 * navigation, recherche, page d'accueil et adresse /ue13 la reprennent
 * d'elles-mêmes, puisque tout en découle.
 */
const UE_PUBLIEES = ["UE11", "UE3"];

/**
 * Les applications issues des cahiers d'énoncés et de corrigés sont générées
 * dans lib/content/exercises mais volontairement pas publiées pour l'instant.
 * Pour les réactiver, rattacher exercisesBySlug aux chapitres ici :
 *   chapters: p.chapters.map((c) =>
 *     exercisesBySlug[c.slug]?.length ? { ...c, exercises: exercisesBySlug[c.slug] } : c)
 */
/** Nombre de cartes visé par chapitre : une session et quelques restes. */
const TAILLE_PAQUET = 25;

/**
 * Composition du paquet de flashcards d'un chapitre, arrêtée avec
 * l'auteur : les cartes rédigées restent la base — définitions et
 * formules, ce que les QCM ne portent pas — et quelques cartes tirées de
 * ses QCM les complètent jusqu'à vingt-cinq. Pas davantage : ses
 * questions vivent déjà dans l'onglet Quiz, les dupliquer toutes en
 * cartes faisait un paquet de quarante et un mur devant l'étudiant.
 * Le complément est régulièrement espacé le long du chapitre, comme la
 * sélection du quiz.
 */
function paquetDeCartes(c: Chapter) {
  const base = c.flashcards;
  const reserve = flashcardsQcmBySlug[c.slug] ?? [];
  const manque = Math.min(Math.max(0, TAILLE_PAQUET - base.length), reserve.length);
  if (manque === 0) return base;

  const retenues = new Set<number>();
  for (let k = 0; k < manque; k++) {
    let i = Math.round((k * (reserve.length - 1)) / (manque - 1 || 1));
    while (retenues.has(i)) i++;
    retenues.add(i);
  }
  return [...base, ...[...retenues].sort((a, b) => a - b).map((i) => reserve[i])];
}

export const programs: Program[] = rawPrograms
  .filter((p) => UE_PUBLIEES.includes(p.ue))
  .map((p) => ({
    ...p,
    chapters: p.chapters.map((c) => ({
      ...c,
      flashcards: paquetDeCartes(c),
      quiz: quizQcmBySlug[c.slug]?.length ? quizQcmBySlug[c.slug] : c.quiz,
      ...(methodesBySlug[c.slug]?.length ? { methodes: methodesBySlug[c.slug] } : {}),
      ...(annalesBySlug[c.slug]?.length ? { annales: annalesBySlug[c.slug] } : {}),
    })),
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

/**
 * Estimation du travail total d'un chapitre — pas seulement sa lecture.
 *
 * « 10 h de cours » ne comptait que le temps de lecture des leçons, comme
 * si les vidéos, les quiz, les cartes et les annales ne demandaient rien.
 * Les barèmes sont volontairement prudents : huit minutes par vidéo (leur
 * durée réelle), une minute par question de quiz, trente secondes par
 * flashcard pour une seule passe, trente minutes par annale — lire le
 * sujet et comprendre son corrigé, pas le rédiger. Le chiffre affiché
 * reste une estimation : il est présenté avec un « ≈ ».
 */
export function minutesDeTravail(c: Chapter): number {
  return (
    c.durationMin +
    (c.videos?.length ?? 0) * 8 +
    c.quiz.length * 1 +
    Math.round(c.flashcards.length * 0.5) +
    (c.annales?.length ?? 0) * 30
  );
}

export function heuresDeTravail(chapitres: Chapter[]): number {
  return Math.round(chapitres.reduce((n, c) => n + minutesDeTravail(c), 0) / 60);
}
