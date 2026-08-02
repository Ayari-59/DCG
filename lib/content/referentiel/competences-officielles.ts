/**
 * Compétences officielles du référentiel rénové (arrêté du 4 août 2025).
 *
 * Chaque chapitre du site est rattaché à une ou plusieurs sous-parties du
 * programme officiel. Quand un rattachement existe, les compétences
 * affichées sont celles du référentiel — pas celles des cahiers de
 * l'auteur, qui en sont une reformulation libre.
 */

import unites from "./unites.generated.json";

interface SousPartie {
  numero: string;
  competences: string[];
}

interface Partie {
  numero: string;
  sousParties: SousPartie[];
}

interface Unite {
  diplome: string;
  code: string;
  parties: Partie[];
}

interface Rattachement {
  diplome: string;
  ue: string;
  sousParties: string[];
}

const MAPPING: Record<string, Rattachement> = {
  // ── DCG UE11 — Contrôle de gestion ──────────────────────────────────
  "dcg-ue11-cadre-metier-organisation": { diplome: "DCG", ue: "UE11", sousParties: ["1.1", "1.2"] },
  "dcg-ue11-fondements-construction-couts": { diplome: "DCG", ue: "UE11", sousParties: ["2.1"] },
  "dcg-ue11-modele-volume-cout-profit": { diplome: "DCG", ue: "UE11", sousParties: ["2.1"] },
  "dcg-ue11-analyse-risque-loi-normale": { diplome: "DCG", ue: "UE11", sousParties: ["2.2"] },
  "dcg-ue11-methode-couts-complets": { diplome: "DCG", ue: "UE11", sousParties: ["2.3"] },
  "dcg-ue11-methode-abc": { diplome: "DCG", ue: "UE11", sousParties: ["2.3"] },
  "dcg-ue11-imputation-rationnelle": { diplome: "DCG", ue: "UE11", sousParties: ["2.3"] },
  "dcg-ue11-methode-couts-partiels": { diplome: "DCG", ue: "UE11", sousParties: ["2.3"] },
  "dcg-ue11-procedure-budgetaire": { diplome: "DCG", ue: "UE11", sousParties: ["3.1"] },
  "dcg-ue11-budget-des-ventes": { diplome: "DCG", ue: "UE11", sousParties: ["3.2"] },
  "dcg-ue11-gestion-approvisionnements": { diplome: "DCG", ue: "UE11", sousParties: ["3.2"] },
  "dcg-ue11-gestion-production": { diplome: "DCG", ue: "UE11", sousParties: ["3.2"] },
  "dcg-ue11-gestion-masse-salariale": { diplome: "DCG", ue: "UE11", sousParties: ["3.2"] },
  "dcg-ue11-controle-budgetaire-ecarts": { diplome: "DCG", ue: "UE11", sousParties: ["3.3"] },
  "dcg-ue11-tableaux-de-bord-reporting": { diplome: "DCG", ue: "UE11", sousParties: ["4.1"] },
  "dcg-ue11-gestion-qualite": { diplome: "DCG", ue: "UE11", sousParties: ["4.3"] },
  "dcg-ue11-cout-cible": { diplome: "DCG", ue: "UE11", sousParties: ["4.2"] },
  "dcg-ue11-prix-cession-interne": { diplome: "DCG", ue: "UE11", sousParties: ["4.4"] },
  "dcg-ue11-performance-globale-durabilite": { diplome: "DCG", ue: "UE11", sousParties: ["4.1", "4.4"] },

  // ── DCG UE13 — Communication professionnelle ────────────────────────
  "dcg-ue13-decouvrir": { diplome: "DCG", ue: "UE13", sousParties: ["2.1"] },
  "dcg-ue13-recherche-information": { diplome: "DCG", ue: "UE13", sousParties: ["1.1"] },
  "dcg-ue13-recherche-de-stage": { diplome: "DCG", ue: "UE13", sousParties: ["2.2"] },
  "dcg-ue13-analyser-situation": { diplome: "DCG", ue: "UE13", sousParties: ["1.1", "2.1"] },
  "dcg-ue13-rapport-de-stage": { diplome: "DCG", ue: "UE13", sousParties: ["2.2"] },
  "dcg-ue13-soutenance": { diplome: "DCG", ue: "UE13", sousParties: ["2.2"] },

  // ── DSCG UE3 — Management et contrôle de gestion ────────────────────
  "dscg-ue3-pilotage-processus-production": { diplome: "DSCG", ue: "UE3", sousParties: ["2.1"] },
  "dscg-ue3-pilotage-projets": { diplome: "DSCG", ue: "UE3", sousParties: ["2.2"] },
  "dscg-ue3-pilotage-fonctions-support": { diplome: "DSCG", ue: "UE3", sousParties: ["2.3"] },
  "dscg-ue3-management-changement": { diplome: "DSCG", ue: "UE3", sousParties: ["2.4"] },
  "dscg-ue3-management-risques": { diplome: "DSCG", ue: "UE3", sousParties: ["2.5"] },
  "dscg-ue3-controle-gestion-sociale": { diplome: "DSCG", ue: "UE3", sousParties: ["2.6"] },
  "dscg-ue3-gestion-budgetaire": { diplome: "DSCG", ue: "UE3", sousParties: ["3.1"] },
  "dscg-ue3-durabilite-performance-globale": { diplome: "DSCG", ue: "UE3", sousParties: ["3.2", "3.3"] },
};

