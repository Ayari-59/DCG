// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Banque complète du manuel ; le site joue la sélection `quiz`.
import type { QuizQuestion } from "../types";

export const banque: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Selon la norme ISO, qu'est-ce que la qualité ?",
    "choices": [
      "Le respect strict des délais",
      "La caractéristique la plus chère d'un produit",
      "L'absence totale de tout défaut",
      "L'aptitude d'un ensemble de caractéristiques à satisfaire des besoins ou attentes"
    ],
    "answers": [
      3
    ],
    "explanation": "La qualité (ISO) est l'aptitude de caractéristiques à satisfaire des besoins ou attentes, exprimés ou implicites."
  },
  {
    "id": "qcm2",
    "question": "Quel est l'objectif visé par le management de la qualité ?",
    "choices": [
      "La suppression de tout contrôle",
      "La qualité maximale",
      "La qualité optimale (satisfaire au meilleur coût)",
      "La qualité minimale acceptable"
    ],
    "answers": [
      2
    ],
    "explanation": "L'objectif est la qualité optimale (satisfaire au meilleur coût), non la qualité maximale qui engendre de la surqualité."
  },
  {
    "id": "qcm3",
    "question": "Quelles catégories composent les coûts de conformité ?",
    "choices": [
      "Défaillance interne + défaillance externe",
      "Évaluation + défaillance externe",
      "Prévention + évaluation",
      "Prévention + défaillance interne"
    ],
    "answers": [
      2
    ],
    "explanation": "Les coûts de conformité = coûts de prévention + coûts d'évaluation."
  },
  {
    "id": "qcm4",
    "question": "Quelles catégories composent les coûts de non-conformité ?",
    "choices": [
      "Évaluation + défaillance interne",
      "Défaillances internes + défaillances externes",
      "Prévention + défaillance externe",
      "Prévention + évaluation"
    ],
    "answers": [
      1
    ],
    "explanation": "Les coûts de non-conformité = défaillances internes + défaillances externes."
  },
  {
    "id": "qcm5",
    "question": "Comment calcule-t-on le coût d'obtention de la qualité (COQ) ?",
    "choices": [
      "Prévention - évaluation",
      "Conformité - non-conformité",
      "Défaillances internes - défaillances externes",
      "Coûts de conformité + coûts de non-conformité"
    ],
    "answers": [
      3
    ],
    "explanation": "COQ = coûts de conformité (prévention + évaluation) + coûts de non-conformité (défaillances internes + externes)."
  },
  {
    "id": "qcm6",
    "question": "Où se situe l'optimum économique de la qualité Q* ?",
    "choices": [
      "Au minimum du coût total de la qualité",
      "Au maximum de la qualité",
      "Au maximum des coûts de prévention",
      "Au point où la non-conformité est nulle"
    ],
    "answers": [
      0
    ],
    "explanation": "L'optimum Q* est le minimum du coût global de la qualité : c'est la qualité optimale, non maximale."
  },
  {
    "id": "qcm7",
    "question": "Une entreprise présente : prévention 55, évaluation 53, défaillance interne 83, défaillance externe 99 (en k€). Quel est le total des coûts de non-conformité ?",
    "choices": [
      "108 k€",
      "182 k€",
      "290 k€",
      "152 k€"
    ],
    "answers": [
      1
    ],
    "explanation": "Non-conformité = défaillances internes + externes = 83 + 99 = 182 k€."
  },
  {
    "id": "qcm8",
    "question": "Avec prévention 55, évaluation 53, défaillance interne 83, défaillance externe 99 (k€), quel est le COQ total ?",
    "choices": [
      "290 k€",
      "182 k€",
      "238 k€",
      "108 k€"
    ],
    "answers": [
      0
    ],
    "explanation": "COQ = 55 + 53 + 83 + 99 = 290 k€."
  },
  {
    "id": "qcm9",
    "question": "Avec un COQ de 290 k€ et 108 k€ de conformité, quelle est la part des coûts de non-conformité ?",
    "choices": [
      "19 %",
      "37,2 %",
      "62,8 %",
      "50 %"
    ],
    "answers": [
      2
    ],
    "explanation": "Non-conformité = 290 - 108 = 182 k€, soit 182/290 ≈ 62,8 % du COQ."
  },
  {
    "id": "qcm10",
    "question": "Quelle défaillance est considérée comme la plus dangereuse ?",
    "choices": [
      "La défaillance externe (après livraison)",
      "Le coût de prévention",
      "Le coût d'évaluation",
      "La défaillance interne"
    ],
    "answers": [
      0
    ],
    "explanation": "La défaillance externe (garanties, SAV, litiges, image) est la plus dangereuse car elle atteint le client."
  },
  {
    "id": "qcm11",
    "question": "Que dit la loi de Pareto (loi des 20/80) ?",
    "choices": [
      "Environ 20 % des causes produisent environ 80 % des effets",
      "80 % des coûts sont en conception",
      "Le défaut coûte 100 fois plus en aval",
      "20 % des produits coûtent 80 % du prix"
    ],
    "answers": [
      0
    ],
    "explanation": "Selon Pareto, un petit nombre de causes (~20 %) produit la majorité des effets (~80 %)."
  },
  {
    "id": "qcm12",
    "question": "Quelles sont les quatre étapes de la roue de Deming ?",
    "choices": [
      "Prévention, Évaluation, Défaillance, Conformité",
      "Plan, Do, Check, Act",
      "Matière, Matériel, Méthode, Milieu",
      "Objectifs, Variables, Actions, Résultats"
    ],
    "answers": [
      1
    ],
    "explanation": "Le cycle PDCA : Plan (planifier), Do (réaliser), Check (vérifier), Act (corriger et standardiser)."
  },
  {
    "id": "qcm13",
    "question": "Le diagramme d'Ishikawa classe les causes selon les « 5 M ». Lesquels ?",
    "choices": [
      "Matière, Marge, Marché, Milieu, Mesure",
      "Marché, Marge, Méthode, Milieu, Management",
      "Matière, Matériel, Méthode, Main-d'œuvre, Milieu",
      "Mesure, Moyens, Marge, Méthode, Marché"
    ],
    "answers": [
      2
    ],
    "explanation": "Les 5 M : Matière, Matériel, Méthode, Main-d'œuvre, Milieu (parfois un 6e M : Management)."
  },
  {
    "id": "qcm14",
    "question": "Pour un échantillon de montage avec n = 36, x̄ = 18,5 min et σ' = 3,6 min, l'écart type corrigé s vaut environ :",
    "choices": [
      "3,6 min",
      "6 min",
      "3,65 min",
      "3,5 min"
    ],
    "answers": [
      2
    ],
    "explanation": "s = √(n/(n-1)) × σ' = √(36/35) × 3,6 ≈ 3,65 min."
  },
  {
    "id": "qcm15",
    "question": "Avec s ≈ 3,65 min, n = 36 et x̄ = 18,5 min, quel est l'intervalle de confiance à 95 % de la moyenne ?",
    "choices": [
      "[18 ; 19] min",
      "[16 ; 21] min",
      "[15 ; 22] min",
      "[17,3 ; 19,7] min"
    ],
    "answers": [
      3
    ],
    "explanation": "IC95% = [x̄ ± 1,96 × s/√n] = [18,5 ± 1,96 × 3,65/6] ≈ [17,3 ; 19,7] min."
  },
  {
    "id": "qcm16",
    "question": "Parmi les propositions, lesquelles sont des catégories de coûts de la qualité ?",
    "choices": [
      "Coûts financiers d'emprunt",
      "Coûts de prévention",
      "Coûts de certification volontaire",
      "Coûts de défaillance externe"
    ],
    "answers": [
      1,
      3
    ],
    "explanation": "La prévention et la défaillance externe sont deux des quatre catégories ; la certification et les coûts financiers n'en sont pas."
  },
  {
    "id": "qcm17",
    "question": "Parmi les propositions, lesquelles sont des étapes de l'évolution du management de la qualité ?",
    "choices": [
      "La qualité maximale obligatoire",
      "La qualité totale (TQM)",
      "Le contrôle final",
      "La qualité aléatoire"
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Le contrôle final et la qualité totale (TQM) sont des étapes de l'évolution ; la qualité aléatoire et la qualité maximale obligatoire sont inventées."
  },
  {
    "id": "qcm18",
    "question": "Pourquoi les coûts cachés (Savall - ISÉOR) sont-ils « cachés » ?",
    "choices": [
      "Ils sont toujours nuls",
      "Ils sont sans dénomination comptable propre",
      "Ils sont transversaux à plusieurs services",
      "Ils sont différés dans le temps"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Les coûts cachés sont transversaux, différés et sans dénomination comptable propre, donc invisibles aux SI classiques."
  },
  {
    "id": "qcm19",
    "question": "Quelles valeurs de t correspondent à quels niveaux de confiance ?",
    "choices": [
      "t = 1,96 pour 95 %",
      "t = 2,575 pour 99 %",
      "t = 3 pour 95 %",
      "t = 1,96 pour 99 %"
    ],
    "answers": [
      0,
      1
    ],
    "explanation": "t = 1,96 pour un IC à 95 % et t = 2,575 pour un IC à 99 %."
  },
  {
    "id": "qcm20",
    "question": "Quelles sont des limites des démarches qualité ?",
    "choices": [
      "La surqualité",
      "La réduction systématique de la valeur perçue",
      "Les effets pervers des indicateurs",
      "La bureaucratie qualité"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Les limites : surqualité, bureaucratie qualité, effets pervers des indicateurs et limites des outils (Pareto, Ishikawa, certification)."
  },
  {
    "id": "qcm21",
    "question": "Quels apports le contrôle de gestion offre-t-il à la démarche qualité ?",
    "choices": [
      "Supprimer tout contrôle final",
      "Éclairer les arbitrages prévention/défaillance",
      "Rendre visibles les coûts cachés de la non-qualité",
      "Instrumenter le pilotage (indicateurs, tableaux de bord)"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Le contrôle de gestion rend visibles les coûts cachés, instrumente le pilotage et éclaire les arbitrages."
  },
  {
    "id": "qcm22",
    "question": "« La qualité ne coûte pas cher, c'est la non-qualité qui coûte cher. »",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : c'est le point examen clé ; investir en prévention coûte moins cher que subir les défaillances."
  },
  {
    "id": "qcm23",
    "question": "Au programme DCG réformé, l'intervalle de confiance concerne aussi bien la moyenne que la proportion.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : l'IC ne concerne QUE la moyenne ; pour une proportion, seule l'estimation ponctuelle p ≈ f est au programme."
  },
  {
    "id": "qcm24",
    "question": "Le diagramme de Pareto indique où agir mais pas pourquoi : il se complète par Ishikawa.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : Pareto hiérarchise les priorités (où) ; Ishikawa identifie les causes profondes (pourquoi)."
  },
  {
    "id": "qcm25",
    "question": "Les cercles de qualité disposent d'un véritable pouvoir de décision.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : les cercles de qualité n'ont aucun pouvoir de décision et connaissent un essoufflement fréquent."
  },
  {
    "id": "qcm26",
    "question": "La défaillance externe est moins coûteuse que la défaillance interne car elle survient plus tard.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : la défaillance externe est la plus coûteuse car elle atteint le client et l'image (règle du 1-10-100)."
  }
];

/** Sélection jouée sur le site — voir docs/selection-qcm.md. */
const SELECTION = [0, 1, 3, 4, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 22, 24, 25];

export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);
