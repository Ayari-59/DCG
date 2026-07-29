import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-procedure-budgetaire.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const procedureBudgetaire: Chapter = {
  ...generated,
  description:
    "La démarche budgétaire comme outil de pilotage : fondements et finalités du budget, articulation plan — programmes — budgets, cycle annuel et navette budgétaire, centres de responsabilité, budget flexible, BBZ, et regard critique (slack, Beyond Budgeting).",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'un budget ?",
      back: "Un ensemble cohérent de prévisions chiffrées — ventes, production, approvisionnements, investissements, financement, personnel — exprimées en valeur monétaire. Le réseau des budgets assure la cohérence à court terme de l'ensemble et permet la consolidation en documents de synthèse prévisionnels.",
    },
    {
      id: "fc2",
      front: "Qu'est-ce que la gestion budgétaire ?",
      back: "Un mode de gestion à court terme qui englobe l'ensemble des activités d'une organisation. Elle comprend une période de budgétisation (prévision) suivie d'une période de contrôle budgétaire (suivi des écarts).",
    },
    {
      id: "fc3",
      front: "Quelle différence entre budget et programme ?",
      back: "Le budget est une prévision chiffrée en valeur MONÉTAIRE. Le programme est une prévision chiffrée NON monétaire (quantités, heures, tonnes). Ex. : le programme des approvisionnements décrit des quantités et des dates ; le budget des approvisionnements en chiffre le montant.",
    },
    {
      id: "fc4",
      front: "L'articulation plan — programmes — budgets",
      back: "Les plans pluriannuels (3 à 5 ans) explicitent les orientations stratégiques ; les programmes précisent à plus court terme les niveaux d'activité en unités physiques ; les budgets chiffrent en unités monétaires la mise en œuvre d'un programme, via des hypothèses économiques sur les prix et les coûts.",
    },
    {
      id: "fc5",
      front: "Les cinq fonctions du budget à citer à l'examen",
      back: "Prévision · coordination · communication · motivation · contrôle. Situer le budget dans ces cinq rôles avant tout calcul montre une compréhension d'ensemble de la démarche (compétence 3.1).",
    },
    {
      id: "fc6",
      front: "Les deux principes qui gouvernent le réseau des budgets",
      back: "En amont, tous les budgets découlent des prévisions de ventes : le budget des ventes est le premier construit. En aval, tous les budgets ont des conséquences sur la trésorerie : le budget de trésorerie est le dernier établi, il fait la synthèse financière.",
    },
    {
      id: "fc7",
      front: "Qu'est-ce que la navette budgétaire ?",
      back: "Un processus itératif d'harmonisation : les projets de budgets font l'aller-retour entre les unités décentralisées et la cellule de coordination (direction financière ou contrôle de gestion), par analogie avec la navette parlementaire. Elle réduit les incohérences, dégage des compromis et opère les arbitrages — le budget explicite des objectifs négociés, non imposés.",
    },
    {
      id: "fc8",
      front: "Le calendrier budgétaire type (exercice calé sur l'année civile)",
      back: "Septembre : note d'orientation générale (lettre de cadrage) de la direction. Octobre : budgets décentralisés établis par chaque composante. Novembre : navette budgétaire et arbitrages. Décembre : budget définitif arrêté, puis mensualisé. En cours d'exercice : suivi mensuel des écarts.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce qu'un centre de responsabilité ?",
      back: "Une subdivision de l'organisation regroupée autour d'un responsable qui dispose de moyens et d'une autonomie de gestion pour atteindre un objectif assigné. Son contrôle suppose un indicateur de performance et la maîtrise, par le responsable, du domaine concerné.",
    },
    {
      id: "fc10",
      front: "Les quatre types de centres de responsabilité",
      back: "Centres de coûts (jugés sur coûts, qualité, délais), centres de chiffre d'affaires (jugés sur le CA réalisé), centres de profit (jugés sur charges ET produits, donc sur la marge), centres d'investissement (délégation élargie aux immobilisations, jugés sur la rentabilité du capital investi).",
    },
    {
      id: "fc11",
      front: "Principe de responsabilité et principe de contrôlabilité",
      back: "Responsabilité : un responsable répond de toutes les conséquences des décisions relevant de sa délégation. Contrôlabilité : il ne répond que des éléments qu'il maîtrise — d'où l'intérêt de raisonner sur une contribution (coûts partiels) ou de neutraliser les éléments non contrôlables, plutôt que d'imputer arbitrairement des frais de siège.",
    },
    {
      id: "fc12",
      front: "La formule du budget flexible",
      back: "B = v · N + F, où N = nombre d'unités d'œuvre, v = coût variable de l'unité d'œuvre, F = frais fixes totaux. En pratique, on présente au moins trois hypothèses : moyenne (la plus probable), basse (pessimiste) et haute (optimiste).",
    },
    {
      id: "fc13",
      front: "Qu'est-ce que le budget base zéro (BBZ) ?",
      back: "Procédure popularisée par Peter Pyhrr (1970) qui exclut par principe la reconduction : rien n'est jamais acquis, chaque dépense doit être justifiée indépendamment des pratiques antérieures. L'activité est découpée en modules, avec projets alternatifs et complémentaires hiérarchisés par un comité.",
    },
    {
      id: "fc14",
      front: "Qu'est-ce que le slack budgétaire ?",
      back: "La marge de manœuvre ou « matelas » que l'on négocie lors de la construction des budgets (théorie du slack organisationnel de Cyert et March). On sait pouvoir fonctionner avec 100, on demande 120, on obtient 110 : il devient facile de tenir le budget, voire de dégager un écart favorable.",
    },
    {
      id: "fc15",
      front: "Que sont les coûts discrétionnaires ?",
      back: "Les charges, en général indirectes et fixes, des services fonctionnels (direction, comptabilité, informatique, R&D...), laissées « à la discrétion » des managers. Difficiles à contrôler (tâches hétérogènes, non taylorisables), elles tendent à une dérive inflationniste.",
    },
    {
      id: "fc16",
      front: "Qu'est-ce que le Beyond Budgeting ?",
      back: "Un mouvement critique qui propose d'abandonner le budget annuel au profit d'un pilotage plus réactif : objectifs relatifs (benchmark interne ou externe), décentralisation de la décision et prévisions glissantes (rolling forecasts) régulièrement réactualisées.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Une prévision chiffrée exprimée en quantités physiques (tonnes, heures-machine) relève :",
      choices: [
        "Du budget",
        "Du plan stratégique",
        "Du programme",
        "De la liasse budgétaire",
      ],
      answers: [2],
      explanation:
        "On réserve le terme budget aux prévisions chiffrées en valeur monétaire. Une prévision non monétaire (quantités, heures, tonnes) relève du programme : le « programme des approvisionnements » décrit quantités et dates, le « budget des approvisionnements » en chiffre le montant. C'est un piège de vocabulaire signalé par le chapitre.",
    },
    {
      id: "q2",
      question:
        "Dans le réseau des budgets, quel budget est construit en premier, et lequel est établi en dernier ?",
      choices: [
        "Le budget de production en premier, le budget des ventes en dernier",
        "Le budget des ventes en premier, le budget de trésorerie en dernier",
        "Le budget des investissements en premier, le budget de production en dernier",
        "Le budget de trésorerie en premier, le budget des ventes en dernier",
      ],
      answers: [1],
      explanation:
        "Deux principes gouvernent l'enchaînement : en amont, tous les budgets découlent des prévisions de ventes (le budget des ventes est donc le premier construit) ; en aval, tous les budgets ont des conséquences sur la trésorerie (le budget de trésorerie est le dernier établi, il fait la synthèse et vérifie « si ça passe ou si ça casse »).",
    },
    {
      id: "q3",
      question:
        "Dans le calendrier budgétaire type, la « navette budgétaire » intervient :",
      choices: [
        "En septembre, lors de la diffusion de la note d'orientation",
        "En octobre, lors de l'établissement des budgets décentralisés",
        "En décembre, lors de l'arrêté du budget définitif",
        "En novembre, lors de l'harmonisation des projets de budgets",
      ],
      answers: [3],
      explanation:
        "Le scénario classique : septembre = note d'orientation (lettre de cadrage) ; octobre = budgets décentralisés ; novembre = navette budgétaire (allers-retours itératifs entre unités et cellule de coordination, par analogie avec la navette parlementaire) ; décembre = budget définitif, ensuite mensualisé.",
    },
    {
      id: "q4",
      question:
        "Un responsable d'agence commerciale jugé uniquement sur le chiffre d'affaires réalisé dirige :",
      choices: [
        "Un centre de chiffre d'affaires",
        "Un centre de coûts",
        "Un centre de profit",
        "Un centre d'investissement",
      ],
      answers: [0],
      explanation:
        "C'est un centre de chiffre d'affaires. Attention à l'effet pervers signalé par le cours : pour « faire du chiffre », un commercial peut casser les prix par des remises excessives ou négliger la solvabilité d'un client. Le centre de profit, jugé sur charges ET produits, limite précisément ce risque.",
    },
    {
      id: "q5",
      question:
        "Un atelier a un coût variable de 5 € par heure-machine et 10 000 € de frais fixes. Quel est son budget flexible pour une activité de 6 000 heures ?",
      choices: ["30 000 €", "40 000 €", "45 000 €", "35 000 €"],
      answers: [1],
      explanation:
        "B = v · N + F = 5 × 6 000 + 10 000 = 40 000 €. Le budget combine une part fixe constante (10 000 €) et une part variable proportionnelle au volume (30 000 €). Répondre 30 000 € oublierait les frais fixes ; 35 000 € et 45 000 € correspondent aux hypothèses basse (5 000 h) et haute (7 000 h).",
    },
    {
      id: "q6",
      question: "Le principe fondateur du budget base zéro (BBZ) est :",
      choices: [
        "Reconduire le budget précédent majoré d'un pourcentage",
        "Confier tous les arbitrages à la direction générale",
        "Justifier chaque dépense chaque année, indépendamment des pratiques antérieures",
        "Supprimer le budget annuel au profit de prévisions glissantes",
      ],
      answers: [2],
      explanation:
        "Le BBZ (Pyhrr, 1970) exclut par principe la reconduction : rien n'est jamais acquis, chaque dépense doit être justifiée, on « recommence à zéro » chaque année. La reconduction mécanique (base + pourcentage) est exactement ce qu'il combat ; l'abandon du budget au profit des rolling forecasts relève du Beyond Budgeting, pas du BBZ.",
    },
    {
      id: "q7",
      question:
        "Un responsable sait pouvoir fonctionner avec 100, demande 120 et obtient 110 : ce comportement illustre :",
      choices: [
        "Le budget flexible",
        "Le slack budgétaire",
        "La procédure « sunset »",
        "Le principe de contrôlabilité",
      ],
      answers: [1],
      explanation:
        "C'est le slack budgétaire (Cyert et March) : la marge de sécurité ou « matelas » négociée lors de la construction des budgets. Il devient alors facile de tenir le budget, voire de dégager un écart favorable en dépensant 109. Effet pervers : au lieu de réduire les coûts, la négociation les augmente.",
    },
    {
      id: "q8",
      question:
        "Selon le principe de contrôlabilité, un responsable de centre :",
      choices: [
        "Répond de tous les coûts de l'entreprise, y compris les frais de siège imputés",
        "Est jugé sur le budget initial quel que soit le niveau d'activité réel",
        "Doit minimiser ses coûts à tout prix",
        "Ne répond que des éléments qu'il maîtrise",
      ],
      answers: [3],
      explanation:
        "Le principe de contrôlabilité veut qu'un responsable ne réponde que des éléments qu'il maîtrise — d'où l'intérêt de raisonner sur une contribution (coûts partiels) ou de neutraliser les éléments non contrôlables (coûts standards), plutôt que d'imputer arbitrairement des frais de siège. Et un centre de coûts doit optimiser ses coûts compte tenu de la qualité, pas les minimiser à tout prix.",
    },
    {
      id: "q9",
      question:
        "Le mouvement du Beyond Budgeting propose notamment :",
      choices: [
        "De remplacer le budget figé par des prévisions glissantes et des objectifs relatifs",
        "De renforcer la centralisation des décisions budgétaires",
        "De généraliser la reconduction du budget de l'année précédente",
        "D'allonger le cycle budgétaire annuel à cinq ans",
      ],
      answers: [0],
      explanation:
        "Le Beyond Budgeting préconise d'abandonner le budget annuel : objectifs relatifs (benchmark interne ou externe) au lieu d'objectifs fixes négociés, décentralisation de la décision, et prévisions glissantes (rolling forecasts) régulièrement réactualisées. Le cours nuance : l'abandonner totalement serait « jeter le bébé avec l'eau du bain » — la plupart des organisations assouplissent le budget sans le supprimer.",
    },
    {
      id: "q10",
      question:
        "Parmi ces propositions sur la démarche budgétaire, laquelle est exacte ?",
      choices: [
        "Un budget équilibré en résultat garantit une trésorerie équilibrée",
        "Les dotations aux amortissements figurent dans les décaissements du budget de trésorerie",
        "Un budget équilibré en résultat peut être en tension de trésorerie, car le résultat n'est pas la trésorerie",
        "Le budget de trésorerie détaillé est au cœur de la compétence 3.1",
      ],
      answers: [2],
      explanation:
        "Le résultat n'est pas la trésorerie : créances, stocks et décalages d'encaissement/décaissement peuvent mettre en tension la trésorerie d'un budget pourtant équilibré en résultat. Erreur classique signalée : les dotations aux amortissements et provisions n'entraînent aucun décaissement. Enfin, le budget de trésorerie détaillé et les comptes prévisionnels sont hors programme de la compétence 3.1.",
    },
  ],
};
