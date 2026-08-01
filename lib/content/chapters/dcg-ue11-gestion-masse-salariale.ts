import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-gestion-masse-salariale.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const gestionMasseSalariale: Chapter = {
  ...generated,
  videos: [{ youtubeId: "REfPRc8TMFU", title: "Masse salariale" }],
  description:
    "Prévision de la masse salariale par la méthode des indices (effectif stable, sortants, embauchés), analyse des écarts entre prévu et réalisé (effectif, structure professionnelle, taux nominal) et indicateurs de pilotage RH. En ouverture DSCG : les effets niveau, masse, report, GVT et noria.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce que la masse salariale ?",
      back: "Le coût réel des salaires versés à une population donnée pour une période donnée, généralement l'année. C'est le premier poste de dépenses de la plupart des organisations (de 25 % à plus de 90 % des charges totales selon le secteur).",
    },
    {
      id: "fc2",
      front: "Formule de la masse salariale chargée",
      back: "Masse salariale chargée = Rémunérations brutes × (1 + taux de charges patronales). Elle recouvre les rémunérations brutes (salaires nets + cotisations salariales) et les cotisations patronales correspondantes.",
    },
    {
      id: "fc3",
      front: "Rémunération brute, nette, « super-brut » : la différence ?",
      back: "Brute : salaire avant cotisations salariales. Nette : ce que perçoit effectivement le salarié. Coût total employeur (« super-brut ») : brut + cotisations patronales — c'est lui qui mesure le coût supporté par l'organisation.",
    },
    {
      id: "fc4",
      front: "Les 4 familles de facteurs d'évolution de la masse salariale",
      back: "1. Augmentations générales (mesures collectives). 2. Augmentations individuelles (au mérite). 3. Variations d'effectif (embauches, départs). 4. Variations de structure (qualification, ancienneté de la population).",
    },
    {
      id: "fc5",
      front: "Qu'est-ce que l'effet cliquet ?",
      back: "La rigidité des salaires à la baisse : une augmentation accordée est presque toujours définitive. Une décision salariale engage donc l'organisation pour les années suivantes — d'où l'importance d'en mesurer l'impact avant de l'accorder.",
    },
    {
      id: "fc6",
      front: "Les 3 populations distinguées pour la prévision de la masse salariale",
      back: "Personnel sortant (rémunéré du 1er janvier à la date de départ), effectif stable (présent toute l'année, 12 mois), personnel embauché (rémunéré de la date d'embauche au 31 décembre).",
    },
    {
      id: "fc7",
      front: "La méthode des indices (base 100 = décembre N)",
      back: "Chaque augmentation se traduit par un indice mensuel en base 100 au salaire de décembre N ; le cumul des 12 indices donne le coefficient annuel à appliquer au salaire de référence. Les augmentations successives sont multiplicatives : +1 % puis +1,5 % donnent 1,01 × 1,015 = 1,02515.",
    },
    {
      id: "fc8",
      front: "Le modèle général du coût de main-d'œuvre directe et ses 3 sous-écarts",
      back: "Coût = N × H × S (effectif × heures par salarié × salaire horaire). L'écart total se décompose en écart sur effectif (volume), écart sur heures (quantité) et écart sur salaire (prix), sur le modèle des écarts sur charges directes du PCG.",
    },
    {
      id: "fc9",
      front: "Formules des écarts sur effectif, sur heures et sur salaire",
      back: "Écart sur effectif = (Nr − Np) × Hp × Sp. Écart sur heures = Nr × (Hr − Hp) × Sp. Écart sur salaire = Nr × Hr × (Sr − Sp). Convention : l'écart sur quantité s'évalue au prix prévu, l'écart sur prix à la quantité réelle.",
    },
    {
      id: "fc10",
      front: "Qu'est-ce que l'écart de structure professionnelle ?",
      back: "L'impact du changement de répartition des effectifs entre catégories (cadres, techniciens, employés), valorisé aux salaires prévus. Équation de contrôle : Écart total = Écart sur effectif total + Écart de structure + Écart sur taux nominal.",
    },
    {
      id: "fc11",
      front: "Convention de signe des écarts sur masse salariale",
      back: "Un écart positif (réalisé > prévu) est défavorable : la charge a augmenté. Un écart négatif est favorable. Mais un écart favorable n'est pas toujours une bonne nouvelle (ex. : baisse d'effectif subie qui fait perdre des compétences).",
    },
    {
      id: "fc12",
      front: "Qu'est-ce que l'effet de niveau ? (hors programme DCG — DSCG)",
      back: "L'évolution de la rémunération entre deux dates (en général décembre N et décembre N+1). Coefficient = Salaire déc. N+1 / Salaire déc. N. Il est indépendant des dates d'augmentation (« effet apparent »).",
    },
    {
      id: "fc13",
      front: "Qu'est-ce que l'effet de masse ? (hors programme DCG — DSCG)",
      back: "La hausse réelle subie sur l'année : MS annuelle réelle rapportée à la MS qui aurait résulté du salaire de janvier sur 12 mois. Coefficient = MS annuelle N / (Salaire jan. × 12). Il dépend des dates : plus la hausse est tardive, plus l'effet de masse est faible.",
    },
    {
      id: "fc14",
      front: "Effet de report et relation fondamentale entre les effets",
      back: "Effet de report = incidence sur N+1 des augmentations décidées en N, même sans nouvelle hausse : (Salaire jan. N+1 × 12) / MS annuelle N. Relation fondamentale : Effet de niveau (N) = Effet de masse (N) × Effet de report (N → N+1).",
    },
    {
      id: "fc15",
      front: "Que recouvre l'effet GVT ?",
      back: "Glissement (augmentations au mérite, hors ancienneté), Vieillissement (hausses automatiques liées à l'ancienneté), Technicité (accès à une qualification supérieure). Il regroupe les facteurs structurels autres que l'effectif.",
    },
    {
      id: "fc16",
      front: "Qu'est-ce que l'effet de noria ?",
      back: "L'économie réalisée en remplaçant des salariés âgés par de plus jeunes, de même catégorie mais moins bien payés. Il se calcule sur les sortants remplacés poste par poste, à compter du remplacement. Ex. : 3 × (40 000 − 50 000) + 5 × (22 000 − 30 000) = − 70 000 € (favorable).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Comment se calcule la masse salariale « chargée » ?",
      choices: [
        "Salaires nets × (1 + taux de charges salariales)",
        "Rémunérations brutes − cotisations patronales",
        "Rémunérations brutes × (1 + taux de charges patronales)",
        "Salaires nets + primes et avantages en nature",
      ],
      answers: [2],
      explanation:
        "MS chargée = rémunérations brutes × (1 + taux de charges patronales). Elle recouvre les rémunérations brutes (nets + cotisations salariales) et les cotisations patronales — c'est le coût total employeur, parfois dit « super-brut ».",
    },
    {
      id: "q2",
      question:
        "Un salarié perçoit 2 000 € en décembre N. En N+1, il bénéficie de +2 % au 1er mai puis de +1 % au 1er octobre. Quel est l'effet de niveau sur N+1 ?",
      choices: ["+3 %", "+3,02 %", "+2 %", "+1,51 %"],
      answers: [1],
      explanation:
        "L'effet de niveau compare les salaires de décembre : 2 000 × 1,02 × 1,01 = 2 060,40 €, soit 2 060,40 / 2 000 = 1,0302 → +3,02 %. Les augmentations se multiplient (1,02 × 1,01 = 1,0302), elles ne s'additionnent pas ; et l'effet de niveau est indépendant des dates d'augmentation.",
    },
    {
      id: "q3",
      question:
        "Un salarié gagne 2 000 € par mois en janvier N. Une seule augmentation de +6 % est accordée au 1er octobre N. Quel est l'effet de masse sur l'année N ?",
      choices: ["+6 %", "+4,5 %", "+3 %", "+1,5 %"],
      answers: [3],
      explanation:
        "MS annuelle réelle = 2 000 × 9 + 2 120 × 3 = 24 360 €. MS au salaire de janvier sur 12 mois = 2 000 × 12 = 24 000 €. Effet de masse = 24 360 / 24 000 = 1,015 → +1,5 % (soit 6 % × 3/12 : la hausse n'agit que 3 mois sur 12). Plus l'augmentation est tardive, plus l'effet de masse est faible.",
    },
    {
      id: "q4",
      question:
        "Suite de la question précédente : salaire de 2 000 € en janvier N, +6 % au 1er octobre N (MS annuelle N = 24 360 €). Quel est l'effet de report sur N+1, si aucune nouvelle augmentation n'intervient ?",
      choices: ["+4,43 %", "+6 %", "+1,5 %", "0 %"],
      answers: [0],
      explanation:
        "Effet de report = (salaire de janvier N+1 × 12) / MS annuelle N = (2 120 × 12) / 24 360 = 25 440 / 24 360 ≈ 1,0443 → +4,43 %. L'augmentation d'octobre pèse sur N+1 en année pleine, même sans nouvelle hausse. Vérification par la relation fondamentale : 1,015 × 1,0443 ≈ 1,06 = effet de niveau.",
    },
    {
      id: "q5",
      question: "Quelle est la relation fondamentale entre les effets niveau, masse et report ?",
      choices: [
        "Effet de masse = effet de niveau × effet de report",
        "Effet de niveau = effet de masse × effet de report",
        "Effet de report = effet de niveau × effet de masse",
        "Effet de niveau = effet de masse + effet de report",
      ],
      answers: [1],
      explanation:
        "Effet de niveau (N) = Effet de masse (N) × Effet de report (N → N+1). Les coefficients se multiplient, ils ne s'additionnent pas. Si l'effet de masse égale l'effet de niveau, c'est qu'une seule augmentation a eu lieu au 1er janvier.",
    },
    {
      id: "q6",
      question:
        "Trois cadres entrants à 40 000 € remplacent des sortants payés 50 000 €, et cinq employés entrants à 22 000 € remplacent des sortants payés 30 000 €. Quel est l'effet de noria ?",
      choices: [
        "+ 70 000 € (défavorable)",
        "− 30 000 € (favorable)",
        "− 70 000 € (favorable)",
        "− 40 000 € (favorable)",
      ],
      answers: [2],
      explanation:
        "Effet de noria = 3 × (40 000 − 50 000) + 5 × (22 000 − 30 000) = − 30 000 − 40 000 = − 70 000 €, favorable : le remplacement de salariés âgés par de plus jeunes, de même catégorie mais moins bien payés, allège la masse salariale. Il se calcule poste par poste, à compter du remplacement.",
    },
    {
      id: "q7",
      question: "Dans l'effet GVT, que désigne le « V » ?",
      choices: [
        "Vieillissement : les hausses automatiques liées à l'ancienneté",
        "Valorisation : la revalorisation générale des grilles salariales",
        "Variation : les variations d'effectif de la période",
        "Vacance : le coût des postes non pourvus",
      ],
      answers: [0],
      explanation:
        "GVT = Glissement (augmentations au mérite, hors ancienneté), Vieillissement (hausses automatiques liées à l'ancienneté), Technicité (accès à une qualification supérieure). L'effet GVT regroupe les facteurs structurels autres que l'effectif.",
    },
    {
      id: "q8",
      question:
        "Deux augmentations générales successives de +1 % puis +1,5 % sont accordées. Quelle est la hausse cumulée en niveau ?",
      choices: ["+2,25 %", "+1,5 %", "+2,5 %", "+2,515 %"],
      answers: [3],
      explanation:
        "Les augmentations successives sont multiplicatives : 1,01 × 1,015 = 1,02515, soit +2,515 %. Additionner les pourcentages (+2,5 %) est l'une des erreurs les plus fréquentes signalées par le chapitre — la seconde hausse s'applique à un salaire déjà augmenté.",
    },
    {
      id: "q9",
      question:
        "Dans la décomposition de l'écart sur masse salariale (modèle N × H × S), quelle convention de valorisation applique-t-on ?",
      choices: [
        "L'écart sur quantité au prix réel, l'écart sur prix à la quantité prévue",
        "L'écart sur quantité au prix prévu, l'écart sur prix à la quantité réelle",
        "Tous les sous-écarts aux valeurs réelles",
        "Tous les sous-écarts aux valeurs prévues",
      ],
      answers: [1],
      explanation:
        "Par convention (modèle des écarts sur charges directes du PCG), l'écart sur quantité s'évalue au prix prévu et l'écart sur prix à la quantité réelle, afin de ne jamais croiser simultanément un effet quantité et un effet prix. D'où : écart sur effectif = (Nr − Np) × Hp × Sp et écart sur salaire = Nr × Hr × (Sr − Sp).",
    },
    {
      id: "q10",
      question:
        "L'écart de structure professionnelle d'une entreprise ressort à +25 613 € (défavorable). Que signifie ce résultat ?",
      choices: [
        "Les salaires nominaux ont augmenté dans toutes les catégories",
        "L'effectif total a augmenté par rapport à la prévision",
        "La population s'est déformée vers les catégories les mieux rémunérées",
        "Le temps de travail par salarié a dépassé la prévision",
      ],
      answers: [2],
      explanation:
        "L'écart de structure mesure l'impact du changement de répartition des effectifs entre catégories, à salaires prévus constants. Défavorable, il traduit une « montée en gamme » : la part des employés recule au profit des cadres et techniciens. Ce surcoût peut néanmoins être un investissement RH justifié — à l'examen, l'interprétation nuancée fait la différence.",
    },
  ],
};