/**
 * Surcharges par chapitre : compétences spécifiques tirées des cahiers,
 * conformes au référentiel mais ciblées sur la méthode du chapitre
 * (au lieu des compétences génériques de la sous-partie entière).
 */
const SURCHARGES: Record<string, string[]> = {
  // ── Partie 2 — Coûts ───────────────────────────────────────────────
  "dcg-ue11-fondements-construction-couts": [
    "Distinguer charge et coût ; repérer les charges incorporables, non incorporables et supplétives",
    "Classer les charges selon plusieurs critères (directes/indirectes, fixes/variables, opérationnelles/structure)",
    "Définir un objet de coût et le cheminement coût d'achat → coût de production → coût de revient → résultat",
    "Calculer et interpréter une marge, un taux de marge, un taux de profitabilité, un résultat analytique",
    "Situer les grandes méthodes et porter un regard critique sur l'information de coût",
  ],
  "dcg-ue11-modele-volume-cout-profit": [
    "Identifier et analyser les données de charges et de produits issues des systèmes d'information",
    "Mettre en œuvre le modèle coût-volume-profit pour analyser la formation du résultat",
    "Calculer et interpréter seuils et marges en avenir certain",
    "Mobiliser le levier opérationnel et apprécier le risque d'exploitation",
    "Identifier les intérêts et les limites de l'approche dans des contextes variés",
  ],
  "dcg-ue11-methode-couts-complets": [
    "Distinguer charges directes et indirectes et justifier leur traitement différencié",
    "Construire un tableau de répartition (primaire puis secondaire), y compris en présence de prestations réciproques",
    "Choisir une unité d'œuvre pertinente et calculer son coût ; distinguer coût d'UO et taux de frais",
    "Tenir les fiches de stock (CMUP, PEPS) et calculer les variations de stocks",
    "Dérouler la chaîne coût d'achat → coût de production → coût de revient → résultat analytique",
    "Interpréter les coûts pour la décision et porter un regard critique sur la méthode",
  ],
  "dcg-ue11-methode-abc": [
    "Mettre en œuvre la méthode des coûts à base d'activités : identifier les activités, choisir les inducteurs, calculer le coût des inducteurs, imputer aux objets de coûts",
    "Comparer la méthode ABC à la méthode des centres d'analyse et interpréter l'écart de coût (subventionnement croisé)",
    "Justifier le choix d'une méthode de coûts selon le contexte de l'organisation",
    "Relier le calcul des coûts par activités au pilotage (ABM) et à la performance globale",
    "Rédiger un écrit argumenté pour conseiller le décideur",
  ],
  "dcg-ue11-imputation-rationnelle": [
    "Distinguer et calculer les différents types de coûts ; identifier les coûts, marges et résultats à calculer",
    "Mettre en œuvre l'imputation rationnelle des charges de structure : coefficient d'activité, coût d'imputation rationnelle, coût de sous-activité, boni de suractivité",
    "Analyser des coûts et des résultats dans un contexte donné, en isolant l'effet du niveau d'activité",
    "Apprécier les intérêts et les limites de la méthode afin de la choisir à bon escient",
    "Rendre compte des résultats et rédiger un écrit structuré pour conseiller le décideur",
  ],
  "dcg-ue11-methode-couts-partiels": [
    "Distinguer les charges selon leur variabilité (fixes/variables) et leur traçabilité (directes/indirectes, spécifiques/communes)",
    "Calculer et interpréter les marges sur coût variable et sur coût spécifique ; construire un compte de résultat différentiel",
    "Mettre en œuvre l'approche marginale et déterminer un prix de vente minimal (prix plancher)",
    "Mobiliser les coûts partiels pour éclairer une décision de gestion et justifier le choix de la méthode",
    "Apprécier les apports et les limites de l'approche ; rédiger un écrit argumenté pour conseiller le décideur",
  ],
  // ── Partie 3 — Budgets ─────────────────────────────────────────────
  "dcg-ue11-budget-des-ventes": [
    "Exploiter les outils de prévision pour préparer le budget commercial",
    "Mesurer une liaison par le coefficient de corrélation et calculer une élasticité-prix",
    "Choisir et mettre en œuvre un ajustement (linéaire, exponentiel, puissance) selon l'allure de la série",
    "Traiter les variations saisonnières par la méthode des rapports à la tendance et calculer des prévisions corrigées",
    "Mobiliser le lissage exponentiel et compléter les modèles par des approches qualitatives",
    "Interpréter les résultats et apprécier les intérêts et les limites des techniques prévisionnelles",
  ],
  "dcg-ue11-gestion-approvisionnements": [
    "Identifier les fonctions, les types et les coûts des stocks",
    "Déterminer un programme d'approvisionnement optimal par le modèle de Wilson",
    "Intégrer un stock de sécurité, un stock d'alerte et un tarif dégressif",
    "Budgéter les approvisionnements (méthode graphique et méthode comptable)",
    "Porter un regard critique sur les modèles et situer la gestion des stocks dans une logique de performance globale",
  ],
  "dcg-ue11-gestion-production": [
    "Comprendre les objectifs et les contraintes de la fonction production",
    "Construire un budget de production cohérent avec les ventes et les stocks",
    "Optimiser une combinaison productive par la programmation linéaire (méthode graphique) et le facteur rare",
    "Ordonnancer un projet par la méthode MPM : chemin critique, marges totales et libres",
    "Situer la production dans une logique de performance durable",
  ],
  "dcg-ue11-gestion-masse-salariale": [
    "Établir une masse salariale prévisionnelle à partir des effectifs et des salaires",
    "Calculer et analyser les écarts entre masse salariale prévue et réalisée",
    "Interpréter les résultats, repérer les risques et proposer des pistes d'amélioration",
    "Rédiger un écrit argumenté pour conseiller un décideur sur la politique salariale",
    "Relier le pilotage de la masse salariale à la performance globale",
  ],
  // ── Partie 4 — Performance ─────────────────────────────────────────
  "dcg-ue11-cout-cible": [
    "Identifier les causes des problèmes de performance d'une organisation et d'une chaîne de valeur",
    "Mettre en œuvre la démarche du coût cible : déterminer un coût cible, le décomposer par fonction et par composant, le comparer au coût estimé",
    "Interpréter l'écart de coût (cost gap) et proposer des pistes d'optimisation valeur-coût",
    "Apprécier les intérêts et les limites de la démarche",
    "Rédiger un écrit argumenté pour conseiller le décideur",
  ],
  "dcg-ue11-prix-cession-interne": [
    "Expliquer le rôle et les objectifs des prix de cession interne dans une organisation décentralisée",
    "Distinguer les modes de fixation : prix de marché, coût complet, coût standard, coût variable, prix négocié",
    "Calculer un prix de cession interne selon chacune de ces méthodes",
    "Analyser les conséquences managériales d'un mode de fixation sur la performance des centres",
    "Évaluer la performance d'un centre de responsabilité et repérer les comportements dysfonctionnels",
    "Intégrer le prix de cession interne dans une logique de pilotage de la performance globale",
  ],
  "dcg-ue11-performance-globale-durabilite": [
    "Définir la performance globale et expliquer les limites d'une approche exclusivement financière",
    "Identifier les différentes dimensions de la performance et comprendre la logique ESG",
    "Repérer, calculer et analyser des indicateurs financiers et extra-financiers (de durabilité)",
    "Intégrer les attentes des parties prenantes dans le pilotage et concevoir un tableau de bord intégré",
    "Mettre en œuvre un prix de cession interne et apprécier la création de valeur durable",
    "Rédiger un écrit argumenté pour conseiller le décideur sur la performance globale",
  ],
};

