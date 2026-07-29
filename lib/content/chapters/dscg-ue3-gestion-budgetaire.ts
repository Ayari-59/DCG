import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-gestion-budgetaire.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const gestionBudgetaire: Chapter = {
  ...generated,
  description:
    "Construction des budgets opérationnels (ventes, production, approvisionnements, frais généraux), budget de trésorerie et états prévisionnels, contrôle budgétaire et décomposition des écarts (prix, volume, quantité, budget flexible), puis critique du modèle (Argyris, Hope & Fraser) et approches modernes : rolling forecast, beyond budgeting, pilotage augmenté par la BI et l'IA.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'un budget ?",
      back: "La traduction chiffrée et datée des objectifs et des moyens de l'organisation, par centre de responsabilité, pour une période (généralement l'année à venir). La gestion budgétaire recouvre l'ensemble : prévision + exécution + contrôle budgétaire.",
    },
    {
      id: "fc2",
      front: "Les 5 finalités du budget",
      back: "Prévision (anticiper et quantifier les hypothèses), coordination (cohérence des budgets entre fonctions), communication (diffuser objectifs et priorités), motivation (objectifs des responsables, base d'évaluation), contrôle (référence pour comparer le réalisé au prévu).",
    },
    {
      id: "fc3",
      front: "La hiérarchie temporelle du pilotage",
      back: "Plan stratégique (3-5 ans, orientations majeures) → plan opérationnel (2-3 ans, programmes chiffrés) → budget (1 an, mensualisé, par centre de responsabilité) → contrôle budgétaire (comparaison réalisé/prévu) → reporting (remontée de l'information).",
    },
    {
      id: "fc4",
      front: "Qu'est-ce que le budget déterminant ?",
      back: "Le budget qui conditionne tous les autres. C'est généralement le budget des ventes (l'activité est limitée par la demande), parfois le budget de production si la capacité est saturée. Ordre : ventes → production → approvisionnements → charges → trésorerie et états prévisionnels.",
    },
    {
      id: "fc5",
      front: "Formule du budget de production",
      back: "Production = Ventes prévues + Stock final souhaité − Stock initial. Il faut ensuite vérifier la faisabilité au regard des capacités (heures-machine, main-d'œuvre) : un budget de production qui dépasse la capacité n'est pas réaliste.",
    },
    {
      id: "fc6",
      front: "Formule du budget des approvisionnements",
      back: "Achats = Consommations de production + Stock final souhaité − Stock initial. La constitution d'un stock final accroît les achats au-delà des consommations et mobilise de la trésorerie (lien avec le BFR).",
    },
    {
      id: "fc7",
      front: "Budget de trésorerie vs compte de résultat prévisionnel : la différence ?",
      back: "Le budget de trésorerie raisonne en flux monétaires (encaissements/décaissements) avec les décalages de paiement ; il vérifie la liquidité. Le compte de résultat prévisionnel raisonne en produits/charges d'exploitation ; il vérifie la rentabilité. Une entreprise rentable peut faire faillite par défaut de trésorerie.",
    },
    {
      id: "fc8",
      front: "Qu'est-ce que le budget flexible ?",
      back: "Le budget recalculé pour le niveau d'activité réellement atteint (standards unitaires × volume réel). Il permet de séparer l'écart sur volume d'activité (budget flexible − budget initial) de l'écart sur performance (réalisé − budget flexible).",
    },
    {
      id: "fc9",
      front: "Décomposition de l'écart sur chiffre d'affaires",
      back: "Écart sur prix = (Prix réel − Prix budgété) × Quantité réelle. Écart sur volume = (Quantité réelle − Quantité budgétée) × Prix budgété. L'écart total est leur somme — toujours vérifier que la somme des sous-écarts égale l'écart global.",
    },
    {
      id: "fc10",
      front: "Décomposition de l'écart sur coûts (matières, main-d'œuvre)",
      back: "Écart sur coût (prix) = (Coût réel − Coût standard) × Quantité réelle. Écart sur quantité (rendement) = (Quantité réelle − Quantité standard) × Coût standard. Chaque sous-écart pointe une cause et un responsable (achats vs production).",
    },
    {
      id: "fc11",
      front: "Les 3 sous-écarts sur charges indirectes",
      back: "Écart sur budget (réalisé − budget flexible : maîtrise des dépenses), écart sur activité (budget flexible − coût imputé : coût de la sous-activité, mauvaise absorption des charges fixes) et écart sur rendement ((heures réelles − heures standard) × coût standard).",
    },
    {
      id: "fc12",
      front: "Qu'est-ce que le slack budgétaire ?",
      back: "Le « matelas » que les responsables intègrent volontairement dans leur budget — sous-estimer les recettes, surestimer les coûts — pour atteindre facilement leurs objectifs. Réponse rationnelle à un système qui lie budget et évaluation ; il dégrade le réalisme du budget.",
    },
    {
      id: "fc13",
      front: "Quels auteurs critiquent le budget traditionnel ?",
      back: "Argyris (dès les années 1950) : effets pervers de la pression budgétaire sur les comportements (résistance, tensions, jeux défensifs). Hope & Fraser (années 2000) : critique radicale du Beyond Budgeting — le budget est coûteux et nuisible, il fige l'organisation.",
    },
    {
      id: "fc14",
      front: "Qu'est-ce que le rolling forecast ?",
      back: "Une prévision glissante réactualisée sur un horizon mobile (12-18 mois) : à chaque période écoulée, on en ajoute une nouvelle. La prévision reste fraîche, mais cela exige des outils adaptés, un nombre limité d'inducteurs clés et un découplage entre prévision et évaluation.",
    },
    {
      id: "fc15",
      front: "Les deux piliers du beyond budgeting (Hope & Fraser)",
      back: "Des principes de gestion adaptatifs (objectifs relatifs — battre la concurrence plutôt qu'un chiffre absolu —, allocation dynamique des ressources, planification continue) et des principes de leadership décentralisés (autonomie, confiance, responsabilisation). Exemple pionnier : Handelsbanken.",
    },
    {
      id: "fc16",
      front: "Seuil de rentabilité et levier opérationnel prévisionnels",
      back: "Seuil de rentabilité = Charges fixes / Taux de marge sur coûts variables (ex. : 180 000 / 0,40 = 450 000 €). Marge de sécurité = CA − seuil. Levier opérationnel = MCV / Résultat (ex. : 240 000 / 60 000 = 4 : 1 % de CA en plus ⇒ 4 % de résultat en plus).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Dans la construction budgétaire, quel budget est généralement le « budget déterminant » ?",
      choices: [
        "Le budget de trésorerie, car il synthétise tous les autres",
        "Le budget des investissements, car il engage le long terme",
        "Le budget des ventes, car l'activité est le plus souvent limitée par la demande",
        "Le budget des frais généraux, car ce sont des charges fixes",
      ],
      answers: [2],
      explanation:
        "On part du budget des ventes (déterminant), dont découlent la production, les approvisionnements et les charges, qui convergent vers la trésorerie et les états prévisionnels. Exception : si la capacité de production est saturée, c'est elle qui devient déterminante.",
    },
    {
      id: "q2",
      question: "Laquelle de ces fonctions ne fait PAS partie des cinq finalités du budget présentées dans le chapitre ?",
      choices: ["La prévision", "La coordination", "La motivation", "La consolidation comptable des filiales"],
      answers: [3],
      explanation:
        "Les cinq finalités sont : prévision, coordination, communication, motivation et contrôle. La consolidation comptable est une technique de comptabilité de groupe, pas une finalité du budget. À noter la tension classique entre prévision (réalisme) et motivation (ambition).",
    },
    {
      id: "q3",
      question:
        "Une entreprise prévoit de vendre 12 000 unités. Stock initial de produits finis : 800 unités ; stock final souhaité : 1 200 unités. Quelle est la production à budgéter ?",
      choices: ["11 600 unités", "12 400 unités", "12 000 unités", "14 000 unités"],
      answers: [1],
      explanation:
        "Production = Ventes + Stock final − Stock initial = 12 000 + 1 200 − 800 = 12 400 unités. Piège classique : inverser les stocks (12 000 + 800 − 1 200 = 11 600) ou oublier la variation de stock (12 000).",
    },
    {
      id: "q4",
      question:
        "Budget : 10 000 unités à 50 €. Réalisé : 9 500 unités à 52 €. Quel est l'écart sur prix de vente ?",
      choices: [
        "+ 19 000 € (favorable)",
        "+ 20 000 € (favorable)",
        "− 25 000 € (défavorable)",
        "− 6 000 € (défavorable)",
      ],
      answers: [0],
      explanation:
        "Écart sur prix = (Prix réel − Prix budgété) × Quantité réelle = (52 − 50) × 9 500 = + 19 000 € favorable. Le piège est de multiplier par la quantité budgétée (20 000 €). L'écart sur volume vaut (9 500 − 10 000) × 50 = − 25 000 € D, et l'écart global − 6 000 € D (vérification : 19 000 − 25 000).",
    },
    {
      id: "q5",
      question:
        "Standard matière : 2 kg à 8 €/kg par unité. Production réelle : 9 500 unités. Consommation réelle : 19 950 kg à 7,80 €/kg. Quel est l'écart sur quantité matière ?",
      choices: [
        "− 3 990 € (favorable)",
        "+ 7 410 € (défavorable)",
        "+ 7 600 € (défavorable)",
        "+ 3 610 € (défavorable)",
      ],
      answers: [2],
      explanation:
        "Quantité standard = 9 500 × 2 = 19 000 kg. Écart sur quantité = (19 950 − 19 000) × 8 (coût STANDARD) = + 7 600 € défavorable (surconsommation de 950 kg). Valoriser au coût réel 7,80 € (7 410 €) est le piège. L'écart sur prix vaut (7,80 − 8) × 19 950 = − 3 990 € F, et l'écart total + 3 610 € D.",
    },
    {
      id: "q6",
      question: "À quoi sert le budget flexible dans l'analyse des écarts ?",
      choices: [
        "À réviser le budget chaque trimestre en fonction de la conjoncture",
        "À isoler l'écart sur volume d'activité des écarts sur performance, en recalculant le budget au niveau d'activité réel",
        "À rendre les objectifs négociables entre direction et opérationnels",
        "À remplacer le budget annuel par une prévision glissante",
      ],
      answers: [1],
      explanation:
        "Le budget flexible applique les standards unitaires au volume réel. Écart sur volume = budget flexible − budget initial ; écart sur performance = réalisé − budget flexible. Sans lui, on impute à un atelier une « mauvaise performance » qui n'est qu'un effet de la baisse d'activité décidée ailleurs. Ne pas confondre avec le rolling forecast.",
    },
    {
      id: "q7",
      question: "Pourquoi le budget de trésorerie est-il indispensable en plus du compte de résultat prévisionnel ?",
      choices: [
        "Parce qu'il calcule le résultat net avec plus de précision",
        "Parce qu'il intègre les dotations aux amortissements que le résultat ignore",
        "Parce qu'il remplace le bilan prévisionnel",
        "Parce qu'il intègre les décalages d'encaissement/décaissement : une entreprise rentable peut faire faillite par défaut de trésorerie",
      ],
      answers: [3],
      explanation:
        "Le compte de résultat raisonne en produits/charges (rentabilité), la trésorerie en flux monétaires avec les décalages de paiement (liquidité). Un client réglant à 30 jours encaisse le mois suivant la vente. Confondre les deux logiques est un piège signalé par la fiche de révision.",
    },
    {
      id: "q8",
      question:
        "Un atelier a budgété 200 000 € de charges indirectes pour 10 000 h (dont 120 000 € fixes, 8 €/h variable, coût standard 20 €/h). Activité réelle : 9 000 h. Quel est l'écart sur activité ?",
      choices: [
        "+ 12 000 € (défavorable) : coût de la sous-activité",
        "− 2 000 € (favorable) : dépenses maîtrisées",
        "− 4 000 € (favorable) : bon rendement",
        "+ 20 000 € (défavorable) : écart global",
      ],
      answers: [0],
      explanation:
        "Budget flexible pour 9 000 h = 120 000 + 8 × 9 000 = 192 000 €. Coût imputé = 20 × 9 000 = 180 000 €. Écart sur activité = 192 000 − 180 000 = + 12 000 € défavorable : la sous-activité (9 000 h au lieu de 10 000) a mal absorbé les charges fixes (« coût de chômage »). L'écart sur budget (− 2 000 € F) et l'écart sur rendement (− 4 000 € F) sont les deux autres sous-écarts de l'exemple.",
    },
    {
      id: "q9",
      question: "Quel auteur a montré, dès les années 1950, les effets pervers de la pression budgétaire sur les comportements ?",
      choices: ["Hope & Fraser", "Chris Argyris", "Henri Bouquin", "Robert Simons"],
      answers: [1],
      explanation:
        "Argyris a mis en évidence résistances, tensions et jeux défensifs induits par la pression budgétaire : le budget mal utilisé démotive plus qu'il ne mobilise. Hope & Fraser portent la critique radicale du Beyond Budgeting (années 2000), Bouquin la lecture contractuelle du budget, Simons la distinction diagnostique/interactive.",
    },
    {
      id: "q10",
      question: "Un centre affiche un écart favorable sur ses coûts. Que faut-il en conclure ?",
      choices: [
        "Que la gestion du centre est nécessairement bonne : l'écart favorable le prouve",
        "Que le budget initial était forcément trop laxiste",
        "Rien de définitif : un écart est une information à interpréter — un écart favorable peut masquer un risque (sous-investissement, baisse de qualité)",
        "Qu'il faut réduire le budget du centre l'année suivante",
      ],
      answers: [2],
      explanation:
        "Un écart n'est pas en soi une faute ni une réussite : c'est une information à interpréter. Un écart défavorable peut résulter d'un choix délibéré (qualité supérieure), un écart favorable peut masquer un sous-investissement risqué. Confondre écart favorable et bonne gestion est un piège explicitement signalé ; réduire mécaniquement le budget illustrerait l'effet cliquet.",
    },
  ],
};
