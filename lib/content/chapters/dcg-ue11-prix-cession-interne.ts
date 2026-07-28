import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-prix-cession-interne.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const prixCessionInterne: Chapter = {
  ...generated,
  description:
    "Valorisation des échanges entre centres de responsabilité : définition et objectifs du prix de cession interne, modes de fixation (prix de marché, coût réel, coût variable, coût standard, prix négocié), impact sur l'évaluation des centres et convergence des objectifs locaux avec la performance globale.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'un prix de cession interne (PCI) ?",
      back: "La valeur monétaire à laquelle un centre de responsabilité cède un bien ou un service à un autre centre de la même organisation. La cession donne lieu à un double enregistrement de gestion : produit (« chiffre d'affaires interne ») pour le centre vendeur, charge (« achat interne ») pour le centre acheteur.",
    },
    {
      id: "fc2",
      front: "Prix de cession interne vs prix de transfert : quelle différence ?",
      back: "Le PCI est une notion de gestion interne (pilotage des centres). Le prix de transfert (transfer pricing) est une notion fiscale qui régit la valorisation des transactions intra-groupe pour le calcul de l'impôt (cadre OCDE) — expressément hors programme DCG, réservé au DSCG.",
    },
    {
      id: "fc3",
      front: "Les cinq objectifs du prix de cession interne",
      back: "1. Coordonner les centres (signal-prix interne). 2. Motiver les managers. 3. Évaluer la performance de chaque unité. 4. Responsabiliser (chaque centre devient une mini-entreprise). 5. Optimiser : orienter les décisions locales dans le sens de l'intérêt global.",
    },
    {
      id: "fc4",
      front: "Qu'est-ce que la convergence des buts (goal congruence) ?",
      back: "L'objectif structurant du PCI : faire coïncider l'intérêt de chaque centre avec l'intérêt de l'organisation. Le bon PCI est celui pour lequel la décision optimale pour le centre est aussi la décision optimale pour le groupe.",
    },
    {
      id: "fc5",
      front: "PCI au prix de marché : intérêts et limites",
      back: "Intérêts : objectivité (prix fixé par le marché), mesure « vraie » de la performance, incitation à la compétitivité. Limites : exige un marché existant et représentatif, volatilité du prix, risque que le centre privilégie le marché externe au détriment du groupe.",
    },
    {
      id: "fc6",
      front: "PCI au coût réel (partiel ou complet) : quel défaut majeur ?",
      back: "Le coût réel transmet à l'aval les écarts de gestion de l'amont : si la Production gaspille, elle « facture » son surcoût au centre acheteur, qui subit une inefficience qu'il ne contrôle pas. C'est pourquoi on préfère souvent le coût standard.",
    },
    {
      id: "fc7",
      front: "PCI au coût variable : quand et pourquoi l'utiliser ?",
      back: "Pour les décisions de court terme (commande supplémentaire, faire/faire-faire) quand la capacité n'est pas saturée : le coût variable est le coût pertinent d'une cession supplémentaire. Limite : le centre vendeur n'affiche aucune marge et ne couvre pas ses charges fixes.",
    },
    {
      id: "fc8",
      front: "PCI au coût standard : pourquoi est-ce le choix de référence du pilotage ?",
      back: "Coût prévu et stable, fixé à l'avance : il isole le centre acheteur des aléas de l'amont (l'écart réel/standard reste à la charge du centre qui l'a généré), facilite prévision et comparaison, et reste cohérent avec le contrôle budgétaire. Souvent considéré comme le meilleur compromis pour l'évaluation des centres.",
    },
    {
      id: "fc9",
      front: "Les bornes du prix de cession négocié",
      back: "Prix plancher = coût variable du vendeur (en deçà, il perd à céder). Prix plafond = prix de marché pour l'acheteur (au-delà, il achète à l'extérieur). Tout prix négocié dans cet intervalle est acceptable pour le groupe (Rakéo : [38 € ; 75 €]).",
    },
    {
      id: "fc10",
      front: "Les quatre types de centres de responsabilité",
      back: "Centre de coûts (maîtrise les coûts, jugé sur leur respect). Centre de recettes (maîtrise le CA, pas les coûts de production). Centre de profit (maîtrise recettes ET coûts, jugé sur sa marge). Centre d'investissement (maîtrise en outre les capitaux engagés, jugé sur ROI, ROCE, EVA).",
    },
    {
      id: "fc11",
      front: "Quels centres sont les plus concernés par le PCI ?",
      back: "Les centres de profit et d'investissement : c'est lorsqu'un centre est jugé sur sa marge ou sa rentabilité que le PCI pèse directement sur son évaluation, puisqu'il fixe son « chiffre d'affaires » ou son « coût d'achat » interne.",
    },
    {
      id: "fc12",
      front: "Le PCI crée-t-il de la richesse pour le groupe ?",
      back: "Non. Le PCI ne crée ni ne détruit de richesse : il répartit la marge globale entre les centres. Chez Rakéo, quel que soit le PCI (38, 67 ou 75 €), la marge du groupe reste 90 − 38 − 8 = 44 € ; seul le partage entre Production et E-commerce change.",
    },
    {
      id: "fc13",
      front: "Les trois comportements dysfonctionnels liés à un PCI mal conçu",
      back: "1. Sous-optimisation : un centre refuse une transaction favorable au groupe car elle ne lui profite pas localement. 2. Conflits entre centres : la négociation tourne au rapport de force. 3. Sous-performance globale : l'accumulation d'optimisations locales dégrade le résultat consolidé.",
    },
    {
      id: "fc14",
      front: "La règle générale du PCI optimal",
      back: "PCI optimal = coût variable du vendeur + coût d'opportunité. Capacité disponible ⇒ coût d'opportunité nul ⇒ PCI = coût variable. Capacité saturée ⇒ coût d'opportunité = marge externe perdue ⇒ PCI ≈ prix de marché. Cette règle assure la convergence des buts.",
    },
    {
      id: "fc15",
      front: "Indicateurs de rentabilité d'un centre d'investissement",
      back: "ROI = Résultat du centre / Capitaux investis. Résultat résiduel = Résultat − (Capitaux investis × taux de rémunération exigé). Le résultat du centre dépendant du PCI, celui-ci influence mécaniquement ces ratios.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Comment une cession interne est-elle enregistrée en gestion ?",
      choices: [
        "Comme une charge pour les deux centres concernés",
        "Uniquement chez le centre vendeur, en produit",
        "Comme un produit pour le centre vendeur et une charge pour le centre acheteur",
        "Elle n'est pas enregistrée : seul le résultat consolidé compte",
      ],
      answer: 2,
      explanation:
        "Le PCI donne lieu à un double enregistrement de gestion : « chiffre d'affaires interne » pour le vendeur, « achat interne » pour l'acheteur. C'est ce mécanisme qui permet de calculer un résultat par centre.",
    },
    {
      id: "q2",
      question:
        "La raquette Rakéo a un coût variable de production de 38 € et supporte 29 € de charges fixes réparties. La direction ajoute une marge de 7 € sur le coût complet. Quel est le PCI au coût complet majoré (« cost plus ») ?",
      choices: ["67 €", "74 €", "75 €", "45 €"],
      answer: 1,
      explanation:
        "Coût complet = 38 + 29 = 67 €. Coût complet majoré = 67 + 7 = 74 €. Attention : 67 € est le coût complet sans marge, 75 € est le prix de marché et 45 € (38 + 7) oublierait les charges fixes.",
    },
    {
      id: "q3",
      question:
        "La raquette est cédée par la Production à l'E-commerce au coût standard de 67 €. L'E-commerce supporte 8 € de coûts propres et vend 90 € au consommateur. Quelle est la marge du centre E-commerce ?",
      choices: ["15 €", "23 €", "7 €", "29 €"],
      answer: 0,
      explanation:
        "Marge E-commerce = 90 − 67 − 8 = 15 €. La marge de la Production est de 67 − 38 = 29 € ; 7 € correspondrait à un PCI au prix de marché (90 − 75 − 8) ; 23 € oublierait les coûts propres de l'aval.",
    },
    {
      id: "q4",
      question:
        "Chez Rakéo (vente finale 90 €, coût variable amont 38 €, coûts propres aval 8 €), que devient la marge globale du groupe si le PCI passe de 67 € à 75 € ?",
      choices: [
        "Elle diminue de 8 €",
        "Elle augmente de 8 €",
        "Elle diminue, car l'E-commerce vend moins",
        "Elle reste inchangée à 44 € : le PCI ne fait que répartir la marge",
      ],
      answer: 3,
      explanation:
        "Marge globale = 90 − 38 − 8 = 44 € dans tous les cas (29 + 15 = 37 + 7 = 44). Le PCI ne crée ni ne détruit de richesse : il répartit la marge globale entre les centres. C'est LE piège classique à éviter.",
    },
    {
      id: "q5",
      question: "Dans un système de prix de cession négocié, le prix plancher de la négociation correspond :",
      choices: [
        "Au prix de marché du bien cédé",
        "Au coût variable du centre vendeur",
        "Au coût complet standard du centre vendeur",
        "Au prix de vente final diminué des coûts de l'aval",
      ],
      answer: 1,
      explanation:
        "Prix plancher = coût variable du vendeur (en deçà, il perd à céder) ; prix plafond = prix de marché pour l'acheteur (au-delà, il achète à l'extérieur). Chez Rakéo, la zone de négociation acceptable est [38 € ; 75 €].",
    },
    {
      id: "q6",
      question: "Quel est le principal avantage du coût standard sur le coût réel comme base du PCI ?",
      choices: [
        "Il est toujours inférieur au coût réel",
        "Il intègre automatiquement une marge pour le vendeur",
        "Il isole le centre acheteur des inefficiences de l'amont : l'écart réel/standard reste à la charge du centre qui l'a généré",
        "Il reflète fidèlement les coûts constatés de la période",
      ],
      answer: 2,
      explanation:
        "Au coût réel, l'amont transmet ses écarts de gestion à l'aval, qui subit des inefficiences qu'il ne maîtrise pas. Le coût standard, prévu et stable, laisse l'écart au centre qui l'a généré : chaque centre est responsabilisé sur ce qu'il maîtrise.",
    },
    {
      id: "q7",
      question:
        "Selon la règle générale du PCI optimal, quel PCI assure la convergence des buts lorsque la capacité du centre vendeur est disponible ?",
      choices: [
        "Le coût variable du vendeur, car le coût d'opportunité est nul",
        "Le prix de marché, car il est objectif",
        "Le coût complet réel, car il couvre toutes les charges",
        "Le coût standard majoré d'une marge",
      ],
      answer: 0,
      explanation:
        "PCI optimal = coût variable + coût d'opportunité. Capacité libre ⇒ coût d'opportunité nul ⇒ PCI = coût variable : l'acheteur voit le vrai coût marginal interne. Capacité saturée ⇒ on ajoute la marge externe perdue et le PCI rejoint le prix de marché.",
    },
    {
      id: "q8",
      question:
        "L'E-commerce envisage une promotion : raquettes vendues 80 € avec 8 € de coûts propres, PCI en vigueur de 75 € (prix de marché), capacité de production libre (coût variable 38 €). Quelle est la marge unitaire du centre E-commerce, et celle du groupe ?",
      choices: [
        "E-commerce : +34 € ; groupe : +34 €",
        "E-commerce : +7 € ; groupe : +44 €",
        "E-commerce : −3 € ; groupe : −3 €",
        "E-commerce : −3 € ; groupe : +34 €",
      ],
      answer: 3,
      explanation:
        "Marge E-commerce = 80 − 75 − 8 = −3 € : il refusera l'opération. Pour le groupe, capacité libre donc coût pertinent = coût variable : marge = 80 − 38 − 8 = 34 € par raquette. Le PCI au prix de marché provoque ici une sous-optimisation ; un PCI au coût variable (38 €) assurerait la convergence.",
    },
    {
      id: "q9",
      question:
        "Chez Rakéo, le centre Distribution B2B maîtrise le volume des ventes et le chiffre d'affaires mais pas les coûts de production. De quel type de centre s'agit-il ?",
      choices: [
        "Un centre de profit",
        "Un centre de recettes (ou de chiffre d'affaires)",
        "Un centre de coûts",
        "Un centre d'investissement",
      ],
      answer: 1,
      explanation:
        "Le centre de recettes est jugé sur le CA, le volume et le mix de ventes. Le centre de profit maîtrise à la fois recettes et coûts (ex. E-commerce), le centre de coûts uniquement les coûts (ex. Production), le centre d'investissement maîtrise en outre les capitaux engagés.",
    },
    {
      id: "q10",
      question: "Le prix de transfert (transfer pricing) désigne :",
      choices: [
        "Un synonyme du prix de cession interne étudié en DCG",
        "Le prix négocié entre deux centres d'une même entreprise",
        "La valorisation fiscale des transactions intra-groupe transfrontalières, encadrée par l'OCDE — hors programme DCG",
        "Le PCI appliqué entre une fonction support et les fonctions opérationnelles",
      ],
      answer: 2,
      explanation:
        "Le prix de transfert est une notion fiscale (principe de pleine concurrence, cadre OCDE) réservée au DSCG. Le programme DCG rénové l'exclut expressément : il ne faut pas le confondre avec le prix de cession interne, notion de gestion interne.",
    },
  ],
};
