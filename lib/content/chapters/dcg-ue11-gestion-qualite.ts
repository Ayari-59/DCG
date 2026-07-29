import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-gestion-qualite.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const gestionQualite: Chapter = {
  ...generated,
  description:
    "De la définition ISO de la qualité au coût d'obtention de la qualité (prévention, évaluation, défaillances interne et externe) et aux coûts cachés de Savall, en passant par les outils du pilotage : PDCA, Pareto, Ishikawa, cercles de qualité, estimation par échantillonnage et certification ISO 9001.",
  flashcards: [
    {
      id: "fc1",
      front: "Définition ISO de la qualité",
      back: "L'aptitude d'un ensemble de caractéristiques à satisfaire des besoins ou des attentes, exprimés ou implicites. La qualité n'est pas une propriété absolue du produit : elle se juge relativement à l'usage et aux attentes du client.",
    },
    {
      id: "fc2",
      front: "Qualité maximale ou qualité optimale : quel est l'objectif ?",
      back: "La qualité OPTIMALE : celle qui satisfait le client au meilleur coût. Viser au-delà des attentes engage des dépenses non valorisées par le client — c'est la surqualité (à droite de l'optimum sur la courbe du coût total).",
    },
    {
      id: "fc3",
      front: "Les 4 étapes de l'évolution du management de la qualité",
      back: "1. Contrôle final (vérifier a posteriori, on constate les effets). 2. Assurance qualité (garantir le processus, ISO 9001). 3. Qualité totale / TQM (prévenir et améliorer en continu, zéro défaut, l'affaire de tous). 4. Qualité durable (intégrer la performance globale, RSE/ESG).",
    },
    {
      id: "fc4",
      front: "Qu'est-ce que la qualité totale (TQM) ?",
      back: "Le Total Quality Management déplace le contrôle vers l'amont des processus : la qualité devient l'affaire de tous, en continu, avec pour visée le « zéro défaut » par l'amélioration continue — le contrôle au sens étendu de « maîtrise », et non de simple vérification.",
    },
    {
      id: "fc5",
      front: "Qu'est-ce que la certification ? (et les normes associées)",
      back: "Procédure par laquelle un organisme externe indépendant atteste qu'un produit, service ou processus est conforme aux exigences d'une norme. ISO 9000 : vocabulaire ; ISO 9001 : exigences du système de management (norme certifiable) ; ISO 9004 : amélioration permanente. En France : normes AFNOR, organismes accrédités par le COFRAC.",
    },
    {
      id: "fc6",
      front: "Les 4 catégories du coût d'obtention de la qualité (COQ)",
      back: "Coûts de prévention (éviter le défaut avant qu'il ne survienne) + coûts d'évaluation (vérifier et détecter : contrôles, tests) + coûts de défaillance interne (défauts détectés AVANT livraison : rebuts, retouches) + coûts de défaillance externe (défauts détectés APRÈS livraison : garantie, SAV, litiges, image).",
    },
    {
      id: "fc7",
      front: "Coûts de conformité et coûts de non-conformité : la relation fondamentale",
      back: "Conformité = prévention + évaluation (on investit) ; non-conformité = défaillances interne + externe (on subit). Les catégories sont substituables : investir en prévention et évaluation fait mécaniquement baisser les coûts de défaillance. C'est cet arbitrage que le contrôleur de gestion éclaire.",
    },
    {
      id: "fc8",
      front: "Que représente l'optimum économique de la qualité (Q*) ?",
      back: "Le minimum de la courbe du coût total (conformité croissante + non-conformité décroissante). À gauche : on sous-investit en prévention, les défaillances coûtent cher. À droite : surqualité non valorisée. Q* est le seuil où un euro supplémentaire de prévention ne fait plus économiser un euro de défaillance.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce qu'un coût caché (Savall — ISÉOR) ?",
      back: "Un coût non repéré par les systèmes d'information classiques (comptabilité, budgets, tableaux de bord financiers), par opposition aux coûts visibles qui ont une dénomination comptable. Les coûts de non-qualité sont largement cachés car transversaux, différés et sans dénomination comptable propre.",
    },
    {
      id: "fc10",
      front: "Les 5 indicateurs de dysfonctionnement et les 5 composantes de coût caché (ISÉOR)",
      back: "Dysfonctionnements : absentéisme, accidents du travail, rotation du personnel, non-qualité des produits, surcroît de contrôle. Composantes : sursalaires, surtemps, surconsommations, non-productions, non-création de potentiel stratégique.",
    },
    {
      id: "fc11",
      front: "La roue de Deming (PDCA)",
      back: "Cycle d'amélioration continue en 4 étapes : Plan (planifier : analyser, fixer objectifs), Do (réaliser, souvent à titre expérimental), Check (vérifier : mesurer et comparer aux objectifs), Act (corriger, standardiser). La cale de la roue = la standardisation, qui empêche de retomber dans les anciennes habitudes.",
    },
    {
      id: "fc12",
      front: "Le diagramme de Pareto (loi des 20/80)",
      back: "Environ 20 % des causes expliquent environ 80 % des problèmes. Construction : recenser les défauts, classer par fréquence décroissante, calculer les fréquences cumulées, représenter (barres + courbe du cumul). Il hiérarchise les priorités d'action mais ne dit pas POURQUOI le problème survient.",
    },
    {
      id: "fc13",
      front: "Le diagramme d'Ishikawa et les 5 M",
      back: "Diagramme causes-effets « en arêtes de poisson », support de réflexion collective (brainstorming, « 5 pourquoi ») pour rechercher les causes profondes d'un problème. Les 5 M : Matière, Matériel, Méthode, Main-d'œuvre, Milieu (parfois un 6ᵉ M : Management). Complémentaire de Pareto : Pareto dit où agir, Ishikawa cherche pourquoi.",
    },
    {
      id: "fc14",
      front: "Les cercles de qualité",
      back: "Petits groupes de salariés volontaires (4 à 15 personnes, services et niveaux différents) qui se réunissent régulièrement pour identifier, analyser et résoudre les problèmes de qualité de leur travail. Management participatif inspiré d'Ishikawa (Japon, années 1960). Limite : aucun pouvoir de décision, essoufflement fréquent.",
    },
    {
      id: "fc15",
      front: "Estimation ponctuelle : les estimateurs à connaître",
      back: "Moyenne m estimée par x̄ de l'échantillon ; proportion p estimée par la fréquence f ; écart type σ estimé par l'écart type CORRIGÉ s = √(n/(n−1)) × σ', car σ' sous-estime σ (touche σₙ₋₁ de la calculatrice).",
    },
    {
      id: "fc16",
      front: "Intervalle de confiance au DCG : périmètre et valeurs de t",
      back: "Seule la loi normale est mobilisée, et l'IC ne concerne que la MOYENNE (σ inconnu, n ≥ 30, après correction de σ' en s). t = 1,96 pour 95 % et t = 2,575 pour 99 %. Hors programme : les tests d'hypothèse et l'IC d'une proportion (estimation ponctuelle p ≈ f uniquement).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Selon la définition de l'ISO, la qualité d'un produit ou d'un service est :",
      choices: [
        "La conformité du produit à son cahier des charges technique",
        "Le niveau de gamme le plus élevé du marché",
        "L'aptitude d'un ensemble de caractéristiques à satisfaire des besoins ou attentes, exprimés ou implicites",
        "L'absence totale de défauts constatée au contrôle final",
      ],
      answers: [2],
      explanation:
        "La qualité n'est pas une propriété objective et absolue : elle se juge relativement à l'usage et aux attentes du client (exprimés OU implicites). D'où l'objectif de qualité optimale — satisfaire le client au meilleur coût — et non de qualité maximale.",
    },
    {
      id: "q2",
      question: "La formation du personnel à la qualité et la maintenance préventive des équipements relèvent :",
      choices: [
        "Des coûts de prévention",
        "Des coûts d'évaluation",
        "Des coûts de défaillance interne",
        "Des coûts de défaillance externe",
      ],
      answers: [0],
      explanation:
        "Ce sont des dépenses engagées pour éviter préventivement l'apparition des anomalies, AVANT que le défaut ne survienne : formation, maintenance préventive, conception soignée, sélection et audit des fournisseurs. Un contrôle serait de l'évaluation, une retouche une défaillance interne.",
    },
    {
      id: "q3",
      question: "Le coût des rappels de produits déjà livrés et la détérioration de l'image de marque relèvent :",
      choices: [
        "Des coûts de prévention",
        "Des coûts d'évaluation",
        "Des coûts de défaillance interne",
        "Des coûts de défaillance externe",
      ],
      answers: [3],
      explanation:
        "Le défaut est détecté APRÈS la livraison au client : garanties, SAV, indemnités, rappels, et surtout l'atteinte à l'image et le manque à gagner. C'est la catégorie la plus dangereuse, car aux coûts directs s'ajoutent des coûts difficilement chiffrables.",
    },
    {
      id: "q4",
      question:
        "Chez CERAMIX, le COQ se décompose en : prévention 55 k€, évaluation 53 k€, défaillance interne 83 k€, défaillance externe 99 k€. Quelle est la part des coûts de non-conformité dans le COQ total ?",
      choices: ["37,2 %", "62,8 %", "34,1 %", "50,0 %"],
      answers: [1],
      explanation:
        "COQ total = 55 + 53 + 83 + 99 = 290 k€. Non-conformité (coûts subis) = défaillances interne + externe = 83 + 99 = 182 k€, soit 182 ÷ 290 = 62,8 %. La conformité (prévention + évaluation = 108 k€) ne pèse que 37,2 % : l'entreprise se situe à gauche de l'optimum, un rééquilibrage vers la prévention est justifié.",
    },
    {
      id: "q5",
      question: "Selon Savall et l'ISÉOR, les coûts cachés se définissent comme :",
      choices: [
        "Les coûts fixes non répartis entre les produits",
        "Les coûts dissimulés volontairement par les opérationnels",
        "Les coûts non repérés par les systèmes d'information classiques (comptabilité, budgets, tableaux de bord)",
        "Les charges exceptionnelles non budgétées",
      ],
      answers: [2],
      explanation:
        "Par opposition aux coûts visibles qui possèdent une dénomination comptable, les coûts cachés existent mais ne sont pas identifiés : ils sont transversaux, différés dans le temps et sans dénomination comptable propre. Les 5 composantes de l'ISÉOR : sursalaires, surtemps, surconsommations, non-productions, non-création de potentiel stratégique.",
    },
    {
      id: "q6",
      question: "Dans le cycle PDCA de Deming, à quoi correspond l'étape « Check » ?",
      choices: [
        "Mesurer les résultats obtenus et les comparer aux objectifs",
        "Identifier le problème et définir le plan d'action",
        "Standardiser et généraliser ce qui fonctionne",
        "Mettre en œuvre les actions à titre expérimental",
      ],
      answers: [0],
      explanation:
        "Plan = planifier (analyser, fixer les objectifs), Do = réaliser (mise en œuvre expérimentale), Check = vérifier (mesurer et comparer aux objectifs), Act = agir (corriger puis standardiser). La standardisation joue le rôle de cale qui empêche la roue de redescendre la pente du progrès.",
    },
    {
      id: "q7",
      question: "Quelle affirmation sur le diagramme de Pareto est exacte ?",
      choices: [
        "Il identifie les causes profondes d'un problème grâce aux 5 M",
        "Il exige un traitement statistique fondé sur la loi normale",
        "Il classe les causes par ordre croissant de fréquence",
        "Il repose sur le principe qu'environ 20 % des causes produisent environ 80 % des effets",
      ],
      answers: [3],
      explanation:
        "C'est la loi des 20/80 : on classe les défauts par fréquence DÉCROISSANTE, on calcule les fréquences cumulées et on hiérarchise les priorités d'action. Sa limite : il dit où agir mais pas pourquoi le problème survient — c'est le rôle complémentaire du diagramme d'Ishikawa (5 M).",
    },
    {
      id: "q8",
      question: "Quels sont les « 5 M » du diagramme d'Ishikawa ?",
      choices: [
        "Marché, Marge, Méthode, Management, Mesure",
        "Matière, Matériel, Méthode, Main-d'œuvre, Milieu",
        "Matière, Machine, Maintenance, Management, Marketing",
        "Moyens, Méthode, Mesure, Milieu, Management",
      ],
      answers: [1],
      explanation:
        "Le diagramme causes-effets « en arêtes de poisson » classe les causes d'un dysfonctionnement en 5 familles : Matière, Matériel, Méthode, Main-d'œuvre, Milieu (on ajoute parfois un 6ᵉ M, le Management). C'est un outil de réflexion collective, non mathématique, animé par la question « pourquoi ? » (les 5 pourquoi).",
    },
    {
      id: "q9",
      question:
        "Sur un échantillon de n = 36 articles, la durée moyenne de montage est x̄ = 18,5 min avec un écart type d'échantillon σ' = 3,6 min. Quel est l'intervalle de confiance à 95 % de la durée moyenne réelle ?",
      choices: [
        "[16,9 ; 20,1] minutes",
        "[17,9 ; 19,1] minutes",
        "[17,3 ; 19,7] minutes",
        "[14,9 ; 22,1] minutes",
      ],
      answers: [2],
      explanation:
        "On corrige d'abord l'écart type : s = √(36/35) × 3,6 ≈ 3,65 min. Puis IC = [x̄ ± t × s/√n] = [18,5 ± 1,96 × 3,65/6] = [18,5 ± 1,19] ≈ [17,3 ; 19,7] minutes. Piège classique : oublier de corriger σ' en s avant le calcul. Rappel : t = 1,96 à 95 % et 2,575 à 99 %.",
    },
    {
      id: "q10",
      question: "Depuis la réforme 2027, quel élément du contrôle statistique de la qualité est AU programme du DCG (UE11) ?",
      choices: [
        "L'intervalle de confiance d'une moyenne (loi normale, t = 1,96 ou 2,575)",
        "Les tests d'hypothèse unilatéraux et bilatéraux",
        "L'intervalle de confiance d'une proportion",
        "Les lois de Poisson et binomiale appliquées aux défauts",
      ],
      answers: [0],
      explanation:
        "Le guide pédagogique encadre strictement le programme : seule la loi normale est mobilisée, et l'échantillonnage est abordé sous le seul angle des estimations. L'IC ne concerne que la MOYENNE ; les tests d'hypothèse et l'IC d'une proportion sont hors programme (pour une proportion, seule l'estimation ponctuelle p ≈ f est admise).",
    },
  ],
};
