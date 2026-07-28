import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-methode-abc.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const methodeAbc: Chapter = {
  ...generated,
  description:
    "La méthode ABC (coûts à base d'activités) : pourquoi les unités d'œuvre volumiques faussent les coûts (subventionnement croisé), les cinq étapes du calcul par activités et inducteurs, l'interprétation pour le pilotage (ABM) et la comparaison critique avec la méthode des centres d'analyse.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce que le coût complet d'un produit ?",
      back: "La totalité des charges qui peuvent lui être rapportées (directes et indirectes). Il conduit au coût de revient et sert le pilotage stratégique : fixation des prix, gestion du portefeuille de produits, décision d'abandon, évaluation des stocks.",
    },
    {
      id: "fc2",
      front: "Qu'est-ce qu'une activité au sens de l'ABC ?",
      back: "Un ensemble de tâches coordonnées au sein d'un processus, consommatrices de ressources, en vue de délivrer une production. C'est la brique de base du modèle ABC, inspiré de la chaîne de valeur de Porter.",
    },
    {
      id: "fc3",
      front: "Le principe fondamental de la méthode ABC",
      back: "Les activités consomment des ressources, et les produits consomment des activités. D'où l'enchaînement : ressources → activités → inducteurs → objets de coûts.",
    },
    {
      id: "fc4",
      front: "Qu'est-ce qu'un inducteur d'activité ?",
      back: "Une mesure de la façon dont les objets de coûts consomment les activités : le coût d'une activité est alloué selon le nombre d'inducteurs consommés par chaque objet. Techniquement, son rôle est celui d'une unité d'œuvre ; conceptuellement, il relève d'une logique de causalité, non de simple imputation.",
    },
    {
      id: "fc5",
      front: "Les trois qualités d'un bon inducteur",
      back: "1. Causalité : il doit être la cause de la consommation de ressources par l'activité. 2. Représentativité : son volume doit varier proportionnellement au coût de l'activité. 3. Mesurabilité : il doit être facile à recenser dans le système d'information.",
    },
    {
      id: "fc6",
      front: "Inducteur (ou UO) volumique vs de déclenchement : la différence ?",
      back: "Volumique : quantités produites, heures-machine, chiffre d'affaires — adapté aux grandes séries standardisées. De déclenchement : nombre de lots, de commandes, de références — adapté aux productions différenciées en petites séries. L'apport de l'ABC est d'oser des inducteurs de déclenchement.",
    },
    {
      id: "fc7",
      front: "Qu'est-ce que le subventionnement croisé (Mévellec) ?",
      back: "La répartition des charges indirectes étant un jeu à somme nulle, surévaluer un produit est la contrepartie de la sous-évaluation d'un autre. En général, les produits standards en grandes séries subventionnent les produits différenciés en petites séries.",
    },
    {
      id: "fc8",
      front: "Les cinq étapes du calcul ABC",
      back: "1. Affecter les ressources aux activités. 2. Calculer le coût de chaque activité. 3. Choisir l'inducteur et déterminer son volume (coût de l'inducteur). 4. Imputer aux objets de coûts selon les inducteurs consommés. 5. Construire le coût de revient = charges directes + charges réparties par les activités.",
    },
    {
      id: "fc9",
      front: "Formule du coût de l'inducteur",
      back: "Coût de l'inducteur = coût de l'activité ÷ nombre total d'inducteurs. Chaque objet de coût supporte ensuite : coût de l'inducteur × nombre d'inducteurs qu'il a consommés.",
    },
    {
      id: "fc10",
      front: "Les quatre niveaux de la hiérarchie des activités",
      back: "1. Unitaire (à l'unité produite : usinage, assemblage). 2. Lot (à chaque lot lancé : réglage, lancement, contrôle d'un lot). 3. Soutien aux produits (par référence : gestion d'une gamme, R&D produit). 4. Soutien à l'organisation (global : direction générale, SI — difficilement imputable).",
    },
    {
      id: "fc11",
      front: "Qu'est-ce qu'un centre de regroupement ?",
      back: "Le regroupement des activités qui partagent le même inducteur, pour alléger et simplifier la carte des activités. Limite : un risque de simplification excessive du modèle.",
    },
    {
      id: "fc12",
      front: "Qu'est-ce que l'ABM (Activity-Based Management) ?",
      back: "Le management à base d'activités analyse comment les activités contribuent à la création de valeur et cherche à optimiser le rapport valeur / coût dans une vision transversale. L'ABC calcule les coûts ; l'ABM pilote la valeur (reengineering, benchmarking). Niveau sensibilisation au DCG.",
    },
    {
      id: "fc13",
      front: "Pourquoi les charges indirectes justifient-elles l'ABC ? (Lorino)",
      back: "Philippe Lorino parle du « renversement de la pyramide des coûts » : les charges indirectes, minoritaires dans les années 1930, sont devenues majoritaires. Plus elles pèsent, plus l'arbitraire de la clé de répartition provoque des distorsions graves.",
    },
    {
      id: "fc14",
      front: "Statut des charges indirectes dans l'ABC",
      back: "Avec l'ABC, les charges deviennent directes par rapport aux activités, tout en restant indirectes par rapport aux produits. C'est ce passage par les activités qui fait reculer l'arbitraire de la répartition.",
    },
    {
      id: "fc15",
      front: "Les principales limites de la méthode ABC",
      back: "Notion d'activité ambiguë (non normalisée), complexité (« usine à gaz »), coût de mise en œuvre élevé (atténué par le numérique), difficulté d'actualisation de la carte des activités, frein humain, dissociation d'avec les centres de responsabilité.",
    },
    {
      id: "fc16",
      front: "Quand choisir l'ABC plutôt que les centres d'analyse ?",
      back: "Quand les charges indirectes sont élevées et la production diversifiée (petites séries personnalisées) : les coûts sont alors plus justes. À l'inverse, pour une entreprise mono-produit à indirects faibles, les centres d'analyse suffisent : la sophistication n'est utile que si elle améliore la décision.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Quel est le principe fondamental de la méthode ABC ?",
      choices: [
        "Les activités consomment des ressources, et les produits consomment des activités",
        "Les produits consomment directement des ressources réparties par des unités d'œuvre volumiques",
        "Les charges indirectes sont affectées aux produits au prorata du chiffre d'affaires",
        "Les centres de responsabilité consomment des produits, qui consomment des activités",
      ],
      answer: 0,
      explanation:
        "L'enchaînement fondamental de l'ABC est : ressources → activités → inducteurs → objets de coûts. Les activités consomment des ressources, et les produits consomment des activités — c'est ce passage par les activités qui fait reculer l'arbitraire de la répartition.",
    },
    {
      id: "q2",
      question:
        "L'activité « lancement (réglages) » coûte 3 600 000 € ; son inducteur est le nombre de lots, avec un volume total de 3 600 lots. Quel est le coût de l'inducteur ?",
      choices: ["600 € par lot", "1 000 € par lot", "1 200 € par lot", "100 € par lot"],
      answer: 1,
      explanation:
        "Coût de l'inducteur = coût de l'activité ÷ nombre total d'inducteurs = 3 600 000 ÷ 3 600 = 1 000 € par lot. Chaque lot lancé exige un réglage, quelle que soit sa taille : ce coût se ventile ensuite selon le nombre de lots consommés par chaque produit, jamais directement par unité.",
    },
    {
      id: "q3",
      question: "Dans le phénomène de subventionnement croisé décrit par Pierre Mévellec, en général :",
      choices: [
        "Les petites séries personnalisées subventionnent les grandes séries standard",
        "Chaque produit supporte exactement les charges qu'il a causées",
        "Les produits standards en grandes séries subventionnent les produits différenciés en petites séries",
        "Les charges directes subventionnent les charges indirectes",
      ],
      answer: 2,
      explanation:
        "La répartition des charges indirectes est un jeu à somme nulle : surévaluer un produit, c'est en sous-évaluer un autre. Avec une clé volumique unique, les grandes séries standard portent une partie du coût réellement causé par la complexité des petites séries : elles les « subventionnent ».",
    },
    {
      id: "q4",
      question: "Laquelle de ces qualités n'est PAS attendue d'un bon inducteur d'activité ?",
      choices: [
        "La causalité : être la cause de la consommation de ressources par l'activité",
        "La représentativité : son volume varie proportionnellement au coût de l'activité",
        "La mesurabilité : être facile à recenser dans le système d'information",
        "La normalisation : être défini par le Plan comptable général",
      ],
      answer: 3,
      explanation:
        "Les trois qualités d'un bon inducteur sont la causalité, la représentativité et la mesurabilité. Le vocabulaire ABC, issu de la stratégie, n'est justement pas normalisé par le PCG — contrairement à celui des centres d'analyse.",
    },
    {
      id: "q5",
      question:
        "Chez Méca-Précision, l'ABC impute 7 180 000 € de charges indirectes au produit B, fabriqué à 30 000 unités. Quel est le coût indirect unitaire du produit B ?",
      choices: ["24,42 €", "122,00 €", "239,33 €", "291,33 €"],
      answer: 2,
      explanation:
        "Coût indirect unitaire = 7 180 000 ÷ 30 000 = 239,33 €. C'est dix fois celui du produit A (24,42 €), car le produit B consomme massivement les activités de déclenchement (2 400 commandes, 3 000 lots, 2 200 contrôles). 291,33 € est son coût de revient complet (239,33 + 52 € de charges directes).",
    },
    {
      id: "q6",
      question:
        "Dans la hiérarchie des activités, le réglage des machines effectué avant chaque série lancée relève du niveau :",
      choices: [
        "Unitaire (à l'unité produite)",
        "Lot (à chaque lot lancé)",
        "Soutien aux produits (par référence)",
        "Soutien à l'organisation (global)",
      ],
      answer: 1,
      explanation:
        "Le réglage est déclenché par chaque lot lancé, quelle que soit sa taille : son inducteur logique est le nombre de lots. Ces activités de niveau « lot » échappent à toute logique volumique — c'est précisément ce que les unités d'œuvre volumiques ne savent pas capter.",
    },
    {
      id: "q7",
      question: "Quelle est la première des cinq étapes du calcul des coûts à base d'activités ?",
      choices: [
        "Affecter les ressources (charges indirectes) aux activités",
        "Imputer les coûts aux objets de coûts",
        "Choisir les inducteurs et déterminer leur volume",
        "Construire le coût de revient en ajoutant les charges directes",
      ],
      answer: 0,
      explanation:
        "Les cinq étapes s'enchaînent : 1. affecter les ressources aux activités ; 2. calculer le coût de chaque activité ; 3. choisir l'inducteur et calculer son coût (coût de l'activité ÷ nombre d'inducteurs) ; 4. imputer aux objets de coûts ; 5. construire le coût de revient (charges directes + charges réparties).",
    },
    {
      id: "q8",
      question:
        "Le produit C (2 000 unités, charges directes 70 €/u, 1,5 h-machine/u) consomme 300 commandes (600 €), 500 lots (1 000 €), 3 000 heures-machine (40 €) et 600 contrôles (700 €). Quel est son coût de revient unitaire en ABC ?",
      choices: ["175,00 €", "610,00 €", "680,00 €", "505,00 €"],
      answer: 2,
      explanation:
        "Charges indirectes : 300 × 600 + 500 × 1 000 + 3 000 × 40 + 600 × 700 = 180 000 + 500 000 + 120 000 + 420 000 = 1 220 000 €, soit 1 220 000 ÷ 2 000 = 610 € par unité. Coût de revient = 610 + 70 de charges directes = 680 €. 175 € est le coût en centres d'analyse (70 + 70 × 1,5) : vendu 300 €, le produit C perdrait en réalité 380 € par unité.",
    },
    {
      id: "q9",
      question: "Laquelle de ces affirmations n'est PAS une limite de la méthode ABC ?",
      choices: [
        "Elle ne permet pas d'obtenir un coût complet des produits",
        "Sa mise en œuvre est longue et onéreuse (entretiens, cartographie, paramétrage)",
        "La carte des activités doit être tenue à jour, sous peine d'obsolescence",
        "Le découpage en activités n'est pas normalisé et diffère d'une entreprise à l'autre",
      ],
      answer: 0,
      explanation:
        "L'ABC est bien une méthode de coût complet : elle répartit la totalité des charges indirectes (vérification chez Méca-Précision : 11 720 000 + 7 180 000 = 18 900 000 €). Ses vraies limites sont l'ambiguïté de la notion d'activité, la complexité, le coût de mise en œuvre (atténué par le numérique), la difficulté d'actualisation, le frein humain et la dissociation des responsabilités.",
    },
    {
      id: "q10",
      question: "Dans quel contexte la méthode ABC est-elle la plus pertinente ?",
      choices: [
        "Entreprise mono-produit avec des charges indirectes faibles",
        "Production standardisée en grandes séries avec procédés stables",
        "Entreprise dont les charges directes sont largement prépondérantes",
        "Charges indirectes élevées et production diversifiée en petites séries",
      ],
      answer: 3,
      explanation:
        "L'ABC apporte le plus quand les charges indirectes sont importantes et la production diversifiée (cas de Méca-Précision : 18,9 M€ d'indirects, grande série standard vs petite série personnalisée). Pour une entreprise mono-produit à indirects faibles, les centres d'analyse suffisent : aucune méthode n'est supérieure dans l'absolu, on choisit selon le contexte.",
    },
  ],
};
