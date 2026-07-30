// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Banque complète du manuel ; le site joue la sélection `quiz`.
import type { QuizQuestion } from "../types";

export const banque: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Qu'est-ce qu'un prix de cession interne (PCI) ?",
    "choices": [
      "Le coût de revient complet",
      "Un impôt sur les transactions",
      "Le prix de vente au client final",
      "La valeur attribuée aux biens et services échangés entre centres d'une même organisation"
    ],
    "answers": [
      3
    ],
    "explanation": "Le PCI est la valeur attribuée aux biens et services échangés entre centres de responsabilité d'une même organisation."
  },
  {
    "id": "qcm2",
    "question": "Quel est l'enjeu fondamental du PCI ?",
    "choices": [
      "Maximiser la marge du centre vendeur",
      "Augmenter le prix de vente externe",
      "Réduire l'autonomie des centres",
      "La convergence des buts (décision locale optimale = décision globale optimale)"
    ],
    "answers": [
      3
    ],
    "explanation": "L'enjeu est la convergence des buts : la somme des intérêts locaux doit servir l'intérêt global."
  },
  {
    "id": "qcm3",
    "question": "Le PCI crée-t-il de la valeur pour le groupe ?",
    "choices": [
      "Oui, mais seulement au prix de marché",
      "Non, il détruit toujours de la valeur",
      "Non, il déplace la marge entre centres sans la créer",
      "Oui, il augmente la marge globale"
    ],
    "answers": [
      2
    ],
    "explanation": "Le PCI ne crée pas de valeur : il la déplace entre centres ; la marge globale du groupe reste invariante."
  },
  {
    "id": "qcm4",
    "question": "Un produit a un coût variable de 38 €. Quel PCI au coût variable et quelle marge pour le centre cédant ?",
    "choices": [
      "38 € et marge de 0 €",
      "75 € et marge de 37 €",
      "38 € et marge de 38 €",
      "67 € et marge de 29 €"
    ],
    "answers": [
      0
    ],
    "explanation": "Au coût variable, PCI = 38 € et la marge du cédant = 0 € (les charges fixes ne sont pas couvertes)."
  },
  {
    "id": "qcm5",
    "question": "Coût variable 38 €, charges fixes réparties 29 €. Quel est le PCI au coût complet et la marge du cédant ?",
    "choices": [
      "67 € et marge de 29 €",
      "38 € et marge de 29 €",
      "67 € et marge de 0 €",
      "74 € et marge de 36 €"
    ],
    "answers": [
      0
    ],
    "explanation": "Coût complet = 38 + 29 = 67 € ; marge du cédant = 67 - 38 = 29 €."
  },
  {
    "id": "qcm6",
    "question": "Coût complet 67 €, marge envisagée 7 €. Quel est le PCI au coût complet majoré et la marge du cédant ?",
    "choices": [
      "74 € et marge de 36 €",
      "67 € et marge de 7 €",
      "75 € et marge de 37 €",
      "74 € et marge de 7 €"
    ],
    "answers": [
      0
    ],
    "explanation": "Coût complet majoré = 67 + 7 = 74 € ; marge du cédant = 74 - 38 = 36 €."
  },
  {
    "id": "qcm7",
    "question": "Prix de marché 75 €, coût variable 38 €. Quel est le PCI au prix de marché et la marge du cédant ?",
    "choices": [
      "37 € et marge de 75 €",
      "67 € et marge de 29 €",
      "75 € et marge de 37 €",
      "75 € et marge de 0 €"
    ],
    "answers": [
      2
    ],
    "explanation": "Au prix de marché, PCI = 75 € ; marge du cédant = 75 - 38 = 37 €."
  },
  {
    "id": "qcm8",
    "question": "Dans un PCI négocié, quelle est la borne plancher ?",
    "choices": [
      "Le coût complet",
      "Le coût variable du vendeur",
      "Le coût complet majoré",
      "Le prix de marché"
    ],
    "answers": [
      1
    ],
    "explanation": "Le plancher est le coût variable du vendeur : en deçà, le vendeur perd à céder."
  },
  {
    "id": "qcm9",
    "question": "Dans un PCI négocié, quelle est la borne plafond pour l'acheteur ?",
    "choices": [
      "Le prix de marché",
      "Le coût complet",
      "Le coût variable du vendeur",
      "Le coût standard"
    ],
    "answers": [
      0
    ],
    "explanation": "Le plafond est le prix de marché : au-delà, l'acheteur préfère s'approvisionner à l'extérieur."
  },
  {
    "id": "qcm10",
    "question": "Quel est le principal inconvénient du PCI au coût réel complet ?",
    "choices": [
      "Il n'existe pas de marché",
      "Il avantage systématiquement l'acheteur",
      "Il transmet les inefficiences de l'amont à l'aval",
      "Il est trop objectif"
    ],
    "answers": [
      2
    ],
    "explanation": "Le coût réel transmet les inefficiences de l'amont à l'aval : l'acheteur subit des écarts qu'il ne maîtrise pas."
  },
  {
    "id": "qcm11",
    "question": "Pourquoi le PCI au coût standard est-il souvent considéré comme le meilleur compromis ?",
    "choices": [
      "Il est toujours égal au prix de marché",
      "Il couvre les coûts, n'avantage personne et n'autorise pas le transfert d'inefficiences",
      "Il maximise la marge du vendeur",
      "Il supprime l'autonomie des centres"
    ],
    "answers": [
      1
    ],
    "explanation": "Le coût standard (éventuellement majoré) couvre les coûts, n'avantage personne et bloque le transfert d'inefficiences."
  },
  {
    "id": "qcm12",
    "question": "Quel indicateur principal caractérise un centre d'investissement ?",
    "choices": [
      "Le ROI / ROCE / résultat résiduel",
      "Le volume de production",
      "L'écart sur coûts",
      "Le chiffre d'affaires"
    ],
    "answers": [
      0
    ],
    "explanation": "Le centre d'investissement est jugé sur la rentabilité des capitaux (ROI, ROCE, EVA, résultat résiduel)."
  },
  {
    "id": "qcm13",
    "question": "Comment se calcule le résultat résiduel d'un centre d'investissement ?",
    "choices": [
      "Résultat / capitaux investis",
      "Résultat - (capitaux investis × taux exigé)",
      "Capitaux investis × taux exigé",
      "Résultat + capitaux investis"
    ],
    "answers": [
      1
    ],
    "explanation": "Résultat résiduel = Résultat - (capitaux investis × taux de rémunération exigé)."
  },
  {
    "id": "qcm14",
    "question": "Selon le point examen, comment se définit le PCI optimal ?",
    "choices": [
      "Coût complet majoré",
      "Prix de marché systématiquement",
      "Moyenne des cinq méthodes",
      "Coût variable du vendeur + coût d'opportunité"
    ],
    "answers": [
      3
    ],
    "explanation": "PCI optimal = coût variable du vendeur + coût d'opportunité (nul si capacité libre, ≈ prix de marché si saturée)."
  },
  {
    "id": "qcm15",
    "question": "Quand la capacité du centre cédant est libre, à quoi est égal le PCI optimal ?",
    "choices": [
      "Au coût complet",
      "Au coût complet majoré",
      "Au coût variable du vendeur",
      "Au prix de marché"
    ],
    "answers": [
      2
    ],
    "explanation": "Capacité libre → coût d'opportunité nul → PCI optimal = coût variable du vendeur."
  },
  {
    "id": "qcm16",
    "question": "Parmi les propositions, lesquelles sont des objectifs des prix de cession interne ?",
    "choices": [
      "Coordonner les échanges entre centres",
      "Calculer l'impôt sur les sociétés",
      "Évaluer la performance des centres",
      "Fixer le prix de vente au client final"
    ],
    "answers": [
      0,
      2
    ],
    "explanation": "Le PCI coordonne les échanges et évalue la performance des centres ; il ne calcule pas l'impôt ni ne fixe le prix au client final."
  },
  {
    "id": "qcm17",
    "question": "Parmi les propositions, lesquelles sont des modes de fixation du PCI ?",
    "choices": [
      "Le prix aléatoire mensuel",
      "Le prix de marché",
      "Le prix négocié",
      "Le prix imposé par l'administration fiscale"
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Le prix de marché et le prix négocié sont deux des cinq modes ; les deux autres propositions sont inventées."
  },
  {
    "id": "qcm18",
    "question": "Quels sont des comportements dysfonctionnels liés à un mauvais PCI ?",
    "choices": [
      "Les conflits entre centres",
      "La sous-performance globale",
      "La sous-optimisation",
      "La convergence automatique des buts"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Un mauvais PCI provoque sous-optimisation, conflits entre centres et sous-performance globale."
  },
  {
    "id": "qcm19",
    "question": "Parmi les propositions, lesquels sont des types de centres de responsabilité ?",
    "choices": [
      "Centre d'investissement",
      "Centre de coûts",
      "Centre de certification",
      "Centre de gouvernance"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "Le centre de coûts et le centre d'investissement font partie des quatre types ; les centres de gouvernance et de certification n'existent pas dans cette typologie."
  },
  {
    "id": "qcm20",
    "question": "Quels sont les avantages du PCI au prix de marché ?",
    "choices": [
      "Objectivité (prix non négocié)",
      "Incitation à la compétitivité",
      "Indépendance vis-à-vis de tout marché externe",
      "Mesure « vraie » de chaque centre"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Le prix de marché est objectif, donne une mesure « vraie » et incite à la compétitivité, mais exige justement un marché représentatif."
  },
  {
    "id": "qcm21",
    "question": "Le PCI modifie la marge globale du groupe selon le mode choisi.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : le PCI répartit la marge entre centres mais ne modifie pas la marge globale du groupe (invariante)."
  },
  {
    "id": "qcm22",
    "question": "Plus le PCI est élevé, plus la marge du centre cédant augmente, au détriment de l'acheteur.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : un PCI plus élevé augmente la marge du cédant, mais elle est « prise » sur l'aval (l'acheteur)."
  },
  {
    "id": "qcm23",
    "question": "Le PCI au coût variable permet au centre cédant d'afficher une marge confortable.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : au coût variable, le cédant n'affiche aucune marge et ne couvre pas ses charges fixes."
  },
  {
    "id": "qcm24",
    "question": "La dimension fiscale des prix de transfert (OCDE) fait partie du programme DCG du PCI.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : la dimension fiscale (prix de transfert OCDE) relève d'un autre cadre, hors programme DCG."
  },
  {
    "id": "qcm25",
    "question": "Le PCI ne concerne en pratique que les centres de coûts.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : le PCI pèse surtout sur les centres de profit et d'investissement, jugés sur leur marge ou rentabilité."
  }
];

/** Sélection jouée sur le site — voir docs/selection-qcm.md. */
const SELECTION = [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24];

export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);
