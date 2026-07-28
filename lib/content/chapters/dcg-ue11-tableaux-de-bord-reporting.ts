import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-tableaux-de-bord-reporting.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const tableauxDeBordReporting: Chapter = {
  ...generated,
  videos: [
    { youtubeId: "S6SXOrbgIwo", title: "Tableau de bord et pilotage de la performance globale" },
  ],
  description:
    "Concevoir, analyser, critiquer et améliorer un tableau de bord de gestion : facteurs clés de succès, KPI financiers et extra-financiers (ESG), méthode OVAR, indicateurs par centre de responsabilité et le long de la chaîne de valeur, reporting et sensibilisation au balanced scorecard.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'un tableau de bord ?",
      back: "Un document de synthèse « sur mesure », constitué d'un ensemble sélectif d'indicateurs régulièrement mis à jour, destiné à un responsable pour suivre son activité, mesurer la performance, alerter sur les écarts et aider à la décision. Trois mots-clés : synthétique, sur mesure (contingent), orienté vers l'action.",
    },
    {
      id: "fc2",
      front: "Pourquoi la comptabilité ne suffit-elle pas à piloter ?",
      back: "Trois limites : la lenteur (états disponibles avec retard), la nature exclusivement monétaire des données (qualité, satisfaction, carbone non captés), et l'exhaustivité sans hiérarchisation. Le tableau de bord apporte rapidité, sélectivité et pluralité d'indicateurs financiers et extra-financiers.",
    },
    {
      id: "fc3",
      front: "Les quatre finalités du tableau de bord",
      back: "1. Outil de pilotage (informations essentielles, rapides et régulières). 2. Outil de coordination et de communication (dialogue délégant/délégataire, langage commun). 3. Outil de responsabilisation et d'évaluation (chaque indicateur rattaché à un responsable). 4. Outil d'aide à la décision — la finalité ultime : un indicateur sans action est inutile.",
    },
    {
      id: "fc4",
      front: "Les cinq qualités d'un bon tableau de bord",
      back: "Pertinence (mesurer ce qui compte, lié aux FCS), sélectivité/simplicité (une page, une dizaine d'indicateurs), fiabilité (sources traçables, calcul stable), réactivité (disponible à temps pour agir), lisibilité (compréhensible d'un coup d'œil : graphiques, codes couleur, objectif/réalisé/écart).",
    },
    {
      id: "fc5",
      front: "Qu'est-ce qu'un facteur clé de succès (FCS) ?",
      back: "Une variable d'action essentielle dont la maîtrise conditionne l'atteinte des objectifs. Issue de l'analyse stratégique, la notion repose sur l'idée que le succès s'appuie sur un nombre restreint de domaines décisifs. Les FCS sont contingents : il n'existe pas de liste universelle.",
    },
    {
      id: "fc6",
      front: "Qu'est-ce qu'un KPI (indicateur clé de performance) ?",
      back: "Une mesure quantifiée d'un facteur clé de succès, comparée à une référence (objectif, période précédente, norme sectorielle), qui permet d'apprécier le degré d'atteinte d'un objectif et de déclencher l'action.",
    },
    {
      id: "fc7",
      front: "Les trois familles d'indicateurs selon leur nature",
      back: "1. Financiers (coût, CA, marge, résultat, trésorerie) : objectifs mais tournés vers le passé. 2. Quantitatifs non financiers (volumes, délais, taux) : révèlent souvent les causes des résultats financiers. 3. Qualitatifs (satisfaction, motivation, climat social) : plus subjectifs, rendus mesurables par échelles et enquêtes.",
    },
    {
      id: "fc8",
      front: "Que signifie OVAR et quel est son principe ?",
      back: "Objectifs — Variables d'Action — Responsables : la démarche de référence pour concevoir un tableau de bord. Principe : ne jamais partir des indicateurs disponibles, mais descendre de la stratégie vers les indicateurs. Enchaînement : objectif → variable d'action (FCS) → indicateur → cible → responsable → fréquence.",
    },
    {
      id: "fc9",
      front: "Tableau de bord vs reporting : la différence ?",
      back: "Le reporting est tourné vers le haut (rendre compte à la hiérarchie ou aux actionnaires) : standardisé, exhaustif, plutôt financier. Le tableau de bord est tourné vers l'action locale (piloter son périmètre) : sur mesure, sélectif, mêlant financier et extra-financier. Les deux coexistent et se nourrissent.",
    },
    {
      id: "fc10",
      front: "Les quatre axes du balanced scorecard (Kaplan et Norton, 1992)",
      back: "Financier, client, processus internes, apprentissage organisationnel. Tableau de bord stratégique qui traduit la vision en objectifs et indicateurs cohérents, en reliant indicateurs d'effet (financier) et de cause (client, processus, apprentissage). Au DCG : sensibilisation seulement, la construction complète relève du DSCG.",
    },
    {
      id: "fc11",
      front: "Indicateurs par type de centre de responsabilité",
      back: "Centre de coûts : coût unitaire, écart sur coûts, taux de rebut. Centre de revenus : CA, panier moyen, part de marché. Centre de profit : marge, résultat, taux de marge. Centre d'investissement : ROCE, ROI, EVA. Principe de contrôlabilité : mesurer ce que le responsable maîtrise réellement.",
    },
    {
      id: "fc12",
      front: "L'emboîtement gigogne des tableaux de bord",
      back: "Le contrôle de gestion établit des tableaux de bord emboîtés, parallèles à la ligne hiérarchique : opérationnel (jour/semaine, chef d'équipe), tactique (mois/trimestre, responsable de fonction), stratégique (trimestre/année, direction générale). Chaque niveau ne fait remonter que l'information essentielle.",
    },
    {
      id: "fc13",
      front: "La grille ESG des indicateurs de durabilité",
      back: "E — environnement : carbone, énergie, eau, déchets. S — social : conditions de travail, parité, formation, sécurité. G — gouvernance : éthique, transparence, achats responsables. Au DCG : sensibilisation et traduction en mesures ; le détail des normes ESRS (CSRD) relève du DSCG.",
    },
    {
      id: "fc14",
      front: "Qu'est-ce que la loi de Goodhart ?",
      back: "« Quand une mesure devient un objectif, elle cesse d'être une bonne mesure. » Mesurer un comportement, c'est l'orienter — parfois dans le mauvais sens : court-termisme, manipulation de l'indicateur, sous-optimisation locale au détriment de la performance globale.",
    },
    {
      id: "fc15",
      front: "Les six risques liés aux indicateurs et à leur mesure",
      back: "1. Risque de mesure (donnée fausse, calcul instable). 2. Risque de pertinence (mesurer le facile plutôt que l'utile). 3. Risque de manipulation (loi de Goodhart). 4. Risque de cloisonnement (vision locale ignorant la transversalité). 5. Risque de surcharge (trop d'indicateurs). 6. Risque de greenwashing (indicateur ESG qui flatte sans refléter l'impact réel).",
    },
    {
      id: "fc16",
      front: "Qu'est-ce que le prix de cession interne (PCI) et ses trois méthodes ?",
      back: "Prix auquel un centre facture un bien ou service à un autre centre de la même entreprise. Trois méthodes : prix de marché (objectif et incitatif, suppose un marché existant), coût standard (évite de transférer l'inefficience du centre amont), coût réel (simple, mais transfère les écarts de l'amont à l'aval).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Parmi ces caractéristiques, laquelle définit le mieux un tableau de bord de gestion ?",
      choices: [
        "Un document exhaustif recensant tous les indicateurs disponibles de l'entreprise",
        "Un état comptable normalisé produit chaque mois pour les actionnaires",
        "Un document de synthèse sur mesure, constitué d'indicateurs sélectifs régulièrement mis à jour, orienté vers l'action",
        "Un fichier standardisé identique pour tous les centres de responsabilité",
      ],
      answer: 2,
      explanation:
        "Le tableau de bord est synthétique (une page, une dizaine d'indicateurs), sur mesure (contingent, jamais standardisé) et orienté vers l'action. L'exhaustivité et la standardisation sont précisément ce qu'il évite — un tableau de bord de 40 lignes est « un fichier comptable déguisé ».",
    },
    {
      id: "q2",
      question: "Pourquoi la comptabilité (financière ou de gestion) ne suffit-elle pas à piloter l'organisation ?",
      choices: [
        "Parce qu'elle est lente, exclusivement monétaire et exhaustive sans hiérarchiser",
        "Parce qu'elle est facultative dans les PME",
        "Parce qu'elle ne mesure que des données extra-financières",
        "Parce qu'elle est réservée à la direction générale",
      ],
      answer: 0,
      explanation:
        "Trois limites rendent la comptabilité insuffisante pour le pilotage : la lenteur (états disponibles avec retard, or piloter c'est réagir vite), la nature monétaire des données (elle ne capte ni la qualité, ni la satisfaction, ni l'empreinte carbone) et l'exhaustivité (elle enregistre tout sans distinguer l'essentiel de l'accessoire). C'est la réponse attendue à une question récurrente d'examen.",
    },
    {
      id: "q3",
      question: "Qu'est-ce qu'un facteur clé de succès (FCS) ?",
      choices: [
        "Un ratio financier obligatoire du reporting annuel",
        "Un indicateur quantifié comparé à une cible",
        "Un objectif chiffré fixé par la direction générale",
        "Une variable d'action essentielle dont la maîtrise conditionne l'atteinte des objectifs",
      ],
      answer: 3,
      explanation:
        "Le FCS est le levier décisif issu de l'analyse stratégique (ex. : rapidité de livraison pour la vente à distance, budget R&D pour un laboratoire). Il ne faut pas le confondre avec le KPI, qui est la mesure quantifiée du FCS comparée à une référence. Attention : il n'existe pas de liste universelle de FCS — ils sont contingents à chaque activité.",
    },
    {
      id: "q4",
      question: "Dans la méthode OVAR, quel est le bon enchaînement de la démarche ?",
      choices: [
        "Indicateurs disponibles → objectifs → responsables",
        "Objectifs → variables d'action (FCS) → indicateurs rattachés à des responsables",
        "Responsables → budgets → écarts",
        "Reporting → tableau de bord → stratégie",
      ],
      answer: 1,
      explanation:
        "OVAR = Objectifs, Variables d'Action, Responsables. On descend de la stratégie vers les indicateurs : préciser l'objectif de chaque entité, identifier les leviers essentiels (FCS), puis rattacher chaque variable — donc chaque indicateur — à un responsable qui maîtrise le levier. Partir des indicateurs disponibles est exactement l'erreur que la méthode interdit ; à l'examen, c'est la démarche et la justification qui sont évaluées, pas la liste d'indicateurs.",
    },
    {
      id: "q5",
      question: "Quelle affirmation distingue correctement le reporting du tableau de bord ?",
      choices: [
        "Le reporting est sur mesure et local ; le tableau de bord est standardisé et destiné à la hiérarchie",
        "Les deux outils sont identiques, seul le nom change",
        "Le reporting est tourné vers le haut (rendre compte), standardisé et plutôt financier ; le tableau de bord est tourné vers l'action locale, sélectif et mixte",
        "Le tableau de bord est exclusivement financier ; le reporting mêle financier et extra-financier",
      ],
      answer: 2,
      explanation:
        "C'est le piège classique du chapitre. Le reporting remonte périodiquement des informations normalisées vers les niveaux supérieurs pour rendre compte ; le tableau de bord sert au responsable à piloter son propre périmètre, avec des indicateurs sur mesure, sélectifs, financiers et extra-financiers. En pratique, les deux coexistent et se nourrissent.",
    },
    {
      id: "q6",
      question: "Quels sont les quatre axes du balanced scorecard de Kaplan et Norton ?",
      choices: [
        "Financier, client, processus internes, apprentissage organisationnel",
        "Coûts, budgets, écarts, résultats",
        "Environnement, social, gouvernance, finance",
        "Opérationnel, tactique, stratégique, prospectif",
      ],
      answer: 0,
      explanation:
        "Le balanced scorecard (tableau de bord prospectif, 1992) équilibre quatre axes — financier, client, processus internes, apprentissage organisationnel — pour traduire la stratégie en indicateurs cohérents, en reliant indicateurs d'effet (financier) et de cause (les trois autres). Au DCG, il relève de la sensibilisation : sa construction complète est réservée au DSCG.",
    },
    {
      id: "q7",
      question:
        "Un chef d'atelier de fabrication (centre de coûts) est évalué sur le ROCE de l'entreprise. Quel principe cette pratique viole-t-elle ?",
      choices: [
        "Le principe de prudence comptable",
        "Le principe de sélectivité du tableau de bord",
        "Le principe d'exhaustivité du reporting",
        "Le principe de contrôlabilité : on ne mesure un responsable que sur ce qu'il maîtrise",
      ],
      answer: 3,
      explanation:
        "Chaque type de centre appelle des indicateurs adaptés à ce que son responsable maîtrise réellement : coût unitaire et taux de rebut pour un centre de coûts, CA pour un centre de revenus, marge pour un centre de profit, ROCE/ROI/EVA pour un centre d'investissement. Le chef d'atelier ne maîtrise pas les capitaux engagés : lui plaquer le ROCE est l'erreur signalée dans le cours (exemple Rakéo).",
    },
    {
      id: "q8",
      question:
        "Le service livraison enregistre une commande comme « livrée à l'heure » dès la sortie d'entrepôt, gonflant artificiellement le taux de service. Ce comportement illustre :",
      choices: [
        "Le risque de surcharge informationnelle",
        "La loi de Goodhart : quand une mesure devient un objectif, elle cesse d'être une bonne mesure",
        "Le risque de cloisonnement entre centres",
        "Le principe de l'emboîtement gigogne",
      ],
      answer: 1,
      explanation:
        "C'est un effet pervers du pilotage par les indicateurs : les acteurs optimisent l'indicateur, pas la performance réelle (risque de manipulation). La loi de Goodhart résume ce danger. Parades : préciser le mode de calcul et croiser l'indicateur avec un indicateur de contrôle. Les autres effets pervers cités : court-termisme (repousser la maintenance pour tenir la marge) et sous-optimisation locale.",
    },
    {
      id: "q9",
      question:
        "Le site e-commerce de Rakéo suivait le « nombre de visites », qui montait sans que les ventes suivent. Quel indicateur pertinent fallait-il lui substituer, et pourquoi ?",
      choices: [
        "Le chiffre d'affaires annuel, car il est plus synthétique",
        "Le nombre de pages vues, car il affine la mesure du trafic",
        "Le taux de conversion (commandes / visites), car il mesure le FCS « transformer le trafic en ventes »",
        "Le résultat net, car il est le seul indicateur objectif",
      ],
      answer: 2,
      explanation:
        "Le nombre de visites mesure le trafic, pas la performance : c'est le piège de l'indicateur « facile à mesurer » plutôt que pertinent (risque de pertinence). Le taux de conversion — complété du taux d'abandon de panier — est directement relié au facteur clé de succès. À l'examen, c'est la justification de l'indicateur par le FCS qu'il mesure qui fait la qualité de la réponse.",
    },
    {
      id: "q10",
      question:
        "Quelle méthode de prix de cession interne évite de transférer l'inefficience du centre amont vers le centre aval ?",
      choices: [
        "Le coût réel, car il reflète fidèlement ce qui s'est passé",
        "Le coût standard (préétabli) : l'amont supporte ses propres écarts, l'aval est évalué sur ce qu'il maîtrise",
        "Le prix de marché, car il est toujours disponible",
        "La moyenne du coût réel et du prix de marché",
      ],
      answer: 1,
      explanation:
        "Avec le coût réel, toute dérive de l'atelier amont est supportée par le centre aval qui ne la maîtrise pas : l'évaluation devient injuste. Le coût standard laisse à l'amont ses propres écarts et respecte la contrôlabilité. Le prix de marché est objectif et incitatif mais suppose qu'un marché externe existe. Au DCG, le PCI est abordé en comparaison de méthodes, sans la négociation ni la fiscalité internationale (DSCG).",
    },
  ],
};
