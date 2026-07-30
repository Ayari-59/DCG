// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Banque complète du manuel ; le site joue la sélection `quiz`.
import type { QuizQuestion } from "../types";

export const banque: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Quelle est l'idée centrale des coûts partiels ?",
    "choices": [
      "Ne garder que les charges pertinentes (traçables et contrôlables) et raisonner par marges",
      "Variabiliser les charges fixes",
      "Répartir les charges par activités",
      "Incorporer toutes les charges aux produits"
    ],
    "answers": [
      0
    ],
    "explanation": "Les coûts partiels ne retiennent que les charges pertinentes et raisonnent par marges."
  },
  {
    "id": "qcm2",
    "question": "Comment se calcule la marge sur coût variable (MCV) ?",
    "choices": [
      "CA − charges directes",
      "CA − charges variables",
      "CA − charges fixes",
      "CA − coût complet"
    ],
    "answers": [
      1
    ],
    "explanation": "MCV = chiffre d'affaires − charges variables."
  },
  {
    "id": "qcm3",
    "question": "Comment se calcule le taux de marge sur coût variable ?",
    "choices": [
      "MCV / charges variables",
      "MCV / charges fixes",
      "CA / MCV",
      "MCV / CA"
    ],
    "answers": [
      3
    ],
    "explanation": "Taux de MCV = MCV / CA."
  },
  {
    "id": "qcm4",
    "question": "Comment se calcule la marge sur coût spécifique (MCS) ?",
    "choices": [
      "CA − charges variables",
      "MCV − charges fixes communes",
      "MCV − charges fixes spécifiques",
      "MCV + charges fixes spécifiques"
    ],
    "answers": [
      2
    ],
    "explanation": "MCS = MCV − charges fixes spécifiques = CA − CV − CF spécifiques."
  },
  {
    "id": "qcm5",
    "question": "Comment se calcule le résultat avec la méthode du coût variable ?",
    "choices": [
      "CA − MCV",
      "MCV totale − charges fixes",
      "Charges fixes − MCV totale",
      "MCV totale + charges fixes"
    ],
    "answers": [
      1
    ],
    "explanation": "Résultat = MCV totale − charges fixes (globales)."
  },
  {
    "id": "qcm6",
    "question": "Que retient exclusivement le coût direct ?",
    "choices": [
      "Les charges variables seulement",
      "Les charges directes (variables ou fixes), affectables sans répartition",
      "Toutes les charges",
      "Les charges fixes spécifiques seulement"
    ],
    "answers": [
      1
    ],
    "explanation": "Le coût direct ne retient que les charges directes, qu'elles soient variables ou fixes."
  },
  {
    "id": "qcm7",
    "question": "Le coût spécifique se compose de :",
    "choices": [
      "Charges variables + charges fixes spécifiques",
      "Charges fixes uniquement",
      "Charges variables uniquement",
      "Toutes les charges fixes"
    ],
    "answers": [
      0
    ],
    "explanation": "Le coût spécifique = charges variables + charges fixes spécifiques (un « coût variable évolué »)."
  },
  {
    "id": "qcm8",
    "question": "Comment se calcule un seuil spécifique (en CA) ?",
    "choices": [
      "MCV / CF spécifiques",
      "CF spécifiques × taux de MCV",
      "CF communes / taux de MCV",
      "CF spécifiques / taux de MCV"
    ],
    "answers": [
      3
    ],
    "explanation": "Seuil spécifique = CF spécifiques / taux de MCV."
  },
  {
    "id": "qcm9",
    "question": "CF spécifiques = 40 000 €, taux de MCV = 0,22. Quel est le seuil spécifique ?",
    "choices": [
      "220 000 €",
      "40 000 €",
      "181 818 €",
      "8 800 €"
    ],
    "answers": [
      2
    ],
    "explanation": "40 000 / 0,22 = 181 818 € de CA."
  },
  {
    "id": "qcm10",
    "question": "Une activité affiche MCV = +22 000 € mais MCS = −18 000 €. Que conclure ?",
    "choices": [
      "Elle contribue aux charges communes (MCV>0) mais alerte sur ses charges propres (MCS<0)",
      "Elle est totalement saine",
      "L'abandonner immédiatement sur le coût complet",
      "Elle doit être maintenue sans condition"
    ],
    "answers": [
      0
    ],
    "explanation": "MCV positive = contribution aux communes ; MCS négative = alerte sur les charges spécifiques."
  },
  {
    "id": "qcm11",
    "question": "Sur quel critère ne faut-il jamais décider seul d'un abandon d'activité ?",
    "choices": [
      "La MCS",
      "La MCV",
      "Le seuil spécifique",
      "Le coût complet"
    ],
    "answers": [
      3
    ],
    "explanation": "Un produit déficitaire en coût complet ne s'abandonne jamais sur ce seul critère (faux signal)."
  },
  {
    "id": "qcm12",
    "question": "Quel coût fixe le prix plancher d'une commande exceptionnelle de court terme ?",
    "choices": [
      "Le coût complet",
      "Le coût spécifique",
      "Le coût d'achat",
      "Le coût marginal"
    ],
    "answers": [
      3
    ],
    "explanation": "Le coût marginal — et non le coût complet — fixe le prix minimal acceptable."
  },
  {
    "id": "qcm13",
    "question": "Pour une décision de produire ou sous-traiter (make or buy), que compare-t-on ?",
    "choices": [
      "La MCS interne à la MCV externe",
      "Le coût variable interne évité au prix du sous-traitant",
      "Le coût complet interne au prix du sous-traitant",
      "Le CA au prix du sous-traitant"
    ],
    "answers": [
      1
    ],
    "explanation": "On compare le coût variable interne évité au prix du sous-traitant ; les CF qui subsistent sont exclues."
  },
  {
    "id": "qcm14",
    "question": "À ressources limitées, quel produit privilégier dans le mix ?",
    "choices": [
      "Celui au plus fort prix de vente",
      "Celui au plus faible taux de MCV",
      "Celui au coût complet le plus bas",
      "Celui à la plus forte MCV (ou taux de MCV)"
    ],
    "answers": [
      3
    ],
    "explanation": "On privilégie les produits à plus forte MCV : ils couvrent le mieux les charges fixes."
  },
  {
    "id": "qcm15",
    "question": "À quoi correspond le « direct costing » anglo-saxon ?",
    "choices": [
      "À notre coût direct",
      "À notre méthode du coût variable",
      "À notre coût spécifique",
      "Au coût complet"
    ],
    "answers": [
      1
    ],
    "explanation": "Le direct costing correspond en réalité à notre méthode du coût variable."
  },
  {
    "id": "qcm16",
    "question": "Quelles notions figurent parmi les coûts partiels du chapitre ?",
    "choices": [
      "Coût d'opportunité",
      "Coût direct",
      "Coût spécifique",
      "Coût variable"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Coût direct, coût variable et coût spécifique sont des coûts partiels (avec le coût marginal) ; le coût d'opportunité n'en fait pas partie."
  },
  {
    "id": "qcm17",
    "question": "Quelles formules sont correctes ?",
    "choices": [
      "MCV unitaire = PV − CV unitaire",
      "MCS = MCV − CF spécifiques",
      "Résultat = MCV totale + charges fixes",
      "MCV = CA − charges variables",
      "MCS = CA − charges fixes communes"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Les trois premières sont exactes ; le résultat = MCV − CF, et la MCS retire les CF spécifiques."
  },
  {
    "id": "qcm18",
    "question": "Quelles affirmations sur l'abandon d'une activité sont correctes ?",
    "choices": [
      "MCV positive → l'activité contribue aux charges communes : la garder",
      "Un produit déficitaire en coût complet doit être abandonné",
      "La MCV négative justifie toujours le maintien",
      "L'abandon n'est pertinent que si les CF spécifiques sont réellement évitables",
      "MCS négative → signal d'alerte"
    ],
    "answers": [
      0,
      3,
      4
    ],
    "explanation": "On garde si MCV>0, on s'alerte si MCS<0, et l'abandon suppose des CF spécifiques évitables."
  },
  {
    "id": "qcm19",
    "question": "Quels sont des apports des coûts partiels ?",
    "choices": [
      "Facilitent simulations et prévisions",
      "Évitent l'arbitraire des répartitions",
      "Permettent de fixer un prix de vente durable",
      "Simples et rapides à mettre en œuvre"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Les coûts partiels ne fixent pas un prix durable ; les trois autres propositions sont des apports."
  },
  {
    "id": "qcm20",
    "question": "Quelles sont des limites des coûts partiels ?",
    "choices": [
      "Vision de court terme",
      "Sous-évaluation des stocks au bilan",
      "Suppression de tout arbitraire à long terme",
      "Hypothèse de proportionnalité au seul volume"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Proportionnalité au volume, sous-évaluation des stocks et court-termisme sont des limites ; l'arbitraire n'est pas supprimé."
  },
  {
    "id": "qcm21",
    "question": "Quelles propositions sur la commande exceptionnelle sont exactes ?",
    "choices": [
      "Comparer la recette marginale au coût marginal",
      "Réserve : un marché distinct et ponctuel",
      "Acceptable dès qu'elle dégage une marge positive",
      "Refuser toute commande sous le coût complet",
      "La recalculer entièrement en coût complet"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "On raisonne à la marge : marge positive suffit, à condition d'un marché distinct et ponctuel."
  },
  {
    "id": "qcm22",
    "question": "Les charges fixes communes ne sont pas réparties, ce qui évite le subventionnement croisé.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : laisser les CF communes en masse non répartie évite le subventionnement croisé."
  },
  {
    "id": "qcm23",
    "question": "Le coût direct et le coût variable désignent exactement la même chose.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : le coût direct retient les charges directes (y compris fixes), le coût variable retient les variables (y compris indirectes)."
  },
  {
    "id": "qcm24",
    "question": "Le compte de résultat par coût variable et celui par coûts spécifiques donnent le même résultat global.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : les deux comptes donnent le même résultat global mais répondent à des questions différentes."
  },
  {
    "id": "qcm25",
    "question": "Une activité à MCS négative doit obligatoirement être abandonnée, sans autre considération.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : elle peut être maintenue (raisons sociales, environnementales, charges non évitables) ; la marge éclaire sans dicter."
  }
];

/** Sélection jouée sur le site — voir docs/selection-qcm.md. */
const SELECTION = [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24];

export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);
