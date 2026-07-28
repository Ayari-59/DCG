import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-pilotage-processus-production.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const pilotageProcessusProduction: Chapter = {
  ...generated,
  description:
    "Cartographie des processus (SIPOC, logigramme, BPMN), coûts de production complexes (en-cours, produits conjoints, déchets), théorie des contraintes, yield management, target costing et coût de la qualité.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'un processus ?",
      back: "Un enchaînement transversal d'activités qui, à partir d'une ou plusieurs entrées, produit un output représentant une valeur pour un client interne ou externe (Hammer & Champy). Il traverse les fonctions de l'entreprise.",
    },
    {
      id: "fc2",
      front: "Que signifie SIPOC ?",
      back: "Suppliers – Inputs – Process – Outputs – Customers. C'est l'outil de cartographie macroscopique d'un processus : fournisseurs, entrées, étapes du processus, sorties, clients.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce qu'un goulot d'étranglement ?",
      back: "La ressource dont la capacité borne le débit de tout le système productif. C'est sur elle que se concentre la théorie des contraintes : une heure perdue au goulot est une heure perdue pour tout le système.",
    },
    {
      id: "fc4",
      front: "Les 5 étapes focalisées de la théorie des contraintes (Goldratt)",
      back: "1. Identifier la contrainte. 2. Exploiter la contrainte au maximum. 3. Subordonner tout le reste à la contrainte. 4. Élever la contrainte (investir). 5. Recommencer — la contrainte s'est déplacée.",
    },
    {
      id: "fc5",
      front: "Critère d'arbitrage de production en présence d'un goulot",
      back: "La marge sur coût variable PAR UNITÉ DE FACTEUR RARE (par heure de goulot), et non la marge par produit. On sature le goulot avec les produits qui rapportent le plus par heure de goulot consommée.",
    },
    {
      id: "fc6",
      front: "Qu'est-ce qu'un coût pertinent ?",
      back: "Un coût futur et différentiel : il est modifié par la décision étudiée. Les coûts déjà engagés (sunk costs) et les coûts identiques dans toutes les options ne sont jamais pertinents.",
    },
    {
      id: "fc7",
      front: "Qu'est-ce qu'un coût irrécupérable (sunk cost) ?",
      back: "Un coût déjà engagé et non récupérable, quelle que soit la décision future. Il ne doit jamais entrer dans un raisonnement de décision (ex. : une étude de marché déjà payée).",
    },
    {
      id: "fc8",
      front: "Méthode des équivalents-produits finis (EPF)",
      back: "Conversion des en-cours en unités finies « équivalentes » selon leur % d'avancement, par catégorie de coût (matières / transformation). Production équivalente = unités terminées + (en-cours × % d'avancement).",
    },
    {
      id: "fc9",
      front: "Produits conjoints, sous-produits, produits dérivés : la différence ?",
      back: "Produits conjoints : plusieurs produits de valeurs comparables issus d'un même processus (raffinage). Sous-produit : produit accessoire de faible valeur (son du blé). Produit dérivé : issu de résidus revalorisés (glycérine).",
    },
    {
      id: "fc10",
      front: "Les 3 méthodes de répartition d'un coût conjoint",
      back: "1. Clé physique (volumes, poids). 2. Valeur de marché au point de séparation. 3. Valeur nette de réalisation (VNR) = prix de vente final − coûts spécifiques engagés après le point de séparation.",
    },
    {
      id: "fc11",
      front: "Formule du coût cible (target costing)",
      back: "Coût cible = Prix de vente cible (imposé par le marché) − Marge cible. Effort de réduction = Coût estimé − Coût cible. La logique part du marché vers le coût, à rebours du cost plus.",
    },
    {
      id: "fc12",
      front: "Qu'est-ce que le yield management ?",
      back: "L'optimisation du revenu d'une capacité FIXE et PÉRISSABLE par une tarification et une allocation dynamiques (compagnies aériennes, hôtels). Conditions : coûts fixes élevés, demande segmentable et fluctuante, vente à l'avance.",
    },
    {
      id: "fc13",
      front: "Les 4 composantes du coût d'obtention de la qualité (COQ)",
      back: "Coûts de prévention + coûts d'évaluation (détection/contrôle) + coûts de défaillance interne (rebuts, retouches) + coûts de défaillance externe (retours, garantie, rappels, image). Investir en prévention réduit les défaillances.",
    },
    {
      id: "fc14",
      front: "Le diagramme d'Ishikawa et les 5M",
      back: "Diagramme causes-effet en « arête de poisson » qui classe les causes d'un dysfonctionnement en 5 familles : Matières, Matériel, Main-d'œuvre, Méthodes, Milieu.",
    },
    {
      id: "fc15",
      front: "Les 4 niveaux de capacité",
      back: "Capacité théorique (maximum absolu) > capacité pratique (− arrêts inévitables) > capacité normale (activité moyenne attendue, référence de l'imputation rationnelle) > capacité réelle (constatée).",
    },
    {
      id: "fc16",
      front: "Le triangle QCD",
      back: "Qualité – Coût – Délai : les trois objectifs partiellement contradictoires du pilotage des processus. Améliorer l'un peut dégrader les autres ; la stratégie fixe la priorité de l'arbitrage.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Dans l'acronyme SIPOC, que désigne le « S » ?",
      choices: ["Standards", "Suppliers (fournisseurs)", "Stocks", "Séquences"],
      answer: 1,
      explanation:
        "SIPOC = Suppliers, Inputs, Process, Outputs, Customers. C'est la vue macroscopique d'un processus, du fournisseur au client.",
    },
    {
      id: "q2",
      question:
        "Un atelier termine 4 000 unités ; l'en-cours final est de 1 000 unités avancées à 50 % en transformation. Les coûts de transformation de la période sont de 45 000 €. Quel est le coût de transformation par équivalent-produit fini ?",
      choices: ["11,25 €", "9,00 €", "10,00 €", "45,00 €"],
      answer: 2,
      explanation:
        "Production équivalente = 4 000 + (1 000 × 50 %) = 4 500 EPF. Coût unitaire = 45 000 ÷ 4 500 = 10 €. Diviser par 4 000 (11,25 €) ignorerait les en-cours.",
    },
    {
      id: "q3",
      question:
        "Le produit A dégage une marge sur coût variable de 60 € par unité et consomme 2 h du goulot ; le produit B dégage 40 € par unité et consomme 1 h. La demande est illimitée pour les deux. Que faut-il produire en priorité ?",
      choices: [
        "A, car sa marge unitaire est la plus élevée",
        "B, car sa marge par heure de goulot (40 €/h) dépasse celle de A (30 €/h)",
        "Autant de A que de B",
        "A, car il utilise mieux la capacité disponible",
      ],
      answer: 1,
      explanation:
        "Sous contrainte, on classe par marge par unité de facteur rare : A = 60/2 = 30 €/h de goulot, B = 40/1 = 40 €/h. B sature le goulot plus profitablement — c'est LE piège classique de l'épreuve.",
    },
    {
      id: "q4",
      question:
        "Une entreprise a payé 20 000 € une étude de marché avant de décider du lancement d'un produit. Dans la décision de lancement, ce montant est :",
      choices: [
        "Un coût pertinent à intégrer au calcul",
        "Un coût d'opportunité",
        "Un coût irrécupérable, non pertinent pour la décision",
        "À amortir sur la durée de vie du produit dans le calcul décisionnel",
      ],
      answer: 2,
      explanation:
        "L'étude est payée quelle que soit la décision : c'est un sunk cost. Seuls les coûts futurs ET différentiels sont pertinents pour décider.",
    },
    {
      id: "q5",
      question: "La méthode de la valeur nette de réalisation (VNR) répartit un coût conjoint proportionnellement :",
      choices: [
        "Aux quantités physiques produites",
        "Aux prix de vente au point de séparation",
        "Au prix de vente final diminué des coûts spécifiques engagés après le point de séparation",
        "Aux marges cibles de chaque produit",
      ],
      answer: 2,
      explanation:
        "VNR = prix de vente final − coûts spécifiques après séparation. Utile quand les produits ne sont pas vendables en l'état au point de séparation.",
    },
    {
      id: "q6",
      question: "Quelle est la première étape de la démarche d'amélioration continue de la théorie des contraintes ?",
      choices: [
        "Élever la contrainte en investissant",
        "Identifier la contrainte du système",
        "Subordonner les autres ressources à la contrainte",
        "Équilibrer les capacités de tous les postes",
      ],
      answer: 1,
      explanation:
        "Les 5 étapes : identifier → exploiter → subordonner → élever → recommencer. Goldratt rejette d'ailleurs l'idée d'équilibrer les capacités : il faut équilibrer le flux, pas les capacités.",
    },
    {
      id: "q7",
      question: "Laquelle de ces conditions n'est PAS requise pour pratiquer le yield management ?",
      choices: [
        "Une capacité fixe et périssable",
        "Une demande segmentable et fluctuante",
        "La possibilité de vendre à l'avance",
        "Une part prépondérante de coûts variables dans la structure de coûts",
      ],
      answer: 3,
      explanation:
        "C'est l'inverse : le yield management suppose des coûts fixes élevés et des coûts variables faibles — chaque siège ou chambre vendu en plus est presque intégralement de la marge.",
    },
    {
      id: "q8",
      question:
        "Un produit doit être vendu 250 € avec une marge cible de 20 % du prix. Le coût estimé actuel est de 230 €. Quel est l'effort de réduction de coût à réaliser ?",
      choices: ["20 €", "30 €", "50 €", "80 €"],
      answer: 1,
      explanation:
        "Coût cible = 250 − (250 × 20 %) = 200 €. Effort de réduction = coût estimé − coût cible = 230 − 200 = 30 €. C'est la boucle du target costing : le marché impose le coût, pas l'inverse.",
    },
    {
      id: "q9",
      question: "Dans le modèle du coût d'obtention de la qualité, le rappel de produits déjà livrés aux clients relève :",
      choices: [
        "Des coûts de prévention",
        "Des coûts d'évaluation",
        "Des coûts de défaillance interne",
        "Des coûts de défaillance externe",
      ],
      answer: 3,
      explanation:
        "Le défaut a atteint le client : défaillance externe (retours, garantie, rappels, atteinte à l'image) — la catégorie la plus coûteuse, car elle touche la réputation.",
    },
    {
      id: "q10",
      question: "La capacité pratique d'un atelier se définit comme :",
      choices: [
        "La capacité maximale absolue, sans aucun arrêt",
        "La capacité théorique diminuée des arrêts inévitables (maintenance, réglages)",
        "L'activité moyenne attendue sur le cycle d'exploitation",
        "L'activité réellement constatée sur la période",
      ],
      answer: 1,
      explanation:
        "Hiérarchie : théorique (maximum absolu) > pratique (− arrêts inévitables) > normale (activité moyenne attendue, base de l'imputation rationnelle) > réelle (constatée).",
    },
  ],
};
