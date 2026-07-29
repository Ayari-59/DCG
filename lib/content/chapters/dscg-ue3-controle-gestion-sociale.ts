import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-controle-gestion-sociale.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const controleGestionSociale: Chapter = {
  ...generated,
  description:
    "Pilotage du capital humain : GPEC et matrice de compétences, décomposition de la masse salariale (effets de niveau, de masse, de report, GVT, effet Noria), indicateurs sociaux (turnover, absentéisme), tableaux de bord RH, coûts cachés de Savall et enjeux ESG sociaux (index égalité, CSRD).",
  flashcards: [
    {
      id: "fc1",
      front: "Définition du contrôle de gestion sociale (Martory)",
      back: "« Un système d'aide au pilotage social de l'organisation ayant pour objectif de contribuer à la gestion des ressources humaines dans leurs performances et leurs coûts. » Il applique les méthodes du contrôle de gestion au domaine social : mesurer, analyser, piloter.",
    },
    {
      id: "fc2",
      front: "Qu'est-ce que la GPEC ?",
      back: "La gestion prévisionnelle des emplois et des compétences : démarche d'anticipation visant à réduire les écarts entre les besoins en compétences de l'organisation (dérivés de la stratégie) et ses ressources humaines disponibles, à moyen terme. 4 étapes : analyse des besoins futurs → cartographie de l'existant → identification des écarts → plans d'action (recruter, former, mobilité, externaliser).",
    },
    {
      id: "fc3",
      front: "Formule de l'effet de niveau (N)",
      back: "Effet de niveau (N) = Salaire de décembre N / Salaire de décembre N–1. Il mesure la variation de la rémunération entre deux dates précises (déc. N–1 → déc. N) : la progression « instantanée » du salaire en fin d'année.",
    },
    {
      id: "fc4",
      front: "Formule de l'effet de masse (N) et sa propriété clé",
      back: "Effet de masse (N) = MS annuelle N / (Salaire de décembre N–1 × 12). Il mesure l'impact des augmentations de N sur la masse salariale de N. Il est d'autant plus FORT que les augmentations sont PRÉCOCES dans l'année (une hausse en janvier joue sur 12 mois, en décembre sur 1 seul).",
    },
    {
      id: "fc5",
      front: "Formule de l'effet de report (N–1 → N) et sa propriété clé",
      back: "Effet de report (N–1→N) = (Salaire de décembre N–1 × 12) / MS annuelle N–1. Il mesure l'impact des augmentations de N–1 sur la masse salariale de N (coût « en année pleine »). Il est d'autant plus FORT que les augmentations sont TARDIVES dans l'année.",
    },
    {
      id: "fc6",
      front: "Les deux relations fondamentales entre les effets de masse salariale",
      back: "1) Variation de la MS (N–1 → N) = Effet de masse (N) × Effet de report (N–1 sur N). 2) Effet de niveau (N) = Effet de masse (N) × Effet de report (N sur N+1). Tous les effets se définissent comme des coefficients multiplicateurs (1 + taux).",
    },
    {
      id: "fc7",
      front: "Que signifie GVT ?",
      back: "Glissement – Vieillissement – Technicité : l'évolution du salaire moyen à effectif constant, hors augmentations générales. Glissement = augmentations individuelles au mérite sans changement de catégorie ; Vieillissement = augmentations liées à l'ancienneté ; Technicité = augmentations liées à une promotion ou un changement de qualification.",
    },
    {
      id: "fc8",
      front: "Qu'est-ce que l'effet Noria ?",
      back: "La baisse de la masse salariale, à effectif constant, provoquée par le remplacement de salariés âgés bien rémunérés (départs en retraite) par des jeunes moins payés. Effet de structure favorable au coût, mais qui peut cacher une perte de compétences et d'expérience (lien GPEC).",
    },
    {
      id: "fc9",
      front: "Masse salariale brute vs masse salariale chargée",
      back: "Brute : ensemble des rémunérations brutes versées aux salariés (salaire de base, primes, heures supplémentaires, avantages). Chargée : y ajoute les cotisations patronales (≈ 40-45 % du brut), soit un coût total employeur d'environ 1,4 à 1,5 fois le brut. La MS représente souvent 50 à 80 % des charges d'exploitation dans les services.",
    },
    {
      id: "fc10",
      front: "Formule du turnover et coût de remplacement d'un salarié",
      back: "Turnover = (Départs + Arrivées) / 2 / Effectif moyen (version simple : Départs / Effectif moyen). Le coût de remplacement (départ, recrutement, intégration, moindre productivité) est fréquemment estimé entre 6 mois et 1 an de salaire.",
    },
    {
      id: "fc11",
      front: "Formules : absentéisme, taux de fréquence et taux de gravité des AT",
      back: "Taux d'absentéisme = Heures d'absence / Heures théoriques. Taux de fréquence = AT avec arrêt × 1 000 000 / heures travaillées. Taux de gravité = jours perdus × 1 000 / heures travaillées.",
    },
    {
      id: "fc12",
      front: "Les 5 indicateurs de dysfonctionnement social générateurs de coûts cachés (Savall)",
      back: "Absentéisme, accidents du travail, rotation du personnel (turnover), non-qualité, écarts de productivité directe. Ces coûts sont invisibles dans la comptabilité classique mais considérables ; les chiffrer est le rôle du contrôle de gestion sociale.",
    },
    {
      id: "fc13",
      front: "Capital humain (Becker) et théorie des ressources (Barney)",
      back: "Becker/Schultz : le capital humain (compétences, connaissances, expériences) est un actif productif dans lequel on investit (formation), non une simple charge. Barney (RBV/VRIO) : une ressource valorisable, rare, difficilement imitable et organisée fonde un avantage concurrentiel durable — ce que le capital humain réunit.",
    },
    {
      id: "fc14",
      front: "Les 4 rôles de la fonction RH selon Ulrich",
      back: "Expert administratif (processus quotidiens), champion des salariés (attentes des personnes), agent du changement (transformations) et partenaire stratégique (aligner la politique RH sur la stratégie). Le contrôle de gestion sociale outille ce rôle de partenaire stratégique.",
    },
    {
      id: "fc15",
      front: "Bilan social vs tableau de bord RH",
      back: "Bilan social (loi de 1977, obligatoire au-delà de 300 salariés) : document exhaustif et rétrospectif de données sociales sur 3 ans, outil d'information et de dialogue social. Tableau de bord RH : ensemble sélectif et hiérarchisé d'indicateurs, à vocation de pilotage — il sélectionne, alerte et oriente l'action.",
    },
    {
      id: "fc16",
      front: "Les 4 niveaux de maturité du people analytics",
      back: "Descriptif (que s'est-il passé ? reporting), diagnostique (pourquoi ?), prédictif (que va-t-il se passer ? ex. turnover prédictif), prescriptif (que faire ?). La plupart des organisations maîtrisent le descriptif mais peinent à atteindre le prédictif.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Quelle distinction le chapitre établit-il entre contrôle de gestion sociale et audit social ?",
      choices: [
        "Le contrôle de gestion sociale est externe, l'audit social est interne",
        "Ce sont deux noms de la même démarche",
        "Le contrôle de gestion sociale est un dispositif permanent de pilotage ; l'audit social est une démarche périodique d'évaluation",
        "L'audit social porte sur les coûts, le contrôle de gestion sociale sur la conformité",
      ],
      answers: [2],
      explanation:
        "Le contrôle de gestion sociale pilote en continu (indicateurs, tableaux de bord, budgets), tandis que l'audit social évalue périodiquement la conformité, l'efficacité et la cohérence des politiques sociales. Peretti distingue trois niveaux d'audit : conformité, efficacité, stratégique.",
    },
    {
      id: "q2",
      question:
        "Le salaire mensuel total de décembre N–1 est de 100 000 €. Une augmentation générale de 3 % est accordée au 1ᵉʳ juillet N (effectif constant, pas de hausse en N–1). Quel est l'effet de masse de l'année N ?",
      choices: ["+ 3 %", "+ 1,5 %", "+ 1,48 %", "+ 6 %"],
      answers: [1],
      explanation:
        "MS(N) = (100 000 × 6) + (103 000 × 6) = 1 218 000 €. Masse de référence sans augmentation = 100 000 × 12 = 1 200 000 €. Effet de masse = 1 218 000 / 1 200 000 = 1,015, soit + 1,5 % : la hausse de 3 % à mi-année ne porte que sur 6 mois. + 3 % est l'effet de niveau, + 1,48 % l'effet de report sur N+1.",
    },
    {
      id: "q3",
      question: "L'effet de masse d'une augmentation de salaire est d'autant plus fort que l'augmentation intervient :",
      choices: [
        "Tard dans l'année (fin d'année)",
        "De façon étalée sur plusieurs mois",
        "Peu importe la date, seul le taux compte",
        "Tôt dans l'année (début d'année)",
      ],
      answers: [3],
      explanation:
        "Une augmentation en janvier produit son plein effet sur les 12 mois de l'année ; la même en décembre n'a d'effet que sur un mois. C'est l'inverse pour l'effet de report, maximal quand les hausses sont tardives. Confondre ces deux logiques est un piège classique de l'épreuve.",
    },
    {
      id: "q4",
      question: "Quelle relation fondamentale relie la variation de la masse salariale entre N–1 et N aux effets ?",
      choices: [
        "Variation de la MS = Effet de masse (N) × Effet de report (N–1 sur N)",
        "Variation de la MS = Effet de niveau (N) × Effet de masse (N)",
        "Variation de la MS = Effet de niveau (N) / Effet de report (N–1 sur N)",
        "Variation de la MS = Effet de masse (N) + Effet de report (N–1 sur N)",
      ],
      answers: [0],
      explanation:
        "La variation observée se décompose en deux causes multiplicatives (les effets sont des coefficients 1 + taux) : ce qui a été décidé en N (effet de masse) et l'héritage des décisions de N–1 (effet de report). La seconde relation du cours est : effet de niveau (N) = effet de masse (N) × effet de report (N sur N+1).",
    },
    {
      id: "q5",
      question:
        "Une augmentation générale de 4 % est accordée au 1ᵉʳ octobre N (aucune autre hausse, effectif constant). Quel est l'effet de masse sur l'année N ?",
      choices: ["+ 4 %", "+ 3 %", "+ 1 %", "+ 2 %"],
      answers: [2],
      explanation:
        "L'augmentation ne porte que sur 3 mois (octobre à décembre). Pour un salaire mensuel S : MS(N) = 9S + 3 × 1,04S = 12,12S, contre 12S sans hausse, soit 12,12/12 = 1,01 = + 1 % (4 % × 3/12). Le report sur N+1 sera en revanche élevé : c'est le coût « en année pleine » que subira l'exercice suivant.",
    },
    {
      id: "q6",
      question: "Dans l'effet GVT, le « vieillissement » désigne :",
      choices: [
        "Les augmentations individuelles au mérite, sans changement de catégorie",
        "Les augmentations liées à l'ancienneté (avancement automatique)",
        "Les augmentations liées à une promotion ou un changement de qualification",
        "Le départ en retraite des salariés les plus âgés",
      ],
      answers: [1],
      explanation:
        "GVT = Glissement (mérite, sans changement de catégorie) + Vieillissement (ancienneté) + Technicité (promotion, changement de qualification). Le GVT mesure la dérive « naturelle » du salaire moyen à effectif constant, hors augmentations générales — le départ des seniors relève, lui, de l'effet Noria.",
    },
    {
      id: "q7",
      question:
        "Au cours de l'année N, 4 salariés seniors payés en moyenne 52 000 € partent en retraite et sont remplacés par 4 juniors payés 34 000 €. Quel est l'impact de ces remplacements sur la masse salariale annuelle (effet Noria) ?",
      choices: ["+ 72 000 €", "− 18 000 €", "0 € (effectif constant)", "− 72 000 €"],
      answers: [3],
      explanation:
        "Effet Noria = 4 × (34 000 − 52 000) = 4 × (− 18 000) = − 72 000 €. À effectif constant, la déformation de la structure (seniors remplacés par des juniors moins payés) réduit la masse salariale. Attention : − 18 000 € n'est que l'écart par personne, et l'effectif constant n'implique pas une masse constante. Ce gain de coût peut masquer une perte de compétences (lien GPEC).",
    },
    {
      id: "q8",
      question: "Selon le chapitre, le coût total de remplacement d'un salarié qui quitte l'entreprise est fréquemment estimé à :",
      choices: [
        "Entre 6 mois et 1 an de salaire (davantage pour les profils experts)",
        "Environ un mois de salaire",
        "Uniquement les frais d'annonces et de cabinet de recrutement",
        "Environ trois fois le salaire annuel, quel que soit le poste",
      ],
      answers: [0],
      explanation:
        "Le coût de remplacement cumule les coûts de départ, de recrutement, d'intégration et de formation, et la moindre productivité pendant la montée en compétence : souvent 6 mois à 1 an de salaire. Exemple du cours : 500 salariés, turnover de 12 % (60 départs) à 30 000 € par remplacement = 1,8 M€ par an — un coût caché qui justifie les investissements de fidélisation.",
    },
    {
      id: "q9",
      question:
        "Lequel de ces éléments ne fait PAS partie des cinq indicateurs de dysfonctionnement social générateurs de coûts cachés identifiés par Savall ?",
      choices: [
        "L'absentéisme",
        "La rotation du personnel",
        "Le montant des charges sociales patronales",
        "La non-qualité",
      ],
      answers: [2],
      explanation:
        "Les cinq dysfonctionnements de Savall (ISEOR) sont : absentéisme, accidents du travail, rotation du personnel, non-qualité et écarts de productivité directe. Les charges patronales sont un coût visible et comptabilisé, pas un coût caché : la thèse de Savall porte précisément sur les coûts invisibles dans la comptabilité classique (sursalaires, surtemps, non-production...).",
    },
    {
      id: "q10",
      question: "L'index de l'égalité professionnelle entre les femmes et les hommes est :",
      choices: [
        "Un indicateur facultatif, laissé à l'appréciation de chaque entreprise",
        "Une note sur 100, à publier annuellement, imposant des mesures correctives en deçà d'un seuil",
        "Le ratio masse salariale / valeur ajoutée calculé par sexe",
        "Le pourcentage de femmes dans l'effectif total de l'entreprise",
      ],
      answers: [1],
      explanation:
        "L'index agrège plusieurs indicateurs (écart de rémunération F/H, écarts d'augmentations et de promotions, salariées augmentées au retour de congé maternité, parité des plus hautes rémunérations) en une note sur 100, publiée chaque année ; sous un seuil, l'entreprise doit prendre des mesures correctives sous peine de sanction. Il illustre la quantification réglementaire des enjeux sociaux, dont le contrôle de gestion sociale produit les indicateurs.",
    },
  ],
};
