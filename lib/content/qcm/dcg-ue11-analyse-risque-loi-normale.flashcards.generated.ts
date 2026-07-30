// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Flashcards tirées du QCM : énoncé au recto, justification au verso.
import type { Flashcard } from "../types";

export const flashcards: Flashcard[] = [
  {
    "id": "qcm1",
    "front": "En avenir aléatoire (risqué), une décision se caractérise par :",
    "back": "En avenir risqué, plusieurs résultats sont possibles et probabilisables : on arbitre espérance contre écart-type."
  },
  {
    "id": "qcm2",
    "front": "En avenir incertain (au sens de Knight, 1921) :",
    "back": "En incertitude, les états sont connus mais non probabilisables ; on recourt au jugement et aux scénarios."
  },
  {
    "id": "qcm3",
    "front": "Une variable aléatoire est :",
    "back": "Une variable aléatoire associe à chaque issue une valeur numérique dotée d'une probabilité."
  },
  {
    "id": "qcm4",
    "front": "L'espérance mathématique E(X) se calcule par :",
    "back": "E(X) = Σ xᵢ × P(xᵢ) : moyenne des valeurs pondérée par leurs probabilités."
  },
  {
    "id": "qcm5",
    "front": "La variance V(X) se calcule par :",
    "back": "V(X) = Σ [xᵢ − E(X)]² × P(xᵢ) ; l'écart-type en est la racine carrée."
  },
  {
    "id": "qcm6",
    "front": "La variable centrée réduite associée à la loi normale s'écrit :",
    "back": "T = (X − m) / σ suit la loi normale centrée réduite N(0 ; 1)."
  },
  {
    "id": "qcm7",
    "front": "Pour une demande Q ~ N(20 000 ; 4 000) et un seuil de 15 000 unités, la variable centrée réduite de la borne est :",
    "back": "t = (15 000 − 20 000) / 4 000 = −1,25."
  },
  {
    "id": "qcm8",
    "front": "Q ~ N(20 000 ; 4 000), seuil 15 000. Sachant π(1,25) = 0,8944, la probabilité P(Q ≥ 15 000) vaut :",
    "back": "P(Q ≥ 15 000) = π(1,25) = 0,8944, soit 89,44 % (risque résiduel 10,56 %)."
  },
  {
    "id": "qcm9",
    "front": "Dans l'exemple précédent, le risque résiduel de ne pas atteindre le seuil est de :",
    "back": "Risque = 1 − 0,8944 = 0,1056, soit 10,56 % de scénarios déficitaires."
  },
  {
    "id": "qcm10",
    "front": "La propriété de symétrie de la loi normale centrée réduite s'écrit :",
    "back": "Par symétrie, π(−t) = 1 − π(t) : c'est la première source d'erreur sur le signe."
  },
  {
    "id": "qcm11",
    "front": "Selon la règle « 68 – 95 – 99,7 », l'intervalle [m − σ ; m + σ] contient environ :",
    "back": "Environ 68 % des valeurs se situent dans [m − σ ; m + σ]."
  },
  {
    "id": "qcm12",
    "front": "Soin premium : MCV unitaire 60 €, charges fixes 300 000 €. Le seuil de rentabilité (en unités) est de :",
    "back": "Seuil = 300 000 / 60 = 5 000 unités."
  },
  {
    "id": "qcm13",
    "front": "Soin premium : prix 130 €, coût variable unit. 70 €, CF 300 000 €. À 6 000 unités, le résultat est de :",
    "back": "MCV unitaire = 130 − 70 = 60 € ; Résultat = 60 × 6 000 − 300 000 = 60 000 €."
  },
  {
    "id": "qcm14",
    "front": "Soin premium : demande Q ~ N(6 000 ; 1 000), seuil 5 000. Sachant π(1) = 0,8413, P(Q ≥ 5 000) vaut :",
    "back": "t = (5 000 − 6 000)/1 000 = −1 ; P(Q ≥ 5 000) = π(1) = 84,13 %."
  },
  {
    "id": "qcm15",
    "front": "Soin premium : Q ~ N(6 000 ; 1 000). La probabilité P(5 000 ≤ Q ≤ 7 000) vaut (règle des 68 %) :",
    "back": "P = 2·π(1) − 1 = 2 × 0,8413 − 1 = 0,6826, soit 68,26 %."
  },
  {
    "id": "qcm16",
    "front": "Une élasticité prix croisée positive (e > 0) entre deux biens X et Y indique que ce sont des :",
    "back": "e > 0 : la hausse du prix de Y reporte la demande vers X, donc X et Y sont substituts."
  },
  {
    "id": "qcm17",
    "front": "Quelles sont les propriétés correctes de l'espérance et de la variance ?",
    "back": "E est linéaire ; V(aX+b)=a²V(X) (le terme constant disparaît) ; les variances s'ajoutent si indépendance."
  },
  {
    "id": "qcm18",
    "front": "En univers risqué, la règle de décision indique :",
    "back": "On préfère moins de risque à espérance égale, plus d'espérance à risque égal, sinon arbitrage selon l'aversion."
  },
  {
    "id": "qcm19",
    "front": "Concernant l'intervalle de confiance d'une moyenne (n ≥ 30), on retient :",
    "back": "t=1,96 (95 %), t=2,575 (99 %), correction de σ′ en s ; mais l'IC s'élargit quand la confiance augmente."
  },
  {
    "id": "qcm20",
    "front": "À propos de l'élasticité prix de la demande (e), sont exactes les affirmations :",
    "back": "e = (ΔQ/Q)/(ΔP/P), négative et lue en |e| ; |e|>1 = élastique ; au contraire, |e|<1 (inélastique) : une hausse de prix augmente le CA."
  },
  {
    "id": "qcm21",
    "front": "Le levier opérationnel (LO) :",
    "back": "Le LO = MCV/Résultat = 1/IS amplifie les variations du résultat dans les deux sens ; il accroît le risque, ne le réduit pas."
  },
  {
    "id": "qcm22",
    "front": "L'écart-type d'une somme de deux variables indépendantes est égal à la somme de leurs écarts-types.",
    "back": "Faux : ce sont les variances qui s'ajoutent ; σ(X+Y) = √[V(X)+V(Y)], jamais σ(X)+σ(Y)."
  },
  {
    "id": "qcm23",
    "front": "Si une borne est inférieure à la moyenne m, la probabilité de la dépasser est supérieure à 50 %.",
    "back": "Vrai : c'est une astuce de contrôle ; une probabilité < 50 % signalerait une erreur de signe."
  },
  {
    "id": "qcm24",
    "front": "Au DCG, les tests d'hypothèse ainsi que les lois binomiale et de Poisson font partie du programme.",
    "back": "Faux : tests d'hypothèse et lois binomiale/Poisson sont hors programme DCG ; seule la loi normale est mobilisée."
  },
  {
    "id": "qcm25",
    "front": "Pour une variable continue X, la probabilité P(X = x) est nulle ; on ne raisonne que sur des intervalles.",
    "back": "Vrai : pour une variable continue, P(X = x) = 0 ; on calcule P(a < X < b)."
  },
  {
    "id": "qcm26",
    "front": "Un objectif de résultat est en général plus exigeant que le simple seuil de rentabilité : sa probabilité d'atteinte est plus faible.",
    "back": "Vrai : viser un résultat positif élevé exige plus de volume que le seuil, d'où une probabilité d'atteinte plus faible."
  }
];
