// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Flashcards tirées du QCM : énoncé au recto, justification au verso.
import type { Flashcard } from "../types";

export const flashcards: Flashcard[] = [
  {
    "id": "qcm1",
    "front": "Que vise l'imputation rationnelle des charges fixes ?",
    "back": "L'IR neutralise l'effet du niveau d'activité sur le coût unitaire des charges fixes."
  },
  {
    "id": "qcm2",
    "front": "Comment se calcule le coefficient d'imputation rationnelle ?",
    "back": "Coefficient = activité réelle / activité normale, jamais l'inverse."
  },
  {
    "id": "qcm3",
    "front": "L'activité normale correspond à :",
    "back": "L'activité normale est le niveau de conception de l'outil, inférieur à la capacité maximale."
  },
  {
    "id": "qcm4",
    "front": "Sur quelles charges porte uniquement le coefficient d'imputation rationnelle ?",
    "back": "Le coefficient ne s'applique qu'aux charges fixes ; les variables sont incorporées intégralement."
  },
  {
    "id": "qcm5",
    "front": "Comment se calculent les charges fixes imputées ?",
    "back": "CF imputées = CF réelles × coefficient d'activité."
  },
  {
    "id": "qcm6",
    "front": "Comment se calcule le coût d'imputation rationnelle ?",
    "back": "Coût IR = charges variables + (charges fixes × coefficient d'activité)."
  },
  {
    "id": "qcm7",
    "front": "Activité réelle 20 000 produits, normale 25 000 : quel est le coefficient ?",
    "back": "20 000 / 25 000 = 0,80."
  },
  {
    "id": "qcm8",
    "front": "CF = 300 000 €, coefficient = 0,80. Quelles sont les CF imputées ?",
    "back": "300 000 × 0,80 = 240 000 € de CF imputées."
  },
  {
    "id": "qcm9",
    "front": "CV = 12 €/produit, 20 000 produits, CF imputées 240 000 € : quel est le coût IR unitaire ?",
    "back": "(12 × 20 000 + 240 000) / 20 000 = 480 000 / 20 000 = 24 € (stable vs activité normale)."
  },
  {
    "id": "qcm10",
    "front": "Comment se calcule la différence d'imputation rationnelle (DIR) ?",
    "back": "DIR = charges fixes × (1 − coefficient d'activité)."
  },
  {
    "id": "qcm11",
    "front": "CF = 300 000 €, coefficient = 0,80 : quel est le coût de sous-activité (DIR) ?",
    "back": "DIR = 300 000 × (1 − 0,80) = + 60 000 € (mali de sous-activité)."
  },
  {
    "id": "qcm12",
    "front": "Une DIR négative (coefficient > 1) correspond à :",
    "back": "Coefficient > 1 → DIR négative = boni de suractivité (gain non récurrent)."
  },
  {
    "id": "qcm13",
    "front": "Quel vocabulaire latin emploie-t-on pour la sous-activité et la suractivité ?",
    "back": "On dit « mali » de sous-activité et « boni » de suractivité, jamais malus/bonus."
  },
  {
    "id": "qcm14",
    "front": "Quelle relation lie résultat réel, résultat rationnel et coût de sous-activité ?",
    "back": "Résultat réel = Résultat rationnel − Coût de sous-activité (ou + boni de suractivité)."
  },
  {
    "id": "qcm15",
    "front": "Marge rationnelle 120 000 €, coût de sous-activité 60 000 € : quel est le résultat réel ?",
    "back": "120 000 − 60 000 = 60 000 € de résultat réel."
  },
  {
    "id": "qcm16",
    "front": "Quels effets le coefficient d'activité produit-il ?",
    "back": "=1 coût complet, <1 sous-activité, >1 suractivité ; le coefficient ne porte que sur les CF."
  },
  {
    "id": "qcm17",
    "front": "Quelles méthodes de détermination de l'activité normale existent ?",
    "back": "Capacité minorée, moyenne historique et prévision budgétaire sont les trois méthodes ; pas la capacité maximale."
  },
  {
    "id": "qcm18",
    "front": "Quelles affirmations sur le calcul à plusieurs centres sont exactes ?",
    "back": "Un coefficient par centre ; le coût de sous-activité total est la somme des centres, pas le produit d'un coefficient moyen."
  },
  {
    "id": "qcm19",
    "front": "Quelles décisions correspondent aux situations d'activité ?",
    "back": "Ponctuelle : mieux remplir ; durable : redimensionner ou investir ; ne pas augmenter les prix ni intégrer un boni ponctuel."
  },
  {
    "id": "qcm20",
    "front": "Quelles sont des limites de l'imputation rationnelle ?",
    "back": "Activité normale conventionnelle, distinction fixe/variable et fixité par paliers sont les limites ; l'IR est au contraire utile quand les CF sont lourdes."
  },
  {
    "id": "qcm21",
    "front": "Quelles propositions sur le pilotage par l'IR sont exactes ?",
    "back": "La profitabilité rationnelle reste stable (hors conjoncture) ; les trois autres propositions sont exactes."
  },
  {
    "id": "qcm22",
    "front": "Le coefficient d'imputation rationnelle est égal à l'activité réelle divisée par l'activité normale.",
    "back": "Vrai : coefficient = activité réelle / activité normale."
  },
  {
    "id": "qcm23",
    "front": "En imputation rationnelle, les stocks sont valorisés au coût réel et non au coût IR.",
    "back": "Faux : par prudence, les stocks sont valorisés au coût IR, jamais au coût réel."
  },
  {
    "id": "qcm24",
    "front": "Identité de contrôle : Coût réel = Coût IR + DIR.",
    "back": "Vrai : le coût réel se reconstitue en ajoutant la différence d'imputation au coût IR."
  },
  {
    "id": "qcm25",
    "front": "Le coût unitaire en imputation rationnelle reste stable quel que soit le niveau d'activité (conditions inchangées).",
    "back": "Vrai : la variabilisation des CF rend le coût IR unitaire indépendant du niveau d'activité."
  }
];
