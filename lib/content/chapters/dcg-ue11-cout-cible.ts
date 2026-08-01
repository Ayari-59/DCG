import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-cout-cible.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const coutCible: Chapter = {
  ...generated,
  videos: [{ youtubeId: "DVgD8T1xI1k", title: "Méthode du coût cible" }],
  description:
    "La démarche du coût cible (target costing) : partir du prix imposé par le marché pour déterminer le coût maximal admissible, le décomposer par fonction et par composant selon la valeur perçue par le client, puis résorber le cost gap par l'analyse de la valeur et le kaizen costing.",
  flashcards: [
    {
      id: "fc1",
      front: "Définition du coût cible (target cost)",
      back: "Ensemble de méthodes et d'outils visant à adapter le coût complet prévisionnel d'un produit aux objectifs de profitabilité sur l'ensemble de son cycle de vie, sous la contrainte du marché. Il définit ex ante le coût maximal de revient supportable : c'est la cible à atteindre.",
    },
    {
      id: "fc2",
      front: "Formule fondamentale du coût cible",
      back: "Coût cible = Prix de vente imposé par le marché − Profit cible. C'est le renversement de la logique « ingénieur » (cost-plus : Prix = Coût + Marge) : le coût n'est plus une donnée de sortie mais une contrainte d'entrée.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce que le coût estimé et quelles sont les 3 méthodes pour le déterminer ?",
      back: "Le coût que l'entreprise est capable de réaliser compte tenu de ses compétences, sur tout le cycle de vie. Trois méthodes : paramétrique (corrélation coût / paramètres physiques, Y = aX + b), analogique (coût d'un produit existant corrigé), analytique (analyse détaillée composant par composant). L'ABC est souvent mobilisée pour le calculer.",
    },
    {
      id: "fc4",
      front: "L'écart de coût (cost gap) : formule et interprétation",
      back: "Cost gap = Coût estimé − Coût cible. C'est l'effort de réduction de coût à réaliser. Si coût estimé > coût cible : produit insuffisamment rentable, réduire le coût (analyse de la valeur, kaizen). Si coût estimé < coût cible : marge de manœuvre, envisager d'enrichir le produit.",
    },
    {
      id: "fc5",
      front: "Le constat fondateur du coût cible",
      back: "Environ 80 % des coûts du cycle de vie sont pré-engagés (décidés) dès la conception, alors qu'ils ne seront effectivement dépensés que bien plus tard. La production ne pourra au mieux qu'optimiser les 20 % restants : la performance se joue en amont.",
    },
    {
      id: "fc6",
      front: "Coûts engagés vs coûts dépensés : la différence ?",
      back: "Coûts engagés (décidés) : rendus inévitables par les choix de conception (technologie, composants, architecture), même s'ils ne sont pas encore décaissés. Coûts dépensés (décaissés) : effectivement payés lors de la production et de la distribution, suivis par le contrôle de gestion classique (écarts, kaizen).",
    },
    {
      id: "fc7",
      front: "Définition de la valeur (au sens de l'analyse de la valeur)",
      back: "Le rapport entre la satisfaction des besoins que le produit procure et les ressources (coûts) engagées pour l'obtenir. Améliorer la valeur = augmenter la satisfaction à coût constant, ou réduire le coût à satisfaction constante. La valeur dépend du regard du client, pas du produit lui-même.",
    },
    {
      id: "fc8",
      front: "Qu'est-ce que l'analyse de la valeur dans la démarche de coût cible ?",
      back: "La technique privilégiée pour résorber le cost gap pendant la conception : elle rapproche le coût estimé du coût cible sans affecter la valeur perçue par le client. Au DCG elle est seulement introduite ; elle est approfondie en DSCG.",
    },
    {
      id: "fc9",
      front: "Principe de la décomposition fonctionnelle du coût cible",
      back: "Le coût cible global, trop agrégé, est réparti selon l'importance relative accordée par le client aux fonctions, puis relié aux composants. Règle de cohérence : la part du coût d'un composant dans le coût total doit être cohérente avec sa contribution relative à la valeur créée pour le client.",
    },
    {
      id: "fc10",
      front: "Prix psychologique (prix d'acceptabilité) : définition et méthode",
      back: "Prix qui maximise le volume des acheteurs potentiels. Deux questions au panel : « au-dessus de quel prix, trop cher ? » (cumul croissant) et « en dessous de quel prix, qualité insuffisante ? » (cumul décroissant). Taux d'acceptabilité = 100 % − % de non-acheteurs ; on retient le prix où il est maximal.",
    },
    {
      id: "fc11",
      front: "Pourquoi pondérer le coût cible moyen par les volumes ?",
      back: "Le coût cible doit refléter la réalité économique du cycle : les années à fort volume pèsent davantage. Une simple moyenne arithmétique des coûts cibles annuels fausserait l'objectif. On retient toujours la moyenne pondérée par les quantités vendues.",
    },
    {
      id: "fc12",
      front: "Kaizen costing (maintenance des coûts) : de quoi s'agit-il ?",
      back: "Une fois le produit lancé, l'optimisation se poursuit par l'effet d'apprentissage et l'amélioration continue (kaizen) : maintenir les coûts réels proches des coûts cibles et éliminer les causes d'écarts. Le modèle MAKIDO résume l'enchaînement : réduction du coût en conception, puis maintenance du coût en production.",
    },
    {
      id: "fc13",
      front: "Qu'est-ce que l'ingénierie simultanée (concurrent engineering) ?",
      back: "Faire travailler en parallèle et de façon coordonnée, dès la conception, toutes les fonctions concernées (marketing, bureau d'études, achats, production, contrôle de gestion) plutôt que séquentiellement. Indispensable au coût cible : 80 % des coûts se décident en conception.",
    },
    {
      id: "fc14",
      front: "Les principaux types de fonctions d'un produit",
      back: "De service (répond aux besoins de l'utilisateur) / technique (solution choisie par le concepteur). D'usage (utilité pratique mesurable) / d'estime (valeur subjective, image, esthétique). Principale (raison d'être du produit) / contrainte (imposée par les normes, la réglementation).",
    },
    {
      id: "fc15",
      front: "Qualité optimale ou qualité maximale ?",
      back: "L'objectif de l'analyse fonctionnelle n'est jamais la qualité maximale (sur-qualité coûteuse) mais la qualité optimale : juste ce qu'il faut pour satisfaire le client au coût cible. Deux écueils symétriques à éviter : la sur-qualité (coûts inutiles) et la sous-qualité (produit rejeté).",
    },
    {
      id: "fc16",
      front: "Les principales limites de la démarche de coût cible",
      back: "Difficultés d'évaluation du prix (réactions des concurrents), part d'arbitraire dans la répartition du profit entre produits, fiabilité incertaine du coût estimé (effets d'apprentissage), résistances organisationnelles (« culture budgétaire des territoires »), et risque de dégrader la valeur perçue si on réduit les coûts sans discernement.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Quelle équation traduit la logique du target costing, par opposition à la logique « cost-plus » ?",
      choices: [
        "Prix de vente = Coût de revient + Marge",
        "Marge = Coût de revient − Prix de vente",
        "Coût cible = Prix de vente imposé par le marché − Profit cible",
        "Coût cible = Coût complet standard − Coûts cachés",
      ],
      answers: [2],
      explanation:
        "Le coût cible renverse la logique « ingénieur » (Prix = Coût + Marge) : le prix est imposé par le marché, la marge est voulue par l'entreprise, et le coût devient une contrainte d'entrée, une variable d'action encadrée par ces deux limites.",
    },
    {
      id: "q2",
      question:
        "Un produit doit être vendu 80 € (prix imposé par le marché) avec une marge cible de 20 % du prix. Le bureau d'études annonce un coût estimé de 70 €. Quel est l'effort de réduction de coût (cost gap) ?",
      choices: ["10 €", "6 €", "16 €", "14 €"],
      answers: [1],
      explanation:
        "Coût cible = 80 × (1 − 20 %) = 64 €. Cost gap = coût estimé − coût cible = 70 − 64 = 6 €. Répondre 10 € (80 − 70) confondrait le cost gap avec la marge actuelle : l'écart se mesure toujours par rapport au coût cible, pas au prix.",
    },
    {
      id: "q3",
      question: "Selon le constat fondateur du coût cible, quelle proportion des coûts du cycle de vie est pré-engagée dès la phase de conception ?",
      choices: ["Environ 80 %", "Environ 20 %", "Environ 50 %", "La totalité (100 %)"],
      answers: [0],
      explanation:
        "≈ 80 % des coûts du cycle de vie sont décidés (engagés) dès la conception, même s'ils ne seront décaissés que bien plus tard. La production ne peut au mieux optimiser que les 20 % restants — d'où la prédominance de la phase amont et l'ingénierie simultanée.",
    },
    {
      id: "q4",
      question: "Laquelle de ces affirmations sur le coût cible est exacte ?",
      choices: [
        "Le coût cible remplace la méthode ABC pour les nouveaux produits",
        "Le coût cible sert à valoriser les stocks au bilan",
        "Le coût cible est un coût complet constaté a posteriori",
        "Le coût cible est une approche prospective (ex ante), utilisée lors du développement de nouveaux produits",
      ],
      answers: [3],
      explanation:
        "Le coût cible n'est ni un coût complet, ni un coût partiel, et ne remplace pas les centres d'analyse ou l'ABC. C'est une approche prospective (ex ante) réservée au développement de nouveaux produits ou services ; le coût estimé s'appuie d'ailleurs souvent sur l'ABC — les approches sont complémentaires. L'utiliser pour valoriser des stocks est l'erreur classique.",
    },
    {
      id: "q5",
      question:
        "Un produit est lancé sur un cycle de 3 ans : N+1 prix 60 €, marge cible 25 %, volume 20 000 ; N+2 prix 56 €, marge 22 %, volume 30 000 ; N+3 prix 52 €, marge 18 %, volume 18 000. Quel est le coût cible moyen pondéré par les volumes ?",
      choices: ["43,77 €", "45,00 €", "43,79 €", "42,64 €"],
      answers: [2],
      explanation:
        "Coûts cibles annuels : 60 × 75 % = 45,00 € ; 56 × 78 % = 43,68 € ; 52 × 82 % = 42,64 €. Moyenne pondérée = (45 × 20 000 + 43,68 × 30 000 + 42,64 × 18 000) / 68 000 = (900 000 + 1 310 400 + 767 520) / 68 000 = 2 977 920 / 68 000 = 43,79 €. La moyenne arithmétique simple (43,77 €) est le piège : il faut toujours pondérer par les quantités vendues.",
    },
    {
      id: "q6",
      question:
        "Lors d'un sondage de prix psychologique, au prix de 180 €, 33 % des sondés trouvent le produit trop cher (cumul croissant) et 18 % jugent la qualité insuffisante (cumul décroissant). Quel est le taux d'acceptabilité à ce prix ?",
      choices: ["51 %", "49 %", "67 %", "82 %"],
      answers: [1],
      explanation:
        "% de non-acheteurs = 33 % + 18 % = 51 %. Taux d'acceptabilité = 100 % − 51 % = 49 %. Le prix psychologique est celui qui maximise ce taux, c'est-à-dire qui minimise la proportion de non-acheteurs.",
    },
    {
      id: "q7",
      question: "Après le lancement du produit, la « maintenance des coûts » consiste à :",
      choices: [
        "Recalculer le coût cible chaque année en fonction des coûts constatés",
        "Augmenter le prix de vente pour restaurer la marge cible",
        "Provisionner les coûts de maintenance et de garantie du produit",
        "Maintenir les coûts réels proches des coûts cibles par l'amélioration continue (kaizen) et l'effet d'apprentissage",
      ],
      answers: [3],
      explanation:
        "Pendant la production, l'optimisation se poursuit par l'effet d'apprentissage et le kaizen : maintenir les coûts réels proches des coûts cibles et éliminer les causes d'écarts. Le modèle MAKIDO résume l'enchaînement : réduction du coût en conception, puis maintenance du coût en production.",
    },
    {
      id: "q8",
      question:
        "La fonction « esthétique / design » d'un produit représente 10 % de la valeur perçue par le client mais 24 % du coût estimé. Quel est son indice de valeur (valeur perçue / part de coût) et que faut-il en conclure ?",
      choices: [
        "0,42 : la fonction est sur-investie, il faut y chercher des réductions de coût",
        "2,40 : la fonction est sous-investie, il faut y investir davantage",
        "1,18 : la fonction est correctement alignée sur la valeur perçue",
        "0,86 : l'écart est trop faible pour justifier une action",
      ],
      answers: [0],
      explanation:
        "Indice = 10 % / 24 % ≈ 0,42, très inférieur à 1 : la part de coût dépasse largement la contribution à la valeur perçue. Le produit sur-investit dans une fonction peu valorisée — c'est là qu'il faut chercher l'essentiel des réductions (rationaliser les coloris, simplifier les finitions), sans dégrader la valeur perçue.",
    },
    {
      id: "q9",
      question: "Pour une fonction très valorisée par le client, le coût estimé ressort inférieur au coût cible. Quelle est la bonne interprétation ?",
      choices: [
        "C'est une anomalie de calcul : le coût estimé doit toujours dépasser le coût cible",
        "Il faut réduire le coût cible de cette fonction pour resserrer la contrainte",
        "Situation favorable : l'entreprise peut investir le surplus disponible dans cette fonction pour renforcer son avantage concurrentiel",
        "Il faut transférer mécaniquement l'écart vers les fonctions déficitaires",
      ],
      answers: [2],
      explanation:
        "C'est le piège de l'interprétation mécanique : un coût estimé inférieur au coût cible n'est pas simplement une bonne nouvelle à classer sans suite. Si la fonction est très valorisée par le client (ex. la performance de jeu chez Rakéo, écart de − 15 %), l'entreprise a intérêt à investir le surplus pour renforcer son avantage concurrentiel.",
    },
    {
      id: "q10",
      question: "Pour estimer le coût d'un produit peu innovant, dans des conditions stables, à partir du coût d'un produit existant corrigé des modifications, on utilise la méthode :",
      choices: ["Paramétrique", "Analogique", "Analytique", "Des coûts partiels"],
      answers: [1],
      explanation:
        "La méthode analogique part du coût d'un produit existant analogue, corrigé des modifications : adaptée aux produits peu innovants, elle est inadaptée à l'innovation. La paramétrique (Y = aX + b sur des paramètres physiques) donne une première approximation très en amont ; l'analytique (composant par composant) fournit l'estimation fine juste avant la décision.",
    },
  ],
};
