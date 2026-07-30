// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Banque complète du manuel ; le site joue la sélection `quiz`.
import type { QuizQuestion } from "../types";

export const banque: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Quel est le rang du budget des ventes dans la construction budgétaire ?",
    "choices": [
      "Il est établi en parallèle du budget de production, sans lien de priorité",
      "Il est le premier budget : il commande la production, puis les approvisionnements et la trésorerie",
      "Il est établi en dernier, après la trésorerie",
      "Il dépend du budget des investissements"
    ],
    "answers": [
      1
    ],
    "explanation": "Le budget des ventes ouvre l'enchaînement ventes -> production -> approvisionnements -> personnel/investissements -> trésorerie."
  },
  {
    "id": "qcm2",
    "question": "Le budget des ventes a une double nature. Laquelle ?",
    "choices": [
      "Comptable et fiscale",
      "Prévisionnelle (analyse du passé) et volontariste (objectifs mobilisateurs)",
      "Mensuelle et annuelle",
      "Interne et externe"
    ],
    "answers": [
      1
    ],
    "explanation": "Il est à la fois prévisionnel (fondé sur le passé et l'environnement) et volontariste (objectifs pour la force de vente)."
  },
  {
    "id": "qcm3",
    "question": "Le coefficient de corrélation linéaire r appartient à quel intervalle ?",
    "choices": [
      "[-1 ; 0]",
      "[0 ; 1]",
      "[-1 ; 1]",
      "[0 ; 100]"
    ],
    "answers": [
      2
    ],
    "explanation": "r appartient à [-1 ; 1] : proche de plus ou moins 1 la liaison est forte, proche de 0 elle est faible."
  },
  {
    "id": "qcm4",
    "question": "Pour une série dont les écarts entre valeurs successives sont à peu près constants, quel ajustement choisir ?",
    "choices": [
      "Puissance",
      "Exponentiel",
      "Logarithmique",
      "Linéaire (droite des moindres carrés)"
    ],
    "answers": [
      3
    ],
    "explanation": "Des écarts approximativement constants traduisent une évolution régulière relevant d'un ajustement linéaire y = ax + b."
  },
  {
    "id": "qcm5",
    "question": "Série : x = 1,2,3,4 et y = 100,120,130,150. La pente a de la droite des moindres carrés vaut :",
    "choices": [
      "20",
      "16",
      "12,5",
      "14"
    ],
    "answers": [
      1
    ],
    "explanation": "x̄=2,5 ; ȳ=125 ; a = Σ(x-x̄)(y-ȳ)/Σ(x-x̄)² = 80/5 = 16."
  },
  {
    "id": "qcm6",
    "question": "Avec a = 16 et les moyennes x̄ = 2,5 et ȳ = 125, l'ordonnée à l'origine b vaut :",
    "choices": [
      "100",
      "85",
      "115",
      "65"
    ],
    "answers": [
      1
    ],
    "explanation": "b = ȳ - a·x̄ = 125 - 16×2,5 = 85, d'où y = 16x + 85."
  },
  {
    "id": "qcm7",
    "question": "Avec la droite y = 16x + 85, la tendance prévue pour l'année de rang 5 est :",
    "choices": [
      "150",
      "160",
      "165",
      "181"
    ],
    "answers": [
      2
    ],
    "explanation": "y = 16×5 + 85 = 165."
  },
  {
    "id": "qcm8",
    "question": "La tendance prévue est 165 et le coefficient saisonnier de la période vaut 1,2. La prévision saisonnalisée est :",
    "choices": [
      "165",
      "186",
      "137,5",
      "198"
    ],
    "answers": [
      3
    ],
    "explanation": "Saisonnaliser = tendance × coefficient = 165 × 1,2 = 198."
  },
  {
    "id": "qcm9",
    "question": "Comment désaisonnalise-t-on (CVS) une valeur brute ?",
    "choices": [
      "En la divisant par la tendance",
      "En la multipliant par son coefficient saisonnier",
      "En lui ajoutant la tendance",
      "En la divisant par son coefficient saisonnier"
    ],
    "answers": [
      3
    ],
    "explanation": "Désaisonnaliser = valeur brute / coefficient saisonnier, pour faire apparaître la tendance."
  },
  {
    "id": "qcm10",
    "question": "Un coefficient saisonnier supérieur à 1 signale :",
    "choices": [
      "Une saison forte (au-dessus de la tendance)",
      "Une absence de saisonnalité",
      "Une erreur de calcul",
      "Une saison creuse"
    ],
    "answers": [
      0
    ],
    "explanation": "Un coefficient > 1 correspond à une période dont les ventes dépassent la tendance (saison forte)."
  },
  {
    "id": "qcm11",
    "question": "Dans la méthode des rapports à la tendance, comment ajuste-t-on les coefficients saisonniers ?",
    "choices": [
      "Aucun ajustement n'est nécessaire",
      "Pour que leur moyenne soit nulle",
      "Pour que leur somme égale le nombre de périodes",
      "Pour que leur produit soit égal à 1"
    ],
    "answers": [
      2
    ],
    "explanation": "On ajuste les coefficients pour que leur somme soit égale au nombre de périodes (4 trimestres, 12 mois...)."
  },
  {
    "id": "qcm12",
    "question": "La demande est dite élastique au prix lorsque :",
    "choices": [
      "|e| = 0",
      "|e| > 1",
      "|e| < 1",
      "e = 1"
    ],
    "answers": [
      1
    ],
    "explanation": "Si |e| > 1 la demande est élastique : une hausse de prix fait baisser le chiffre d'affaires."
  },
  {
    "id": "qcm13",
    "question": "Élasticité-prix : si le prix augmente de 10 % et la demande baisse de 5 %, e vaut :",
    "choices": [
      "-5",
      "-2",
      "+0,5",
      "-0,5"
    ],
    "answers": [
      3
    ],
    "explanation": "e = (Δ% demande)/(Δ% prix) = -5/10 = -0,5 : demande inélastique."
  },
  {
    "id": "qcm14",
    "question": "Dans le lissage exponentiel Pt = α·Yt-1 + (1-α)·Pt-1, le paramètre α représente :",
    "choices": [
      "Le poids accordé à la dernière observation",
      "La tendance de la série",
      "Le coefficient saisonnier",
      "Le taux de croissance des ventes"
    ],
    "answers": [
      0
    ],
    "explanation": "α (entre 0 et 1) pondère la dernière observation face à la dernière prévision."
  },
  {
    "id": "qcm15",
    "question": "Quel passage permet d'obtenir le chiffre d'affaires prévisionnel à partir du programme des ventes ?",
    "choices": [
      "Quantités × coût de production",
      "Quantités × taux de marge",
      "Quantités / coefficient saisonnier",
      "Quantités × prix de vente"
    ],
    "answers": [
      3
    ],
    "explanation": "Le budget (CA) valorise le programme (quantités) au prix de vente : CA = quantités × prix."
  },
  {
    "id": "qcm16",
    "question": "Parmi ces facteurs, lesquels sont des facteurs internes (maîtrisables) influençant les ventes ?",
    "choices": [
      "La publicité",
      "Le prix",
      "La conjoncture",
      "La politique commerciale",
      "La concurrence"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Prix, publicité et politique commerciale sont maîtrisables ; conjoncture et concurrence sont subis."
  },
  {
    "id": "qcm17",
    "question": "Quelles affirmations sur les ajustements non linéaires sont exactes ?",
    "choices": [
      "L'exponentiel y = b·aˣ se linéarise par ln y = (ln a)x + ln b",
      "Le logarithmique convient à une croissance ralentissant vers un palier",
      "L'exponentiel reste valable indéfiniment",
      "L'ajustement puissance s'écrit y = b·xᵃ"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "L'exponentiel se linéarise mais diverge vite (faux qu'il soit valable indéfiniment) ; puissance et logarithmique sont exacts."
  },
  {
    "id": "qcm18",
    "question": "Quelles sont les trois composantes d'une série chronologique ?",
    "choices": [
      "Le coefficient de corrélation",
      "L'élasticité",
      "Les aléas (imprévisibles)",
      "La tendance",
      "Les variations saisonnières"
    ],
    "answers": [
      2,
      3,
      4
    ],
    "explanation": "Une série se décompose en tendance, variations saisonnières et aléas non modélisables."
  },
  {
    "id": "qcm19",
    "question": "Quels usages symétriques fait-on des coefficients saisonniers ?",
    "choices": [
      "Désaisonnaliser : série brute / coefficient",
      "Calculer la pente de la droite",
      "Mesurer la corrélation",
      "Saisonnaliser : tendance × coefficient"
    ],
    "answers": [
      0,
      3
    ],
    "explanation": "Les deux usages sont désaisonnaliser (CVS) et saisonnaliser une prévision."
  },
  {
    "id": "qcm20",
    "question": "Quels biais menacent la qualité d'une prévision de ventes ?",
    "choices": [
      "La rupture de tendance",
      "Le biais d'optimisme",
      "Le biais d'ancrage sur l'année précédente",
      "La gestion par exception"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Optimisme, ancrage et rupture de tendance sont des limites des prévisions ; la gestion par exception est une technique de contrôle."
  },
  {
    "id": "qcm21",
    "question": "Caractéristiques du pilotage commercial à l'ère numérique ?",
    "choices": [
      "Appui sur la donnée (CRM, big data)",
      "Prévision annuelle figée privilégiée",
      "Prévisions glissantes (rolling forecasts)",
      "Pilotage par scénarios plutôt que par un chiffre unique"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Le numérique privilégie prévisions glissantes, scénarios et exploitation de la donnée, et délaisse la prévision annuelle figée."
  },
  {
    "id": "qcm22",
    "question": "Une corrélation forte entre deux variables prouve toujours un lien de causalité entre elles.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : corrélation n'est pas causalité ; le jugement économique reste indispensable."
  },
  {
    "id": "qcm23",
    "question": "La méthode des moindres carrés minimise la somme des écarts au carré entre valeurs observées et valeurs ajustées.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : c'est précisément le critère de la droite des moindres carrés."
  },
  {
    "id": "qcm24",
    "question": "Le lissage exponentiel capte automatiquement la tendance et la saisonnalité d'une série.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : le lissage exponentiel simple est réactif mais ne capte ni tendance ni saisonnalité."
  },
  {
    "id": "qcm25",
    "question": "Surévaluer les ventes prévisionnelles expose à la surproduction, au surstockage et à l'immobilisation de trésorerie.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : une surévaluation se propage en aval sous forme de surproduction et de trésorerie immobilisée."
  },
  {
    "id": "qcm26",
    "question": "Le programme des ventes exprime des valeurs en euros, tandis que le budget des ventes exprime des quantités.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : c'est l'inverse, le programme est en quantités et le budget en valeur (CA)."
  }
];

/** Sélection jouée sur le site — voir docs/selection-qcm.md. */
const SELECTION = [0, 1, 3, 4, 6, 7, 8, 10, 11, 13, 14, 15, 16, 18, 19, 20, 21, 22, 24, 25];

export const quiz: QuizQuestion[] = SELECTION.map((i) => banque[i]);
