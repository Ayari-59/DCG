// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// Flashcards tirées du QCM : énoncé au recto, justification au verso.
import type { Flashcard } from "../types";

export const flashcards: Flashcard[] = [
  {
    "id": "qcm1",
    "front": "Quel est le rang du budget des ventes dans la construction budgétaire ?",
    "back": "Le budget des ventes ouvre l'enchaînement ventes -> production -> approvisionnements -> personnel/investissements -> trésorerie."
  },
  {
    "id": "qcm2",
    "front": "Le budget des ventes a une double nature. Laquelle ?",
    "back": "Il est à la fois prévisionnel (fondé sur le passé et l'environnement) et volontariste (objectifs pour la force de vente)."
  },
  {
    "id": "qcm3",
    "front": "Le coefficient de corrélation linéaire r appartient à quel intervalle ?",
    "back": "r appartient à [-1 ; 1] : proche de plus ou moins 1 la liaison est forte, proche de 0 elle est faible."
  },
  {
    "id": "qcm4",
    "front": "Pour une série dont les écarts entre valeurs successives sont à peu près constants, quel ajustement choisir ?",
    "back": "Des écarts approximativement constants traduisent une évolution régulière relevant d'un ajustement linéaire y = ax + b."
  },
  {
    "id": "qcm5",
    "front": "Série : x = 1,2,3,4 et y = 100,120,130,150. La pente a de la droite des moindres carrés vaut :",
    "back": "x̄=2,5 ; ȳ=125 ; a = Σ(x-x̄)(y-ȳ)/Σ(x-x̄)² = 80/5 = 16."
  },
  {
    "id": "qcm6",
    "front": "Avec a = 16 et les moyennes x̄ = 2,5 et ȳ = 125, l'ordonnée à l'origine b vaut :",
    "back": "b = ȳ - a·x̄ = 125 - 16×2,5 = 85, d'où y = 16x + 85."
  },
  {
    "id": "qcm7",
    "front": "Avec la droite y = 16x + 85, la tendance prévue pour l'année de rang 5 est :",
    "back": "y = 16×5 + 85 = 165."
  },
  {
    "id": "qcm8",
    "front": "La tendance prévue est 165 et le coefficient saisonnier de la période vaut 1,2. La prévision saisonnalisée est :",
    "back": "Saisonnaliser = tendance × coefficient = 165 × 1,2 = 198."
  },
  {
    "id": "qcm9",
    "front": "Comment désaisonnalise-t-on (CVS) une valeur brute ?",
    "back": "Désaisonnaliser = valeur brute / coefficient saisonnier, pour faire apparaître la tendance."
  },
  {
    "id": "qcm10",
    "front": "Un coefficient saisonnier supérieur à 1 signale :",
    "back": "Un coefficient > 1 correspond à une période dont les ventes dépassent la tendance (saison forte)."
  },
  {
    "id": "qcm11",
    "front": "Dans la méthode des rapports à la tendance, comment ajuste-t-on les coefficients saisonniers ?",
    "back": "On ajuste les coefficients pour que leur somme soit égale au nombre de périodes (4 trimestres, 12 mois...)."
  },
  {
    "id": "qcm12",
    "front": "La demande est dite élastique au prix lorsque :",
    "back": "Si |e| > 1 la demande est élastique : une hausse de prix fait baisser le chiffre d'affaires."
  },
  {
    "id": "qcm13",
    "front": "Élasticité-prix : si le prix augmente de 10 % et la demande baisse de 5 %, e vaut :",
    "back": "e = (Δ% demande)/(Δ% prix) = -5/10 = -0,5 : demande inélastique."
  },
  {
    "id": "qcm14",
    "front": "Dans le lissage exponentiel Pt = α·Yt-1 + (1-α)·Pt-1, le paramètre α représente :",
    "back": "α (entre 0 et 1) pondère la dernière observation face à la dernière prévision."
  },
  {
    "id": "qcm15",
    "front": "Quel passage permet d'obtenir le chiffre d'affaires prévisionnel à partir du programme des ventes ?",
    "back": "Le budget (CA) valorise le programme (quantités) au prix de vente : CA = quantités × prix."
  },
  {
    "id": "qcm16",
    "front": "Parmi ces facteurs, lesquels sont des facteurs internes (maîtrisables) influençant les ventes ?",
    "back": "Prix, publicité et politique commerciale sont maîtrisables ; conjoncture et concurrence sont subis."
  },
  {
    "id": "qcm17",
    "front": "Quelles affirmations sur les ajustements non linéaires sont exactes ?",
    "back": "L'exponentiel se linéarise mais diverge vite (faux qu'il soit valable indéfiniment) ; puissance et logarithmique sont exacts."
  },
  {
    "id": "qcm18",
    "front": "Quelles sont les trois composantes d'une série chronologique ?",
    "back": "Une série se décompose en tendance, variations saisonnières et aléas non modélisables."
  },
  {
    "id": "qcm19",
    "front": "Quels usages symétriques fait-on des coefficients saisonniers ?",
    "back": "Les deux usages sont désaisonnaliser (CVS) et saisonnaliser une prévision."
  },
  {
    "id": "qcm20",
    "front": "Quels biais menacent la qualité d'une prévision de ventes ?",
    "back": "Optimisme, ancrage et rupture de tendance sont des limites des prévisions ; la gestion par exception est une technique de contrôle."
  },
  {
    "id": "qcm21",
    "front": "Caractéristiques du pilotage commercial à l'ère numérique ?",
    "back": "Le numérique privilégie prévisions glissantes, scénarios et exploitation de la donnée, et délaisse la prévision annuelle figée."
  },
  {
    "id": "qcm22",
    "front": "Une corrélation forte entre deux variables prouve toujours un lien de causalité entre elles.",
    "back": "Faux : corrélation n'est pas causalité ; le jugement économique reste indispensable."
  },
  {
    "id": "qcm23",
    "front": "La méthode des moindres carrés minimise la somme des écarts au carré entre valeurs observées et valeurs ajustées.",
    "back": "Vrai : c'est précisément le critère de la droite des moindres carrés."
  },
  {
    "id": "qcm24",
    "front": "Le lissage exponentiel capte automatiquement la tendance et la saisonnalité d'une série.",
    "back": "Faux : le lissage exponentiel simple est réactif mais ne capte ni tendance ni saisonnalité."
  },
  {
    "id": "qcm25",
    "front": "Surévaluer les ventes prévisionnelles expose à la surproduction, au surstockage et à l'immobilisation de trésorerie.",
    "back": "Vrai : une surévaluation se propage en aval sous forme de surproduction et de trésorerie immobilisée."
  },
  {
    "id": "qcm26",
    "front": "Le programme des ventes exprime des valeurs en euros, tandis que le budget des ventes exprime des quantités.",
    "back": "Faux : c'est l'inverse, le programme est en quantités et le budget en valeur (CA)."
  }
];
