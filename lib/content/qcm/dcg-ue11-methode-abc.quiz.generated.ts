// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// QCM du manuel, complet.
import type { QuizQuestion } from "../types";

export const quiz: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Quel principe fonde la méthode ABC ?",
    "choices": [
      "Les activités consomment des ressources, les produits consomment des activités",
      "Les produits consomment des ressources directement",
      "Les ressources consomment les produits",
      "Les centres consomment les unités d'œuvre"
    ],
    "answers": [
      0
    ],
    "explanation": "En ABC, les activités consomment les ressources et les produits consomment les activités."
  },
  {
    "id": "qcm2",
    "question": "Qu'est-ce qu'une activité au sens de l'ABC ?",
    "choices": [
      "Un ensemble de tâches coordonnées consommatrices de ressources",
      "Une clé de répartition monétaire",
      "Une division fonctionnelle de l'entreprise",
      "Un centre auxiliaire"
    ],
    "answers": [
      0
    ],
    "explanation": "Une activité est un ensemble de tâches coordonnées consommant des ressources en vue d'une production."
  },
  {
    "id": "qcm3",
    "question": "Qu'est-ce qu'un inducteur d'activité ?",
    "choices": [
      "Le prix de vente d'un produit",
      "Une clé de répartition arbitraire",
      "Le total des charges d'un centre",
      "Une mesure causale de la consommation d'une activité par les objets de coûts"
    ],
    "answers": [
      3
    ],
    "explanation": "L'inducteur mesure, selon une logique de causalité, comment les objets de coûts consomment l'activité."
  },
  {
    "id": "qcm4",
    "question": "Comment se calcule le coût d'un inducteur ?",
    "choices": [
      "Charges directes / volume",
      "Volume d'inducteurs / charges de l'activité",
      "Charges de l'activité / volume d'inducteurs",
      "Charges de l'activité × volume d'inducteurs"
    ],
    "answers": [
      2
    ],
    "explanation": "Coût de l'inducteur = charges de l'activité / nombre (volume) d'inducteurs."
  },
  {
    "id": "qcm5",
    "question": "Activité Approvisionnement : 2 400 000 € pour 4 000 commandes. Quel est le coût de l'inducteur ?",
    "choices": [
      "600 €",
      "166,67 €",
      "1 000 €",
      "960 €"
    ],
    "answers": [
      0
    ],
    "explanation": "2 400 000 / 4 000 = 600 € par commande."
  },
  {
    "id": "qcm6",
    "question": "Activité Usinage : 10 800 000 € pour 270 000 heures-machine. Coût de l'inducteur ?",
    "choices": [
      "25 €",
      "54 €",
      "400 €",
      "40 €"
    ],
    "answers": [
      3
    ],
    "explanation": "10 800 000 / 270 000 = 40 € par heure-machine."
  },
  {
    "id": "qcm7",
    "question": "Activité Lancement : 3 600 000 € pour 3 600 lots. Coût de l'inducteur ?",
    "choices": [
      "100 €",
      "360 €",
      "1 000 €",
      "3 600 €"
    ],
    "answers": [
      2
    ],
    "explanation": "3 600 000 / 3 600 = 1 000 € par lot."
  },
  {
    "id": "qcm8",
    "question": "Comment se calcule le coût de revient ABC d'un produit ?",
    "choices": [
      "Charges indirectes uniquement",
      "Charges directes + somme des coûts des inducteurs imputés",
      "CA − charges variables",
      "Charges directes uniquement"
    ],
    "answers": [
      1
    ],
    "explanation": "Coût de revient ABC = charges directes + Σ (coûts des inducteurs imputés)."
  },
  {
    "id": "qcm9",
    "question": "Un produit a 38 € de charges directes et 24,42 € de charges indirectes (ABC). Quel est son coût de revient ABC ?",
    "choices": [
      "38,00 €",
      "24,42 €",
      "13,58 €",
      "62,42 €"
    ],
    "answers": [
      3
    ],
    "explanation": "38,00 + 24,42 = 62,42 €."
  },
  {
    "id": "qcm10",
    "question": "Qu'est-ce que le subventionnement croisé ?",
    "choices": [
      "Un jeu à somme nulle où surévaluer un produit sous-évalue un autre",
      "Une répartition exacte des charges",
      "Un mode de financement des stocks",
      "Une subvention publique aux produits"
    ],
    "answers": [
      0
    ],
    "explanation": "C'est un jeu à somme nulle : la surévaluation d'un coût est la contrepartie de la sous-évaluation d'un autre (Mévellec)."
  },
  {
    "id": "qcm11",
    "question": "En général, quels produits subventionnent les autres ?",
    "choices": [
      "Aucun, les coûts sont toujours exacts",
      "Les produits chers subventionnent les produits bon marché",
      "Les petites séries subventionnent les grandes séries",
      "Les grandes séries standardisées subventionnent les petites séries différenciées"
    ],
    "answers": [
      3
    ],
    "explanation": "Les grandes séries standardisées subventionnent les petites séries différenciées."
  },
  {
    "id": "qcm12",
    "question": "À quel auteur attribue-t-on le « renversement de la pyramide des coûts » ?",
    "choices": [
      "Mévellec",
      "Argyris",
      "Lorino",
      "Pyhrr"
    ],
    "answers": [
      2
    ],
    "explanation": "Lorino évoque le renversement de la pyramide : les indirectes pèsent désormais le plus."
  },
  {
    "id": "qcm13",
    "question": "Une unité d'œuvre volumique appliquée à une production différenciée :",
    "choices": [
      "Donne toujours le coût exact",
      "N'a aucun effet sur les coûts",
      "Majore le coût des grandes séries",
      "Minore le coût des séries courtes"
    ],
    "answers": [
      3
    ],
    "explanation": "Une clé volumique sur une production différenciée minore le coût des séries courtes."
  },
  {
    "id": "qcm14",
    "question": "Quel niveau d'activité est associé à l'inducteur « nombre de lots » ?",
    "choices": [
      "Niveau soutien organisation",
      "Niveau soutien produit",
      "Niveau lot",
      "Niveau unitaire"
    ],
    "answers": [
      2
    ],
    "explanation": "Le nombre de lots est l'inducteur logique des activités de niveau lot (réglage, contrôle d'un lot)."
  },
  {
    "id": "qcm15",
    "question": "En quoi consiste l'ABM (management par les activités) ?",
    "choices": [
      "Analyser comment les activités créent de la valeur et optimiser le rapport valeur/coût",
      "Calculer les coûts d'inducteurs",
      "Répartir les charges fixes au prorata de l'activité",
      "Valoriser les stocks au coût ABC"
    ],
    "answers": [
      0
    ],
    "explanation": "L'ABM pilote la valeur : il optimise le rapport valeur/coût dans une vision transversale."
  },
  {
    "id": "qcm16",
    "question": "Quelles sont des qualités d'un bon inducteur ?",
    "choices": [
      "La mesurabilité dans le SI",
      "La représentativité (varie proportionnellement au coût)",
      "La causalité (cause de la consommation de ressources)",
      "Le caractère systématiquement volumique",
      "L'arbitraire de la clé"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Un bon inducteur est causal, représentatif et mesurable ; il peut être volumique OU de déclenchement."
  },
  {
    "id": "qcm17",
    "question": "Quelles propositions figurent parmi les étapes de la méthode ABC ?",
    "choices": [
      "Calculer le coût de chaque activité",
      "Affecter les ressources aux activités",
      "Choisir l'inducteur et son volume",
      "Répartir secondairement les centres auxiliaires"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Affecter les ressources, calculer le coût des activités et choisir l'inducteur sont des étapes ABC ; la répartition secondaire est propre aux centres d'analyse."
  },
  {
    "id": "qcm18",
    "question": "Quels exemples relèvent d'inducteurs de déclenchement ?",
    "choices": [
      "Heures-machine",
      "Nombre de commandes",
      "Nombre de contrôles",
      "Nombre de lots",
      "Quantités produites"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Commandes, lots et contrôles sont des inducteurs de déclenchement ; heures-machine et quantités sont volumiques."
  },
  {
    "id": "qcm19",
    "question": "Quels sont des apports de la méthode ABC par rapport aux centres d'analyse ?",
    "choices": [
      "Un coût de mise en œuvre toujours plus faible",
      "La causalité (pourquoi et non seulement combien)",
      "L'ouverture sur le pilotage (ABM)",
      "La transversalité, proche de la chaîne de valeur",
      "La suppression de toute charge directe"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Causalité, transversalité et ouverture sur l'ABM sont les apports ; l'ABC est plus coûteuse à mettre en œuvre."
  },
  {
    "id": "qcm20",
    "question": "Quelles affirmations comparent correctement ABC et centres d'analyse ?",
    "choices": [
      "L'ABC découpe par activités, les centres par fonctions",
      "L'ABC est toujours supérieure quel que soit le contexte",
      "Le coût de mise en œuvre de l'ABC est plus élevé",
      "L'ABC utilise des inducteurs causals, les centres des UO souvent volumiques"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "L'ABC n'est pas supérieure dans l'absolu : sa pertinence dépend du contexte (indirects lourds, production diversifiée)."
  },
  {
    "id": "qcm21",
    "question": "Avec l'ABC, comment évolue le statut des charges indirectes ?",
    "choices": [
      "Elles deviennent directes par rapport aux activités",
      "Elles sont toutes affectées sans calcul aux produits",
      "Ce passage fait reculer l'arbitraire",
      "Elles disparaissent totalement",
      "Elles restent indirectes par rapport aux produits"
    ],
    "answers": [
      0,
      2,
      4
    ],
    "explanation": "Les charges deviennent directes par rapport aux activités tout en restant indirectes par rapport aux produits, ce qui réduit l'arbitraire."
  },
  {
    "id": "qcm22",
    "question": "Un inducteur peut être volumique ou de déclenchement (lots, commandes).",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : l'apport de l'ABC est précisément d'oser des inducteurs de déclenchement."
  },
  {
    "id": "qcm23",
    "question": "L'ABC « gonfle » artificiellement le coût des produits en petite série.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : l'ABC ne gonfle pas le coût, elle le révèle (le subventionnement croisé le masquait)."
  },
  {
    "id": "qcm24",
    "question": "Le subventionnement croisé est un jeu à somme nulle : le total des charges indirectes reste conservé.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : la réaffectation entre produits conserve le total des charges indirectes."
  },
  {
    "id": "qcm25",
    "question": "L'ABM se limite à constater les coûts, sans agir sur leurs causes.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : l'ABM agit sur les causes (inducteurs) pour piloter la valeur, il ne fait pas que constater."
  }
];
