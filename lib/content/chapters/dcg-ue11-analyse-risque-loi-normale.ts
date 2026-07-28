import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-analyse-risque-loi-normale.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const analyseRisqueLoiNormale: Chapter = {
  ...generated,
  videos: [{ youtubeId: "DTvhhB9bR00", title: "Analyse du risque" }],
  description:
    "Modéliser une grandeur de gestion par une variable aléatoire suivant une loi normale : espérance, variance et écart-type, centrage-réduction et lecture de la table, seuil de profitabilité probabilisé, intervalle de confiance d'une moyenne, indicateurs de risque d'exploitation et élasticités prix.",
  flashcards: [
    {
      id: "fc1",
      front: "Les trois univers de la décision",
      back: "Avenir certain : une seule conséquence par décision (calcul déterministe). Avenir risqué : plusieurs résultats possibles, chacun avec une probabilité connue ou estimable (espérance + écart-type). Avenir incertain : états futurs connus mais non probabilisables (critères de décision, scénarios).",
    },
    {
      id: "fc2",
      front: "Risque vs incertitude (Frank Knight, 1921)",
      back: "Le risque est probabilisable : il se MESURE (probabilités, espérance, écart-type). L'incertitude radicale ne l'est pas : les états futurs sont connus mais sans probabilité — elle se GÈRE par le jugement, les critères de décision et les scénarios.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce qu'une variable aléatoire ?",
      back: "Une application qui associe à chaque résultat possible d'une expérience (chaque éventualité) une valeur numérique, à laquelle on attache une probabilité. Discrète si les valeurs sont dénombrables, continue si elles couvrent un intervalle réel (cas de la loi normale).",
    },
    {
      id: "fc4",
      front: "Espérance mathématique E(X) : définition et rôle",
      back: "Moyenne des valeurs possibles pondérée par leurs probabilités : E(X) = Σ xᵢ·P(xᵢ). C'est le critère de RENDEMENT : le gain moyen attendu. Limite : elle ne dit rien du risque. Ex. du cours : E(X) = 2,2 commandes/jour pour le commercial.",
    },
    {
      id: "fc5",
      front: "Variance et écart-type : la mesure du risque",
      back: "La variance mesure la dispersion moyenne des valeurs autour de l'espérance. L'écart-type σ, racine carrée de la variance, revient à l'unité d'origine et redevient interprétable (la variance est en unité quadratique). Plus σ est grand, plus le projet est risqué.",
    },
    {
      id: "fc6",
      front: "Propriétés de la variance : les pièges",
      back: "V(aX + b) = a²·V(X) : ne pas oublier le carré, et la constante b ne joue pas sur la dispersion. Si X et Y sont indépendantes, on additionne les VARIANCES, jamais les écarts-types : σ(X+Y) ≠ σ(X) + σ(Y).",
    },
    {
      id: "fc7",
      front: "Le coefficient de variation",
      back: "Rapport σ/E, sans unité : il exprime le risque RELATIF et permet de comparer des grandeurs d'échelles différentes. Ex. du cours : projet A = 20 %, projet B = 45 % — B est plus de deux fois plus risqué à espérance égale. Limite : peu parlant si E est proche de 0.",
    },
    {
      id: "fc8",
      front: "La loi normale N(m ; σ)",
      back: "Loi de Laplace-Gauss : densité symétrique en cloche, centrée sur m. m = espérance (position du sommet), σ = écart-type (largeur de la cloche). Aire totale = 1. Seule loi de probabilité au programme du DCG ; elle modélise CA, volumes, durées.",
    },
    {
      id: "fc9",
      front: "La règle 68 – 95 – 99,7",
      back: "Environ 68 % des valeurs dans [m − σ ; m + σ], environ 95 % dans [m − 2σ ; m + 2σ], environ 99,7 % dans [m − 3σ ; m + 3σ]. Ex. : avec Q ~ N(20 000 ; 4 000), 95 % des réalisations tombent dans [12 000 ; 28 000].",
    },
    {
      id: "fc10",
      front: "Le centrage-réduction",
      back: "La table n'est tabulée que pour N(0 ; 1). Pour toute loi N(m ; σ), on pose t = (x − m) / σ : T suit alors N(0 ; 1), dont la fonction de répartition π(t) est lue dans la table. C'est la transformation fondamentale du chapitre.",
    },
    {
      id: "fc11",
      front: "La propriété de symétrie de N(0 ; 1)",
      back: "La table ne donne que les t positifs. Pour un t négatif : π(−t) = 1 − π(t). De même P(T > t) = 1 − π(t), et P(−a ≤ T ≤ a) = 2π(a) − 1. La gestion du signe est la principale source d'erreur à l'examen.",
    },
    {
      id: "fc12",
      front: "Le seuil de profitabilité probabilisé : la démarche",
      back: "1. Formaliser : P(Q ≥ seuil). 2. Centrer-réduire la borne : t = (seuil − m)/σ. 3. Traiter le signe par symétrie. 4. Lire π(t) dans la table. 5. Interpréter et conseiller. Ex. TONIK : Q ~ N(20 000 ; 4 000), seuil 15 000 → t = −1,25 → P = π(1,25) = 89,44 %. On dit « seuil de profitabilité », jamais « seuil de rentabilité ».",
    },
    {
      id: "fc13",
      front: "Intervalle de confiance d'une moyenne : les réflexes",
      back: "Estimateur ponctuel m ≈ x̄ ; corriger l'écart-type d'échantillon σ′ en s avant le calcul ; n ≥ 30 ; t = 1,96 à 95 % et t = 2,575 à 99 %. Plus la confiance augmente, plus l'intervalle s'élargit. L'estimation porte sur une MOYENNE ; les tests d'hypothèse sont hors programme.",
    },
    {
      id: "fc14",
      front: "Les indicateurs de risque d'exploitation",
      back: "Marge de sécurité = CA − Seuil (un montant). Indice de sécurité = MS/CA (un pourcentage). Indice de prélèvement = CF/CA. Levier opérationnel = MCV/Résultat = 1/Indice de sécurité : élasticité du résultat au CA — il amplifie aussi les pertes.",
    },
    {
      id: "fc15",
      front: "L'élasticité prix de la demande",
      back: "Rapport de la variation relative de la demande à la variation relative du prix. Généralement négative ; on l'interprète en valeur absolue : |e| > 1 demande élastique (une hausse de prix réduit le CA), |e| < 1 inélastique (une hausse de prix augmente le CA), |e| = 1 CA insensible.",
    },
    {
      id: "fc16",
      front: "L'élasticité prix croisée : le signe est l'information clé",
      back: "Sensibilité de la demande de X à la variation du prix de Y. e croisée > 0 : produits SUBSTITUTS (la hausse du prix de Y reporte la demande vers X). e croisée < 0 : produits COMPLÉMENTS. e croisée ≈ 0 : produits indépendants.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Selon la distinction de Frank Knight, une situation où les états futurs sont connus mais ne peuvent pas être probabilisés relève :",
      choices: [
        "De l'avenir certain",
        "De l'avenir risqué (ou aléatoire)",
        "De l'avenir incertain",
        "Du risque d'exploitation",
      ],
      answer: 2,
      explanation:
        "C'est l'incertitude au sens strict : on sait ce qui peut arriver, mais pas avec quelle probabilité. Le risque, lui, est probabilisable et se mesure (espérance, écart-type) ; l'incertitude se gère par le jugement et les scénarios.",
    },
    {
      id: "q2",
      question:
        "La demande annuelle de TONIK suit Q ~ N(20 000 ; 4 000) et le seuil de profitabilité est de 15 000 articles. Sachant que π(1,25) = 0,8944, quelle est la probabilité d'atteindre le seuil ?",
      choices: ["89,44 %", "10,56 %", "84,13 %", "73,40 %"],
      answer: 0,
      explanation:
        "t = (15 000 − 20 000) / 4 000 = −1,25. Par symétrie, P(Q ≥ 15 000) = P(T ≥ −1,25) = π(1,25) = 0,8944, soit 89,44 %. Contrôle de cohérence : la borne étant inférieure à la moyenne, la probabilité de la dépasser doit être supérieure à 50 %. Le risque résiduel de déficit est de 10,56 %.",
    },
    {
      id: "q3",
      question: "Quelle est la valeur de V(aX + b) ?",
      choices: ["a·V(X) + b", "a²·V(X)", "a²·V(X) + b", "a·V(X)"],
      answer: 1,
      explanation:
        "V(aX + b) = a²·V(X) : le coefficient a sort au carré et la constante b ne joue pas sur la dispersion. Deux pièges classiques : oublier le carré, et faire jouer la constante. Troisième piège associé : additionner les écarts-types au lieu des variances.",
    },
    {
      id: "q4",
      question:
        "La demande du soin premium de Boréal Cosmétiques suit N(6 000 ; 1 000). Sachant que π(1) = 0,8413, quelle est la probabilité que la demande soit comprise entre 5 000 et 7 000 unités ?",
      choices: ["84,13 %", "95,00 %", "50,00 %", "68,26 %"],
      answer: 3,
      explanation:
        "Bornes centrées réduites : (5 000 − 6 000)/1 000 = −1 et (7 000 − 6 000)/1 000 = +1. P(−1 ≤ T ≤ 1) = 2π(1) − 1 = 2 × 0,8413 − 1 = 0,6826, soit 68,26 %. On retrouve la règle empirique des 68 % de l'intervalle [m − σ ; m + σ] — un bon contrôle de cohérence.",
    },
    {
      id: "q5",
      question:
        "Selon la règle empirique de la loi normale, environ 95 % des valeurs se situent dans l'intervalle :",
      choices: [
        "[m − σ ; m + σ]",
        "[m − 3σ ; m + 3σ]",
        "[m − 2σ ; m + 2σ]",
        "[m − 0,5σ ; m + 0,5σ]",
      ],
      answer: 2,
      explanation:
        "Règle 68 – 95 – 99,7 : environ 68 % des valeurs dans [m − σ ; m + σ], 95 % dans [m − 2σ ; m + 2σ] et 99,7 % dans [m − 3σ ; m + 3σ]. Avec Q ~ N(20 000 ; 4 000), 95 % des réalisations tombent ainsi dans [12 000 ; 28 000] sans aucun calcul.",
    },
    {
      id: "q6",
      question:
        "Pour TONIK, R = 20·Q − 300 000 avec Q ~ N(20 000 ; 4 000). La direction vise un résultat d'au moins 50 000 €. Sachant que π(0,625) ≈ 0,734, quelle est la probabilité d'atteindre cet objectif ?",
      choices: ["89,44 %", "Environ 73 %", "50,00 %", "Environ 26,6 %"],
      answer: 1,
      explanation:
        "R ≥ 50 000 impose 20·Q − 300 000 ≥ 50 000, soit Q ≥ 17 500. t = (17 500 − 20 000) / 4 000 = −0,625. Par symétrie, P(R ≥ 50 000) = π(0,625) ≈ 0,734, soit environ 73 %. L'objectif de résultat est plus ambitieux que le simple seuil de profitabilité (89,44 %), mais reste probable.",
    },
    {
      id: "q7",
      question:
        "Le produit affiche une MCV de 400 000 € et un résultat de 100 000 €. Si le chiffre d'affaires varie de 10 %, le résultat varie de :",
      choices: ["± 40 %", "± 10 %", "± 4 %", "± 25 %"],
      answer: 0,
      explanation:
        "Levier opérationnel = MCV / Résultat = 400 000 / 100 000 = 4. Le LO mesure l'élasticité du résultat au CA : une variation de 10 % du chiffre d'affaires entraîne une variation de 4 × 10 % = 40 % du résultat — dans les deux sens : le levier amplifie aussi les pertes.",
    },
    {
      id: "q8",
      question:
        "La Brasserie du Mont vend 20 000 coffrets à 50 €. L'élasticité-prix est de −1,08. Elle envisage de porter le prix à 55 € (+10 %). Quelle est la conséquence attendue ?",
      choices: [
        "La demande baisse de 1,08 % et le CA augmente",
        "La demande est inélastique : le CA augmente",
        "La demande recule d'environ 10,8 % (≈ 17 840 unités) et le CA baisse",
        "Le CA reste inchangé, l'élasticité étant unitaire",
      ],
      answer: 2,
      explanation:
        "Une hausse de prix de 1 % réduit la demande de 1,08 % : pour +10 %, la demande recule d'environ 10,8 %, passant de 20 000 à ≈ 17 840 unités. CA : 55 × 17 840 = 981 200 € contre 1 000 000 €, soit −1,88 % (−18 800 €). La demande étant élastique (|e| = 1,08 > 1), la hausse de prix fait baisser le chiffre d'affaires.",
    },
    {
      id: "q9",
      question:
        "L'élasticité prix croisée entre deux produits est positive. Qu'en déduit-on ?",
      choices: [
        "Les produits sont substituts : la hausse du prix de l'un reporte la demande vers l'autre",
        "Les produits sont compléments : la hausse du prix de l'un réduit la demande de l'autre",
        "Les produits sont indépendants",
        "La demande des deux produits est élastique",
      ],
      answer: 0,
      explanation:
        "Pour l'élasticité croisée, le SIGNE est l'information clé : e croisée > 0 = substituts (ex. du cours : +4 % / +10 % = +0,40), e croisée < 0 = compléments (−3 % / +10 % = −0,30), e croisée ≈ 0 = indépendants. Ne pas confondre avec l'élasticité prix simple, interprétée en valeur absolue.",
    },
    {
      id: "q10",
      question:
        "Dans un intervalle de confiance d'une moyenne, que se passe-t-il quand on passe d'un niveau de confiance de 95 % (t = 1,96) à 99 % (t = 2,575) ?",
      choices: [
        "L'intervalle se resserre : on gagne en précision",
        "L'intervalle est inchangé, seule la moyenne estimée varie",
        "Il faut réduire la taille de l'échantillon",
        "L'intervalle s'élargit : ce qui est gagné en certitude est perdu en précision",
      ],
      answer: 3,
      explanation:
        "Plus la confiance augmente, plus t est grand (1,96 → 2,575) et plus l'intervalle x̄ ± t·s/√n s'élargit : on gagne en certitude ce qu'on perd en précision. Rappels du cours : corriger σ′ en s, n ≥ 30, l'estimation porte sur une MOYENNE et les tests d'hypothèse sont hors programme.",
    },
  ],
};
