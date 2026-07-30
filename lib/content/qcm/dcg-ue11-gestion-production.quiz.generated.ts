// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Banque complète du manuel ; le site joue la sélection `quiz`.
import type { QuizQuestion } from "../types";

export const banque: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "L'équation du programme de production s'écrit :",
    "choices": [
      "Production = Ventes + Stock initial - Stock final",
      "Production = Ventes - Stock final + Stock initial",
      "Production = Ventes prévues + Stock final souhaité - Stock initial",
      "Production = Ventes × coefficient saisonnier"
    ],
    "answers": [
      2
    ],
    "explanation": "Production = Ventes prévues + Stock final souhaité - Stock initial."
  },
  {
    "id": "qcm2",
    "question": "Dans une entreprise multiproduit, l'enjeu supplémentaire par rapport au monoproduit est :",
    "choices": [
      "D'éliminer les stocks",
      "D'organiser la production dans le temps uniquement",
      "De supprimer toute contrainte de capacité",
      "De choisir la combinaison productive optimale"
    ],
    "answers": [
      3
    ],
    "explanation": "Le multiproduit ajoute le choix de la combinaison optimale de produits sous ressources limitées."
  },
  {
    "id": "qcm3",
    "question": "En programmation linéaire, quelle grandeur maximise-t-on généralement ?",
    "choices": [
      "Le chiffre d'affaires",
      "Le stock final",
      "Le coût total",
      "La marge sur coût variable (MCV)"
    ],
    "answers": [
      3
    ],
    "explanation": "On maximise la MCV, non le CA (erreur classique), car les charges fixes ne dépendent pas du programme."
  },
  {
    "id": "qcm4",
    "question": "Programme ALPHA SPORT : Max F = 260x + 200y ; 6x+5y ≤ 900 et 6x+3y ≤ 720. La résolution au sommet optimal donne :",
    "choices": [
      "x = 60 ; y = 100",
      "x = 75 ; y = 90",
      "x = 100 ; y = 60",
      "x = 90 ; y = 75"
    ],
    "answers": [
      1
    ],
    "explanation": "6x+5y=900 et 6x+3y=720 -> 2y=180 -> y=90 ; x=75."
  },
  {
    "id": "qcm5",
    "question": "Avec x = 75 (marge 260 €) et y = 90 (marge 200 €), la marge totale F vaut :",
    "choices": [
      "19 500 €",
      "37 500 €",
      "39 000 €",
      "35 000 €"
    ],
    "answers": [
      1
    ],
    "explanation": "F = 75×260 + 90×200 = 19 500 + 18 000 = 37 500 €."
  },
  {
    "id": "qcm6",
    "question": "Une contrainte qui n'est pas atteinte à l'optimum (par ex. x+y ≥ 80 ici non saturante) est dite :",
    "choices": [
      "Critique",
      "Active",
      "Superflue (non saturante)",
      "Saturée"
    ],
    "answers": [
      2
    ],
    "explanation": "Une contrainte non saturée à l'optimum est superflue (non saturante)."
  },
  {
    "id": "qcm7",
    "question": "En présence d'un seul facteur rare, comment classe-t-on les produits ?",
    "choices": [
      "Par marge par unité de facteur rare décroissante",
      "Par marge sur coût variable unitaire décroissante",
      "Par consommation de facteur croissante",
      "Par chiffre d'affaires décroissant"
    ],
    "answers": [
      0
    ],
    "explanation": "On classe par marge / unité de facteur rare, puis on sature en commençant par le plus rentable."
  },
  {
    "id": "qcm8",
    "question": "La marge par unité de facteur rare se calcule par :",
    "choices": [
      "MCV unitaire / consommation du facteur",
      "Consommation du facteur / MCV unitaire",
      "MCV unitaire × consommation du facteur",
      "CA unitaire / marge"
    ],
    "answers": [
      0
    ],
    "explanation": "Marge / facteur rare = MCV unitaire / consommation du facteur rare."
  },
  {
    "id": "qcm9",
    "question": "Atelier 8 500 uo ; produits A (2 uo, marge 100 €), B (4 uo, marge 300 €), C (6 uo, marge 360 €). Le classement par marge/uo donne en premier :",
    "choices": [
      "C",
      "Indifférent",
      "A",
      "B"
    ],
    "answers": [
      3
    ],
    "explanation": "Marge/uo : A=50, B=75, C=60 ; B est donc le plus rentable par unité de facteur rare."
  },
  {
    "id": "qcm10",
    "question": "Dans la méthode MPM, la date au plus tôt d'une tâche s'obtient :",
    "choices": [
      "De droite à gauche, par le chemin le plus long",
      "De droite à gauche, par le chemin le plus court",
      "Par la moyenne des durées",
      "De gauche à droite, par le chemin le plus long"
    ],
    "answers": [
      3
    ],
    "explanation": "Les dates au plus tôt se calculent de gauche à droite ; à une convergence on retient le maximum (chemin le plus long)."
  },
  {
    "id": "qcm11",
    "question": "La marge totale d'une tâche se calcule par :",
    "choices": [
      "Date au plus tôt - date au plus tard",
      "Date au plus tard - date au plus tôt",
      "Durée - date au plus tôt",
      "Date plus tôt suivante - durée"
    ],
    "answers": [
      1
    ],
    "explanation": "Marge totale = date au plus tard - date au plus tôt."
  },
  {
    "id": "qcm12",
    "question": "Le chemin critique est constitué des tâches dont :",
    "choices": [
      "La marge totale est maximale",
      "La durée est la plus courte",
      "La marge totale est nulle",
      "La marge libre est supérieure à la marge totale"
    ],
    "answers": [
      2
    ],
    "explanation": "Le chemin critique relie les tâches à marge nulle (MT = ML = 0)."
  },
  {
    "id": "qcm13",
    "question": "À une convergence, les chemins valent 16 et 19 semaines pour les dates au plus tôt. On retient :",
    "choices": [
      "35",
      "16",
      "17,5",
      "19"
    ],
    "answers": [
      3
    ],
    "explanation": "À une convergence, la date au plus tôt est le maximum des chemins entrants, soit 19."
  },
  {
    "id": "qcm14",
    "question": "Tâche J : date au plus tard 15, date au plus tôt 12. Sa marge totale vaut :",
    "choices": [
      "27",
      "0",
      "3",
      "12"
    ],
    "answers": [
      2
    ],
    "explanation": "MT = 15 - 12 = 3 semaines."
  },
  {
    "id": "qcm15",
    "question": "Quel indicateur correspond au produit disponibilité × performance × qualité ?",
    "choices": [
      "Le taux d'utilisation des capacités",
      "Le TRS (taux de rendement synthétique)",
      "Le taux de service",
      "Le taux de rebut"
    ],
    "answers": [
      1
    ],
    "explanation": "Le TRS = disponibilité × performance × qualité."
  },
  {
    "id": "qcm16",
    "question": "Parmi ces propositions, lesquelles sont des contraintes pesant sur la production ?",
    "choices": [
      "Le coefficient de corrélation",
      "Commerciales (demande maximale, délais)",
      "Techniques (nomenclatures, gammes)",
      "Capacités (heures-machine, heures de MOD)"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Capacités, techniques et commerciales sont des contraintes de production ; le coefficient de corrélation n'en est pas une."
  },
  {
    "id": "qcm17",
    "question": "Quelles affirmations sur la méthode graphique en programmation linéaire sont exactes ?",
    "choices": [
      "On maximise la MCV",
      "Elle s'applique à 2 produits",
      "L'optimum se situe toujours sur un sommet du polygone",
      "On maximise toujours le CA"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Méthode graphique pour 2 produits, maximisation de la MCV, optimum sur un sommet ; pas le CA."
  },
  {
    "id": "qcm18",
    "question": "Quelles affirmations distinguent flux poussés et flux tirés ?",
    "choices": [
      "Flux tirés : la demande réelle déclenche la production",
      "Flux poussés : on produit selon les prévisions",
      "Flux tirés : logique juste-à-temps",
      "Flux poussés : stocks réduits (juste-à-temps)"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Flux poussés = production sur prévisions (stocks) ; flux tirés = pilotage par la demande (juste-à-temps)."
  },
  {
    "id": "qcm19",
    "question": "Quelles affirmations sur les marges en MPM sont exactes ?",
    "choices": [
      "On a toujours MT ≤ ML",
      "Une tâche critique a MT = ML = 0",
      "On a toujours ML ≤ MT",
      "Marge totale = date au plus tard - date au plus tôt"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "MT = plus tard - plus tôt, ML ≤ MT, et la tâche critique a des marges nulles ; l'inégalité inverse (MT ≤ ML) est fausse."
  },
  {
    "id": "qcm20",
    "question": "Pour faire face à une surcharge (demande > capacité) à court terme, on peut :",
    "choices": [
      "Ajouter des équipes supplémentaires",
      "Réduire immédiatement les coûts fixes structurels",
      "Recourir aux heures supplémentaires",
      "Recourir à l'intérim ou à la sous-traitance"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Heures supplémentaires, intérim/sous-traitance et équipes supplémentaires sont des ajustements de court terme."
  },
  {
    "id": "qcm21",
    "question": "Le lissage de la production permet une charge régulière au prix de la constitution de stocks.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : lisser la production crée des stocks qui absorbent l'irrégularité des ventes."
  },
  {
    "id": "qcm22",
    "question": "En programmation linéaire, maximiser le chiffre d'affaires conduit toujours à la même solution que maximiser la marge sur coût variable.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : on maximise la MCV ; raisonner sur le CA est une erreur classique qui peut fausser l'optimum."
  },
  {
    "id": "qcm23",
    "question": "En MPM, une tâche peut avoir une marge libre nulle alors que sa marge totale est strictement positive.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : exemple de la tâche J (MT = 3, ML = 0) ; tout retard décale alors les tâches suivantes."
  },
  {
    "id": "qcm24",
    "question": "Le Lean Management, le juste-à-temps et les cinq zéros sont des méthodes de calcul exigées au DCG.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : ils relèvent de la culture professionnelle et ne sont pas des méthodes de calcul exigées."
  },
  {
    "id": "qcm25",
    "question": "Les modèles d'optimisation (PL, facteur rare, MPM) sont des aides à la décision et non des automatismes infaillibles.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : ils reposent sur des hypothèses fortes (demande prévisible, durées connues) et restent des aides à la décision."
  }
];

/** Sélection jouée sur le site — voir docs/selection-qcm.md. */
const SELECTION = [0, 1, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 23, 24];

export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);
