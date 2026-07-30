// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Banque complète du manuel ; le site joue la sélection `quiz`.
import type { QuizQuestion } from "../types";

export const banque: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "En avenir aléatoire (risqué), une décision se caractérise par :",
    "choices": [
      "L'absence de tout résultat mesurable",
      "Des états futurs non probabilisables",
      "Plusieurs résultats possibles, chacun probabilisable",
      "Une seule conséquence certaine"
    ],
    "answers": [
      2
    ],
    "explanation": "En avenir risqué, plusieurs résultats sont possibles et probabilisables : on arbitre espérance contre écart-type."
  },
  {
    "id": "qcm2",
    "question": "En avenir incertain (au sens de Knight, 1921) :",
    "choices": [
      "Le résultat est toujours nul",
      "Les états futurs sont connus mais non probabilisables",
      "Une seule issue est certaine",
      "Toutes les probabilités sont connues"
    ],
    "answers": [
      1
    ],
    "explanation": "En incertitude, les états sont connus mais non probabilisables ; on recourt au jugement et aux scénarios."
  },
  {
    "id": "qcm3",
    "question": "Une variable aléatoire est :",
    "choices": [
      "Une constante numérique",
      "Une application associant à chaque résultat possible une valeur numérique affectée d'une probabilité",
      "Une moyenne arithmétique simple",
      "Un écart-type"
    ],
    "answers": [
      1
    ],
    "explanation": "Une variable aléatoire associe à chaque issue une valeur numérique dotée d'une probabilité."
  },
  {
    "id": "qcm4",
    "question": "L'espérance mathématique E(X) se calcule par :",
    "choices": [
      "Σ xᵢ × P(xᵢ)",
      "Σ [xᵢ − E(X)]² × P(xᵢ)",
      "σ / E",
      "√V(X)"
    ],
    "answers": [
      0
    ],
    "explanation": "E(X) = Σ xᵢ × P(xᵢ) : moyenne des valeurs pondérée par leurs probabilités."
  },
  {
    "id": "qcm5",
    "question": "La variance V(X) se calcule par :",
    "choices": [
      "Σ [xᵢ − E(X)]² × P(xᵢ)",
      "Σ P(xᵢ)",
      "Σ xᵢ × P(xᵢ)",
      "E(X) / σ"
    ],
    "answers": [
      0
    ],
    "explanation": "V(X) = Σ [xᵢ − E(X)]² × P(xᵢ) ; l'écart-type en est la racine carrée."
  },
  {
    "id": "qcm6",
    "question": "La variable centrée réduite associée à la loi normale s'écrit :",
    "choices": [
      "T = (X − m) × σ",
      "T = (X − m) / σ",
      "T = X × m",
      "T = σ / (X − m)"
    ],
    "answers": [
      1
    ],
    "explanation": "T = (X − m) / σ suit la loi normale centrée réduite N(0 ; 1)."
  },
  {
    "id": "qcm7",
    "question": "Pour une demande Q ~ N(20 000 ; 4 000) et un seuil de 15 000 unités, la variable centrée réduite de la borne est :",
    "choices": [
      "t = +1,25",
      "t = −1,25",
      "t = +0,80",
      "t = −0,80"
    ],
    "answers": [
      1
    ],
    "explanation": "t = (15 000 − 20 000) / 4 000 = −1,25."
  },
  {
    "id": "qcm8",
    "question": "Q ~ N(20 000 ; 4 000), seuil 15 000. Sachant π(1,25) = 0,8944, la probabilité P(Q ≥ 15 000) vaut :",
    "choices": [
      "50 %",
      "10,56 %",
      "12,5 %",
      "89,44 %"
    ],
    "answers": [
      3
    ],
    "explanation": "P(Q ≥ 15 000) = π(1,25) = 0,8944, soit 89,44 % (risque résiduel 10,56 %)."
  },
  {
    "id": "qcm9",
    "question": "Dans l'exemple précédent, le risque résiduel de ne pas atteindre le seuil est de :",
    "choices": [
      "0 %",
      "50 %",
      "89,44 %",
      "10,56 %"
    ],
    "answers": [
      3
    ],
    "explanation": "Risque = 1 − 0,8944 = 0,1056, soit 10,56 % de scénarios déficitaires."
  },
  {
    "id": "qcm10",
    "question": "La propriété de symétrie de la loi normale centrée réduite s'écrit :",
    "choices": [
      "π(−t) = 1 + π(t)",
      "π(t) = t / σ",
      "π(−t) = π(t)",
      "π(−t) = 1 − π(t)"
    ],
    "answers": [
      3
    ],
    "explanation": "Par symétrie, π(−t) = 1 − π(t) : c'est la première source d'erreur sur le signe."
  },
  {
    "id": "qcm11",
    "question": "Selon la règle « 68 – 95 – 99,7 », l'intervalle [m − σ ; m + σ] contient environ :",
    "choices": [
      "99,7 % des valeurs",
      "95 % des valeurs",
      "50 % des valeurs",
      "68 % des valeurs"
    ],
    "answers": [
      3
    ],
    "explanation": "Environ 68 % des valeurs se situent dans [m − σ ; m + σ]."
  },
  {
    "id": "qcm12",
    "question": "Soin premium : MCV unitaire 60 €, charges fixes 300 000 €. Le seuil de rentabilité (en unités) est de :",
    "choices": [
      "5 000 u",
      "6 000 u",
      "4 615 u",
      "3 000 u"
    ],
    "answers": [
      0
    ],
    "explanation": "Seuil = 300 000 / 60 = 5 000 unités."
  },
  {
    "id": "qcm13",
    "question": "Soin premium : prix 130 €, coût variable unit. 70 €, CF 300 000 €. À 6 000 unités, le résultat est de :",
    "choices": [
      "30 000 €",
      "360 000 €",
      "0 €",
      "60 000 €"
    ],
    "answers": [
      3
    ],
    "explanation": "MCV unitaire = 130 − 70 = 60 € ; Résultat = 60 × 6 000 − 300 000 = 60 000 €."
  },
  {
    "id": "qcm14",
    "question": "Soin premium : demande Q ~ N(6 000 ; 1 000), seuil 5 000. Sachant π(1) = 0,8413, P(Q ≥ 5 000) vaut :",
    "choices": [
      "15,87 %",
      "68,26 %",
      "84,13 %",
      "50 %"
    ],
    "answers": [
      2
    ],
    "explanation": "t = (5 000 − 6 000)/1 000 = −1 ; P(Q ≥ 5 000) = π(1) = 84,13 %."
  },
  {
    "id": "qcm15",
    "question": "Soin premium : Q ~ N(6 000 ; 1 000). La probabilité P(5 000 ≤ Q ≤ 7 000) vaut (règle des 68 %) :",
    "choices": [
      "95 %",
      "34,13 %",
      "84,13 %",
      "68,26 %"
    ],
    "answers": [
      3
    ],
    "explanation": "P = 2·π(1) − 1 = 2 × 0,8413 − 1 = 0,6826, soit 68,26 %."
  },
  {
    "id": "qcm16",
    "question": "Une élasticité prix croisée positive (e > 0) entre deux biens X et Y indique que ce sont des :",
    "choices": [
      "Substituts",
      "Compléments",
      "Biens indépendants",
      "Biens inférieurs"
    ],
    "answers": [
      0
    ],
    "explanation": "e > 0 : la hausse du prix de Y reporte la demande vers X, donc X et Y sont substituts."
  },
  {
    "id": "qcm17",
    "question": "Quelles sont les propriétés correctes de l'espérance et de la variance ?",
    "choices": [
      "V(aX + b) = a·V(X) + b",
      "Si X et Y sont indépendantes, V(X + Y) = V(X) + V(Y)",
      "E(aX + b) = a·E(X) + b",
      "V(aX + b) = a²·V(X)"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "E est linéaire ; V(aX+b)=a²V(X) (le terme constant disparaît) ; les variances s'ajoutent si indépendance."
  },
  {
    "id": "qcm18",
    "question": "En univers risqué, la règle de décision indique :",
    "choices": [
      "À écart-type égal, choisir la plus forte espérance",
      "À espérance égale, choisir le plus faible écart-type",
      "Si les deux varient en sens contraire, arbitrer selon l'aversion au risque",
      "À espérance égale, choisir le plus fort écart-type"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "On préfère moins de risque à espérance égale, plus d'espérance à risque égal, sinon arbitrage selon l'aversion."
  },
  {
    "id": "qcm19",
    "question": "Concernant l'intervalle de confiance d'une moyenne (n ≥ 30), on retient :",
    "choices": [
      "t = 2,575 pour un niveau de confiance de 99 %",
      "t = 1,96 pour un niveau de confiance de 95 %",
      "Il faut corriger σ′ de l'échantillon en s avant de calculer l'IC",
      "Plus la confiance augmente, plus l'intervalle se rétrécit"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "t=1,96 (95 %), t=2,575 (99 %), correction de σ′ en s ; mais l'IC s'élargit quand la confiance augmente."
  },
  {
    "id": "qcm20",
    "question": "À propos de l'élasticité prix de la demande (e), sont exactes les affirmations :",
    "choices": [
      "|e| < 1 signifie qu'une hausse de prix réduit toujours fortement le CA",
      "|e| > 1 traduit une demande élastique",
      "Elle est généralement négative, lue en valeur absolue",
      "e = (ΔQ/Q) / (ΔP/P)"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "e = (ΔQ/Q)/(ΔP/P), négative et lue en |e| ; |e|>1 = élastique ; au contraire, |e|<1 (inélastique) : une hausse de prix augmente le CA."
  },
  {
    "id": "qcm21",
    "question": "Le levier opérationnel (LO) :",
    "choices": [
      "Mesure l'élasticité du résultat au CA",
      "Est égal à MCV / Résultat (soit 1 / IS)",
      "Réduit toujours le risque d'exploitation",
      "Amplifie les variations du résultat, à la hausse comme à la baisse"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Le LO = MCV/Résultat = 1/IS amplifie les variations du résultat dans les deux sens ; il accroît le risque, ne le réduit pas."
  },
  {
    "id": "qcm22",
    "question": "L'écart-type d'une somme de deux variables indépendantes est égal à la somme de leurs écarts-types.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : ce sont les variances qui s'ajoutent ; σ(X+Y) = √[V(X)+V(Y)], jamais σ(X)+σ(Y)."
  },
  {
    "id": "qcm23",
    "question": "Si une borne est inférieure à la moyenne m, la probabilité de la dépasser est supérieure à 50 %.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : c'est une astuce de contrôle ; une probabilité < 50 % signalerait une erreur de signe."
  },
  {
    "id": "qcm24",
    "question": "Au DCG, les tests d'hypothèse ainsi que les lois binomiale et de Poisson font partie du programme.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : tests d'hypothèse et lois binomiale/Poisson sont hors programme DCG ; seule la loi normale est mobilisée."
  },
  {
    "id": "qcm25",
    "question": "Pour une variable continue X, la probabilité P(X = x) est nulle ; on ne raisonne que sur des intervalles.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : pour une variable continue, P(X = x) = 0 ; on calcule P(a < X < b)."
  },
  {
    "id": "qcm26",
    "question": "Un objectif de résultat est en général plus exigeant que le simple seuil de rentabilité : sa probabilité d'atteinte est plus faible.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : viser un résultat positif élevé exige plus de volume que le seuil, d'où une probabilité d'atteinte plus faible."
  }
];

/** Sélection jouée sur le site — voir docs/selection-qcm.md. */
const SELECTION = [0, 1, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 24, 25];

export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);
