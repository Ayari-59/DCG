// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// QCM du manuel, complet.
import type { QuizQuestion } from "../types";

export const quiz: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Une charge se définit en comptabilité de gestion comme :",
    "choices": [
      "Une recette rapportée à un objet",
      "Un produit exceptionnel",
      "Un encaissement de trésorerie",
      "Une consommation de ressources rapportée à un objet de coût"
    ],
    "answers": [
      3
    ],
    "explanation": "La charge est une consommation de ressources rattachée à un objet de coût."
  },
  {
    "id": "qcm2",
    "question": "Les charges supplétives sont :",
    "choices": [
      "Exclues du calcul des coûts",
      "Identiques aux charges non incorporables",
      "Ajoutées au coût bien que non comptabilisées (ex. rémunération de l'exploitant)",
      "Des charges exceptionnelles et anormales"
    ],
    "answers": [
      2
    ],
    "explanation": "Les charges supplétives (rémunération de l'exploitant, des capitaux propres) sont ajoutées au coût bien que non comptabilisées."
  },
  {
    "id": "qcm3",
    "question": "Les charges non incorporables sont :",
    "choices": [
      "Exclues du calcul des coûts (exceptionnelles, anormales, hors exploitation)",
      "Reprises telles quelles dans le coût",
      "Toujours variables",
      "Toujours fixes"
    ],
    "answers": [
      0
    ],
    "explanation": "Les charges non incorporables (exceptionnelles, anormales) sont exclues du calcul des coûts."
  },
  {
    "id": "qcm4",
    "question": "Une charge directe est :",
    "choices": [
      "Affectée sans ambiguïté à un objet de coût (ex. matière, MOD)",
      "Toujours fixe",
      "Toujours non incorporable",
      "Commune à plusieurs objets et répartie par une clé"
    ],
    "answers": [
      0
    ],
    "explanation": "Une charge directe est affectée sans calcul intermédiaire à un seul objet de coût."
  },
  {
    "id": "qcm5",
    "question": "Une charge indirecte se caractérise par :",
    "choices": [
      "Une répartition entre plusieurs objets via une clé ou une unité d'œuvre",
      "Une affectation directe à un seul objet",
      "Une exclusion systématique du coût",
      "Une proportionnalité au volume"
    ],
    "answers": [
      0
    ],
    "explanation": "La charge indirecte, commune à plusieurs objets, est répartie via des clés ou unités d'œuvre."
  },
  {
    "id": "qcm6",
    "question": "Une charge variable est :",
    "choices": [
      "Proportionnelle au volume (constante à l'unité)",
      "Toujours indirecte",
      "Globalement stable quel que soit le volume",
      "Décroissante à l'unité quand le volume augmente"
    ],
    "answers": [
      0
    ],
    "explanation": "La charge variable est proportionnelle au volume ; elle est constante à l'unité."
  },
  {
    "id": "qcm7",
    "question": "Le coût fixe unitaire, quand le volume augmente :",
    "choices": [
      "Décroît",
      "Reste constant",
      "Devient négatif",
      "Augmente"
    ],
    "answers": [
      0
    ],
    "explanation": "La charge fixe est globalement stable, donc décroissante rapportée à l'unité quand le volume croît."
  },
  {
    "id": "qcm8",
    "question": "Un objet de coût est :",
    "choices": [
      "Une charge indirecte",
      "Uniquement un produit fini",
      "Tout élément dont on veut connaître le coût (produit, service, commande, client, activité)",
      "Une unité d'œuvre"
    ],
    "answers": [
      2
    ],
    "explanation": "L'objet de coût est tout élément (produit, client, commande, projet...) dont on veut connaître le coût."
  },
  {
    "id": "qcm9",
    "question": "Le coût d'achat se compose de :",
    "choices": [
      "Coût de production + charges hors production",
      "Prix de vente − coût de revient",
      "MOD + charges d'atelier",
      "Prix d'achat + frais d'approvisionnement"
    ],
    "answers": [
      3
    ],
    "explanation": "Coût d'achat = prix d'achat + frais d'approvisionnement."
  },
  {
    "id": "qcm10",
    "question": "Le coût de revient se calcule comme :",
    "choices": [
      "Prix de vente + marge",
      "Coût d'achat + frais d'approvisionnement",
      "Coût de production + charges hors production (distribution, administration)",
      "CA − résultat"
    ],
    "answers": [
      2
    ],
    "explanation": "Coût de revient = coût de production + charges hors production."
  },
  {
    "id": "qcm11",
    "question": "Menuiserie Dubois : composants 20 €, MOD 27 €, charges d'atelier 20 €. Le coût de production unitaire est de :",
    "choices": [
      "75 €",
      "90 €",
      "67 €",
      "47 €"
    ],
    "answers": [
      2
    ],
    "explanation": "Coût de production = 20 + 27 + 20 = 67 €."
  },
  {
    "id": "qcm12",
    "question": "Menuiserie Dubois : coût de production 67 €, charges hors production 8 €. Le coût de revient unitaire est de :",
    "choices": [
      "75 €",
      "59 €",
      "67 €",
      "90 €"
    ],
    "answers": [
      0
    ],
    "explanation": "Coût de revient = 67 + 8 = 75 €."
  },
  {
    "id": "qcm13",
    "question": "Menuiserie Dubois : prix de vente 90 €, coût de revient 75 €. Le résultat analytique unitaire est de :",
    "choices": [
      "23 €",
      "15 €",
      "75 €",
      "8 €"
    ],
    "answers": [
      1
    ],
    "explanation": "Résultat unitaire = 90 − 75 = 15 € (soit 75 000 € sur 5 000 produits)."
  },
  {
    "id": "qcm14",
    "question": "Menuiserie Dubois : résultat unitaire 15 €, prix 90 €, coût de revient 75 €. Le taux de marge (sur le coût) est de :",
    "choices": [
      "16,7 %",
      "20 %",
      "83,3 %",
      "25 %"
    ],
    "answers": [
      1
    ],
    "explanation": "Taux de marge = marge / coût = 15 / 75 = 20 %."
  },
  {
    "id": "qcm15",
    "question": "Menuiserie Dubois : résultat unitaire 15 €, CA unitaire 90 €. Le taux de profitabilité est d'environ :",
    "choices": [
      "20 %",
      "25 %",
      "60 %",
      "16,7 %"
    ],
    "answers": [
      3
    ],
    "explanation": "Taux de profitabilité = résultat / CA = 15 / 90 ≈ 16,7 %."
  },
  {
    "id": "qcm16",
    "question": "On distingue trois catégories de charges au regard de leur incorporation :",
    "choices": [
      "Charges supplétives",
      "Charges non incorporables",
      "Charges incorporables",
      "Charges fictives non chiffrables"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Incorporables, non incorporables et supplétives sont les trois catégories au regard de l'incorporation."
  },
  {
    "id": "qcm17",
    "question": "Parmi les quatre fonctions du coût figurent :",
    "choices": [
      "Fixer un prix",
      "Surveiller les salariés",
      "Évaluer (valoriser stocks et production)",
      "Décider (commande, abandon, externalisation)"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Le coût sert à évaluer, fixer un prix, décider et contrôler ; surveiller les salariés n'est pas une fonction du coût."
  },
  {
    "id": "qcm18",
    "question": "Parmi les méthodes de coûts du programme figurent :",
    "choices": [
      "Méthode du prix de marché",
      "Méthode ABC",
      "Coûts partiels",
      "Méthode du coût zéro",
      "Coûts complets"
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "Coûts complets, ABC, coûts partiels et imputation rationnelle sont les méthodes du programme ; le « coût zéro » n'existe pas."
  },
  {
    "id": "qcm19",
    "question": "Parmi les « autres classifications utiles » des charges, on trouve :",
    "choices": [
      "Charges contrôlables / non contrôlables",
      "Charges imaginaires / réelles",
      "Coûts irrécupérables (sunk costs)",
      "Charges pertinentes / non pertinentes"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Pertinentes/non pertinentes, contrôlables/non et sunk costs sont des classifications décisionnelles."
  },
  {
    "id": "qcm20",
    "question": "Le cheminement général des coûts va :",
    "choices": [
      "Selon l'enchaînement achat → production → revient → résultat",
      "Des charges vers les centres / activités",
      "Des centres / activités vers les objets de coûts",
      "Des objets de coûts vers les charges directement"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Charges → centres/activités → objets de coûts, selon l'enchaînement achat → production → revient → résultat."
  },
  {
    "id": "qcm21",
    "question": "Le taux de marge se calcule sur le coût, tandis que le taux de profitabilité se calcule sur le CA.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : taux de marge = marge / coût ; taux de profitabilité = résultat / CA."
  },
  {
    "id": "qcm22",
    "question": "Une même charge ne peut jamais être à la fois directe et fixe.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : les deux axes (directe/indirecte et fixe/variable) sont indépendants ; une charge peut être directe ET fixe."
  },
  {
    "id": "qcm23",
    "question": "Définir clairement l'objet de coût est un préalable indispensable à tout calcul de coût.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : le choix de l'objet dépend de la décision à éclairer et conditionne tout le calcul."
  },
  {
    "id": "qcm24",
    "question": "Un coût irrécupérable (sunk cost) doit être pris en compte dans une décision future.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : les coûts irrécupérables sont à ignorer dans une décision future."
  },
  {
    "id": "qcm25",
    "question": "Le coût élargi (durable) intègre des coûts environnementaux et sociaux au-delà du seul coût comptable.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : le coût complet « durable » intègre cycle de vie et externalités (ESG)."
  }
];
