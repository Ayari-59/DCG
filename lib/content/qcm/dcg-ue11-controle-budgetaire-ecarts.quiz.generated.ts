// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Banque complète du manuel ; le site joue la sélection `quiz`.
import type { QuizQuestion } from "../types";

export const banque: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Quelle est la convention de calcul d'un écart ?",
    "choices": [
      "Écart = Réel / Prévu",
      "Écart = Réel - Prévu",
      "Écart = Prévu - Réel",
      "Écart = (Réel - Prévu) / Réel"
    ],
    "answers": [
      1
    ],
    "explanation": "La convention constante est Écart = Réel - Prévu."
  },
  {
    "id": "qcm2",
    "question": "Pour une charge, un écart positif (réalisé > prévu) est :",
    "choices": [
      "Neutre",
      "Favorable",
      "Sans signification",
      "Défavorable"
    ],
    "answers": [
      3
    ],
    "explanation": "Pour une charge, dépasser le prévu augmente le coût : l'écart positif est défavorable."
  },
  {
    "id": "qcm3",
    "question": "Pour un chiffre d'affaires ou une marge, un écart positif est :",
    "choices": [
      "Toujours nul",
      "Favorable",
      "Défavorable",
      "Neutre"
    ],
    "answers": [
      1
    ],
    "explanation": "Pour un produit (CA, marge), un écart positif améliore le résultat : il est favorable."
  },
  {
    "id": "qcm4",
    "question": "L'écart sur prix d'une charge directe se calcule par :",
    "choices": [
      "(Cr - Cs) × Qr",
      "(Qr - Qs) × Cr",
      "(Cr - Cs) × Qs",
      "(Qr - Qs) × Cs"
    ],
    "answers": [
      0
    ],
    "explanation": "Écart/prix = (Coût réel - Coût standard) × Quantité réelle."
  },
  {
    "id": "qcm5",
    "question": "L'écart sur quantité d'une charge directe se calcule par :",
    "choices": [
      "(Qr - Qs) × Cs",
      "(Qr - Qs) × Cr",
      "(Cr - Cs) × Qs",
      "(Cr - Cs) × Qr"
    ],
    "answers": [
      0
    ],
    "explanation": "Écart/quantité = (Quantité réelle - Quantité standard) × Coût standard."
  },
  {
    "id": "qcm6",
    "question": "Matière : standard 13 €/kg, réel 12,90 €/kg, quantité réelle 3 990 kg. L'écart sur prix vaut :",
    "choices": [
      "-399 € (F)",
      "+2 470 € (D)",
      "-2 071 € (F)",
      "+399 € (D)"
    ],
    "answers": [
      0
    ],
    "explanation": "(12,90 - 13) × 3 990 = -399 €, favorable car le prix réel est inférieur au standard."
  },
  {
    "id": "qcm7",
    "question": "Matière : quantité réelle 3 990 kg, quantité standard allouée 3 800 kg (2 kg × 1 900), coût standard 13 €. L'écart sur quantité vaut :",
    "choices": [
      "+399 € (D)",
      "+2 071 € (D)",
      "+2 470 € (D)",
      "-2 470 € (F)"
    ],
    "answers": [
      2
    ],
    "explanation": "(3 990 - 3 800) × 13 = +2 470 €, défavorable (surconsommation de matière)."
  },
  {
    "id": "qcm8",
    "question": "MOD : taux standard 36 €/h, taux réel 36,50 €/h, heures réelles 1 200. L'écart sur taux vaut :",
    "choices": [
      "-600 € (F)",
      "+600 € (D)",
      "+9 600 € (D)",
      "+9 000 € (D)"
    ],
    "answers": [
      1
    ],
    "explanation": "(36,50 - 36) × 1 200 = +600 €, défavorable."
  },
  {
    "id": "qcm9",
    "question": "MOD : heures réelles 1 200, heures standard allouées 950 (0,5 h × 1 900), taux standard 36 €. L'écart sur temps vaut :",
    "choices": [
      "+600 € (D)",
      "+9 000 € (D)",
      "-9 000 € (F)",
      "+9 600 € (D)"
    ],
    "answers": [
      1
    ],
    "explanation": "(1 200 - 950) × 36 = +9 000 €, défavorable (perte de rendement)."
  },
  {
    "id": "qcm10",
    "question": "Écart sur CA, effet volume : ventes réelles 100, prévues 90, prix prévu 10 €. Il vaut :",
    "choices": [
      "+10 € (F)",
      "+90 € (F)",
      "+1 000 € (F)",
      "+100 € (F)"
    ],
    "answers": [
      3
    ],
    "explanation": "(100 - 90) × 10 = +100 €, favorable (volume au prix prévu)."
  },
  {
    "id": "qcm11",
    "question": "Écart sur CA, effet prix : prix réel 11 €, prix prévu 10 €, ventes réelles 100. Il vaut :",
    "choices": [
      "+1 100 € (F)",
      "+100 € (F)",
      "+90 € (F)",
      "+10 € (F)"
    ],
    "answers": [
      1
    ],
    "explanation": "(11 - 10) × 100 = +100 €, favorable (prix sur quantités réelles)."
  },
  {
    "id": "qcm12",
    "question": "Pourquoi privilégier l'écart sur marge plutôt que sur CA pour juger la performance commerciale ?",
    "choices": [
      "Parce que la marge inclut les charges fixes",
      "Parce que la marge est plus facile à calculer",
      "Parce que le CA ignore les remises",
      "Parce que la marge sur coût préétabli isole la seule performance commerciale"
    ],
    "answers": [
      3
    ],
    "explanation": "La marge sur coût préétabli neutralise les variations de coût et reflète la seule performance commerciale."
  },
  {
    "id": "qcm13",
    "question": "Un budget flexible s'exprime sous la forme :",
    "choices": [
      "Y = CF (charges uniquement fixes)",
      "Y = a·X + CF (distinction CV / CF)",
      "Y = a·X (charges uniquement variables)",
      "Y = X / a"
    ],
    "answers": [
      1
    ],
    "explanation": "Le budget flexible distingue charges variables et fixes : Y = a·X + CF."
  },
  {
    "id": "qcm14",
    "question": "Charges indirectes : 60 000 € pour 1 000 UO dont 20 000 € fixes. Le coût variable unitaire a est :",
    "choices": [
      "60 €/UO",
      "40 €/UO",
      "20 €/UO",
      "80 €/UO"
    ],
    "answers": [
      1
    ],
    "explanation": "a = (60 000 - 20 000)/1 000 = 40 €/UO, d'où Y = 40·X + 20 000."
  },
  {
    "id": "qcm15",
    "question": "L'écart sur volume des coûts de production :",
    "choices": [
      "Est imputable au directeur de production",
      "Mesure la performance des achats",
      "Est toujours favorable",
      "N'est pas imputable à l'atelier (il subit le volume décidé par le commercial)"
    ],
    "answers": [
      3
    ],
    "explanation": "L'écart sur volume traduit le seul niveau de production décidé en amont : il n'est pas imputable à l'atelier."
  },
  {
    "id": "qcm16",
    "question": "Parmi ces questions, lesquelles structurent l'interprétation d'un écart ?",
    "choices": [
      "Quelle responsabilité (quel centre) ?",
      "Quelle ampleur (significatif) ?",
      "Quel sens (favorable/défavorable) ?",
      "Quelle couleur de tableur ?"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Ampleur, sens, cause et responsabilité sont les quatre questions d'interprétation ; la couleur du tableur n'en est pas une."
  },
  {
    "id": "qcm17",
    "question": "Parmi ces sous-écarts, lesquels relèvent de l'analyse des charges indirectes par le budget flexible ?",
    "choices": [
      "Écart sur rendement",
      "Écart sur budget",
      "Écart sur activité",
      "Écart sur composition (mix)"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Le budget flexible isole budget, activité, rendement (et volume) ; l'écart de composition concerne les ventes multiproduits."
  },
  {
    "id": "qcm18",
    "question": "Quelles affirmations relèvent du principe de gestion par exception ?",
    "choices": [
      "La valeur relative (% du prévu) est déterminante",
      "On peut fixer des seuils de tolérance",
      "On concentre l'attention sur les écarts d'amplitude anormale",
      "On analyse systématiquement tous les écarts"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "La gestion par exception cible les écarts significatifs (en valeur relative) selon des seuils ; analyser tout serait contre-productif."
  },
  {
    "id": "qcm19",
    "question": "Quelles affirmations sur la décomposition d'un écart sont exactes ?",
    "choices": [
      "L'effet prix est valorisé au prix prévu",
      "L'effet volume est valorisé au prix prévu",
      "L'effet prix est rapporté aux quantités réelles",
      "L'écart d'une somme est la somme des écarts"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "L'écart d'une somme se décompose membre par membre ; volume au prix prévu, prix aux quantités réelles."
  },
  {
    "id": "qcm20",
    "question": "Parmi ces termes, lesquels font partie de la méthode des 5M de l'analyse causale (arête de poisson) ?",
    "choices": [
      "Méthode",
      "Matière",
      "Marché",
      "Milieu"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Les 5M sont Matière, Matériel, Méthode, Main-d'œuvre et Milieu ; le marché n'en fait pas partie."
  },
  {
    "id": "qcm21",
    "question": "Quelles caractérisent l'approche Beyond Budgeting ?",
    "choices": [
      "Prévisions glissantes (rolling forecasts)",
      "Objectifs relatifs (benchmarks)",
      "Abandonner le budget annuel rigide",
      "Renforcement de la centralisation"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Beyond Budgeting prône objectifs relatifs, prévisions glissantes et décentralisation (non centralisation)."
  },
  {
    "id": "qcm22",
    "question": "Le signe arithmétique seul d'un écart suffit à dire s'il est favorable ou défavorable.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : le sens dépend de l'objet (produit ou charge) et de l'effet sur le résultat, pas du seul signe."
  },
  {
    "id": "qcm23",
    "question": "La marge sur coût préétabli fige le coût au standard, ce qui isole la performance commerciale.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : le coût étant figé au standard, l'écart sur marge ne reflète que la performance commerciale."
  },
  {
    "id": "qcm24",
    "question": "Les frais généraux, entièrement fixes, doivent être décomposés en écart sur volume et écart sur prix.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : étant entièrement fixes, ils ne se décomposent pas ; on compare simplement le réalisé au budgété."
  },
  {
    "id": "qcm25",
    "question": "On calcule les écarts du global vers le détail, puis on vérifie que la somme des sous-écarts reboucle sur l'écart total.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : la démarche va du global au détail, avec contrôle du rebouclage des sous-écarts."
  }
];

/** Sélection jouée sur le site — voir docs/selection-qcm.md. */
const SELECTION = [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24];

export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);