const cache = new Map<string, string[]>();

function trouverUnite(diplome: string, code: string): Unite | undefined {
  return (unites as Unite[]).find((u) => u.diplome === diplome && u.code === code);
}

/**
 * Compétences officielles d'un chapitre, tirées de ses sous-parties du
 * référentiel. Retourne un tableau vide si le chapitre n'est pas rattaché.
 */
export function competencesOfficielles(slug: string): string[] {
  const existant = cache.get(slug);
  if (existant) return existant;

  const surcharge = SURCHARGES[slug];
  if (surcharge) {
    cache.set(slug, surcharge);
    return surcharge;
  }

  const rattachement = MAPPING[slug];
  if (!rattachement) {
    cache.set(slug, []);
    return [];
  }

  const unite = trouverUnite(rattachement.diplome, rattachement.ue);
  if (!unite) {
    cache.set(slug, []);
    return [];
  }

  const competences: string[] = [];
  for (const partie of unite.parties) {
    for (const sp of partie.sousParties) {
      if (rattachement.sousParties.includes(sp.numero)) {
        competences.push(...sp.competences);
      }
    }
  }

  const vues = new Set<string>();
  const resultat = competences
    .map((c) => c.replace(/\s+/g, " ").replace(/[.]\s*$/, "").trim())
    .filter((c) => {
      if (c.length < 5) return false;
      const cle = c.toLowerCase();
      if (vues.has(cle)) return false;
      vues.add(cle);
      return true;
    });

  cache.set(slug, resultat);
  return resultat;
}

export { MAPPING };
