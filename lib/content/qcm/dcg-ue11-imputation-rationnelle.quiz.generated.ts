// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// QCM du manuel, complet.
import type { QuizQuestion } from "../types";

export const quiz: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Que vise l'imputation rationnelle des charges fixes ?",
    "choices": [
      "Calculer le seuil de rentabilité",
      "Répartir les charges par activités",
      "Supprimer les charges fixes",
      "Neutraliser l'effet du niveau d'activité sur le coût fixe unitaire"
    ],
    "answers": [
      3
    ],
    "explanation": "L'IR neutralise l'effet du niveau d'activité sur le coût unitaire des charges fixes."
  },
  {
    "id": "qcm2",
    "question": "Comment se calcule le coefficient d'imputation rationnelle ?",
    "choices": [
      "Activité réelle / activité normale",
      "Charges fixes / charges variables",
      "Activité réelle / capacité maximale",
      "Activité normale / activité réelle"
    ],
    "answers": [
      0
    ],
    "explanation": "Coefficient = activité réelle / activité normale, jamais l'inverse."
  },
  {
    "id": "qcm3",
    "question": "L'activité normale correspond à :",
    "choices": [
      "Le seuil de rentabilité",
      "La capacité maximale de l'outil",
      "Le niveau pour lequel l'outil a été conçu et dimensionné",
      "L'activité réelle du moment"
    ],
    "answers": [
      2
    ],
    "explanation": "L'activité normale est le niveau de conception de l'outil, inférieur à la capacité maximale."
  },
  {
    "id": "qcm4",
    "question": "Sur quelles charges porte uniquement le coefficient d'imputation rationnelle ?",
    "choices": [
      "Toutes les charges",
      "Les charges variables",
      "Les charges directes",
      "Les charges fixes"
    ],
    "answers": [
      3
    ],
    "explanation": "Le coefficient ne s'applique qu'aux charges fixes ; les variables sont incorporées intégralement."
  },
  {
    "id": "qcm5",
    "question": "Comment se calculent les charges fixes imputées ?",
    "choices": [
      "CF + coefficient",
      "CF / coefficient",
      "CF × coefficient d'activité",
      "CF × activité réelle"
    ],
    "answers": [
      2
    ],
    "explanation": "CF imputées = CF réelles × coefficient d'activité."
  },
  {
    "id": "qcm6",
    "question": "Comment se calcule le coût d'imputation rationnelle ?",
    "choices": [
      "(CV + CF) × coefficient",
      "Charges fixes + charges variables × coefficient",
      "Charges fixes × coefficient uniquement",
      "Charges variables + (charges fixes × coefficient)"
    ],
    "answers": [
      3
    ],
    "explanation": "Coût IR = charges variables + (charges fixes × coefficient d'activité)."
  },
  {
    "id": "qcm7",
    "question": "Activité réelle 20 000 produits, normale 25 000 : quel est le coefficient ?",
    "choices": [
      "0,20",
      "0,80",
      "1,00",
      "1,25"
    ],
    "answers": [
      1
    ],
    "explanation": "20 000 / 25 000 = 0,80."
  },
  {
    "id": "qcm8",
    "question": "CF = 300 000 €, coefficient = 0,80. Quelles sont les CF imputées ?",
    "choices": [
      "300 000 €",
      "240 000 €",
      "375 000 €",
      "60 000 €"
    ],
    "answers": [
      1
    ],
    "explanation": "300 000 × 0,80 = 240 000 € de CF imputées."
  },
  {
    "id": "qcm9",
    "question": "CV = 12 €/produit, 20 000 produits, CF imputées 240 000 € : quel est le coût IR unitaire ?",
    "choices": [
      "36 €",
      "18 €",
      "12 €",
      "24 €"
    ],
    "answers": [
      3
    ],
    "explanation": "(12 × 20 000 + 240 000) / 20 000 = 480 000 / 20 000 = 24 € (stable vs activité normale)."
  },
  {
    "id": "qcm10",
    "question": "Comment se calcule la différence d'imputation rationnelle (DIR) ?",
    "choices": [
      "CF × (1 − coefficient)",
      "CV × (1 − coefficient)",
      "CF / coefficient",
      "CF × coefficient"
    ],
    "answers": [
      0
    ],
    "explanation": "DIR = charges fixes × (1 − coefficient d'activité)."
  },
  {
    "id": "qcm11",
    "question": "CF = 300 000 €, coefficient = 0,80 : quel est le coût de sous-activité (DIR) ?",
    "choices": [
      "− 60 000 €",
      "+ 240 000 €",
      "+ 60 000 €",
      "+ 300 000 €"
    ],
    "answers": [
      2
    ],
    "explanation": "DIR = 300 000 × (1 − 0,80) = + 60 000 € (mali de sous-activité)."
  },
  {
    "id": "qcm12",
    "question": "Une DIR négative (coefficient > 1) correspond à :",
    "choices": [
      "Une perte de structure",
      "Un coût de la capacité inemployée",
      "Un mali de sous-activité",
      "Un boni de suractivité"
    ],
    "answers": [
      3
    ],
    "explanation": "Coefficient > 1 → DIR négative = boni de suractivité (gain non récurrent)."
  },
  {
    "id": "qcm13",
    "question": "Quel vocabulaire latin emploie-t-on pour la sous-activité et la suractivité ?",
    "choices": [
      "Déficit et excédent",
      "Écart et marge",
      "Malus et bonus",
      "Mali et boni"
    ],
    "answers": [
      3
    ],
    "explanation": "On dit « mali » de sous-activité et « boni » de suractivité, jamais malus/bonus."
  },
  {
    "id": "qcm14",
    "question": "Quelle relation lie résultat réel, résultat rationnel et coût de sous-activité ?",
    "choices": [
      "Résultat réel = Résultat rationnel − Coût de sous-activité",
      "Résultat réel = Résultat rationnel × Coefficient",
      "Résultat réel = Coût de sous-activité − Résultat rationnel",
      "Résultat réel = Résultat rationnel + Coût de sous-activité"
    ],
    "answers": [
      0
    ],
    "explanation": "Résultat réel = Résultat rationnel − Coût de sous-activité (ou + boni de suractivité)."
  },
  {
    "id": "qcm15",
    "question": "Marge rationnelle 120 000 €, coût de sous-activité 60 000 € : quel est le résultat réel ?",
    "choices": [
      "180 000 €",
      "120 000 €",
      "− 60 000 €",
      "60 000 €"
    ],
    "answers": [
      3
    ],
    "explanation": "120 000 − 60 000 = 60 000 € de résultat réel."
  },
  {
    "id": "qcm16",
    "question": "Quels effets le coefficient d'activité produit-il ?",
    "choices": [
      "Coefficient < 1 → boni",
      "Coefficient > 1 → suractivité",
      "Coefficient < 1 → sous-activité",
      "Le coefficient porte sur les charges variables",
      "Coefficient = 1 → coût complet classique"
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "=1 coût complet, <1 sous-activité, >1 suractivité ; le coefficient ne porte que sur les CF."
  },
  {
    "id": "qcm17",
    "question": "Quelles méthodes de détermination de l'activité normale existent ?",
    "choices": [
      "La capacité théorique minorée",
      "La moyenne historique",
      "La prévision budgétaire",
      "La capacité maximale brute",
      "Le seuil de rentabilité"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Capacité minorée, moyenne historique et prévision budgétaire sont les trois méthodes ; pas la capacité maximale."
  },
  {
    "id": "qcm18",
    "question": "Quelles affirmations sur le calcul à plusieurs centres sont exactes ?",
    "choices": [
      "On applique un coefficient par centre",
      "Le coût de sous-activité total est le produit d'un coefficient moyen par les CF totales",
      "Un coefficient global moyen donne le bon résultat",
      "Le coût de sous-activité total est la somme des centres",
      "Un atelier peut être en sous-activité, un autre en suractivité"
    ],
    "answers": [
      0,
      3,
      4
    ],
    "explanation": "Un coefficient par centre ; le coût de sous-activité total est la somme des centres, pas le produit d'un coefficient moyen."
  },
  {
    "id": "qcm19",
    "question": "Quelles décisions correspondent aux situations d'activité ?",
    "choices": [
      "Sous-activité durable → redimensionner les capacités",
      "Suractivité durable → investir dans la capacité",
      "Sous-activité durable → augmenter les prix",
      "Suractivité ponctuelle → l'intégrer aux prévisions",
      "Sous-activité ponctuelle → action commerciale"
    ],
    "answers": [
      0,
      1,
      4
    ],
    "explanation": "Ponctuelle : mieux remplir ; durable : redimensionner ou investir ; ne pas augmenter les prix ni intégrer un boni ponctuel."
  },
  {
    "id": "qcm20",
    "question": "Quelles sont des limites de l'imputation rationnelle ?",
    "choices": [
      "La difficulté de définir l'activité normale",
      "Les charges fixes ne sont fixes que par paliers",
      "La distinction parfois délicate fixe/variable",
      "Elle est sans intérêt quand les CF sont importantes",
      "Elle supprime tout besoin de comptabilité"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Activité normale conventionnelle, distinction fixe/variable et fixité par paliers sont les limites ; l'IR est au contraire utile quand les CF sont lourdes."
  },
  {
    "id": "qcm21",
    "question": "Quelles propositions sur le pilotage par l'IR sont exactes ?",
    "choices": [
      "Une hausse du coût IR signale une vraie dérive d'exploitation",
      "Les stocks sont valorisés au coût IR par prudence",
      "Le coût IR rend les coûts comparables dans le temps",
      "La profitabilité rationnelle varie fortement avec l'activité"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "La profitabilité rationnelle reste stable (hors conjoncture) ; les trois autres propositions sont exactes."
  },
  {
    "id": "qcm22",
    "question": "Le coefficient d'imputation rationnelle est égal à l'activité réelle divisée par l'activité normale.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : coefficient = activité réelle / activité normale."
  },
  {
    "id": "qcm23",
    "question": "En imputation rationnelle, les stocks sont valorisés au coût réel et non au coût IR.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : par prudence, les stocks sont valorisés au coût IR, jamais au coût réel."
  },
  {
    "id": "qcm24",
    "question": "Identité de contrôle : Coût réel = Coût IR + DIR.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : le coût réel se reconstitue en ajoutant la différence d'imputation au coût IR."
  },
  {
    "id": "qcm25",
    "question": "Le coût unitaire en imputation rationnelle reste stable quel que soit le niveau d'activité (conditions inchangées).",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : la variabilisation des CF rend le coût IR unitaire indépendant du niveau d'activité."
  }
];
