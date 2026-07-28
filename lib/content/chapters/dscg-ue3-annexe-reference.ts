import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-annexe-reference.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de l'annexe de
 * référence de fin d'ouvrage — c'est ce fichier qu'on édite à la main.
 */
export const annexeReference: Chapter = {
  ...generated,
  description:
    "Annexe de référence de fin d'ouvrage : glossaire complet de l'UE3, répertoire des auteurs, des modèles et référentiels, des schémas de synthèse, bibliographie commentée, webographie et tableau de correspondance avec le référentiel officiel du DSCG.",
  flashcards: [
    {
      id: "fc1",
      front: "Qui a défini le contrôle de gestion et comment ?",
      back: "Robert Anthony : processus par lequel les managers s'assurent que les ressources sont obtenues et utilisées de manière efficace et efficiente pour réaliser les objectifs. Texte fondateur : Planning and Control Systems (1965).",
    },
    {
      id: "fc2",
      front: "Le triangle de la fraude : auteur et trois facteurs ?",
      back: "Donald Cressey. La fraude s'explique par la conjonction de trois facteurs : pression, opportunité, rationalisation. Modèle mobilisé au chapitre 5 (management des risques).",
    },
    {
      id: "fc3",
      front: "Le modèle des trois lignes de maîtrise (IIA)",
      back: "Modèle de gouvernance des risques : 1ʳᵉ ligne = les opérationnels ; 2ᵉ ligne = les fonctions de contrôle ; 3ᵉ ligne = l'audit interne.",
    },
    {
      id: "fc4",
      front: "Balanced Scorecard : auteurs et quatre perspectives ?",
      back: "Kaplan et Norton. Tableau de bord prospectif articulant quatre perspectives reliées par une chaîne de causalité : financière, clients, processus, apprentissage. Décline la stratégie en objectifs et indicateurs.",
    },
    {
      id: "fc5",
      front: "Qu'est-ce que le Beyond Budgeting et qui le porte ?",
      back: "Mouvement de Hope & Fraser prônant le dépassement du budget annuel traditionnel au profit d'objectifs relatifs, de prévisions glissantes (rolling forecasts) et d'une forte décentralisation.",
    },
    {
      id: "fc6",
      front: "Définition de la double matérialité",
      back: "Combinaison de la matérialité financière (impact des enjeux de durabilité sur l'entreprise) et de la matérialité d'impact (impact de l'entreprise sur la société et l'environnement). Principe imposé par la CSRD.",
    },
    {
      id: "fc7",
      front: "Effets de masse, de niveau et de report (masse salariale)",
      back: "Effet de masse : impact des hausses sur l'année courante. Effet de niveau : progression constatée en fin d'année. Effet de report : impact des hausses de l'année sur l'année suivante.",
    },
    {
      id: "fc8",
      front: "Que signifie GVT ?",
      back: "Glissement-Vieillissement-Technicité : évolution du salaire moyen à effectif constant, hors augmentations générales (mérite, ancienneté, promotion).",
    },
    {
      id: "fc9",
      front: "Les coûts cachés : définition et auteur",
      back: "Coûts des dysfonctionnements sociaux (absentéisme, turnover, non-qualité), invisibles en comptabilité mais bien réels. Théorie socio-économique de Henri Savall (ISEOR).",
    },
    {
      id: "fc10",
      front: "Triple bottom line : auteur et contenu",
      back: "John Elkington (Cannibals with Forks, 1997) : triple résultat « people, planet, profit », matrice conceptuelle de la performance globale.",
    },
    {
      id: "fc11",
      front: "Les trois scopes du bilan carbone (GHG Protocol)",
      back: "Scope 1 : émissions directes. Scope 2 : émissions liées à l'énergie. Scope 3 : émissions de la chaîne de valeur.",
    },
    {
      id: "fc12",
      front: "Théorie des parties prenantes : auteur et définition",
      back: "Edward Freeman (Strategic Management: A Stakeholder Approach, 1984) : une partie prenante est tout groupe ou individu qui peut affecter ou être affecté par la réalisation des objectifs de l'organisation.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Selon le glossaire de l'annexe, le budget flexible est :",
      choices: [
        "Un budget révisé chaque mois par la direction générale",
        "Un budget établi sans objectifs chiffrés pour laisser de l'autonomie aux managers",
        "Un budget recalculé pour le niveau d'activité réellement atteint, isolant l'écart sur volume de l'écart sur performance",
        "Un budget glissant réactualisé sur un horizon mobile",
      ],
      answer: 2,
      explanation:
        "Le budget flexible est recalculé pour l'activité réelle, ce qui permet de séparer l'écart dû au volume de l'écart de performance. La prévision glissante sur horizon mobile correspond, elle, au rolling forecast.",
    },
    {
      id: "q2",
      question: "Quel auteur a mis en évidence les effets comportementaux pervers de la pression budgétaire ?",
      choices: ["Chris Argyris", "Robert Simons", "Henri Bouquin", "Frederick Taylor"],
      answer: 0,
      explanation:
        "Chris Argyris est associé aux effets comportementaux pervers de la pression budgétaire (chapitre 7). Simons a proposé les leviers de contrôle (usage diagnostique / interactif), Bouquin la conception française du contrôle de gestion et du budget-contrat, Taylor l'organisation scientifique du travail et le coût standard.",
    },
    {
      id: "q3",
      question: "La matrice de Kraljic, citée dans le répertoire des modèles, sert à :",
      choices: [
        "Cartographier les parties prenantes selon leur pouvoir et leur intérêt",
        "Segmenter les achats selon le risque et le poids",
        "Hiérarchiser les risques selon probabilité et impact",
        "Décomposer les écarts budgétaires",
      ],
      answer: 1,
      explanation:
        "La matrice de Kraljic segmente le portefeuille achats (risque / poids) — chapitre 3. La cartographie pouvoir / intérêt des parties prenantes est la matrice de Mendelow, et la hiérarchisation des risques passe par la matrice probabilité × impact.",
    },
    {
      id: "q4",
      question: "La typologie de Mitchell hiérarchise les parties prenantes selon trois attributs. Lesquels ?",
      choices: [
        "Pression, opportunité, rationalisation",
        "Probabilité, impact, criticité",
        "People, planet, profit",
        "Pouvoir, légitimité, urgence",
      ],
      answer: 3,
      explanation:
        "Ronald Mitchell hiérarchise les parties prenantes selon le pouvoir, la légitimité et l'urgence (chapitre 8). Pression/opportunité/rationalisation est le triangle de la fraude de Cressey, et people/planet/profit la triple bottom line d'Elkington.",
    },
    {
      id: "q5",
      question: "Dans le référentiel COSO cité par l'annexe, le contrôle interne vise notamment :",
      choices: [
        "Uniquement la certification des comptes par le commissaire aux comptes",
        "La suppression totale des risques de l'organisation",
        "L'atteinte des objectifs, la fiabilité de l'information, la conformité et la protection du patrimoine",
        "La seule détection des fraudes internes",
      ],
      answer: 2,
      explanation:
        "Le contrôle interne (référentiel COSO, cinq composantes) est un dispositif de maîtrise des activités visant l'atteinte des objectifs, la fiabilité de l'information, la conformité et la protection du patrimoine. La certification des comptes relève de l'audit externe.",
    },
    {
      id: "q6",
      question: "Quel couple auteur / apport est correct d'après le répertoire des auteurs ?",
      choices: [
        "Kurt Lewin — les huit étapes de la conduite du changement",
        "Jay Barney — théorie des ressources (RBV) et modèle VRIO",
        "Dave Ulrich — théorie du capital humain",
        "Michel Crozier — courbe du changement",
      ],
      answer: 1,
      explanation:
        "Jay Barney est l'auteur de la théorie des ressources (RBV) et du modèle VRIO. Les huit étapes du changement sont de Kotter (Lewin propose les trois phases décristallisation / transition / recristallisation), la théorie du capital humain est de Becker et Schultz (Ulrich : rôles de la fonction RH), et la courbe du changement est de Kübler-Ross (Crozier : analyse stratégique des organisations).",
    },
    {
      id: "q7",
      question: "Selon la CSRD, décrite dans le glossaire, le reporting de durabilité impose notamment :",
      choices: [
        "La double matérialité, les normes ESRS et une vérification par un tiers",
        "Le seul bilan carbone des scopes 1 et 2",
        "Un reporting facultatif limité aux sociétés cotées américaines",
        "L'application du référentiel COSO ERM",
      ],
      answer: 0,
      explanation:
        "La CSRD (Corporate Sustainability Reporting Directive) est la directive européenne de reporting de durabilité : elle impose la double matérialité, l'application des normes ESRS (transversales, E1-E5, S1-S4, G1) et une vérification par un tiers.",
    },
    {
      id: "q8",
      question:
        "D'après le tableau de correspondance avec le référentiel officiel, la Partie 1 (concevoir la stratégie) est :",
      choices: [
        "Traitée intégralement au chapitre 1 de l'ouvrage",
        "Couverte par les chapitres 7 et 8",
        "Mobilisée en transversal, sans chapitre dédié dans ce volume",
        "Hors programme de l'UE3",
      ],
      answer: 2,
      explanation:
        "Les huit chapitres couvrent la Partie 2 (2.1 à 2.6) et les volets majeurs de la Partie 3. La Partie 1 (diagnostic stratégique, choix stratégiques, création de valeur, ~60 h) est un prérequis mobilisé en transversal dans tous les chapitres, mais ne fait pas l'objet d'un chapitre dédié : l'étudiant doit la compléter pour une couverture exhaustive.",
    },
  ],
};
