import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-methode-couts-complets.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const methodeCoutsComplets: Chapter = {
  ...generated,
  videos: [{ youtubeId: "1s7_gUOqeKk", title: "Coûts complets" }],
  description:
    "La méthode fondatrice des centres d'analyse (sections homogènes) : traitement des charges directes et indirectes, répartitions primaire et secondaire, prestations réciproques, unités d'œuvre et taux de frais, jusqu'à la chaîne coût d'achat → coût de production → coût de revient et au résultat analytique, avec la valorisation des stocks (CMUP, PEPS).",
  flashcards: [
    {
      id: "fc1",
      front: "Les deux finalités de la méthode des coûts complets",
      back: "1. Apprécier la rentabilité d'une activité : le coût de revient (coût le plus complet) est-il inférieur au chiffre d'affaires ? 2. Valoriser les stocks au bilan, au coût complet, comme l'exige la comptabilité financière.",
    },
    {
      id: "fc2",
      front: "Affectation, répartition, imputation : quelle différence ?",
      back: "Affectation : attribution directe d'une charge DIRECTE à un coût, sans calcul intermédiaire. Répartition : ventilation des charges INDIRECTES sur les centres d'analyse via des clés. Imputation : transfert des charges des centres vers les coûts des produits, via les unités d'œuvre.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce qu'un centre d'analyse ?",
      back: "Une division de l'organisation dans laquelle sont regroupées des charges indirectes avant leur imputation aux coûts. Il doit être HOMOGÈNE : une seule activité, une seule technologie — sinon il faut le redécouper en sections plus fines.",
    },
    {
      id: "fc4",
      front: "Centre principal vs centre auxiliaire",
      back: "Centre principal : directement impliqué dans le process, à un stade fonctionnel (approvisionnement, production, distribution) — ex. bureau d'achat, ateliers. Centre auxiliaire : en position de support, il rend des services aux centres principaux — ex. administration, entretien, comptabilité.",
    },
    {
      id: "fc5",
      front: "Répartition primaire et répartition secondaire",
      back: "Primaire : les charges indirectes sont réparties sur TOUS les centres (auxiliaires et principaux) à l'aide de clés. Secondaire : les centres auxiliaires sont déversés sur les centres principaux, qui concentrent alors tout le coût indirect. Les auxiliaires doivent être « vidés » (solde nul) avant le calcul des coûts d'UO.",
    },
    {
      id: "fc6",
      front: "Comment traiter des prestations réciproques entre deux centres ?",
      back: "Par un système d'équations : pour chaque centre, valeur des prestations fournies = frais propres + valeur des prestations reçues. Avec n centres en interaction, le système compte n équations à n inconnues (résolution automatisée par tableur ou ERP).",
    },
    {
      id: "fc7",
      front: "Qu'est-ce qu'une unité d'œuvre et comment la choisir ?",
      back: "Variable représentative de l'activité d'un centre principal, servant à mesurer cette activité et à imputer ses charges aux produits. On choisit celle qui donne le meilleur ajustement linéaire charges/activité, soit le coefficient de corrélation le plus proche de |1| (heure-machine si atelier mécanisé, heure de MOD si artisanal).",
    },
    {
      id: "fc8",
      front: "Formule du coût de l'unité d'œuvre",
      back: "Coût de l'UO = total des charges du centre (APRÈS répartition secondaire) ÷ nombre total d'unités d'œuvre de la période. Chaque produit reçoit ensuite : nombre d'UO consommées × coût de l'UO.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce qu'un taux de frais ?",
      back: "Quand l'« unité d'œuvre » est une assiette MONÉTAIRE (coût de production, chiffre d'affaires), le rapport charges du centre / assiette est un taux de frais, exprimé en pourcentage. Limite : une assiette monétaire n'exprime pas toujours une relation causale.",
    },
    {
      id: "fc10",
      front: "La hiérarchie des coûts (la chaîne de calcul)",
      back: "Coût d'achat → fiche de stock des matières → coût de production → fiche de stock des produits finis → coût de revient (des produits VENDUS) → résultat analytique = ventes − coût de revient. Le calcul épouse le processus de production : un coût complet à chaque stade comportant un stock.",
    },
    {
      id: "fc11",
      front: "Les méthodes de valorisation des sorties de stock",
      back: "CMUP : coût moyen unitaire pondéré, en fin de période ou après chaque entrée (fongibilité des lots). PEPS (FIFO) : premier entré, premier sorti. DEPS (LIFO) : non admis comptablement ni fiscalement. En période de hausse des prix, le PEPS minore les sorties, le DEPS les majore, le CMUP se situe entre les deux.",
    },
    {
      id: "fc12",
      front: "Les deux formules de variation de stocks",
      back: "Éléments ACHETÉS : Variation = Stock initial − Stock final (Consommations = Achats + variation). Éléments PRODUITS : Variation = Stock final − Stock initial (production stockée, au crédit, évaluée au coût de production — pas au chiffre d'affaires !).",
    },
    {
      id: "fc13",
      front: "Mali et boni d'inventaire",
      back: "Si le stock réel est inférieur au stock théorique : mali d'inventaire (les consommations étaient sous-évaluées). S'il est supérieur : boni. Origine comptable (mouvement mal enregistré) ou physique (vol, casse). À vérifier dès que l'énoncé donne le stock final réel.",
    },
    {
      id: "fc14",
      front: "Traitement des produits joints, sous-produits et produits résiduels",
      back: "Co-produits d'importance comparable : répartir le coût commun selon une clé physique (poids, volume). Produit principal + sous-produit : prorata de la valeur de revente, ou raisonnement « à rebours » (valeur de revente − coûts restants). Sous-produit de valeur négligeable : déduit du coût du produit principal à sa valeur de revente.",
    },
    {
      id: "fc15",
      front: "Déchets, rebuts et en-cours : que retient le programme DCG rénové ?",
      back: "Déchets (chutes de matière) et rebuts (produits « ratés ») récupérables : leur valeur de revente vient en DIMINUTION du coût du produit principal. Les en-cours de production sont EXCLUS du programme (guide pédagogique du DCG rénové) ; l'analyse des déchets et produits résiduels est, elle, conservée.",
    },
    {
      id: "fc16",
      front: "Forces et limites de la méthode des coûts complets",
      back: "Forces : vision exhaustive, coût de revient (fixation des prix), valorisation des stocks, universalité. Limites : arbitraire des clés et des UO (talon d'Achille), lourdeur, découpage daté, coût unitaire majoré en sous-activité. D'où les prolongements : ABC, imputation rationnelle, coûts partiels.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "L'atelier de finition est fortement automatisé ; ses charges indirectes du mois s'élèvent à 8 000 € pour 200 heures-robot. Une commande a consommé 60 heures-robot. Quel montant de charges indirectes lui est imputé ?",
      choices: ["8 000 €", "2 400 €", "4 000 €", "1 600 €"],
      answer: 1,
      explanation:
        "Coût de l'unité d'œuvre = 8 000 ÷ 200 = 40 € par heure-robot. Imputation à la commande : 60 × 40 = 2 400 €. L'imputation se fait toujours au prorata des unités d'œuvre consommées.",
    },
    {
      id: "q2",
      question:
        "Le centre E engage 19 500 € de frais propres et produit 1 000 UO, dont 100 fournies à G. Le centre G engage 3 000 € et produit 500 UO, dont 50 fournies à E. Quels sont les coûts d'UO de E et de G ?",
      choices: [
        "e = 19,50 € et g = 6,00 €",
        "e = 19,95 € et g = 9,99 €",
        "e = 20,00 € et g = 10,00 €",
        "e = 22,50 € et g = 12,00 €",
      ],
      answer: 2,
      explanation:
        "Prestations fournies = frais propres + prestations reçues : 1 000e = 19 500 + 50g et 500g = 3 000 + 100e. Par substitution, e = 19,5 + 0,05g, d'où 500g = 3 000 + 1 950 + 5g, soit 495g = 4 950 → g = 10 €, puis e = 19,5 + 0,5 = 20 €. Vérification : 1 000 × 20 = 19 500 + 50 × 10 = 20 000 €.",
    },
    {
      id: "q3",
      question:
        "Stock initial de hêtre : 1 000 kg à 8,40 € (8 400 €). Entrée du mois : 3 000 kg au coût d'achat de 9,60 € (28 800 €). Quel est le CMUP de fin de période ?",
      choices: ["9,30 €", "9,00 €", "9,60 €", "8,40 €"],
      answer: 0,
      explanation:
        "CMUP = (valeur du stock initial + valeur des entrées) ÷ (quantités initiales + entrées) = (8 400 + 28 800) ÷ (1 000 + 3 000) = 37 200 ÷ 4 000 = 9,30 € le kg. Les sorties de stock se valorisent à ce CMUP, pas au dernier coût d'entrée.",
    },
    {
      id: "q4",
      question: "Dans quel ordre s'effectue le traitement des charges indirectes ?",
      choices: [
        "Imputation aux produits, puis répartition primaire, puis secondaire",
        "Répartition primaire sur tous les centres, répartition secondaire (auxiliaires → principaux), puis imputation via les unités d'œuvre",
        "Répartition secondaire, puis répartition primaire, puis imputation",
        "Affectation directe aux produits, puis répartition sur les centres",
      ],
      answer: 1,
      explanation:
        "La répartition se fait toujours en deux temps : primaire (sur tous les centres, auxiliaires comme principaux), puis secondaire (déversement des auxiliaires sur les principaux). Les centres auxiliaires doivent être « vidés » avant de calculer les coûts d'unité d'œuvre — inverser l'ordre fausse les coûts.",
    },
    {
      id: "q5",
      question: "Si l'on hésite entre plusieurs unités d'œuvre pour un centre, laquelle retenir ?",
      choices: [
        "La plus simple à mesurer",
        "Celle qui donne le coût d'UO le plus faible",
        "Toujours l'heure de main-d'œuvre directe",
        "Celle dont le coefficient de corrélation charges/activité est le plus proche de |1|",
      ],
      answer: 3,
      explanation:
        "On retient l'unité d'œuvre qui donne le meilleur ajustement linéaire des charges par rapport à l'activité, c'est-à-dire le coefficient de corrélation le plus proche de |1|. Si aucun bon coefficient n'est trouvé, c'est que le centre n'est pas homogène : il faut le redécouper.",
    },
    {
      id: "q6",
      question: "Qu'est-ce qu'un taux de frais ?",
      choices: [
        "Le rapport entre les charges d'un centre et une assiette monétaire (CA, coût de production), exprimé en pourcentage",
        "Le coût d'une heure de main-d'œuvre directe",
        "Le pourcentage de charges directes dans le coût de revient",
        "La clé de répartition des centres auxiliaires",
      ],
      answer: 0,
      explanation:
        "Quand le « nombre d'unités d'œuvre » est une assiette monétaire, le résultat n'est pas un coût d'UO mais un taux de frais, en pourcentage (ex. : 15 000 € de charges de distribution pour 200 000 € de CA = 7,5 %). Sa limite : une assiette monétaire n'exprime pas toujours une relation causale.",
    },
    {
      id: "q7",
      question:
        "Achats de matières de la période : 100 000 €. Stock initial : 20 000 € ; stock final : 30 000 €. Quel est le montant des consommations de matières ?",
      choices: ["110 000 €", "130 000 €", "90 000 €", "100 000 €"],
      answer: 2,
      explanation:
        "Pour les éléments achetés, Variation = SI − SF = 20 000 − 30 000 = − 10 000 €. Consommations = Achats + variation de stock = 100 000 − 10 000 = 90 000 €. Le stock ayant augmenté de 10 000 €, on a consommé moins que ce qu'on a acheté.",
    },
    {
      id: "q8",
      question: "Quelle méthode de valorisation des sorties de stock n'est admise ni comptablement ni fiscalement ?",
      choices: [
        "Le CMUP de fin de période",
        "Le PEPS (premier entré, premier sorti)",
        "Le CMUP après chaque entrée",
        "Le DEPS (dernier entré, premier sorti)",
      ],
      answer: 3,
      explanation:
        "Le DEPS (LIFO) n'est pas admis comptablement ni fiscalement : un retraitement est nécessaire s'il est utilisé en gestion. Le CMUP (fondé sur la fongibilité des lots) et le PEPS sont admis. En période de hausse des prix, le DEPS majore les sorties et minore le stock final.",
    },
    {
      id: "q9",
      question:
        "À la sortie de l'atelier, le coût de production conjoint du produit principal P et du sous-produit S est de 100 €. S nécessite un traitement complémentaire de 5 € pour être vendu 20 €. Quel est le coût de production retenu pour P ?",
      choices: ["100 €", "85 €", "80 €", "95 €"],
      answer: 1,
      explanation:
        "Raisonnement « à rebours » : coût de S à la sortie de l'atelier = 20 − 5 = 15 €. Ce montant est déduit du coût conjoint : coût de production de P = 100 − 15 = 85 €. Même logique pour les déchets et rebuts revendables : leur valeur nette vient en diminution du coût du produit principal.",
    },
    {
      id: "q10",
      question: "Le coût de revient d'une période se compose :",
      choices: [
        "Du coût de production des produits FABRIQUÉS, plus le coût de distribution",
        "Du chiffre d'affaires diminué du résultat analytique des produits fabriqués",
        "Du coût de production des produits VENDUS (sortis du stock, en principe au CMUP), plus le coût de distribution de ces produits",
        "De la totalité des charges de la période, stockées ou non",
      ],
      answer: 2,
      explanation:
        "Erreur fréquente signalée par le cours : le coût de revient ne porte que sur les produits VENDUS pendant la période, sortis du stock au coût de production (en principe au CMUP), augmenté du coût de distribution (direct, comme les commissions, et indirect). Attention à la variation de stock de produits finis — et on dit « coût », non « prix » de revient (terme désuet depuis 1982).",
    },
  ],
};
