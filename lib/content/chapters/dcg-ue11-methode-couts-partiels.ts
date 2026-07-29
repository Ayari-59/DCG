import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-methode-couts-partiels.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const methodeCoutsPartiels: Chapter = {
  ...generated,
  videos: [{ youtubeId: "TCZ8wbW68ic", title: "Coûts partiels — Décider" }],
  description:
    "Coût direct, coût variable, coût spécifique et coût marginal : trier les charges selon leur variabilité et leur traçabilité, calculer les marges (MCV, MCS) dans un compte de résultat différentiel, et éclairer les décisions de court terme — commande supplémentaire, make or buy, maintien ou abandon d'un produit, prix plancher.",
  flashcards: [
    {
      id: "fc1",
      front: "Quel est le principe des méthodes de coûts partiels ?",
      back: "Ne retenir dans le coût que la partie jugée pertinente des charges, les autres restant en masse non répartie. On raisonne alors en marges : Marge = CA − coût partiel = capacité contributive du produit à la couverture des charges non réparties, puis au résultat.",
    },
    {
      id: "fc2",
      front: "Définition du coût variable",
      back: "Ensemble des charges qui varient avec le volume d'activité (production et/ou vente), qu'elles soient directes ou indirectes. La méthode du coût variable laisse toutes les charges fixes en masse non répartie.",
    },
    {
      id: "fc3",
      front: "Définition du coût spécifique",
      back: "Coût qui incorpore les charges variables ET les charges fixes spécifiques (charges fixes directes, rattachables sans arbitraire à un objet de coût). Les charges fixes communes restent une masse non répartie. On parle de « coût variable évolué ».",
    },
    {
      id: "fc4",
      front: "Définition du coût direct — en quoi diffère-t-il du coût spécifique ?",
      back: "Le coût direct ne retient que les charges directes (affectables sans calcul de répartition), qu'elles soient variables ou fixes. Le coût spécifique, lui, intègre aussi des charges variables indirectes (énergie, transport) : les deux notions se recoupent sans se confondre.",
    },
    {
      id: "fc5",
      front: "Définition du coût marginal (PCG)",
      back: "Différence entre l'ensemble des charges nécessaires à une production donnée et celles nécessaires à cette même production majorée (ou minorée) d'une unité. En contrôle de gestion, on l'étend à une série supplémentaire : coût marginal = Δ Coût total / Δ Quantité.",
    },
    {
      id: "fc6",
      front: "Marge sur coût variable (MCV) : formule et rôle",
      back: "MCV = Chiffre d'affaires − charges variables ; taux de MCV = MCV / CA. Elle mesure ce que chaque produit rapporte avant de financer la structure, et sert de base au seuil de profitabilité (CF / taux de MCV).",
    },
    {
      id: "fc7",
      front: "Marge sur coût spécifique (MCS) : formule et interprétation",
      back: "MCS = MCV − charges fixes spécifiques. Elle mesure la contribution propre d'un produit : ce qu'il dégage après avoir couvert ses charges variables ET les charges fixes qui n'existent que grâce à lui. Une MCS négative est un signal d'alerte, pas une décision d'abandon.",
    },
    {
      id: "fc8",
      front: "Qu'est-ce que le compte de résultat différentiel ?",
      back: "Présentation en cascade : CA − charges variables = MCV, puis déduction des charges fixes en une seule masse globale (jamais réparties par produit) pour obtenir le résultat. Commode pour les décisions de court terme, où la structure n'est pas modifiée.",
    },
    {
      id: "fc9",
      front: "Comment traiter une charge semi-variable ?",
      back: "Une charge semi-variable (mixte) comporte une part fixe (abonnement) et une part proportionnelle à l'activité (consommation). On la décompose sous la forme Y = aX + b par ajustement linéaire (régression) : a = coût variable unitaire, b = charges fixes.",
    },
    {
      id: "fc10",
      front: "Les quatre catégories de charges et les trois coûts partiels",
      back: "Le croisement direct/indirect × fixe/variable donne quatre catégories : variables directes, variables indirectes, fixes spécifiques (directes), fixes de structure (communes). Il en découle trois coûts partiels : direct, variable, spécifique — auxquels s'ajoute le coût marginal, notion transversale.",
    },
    {
      id: "fc11",
      front: "Règle de décision pour le maintien ou l'abandon d'un produit",
      back: "MCV négative → le produit ne couvre même pas ses charges variables : abandon à envisager. MCV positive mais MCS négative → signal d'alerte : analyser (seuil de profitabilité spécifique, stratégie) avant de décider. MCS positive → le produit contribue aux charges communes : maintien.",
    },
    {
      id: "fc12",
      front: "Conditions d'acceptation d'une commande supplémentaire à prix réduit",
      back: "On compare recette marginale et coût marginal : la commande est acceptable si elle dégage une marge positive, même à un prix inférieur au coût complet. Conditions : capacité suffisante, commande ponctuelle (non récurrente), pas de cannibalisation des ventes au prix normal (marché segmenté).",
    },
    {
      id: "fc13",
      front: "Qu'est-ce que le prix plancher ?",
      back: "Le prix de vente minimum acceptable d'une commande : il est égal au coût marginal unitaire — c'est-à-dire au coût variable unitaire si la structure est suffisante, majoré du coût de structure supplémentaire si elle est insuffisante.",
    },
    {
      id: "fc14",
      front: "Produire ou sous-traiter (make or buy) : quel raisonnement ?",
      back: "On compare le coût interne réellement évitable au prix du sous-traitant. Seules comptent les charges évitables : les charges fixes de structure qui subsisteraient de toute façon ne doivent pas entrer dans la comparaison (les fixes spécifiques ne comptent que si elles sont évitables, ex. machine revendable).",
    },
    {
      id: "fc15",
      front: "Seuil de profitabilité spécifique d'un produit",
      back: "Charges fixes spécifiques / taux de MCV = chiffre d'affaires à partir duquel le produit couvre ses propres charges fixes (MCS = 0). À vérifier avant de conclure à l'abandon d'un produit à MCS négative : si ce niveau de CA est atteignable, le produit redevient contributif.",
    },
    {
      id: "fc16",
      front: "Principales limites des méthodes de coûts partiels",
      back: "Hypothèse de proportionnalité des charges variables ; risque de dérive des charges fixes ; pas de fixation d'un prix de vente durable (il faut un coût complet) ; stocks à valoriser au coût complet au bilan ; vision de court terme (la structure est supposée inchangée).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Quelles charges la méthode des coûts spécifiques retient-elle dans le coût d'un produit ?",
      choices: [
        "Uniquement les charges variables",
        "Uniquement les charges directes",
        "Les charges variables et les charges fixes spécifiques",
        "Toutes les charges, fixes et variables",
      ],
      answers: [2],
      explanation:
        "Le coût spécifique (« coût variable évolué ») incorpore les charges variables ET les charges fixes spécifiques, rattachables sans arbitraire au produit. Seules les charges fixes communes restent en masse non répartie. Retenir uniquement les variables, c'est le coût variable ; uniquement les directes, c'est le coût direct ; toutes les charges, c'est le coût complet.",
    },
    {
      id: "q2",
      question:
        "La gamme Kayak de Nautis réalise un chiffre d'affaires de 300 000 € pour 180 000 € de charges variables. Quel est son taux de marge sur coût variable ?",
      choices: ["40 %", "60 %", "36 %", "20 %"],
      answers: [0],
      explanation:
        "MCV = 300 000 − 180 000 = 120 000 €. Taux de MCV = MCV / CA = 120 000 / 300 000 = 40 %. Attention au piège du complémentaire : 60 % est la part des charges variables dans le CA, pas le taux de marge.",
    },
    {
      id: "q3",
      question:
        "La gamme Voile de Nautis réalise 150 000 € de CA, supporte 120 000 € de charges variables et 50 000 € de charges fixes spécifiques. Quelle est sa marge sur coût spécifique ?",
      choices: ["+ 30 000 €", "− 20 000 €", "− 50 000 €", "+ 10 000 €"],
      answers: [1],
      explanation:
        "MCV = 150 000 − 120 000 = + 30 000 €, puis MCS = MCV − charges fixes spécifiques = 30 000 − 50 000 = − 20 000 €. La gamme couvre ses charges variables mais pas ses propres charges fixes : c'est un signal d'alerte, à nuancer par le seuil de profitabilité spécifique (50 000 / 0,20 = 250 000 € de CA) et la stratégie avant toute décision d'abandon.",
    },
    {
      id: "q4",
      question:
        "Un produit affiche une marge sur coût variable positive mais une marge sur coût spécifique négative. Que faut-il faire ?",
      choices: [
        "L'abandonner immédiatement : il est déficitaire",
        "Le maintenir sans autre analyse : sa MCV est positive",
        "Recalculer son résultat en coût complet pour trancher",
        "Analyser avant de décider : seuil de profitabilité spécifique et considérations stratégiques",
      ],
      answers: [3],
      explanation:
        "MCV positive → l'abandonner détruirait de la contribution aux charges communes ; MCS négative → il ne couvre pas ses propres charges fixes : signal d'alerte. La règle du cours : analyser avant de décider — vérifier si le seuil de profitabilité spécifique (CF spécifiques / taux de MCV) est atteignable, et intégrer la stratégie (image, gamme complète, concurrence). Le résultat en coût complet, lui, est trompeur car il impute des charges communes qui subsisteraient après l'abandon.",
    },
    {
      id: "q5",
      question:
        "La Cidrerie Belval (capacité suffisante) reçoit une commande exceptionnelle de 800 bouteilles à 60 € l'unité, contre un prix habituel de 90 €. Le coût variable unitaire est de 40 € et le coût complet de 80 €. Quel est l'impact de la commande sur le résultat ?",
      choices: ["− 16 000 €", "+ 8 000 €", "+ 16 000 €", "0 €"],
      answers: [2],
      explanation:
        "Structure suffisante → coût marginal = coût variable unitaire = 40 €. Résultat marginal unitaire = 60 − 40 = + 20 €, soit 20 × 800 = + 16 000 €. La commande est acceptable bien que son prix (60 €) soit inférieur au coût complet (80 €) : elle couvre le coût variable et contribue aux charges fixes. Conditions : commande ponctuelle et marché segmenté (pas de cannibalisation des ventes à 90 €).",
    },
    {
      id: "q6",
      question: "À quelle méthode française correspond le « direct costing » anglo-saxon ?",
      choices: [
        "La méthode du coût direct",
        "La méthode du coût variable",
        "La méthode des coûts spécifiques",
        "La méthode du coût marginal",
      ],
      answers: [1],
      explanation:
        "Malgré son nom, le direct costing anglo-saxon correspond à la méthode française du coût variable : le terme « direct » y désigne, par abus de langage, les charges directement liées au volume. La rigueur française distingue trois notions — direct, variable, spécifique — qu'il ne faut pas confondre.",
    },
    {
      id: "q7",
      question:
        "L'ajustement linéaire des charges totales d'un atelier sur son activité donne Y = 17 X + 15 400. Comment interpréter ces coefficients ?",
      choices: [
        "Coût variable unitaire de 17 € et charges fixes totales de 15 400 €",
        "Charges fixes unitaires de 17 € et charges variables totales de 15 400 €",
        "Coût complet unitaire de 17 € majoré d'un forfait de 15 400 €",
        "Coût marginal de 15 400 € pour 17 unités supplémentaires",
      ],
      answers: [0],
      explanation:
        "Une charge semi-variable se décompose en Y = aX + b : a (17 €) est le coût variable unitaire, proportionnel à l'activité X, et b (15 400 €) représente les charges fixes totales, constantes pour la structure donnée. Cette décomposition par régression est le préalable à l'application de la méthode du coût variable.",
    },
    {
      id: "q8",
      question:
        "Méca-Précision reçoit une commande de 300 pièces alors que son atelier est saturé : l'honorer impose 12 000 € de location de machine et un coût variable unitaire majoré de 48 €. Quel est le prix plancher de la commande ?",
      choices: ["48 €", "70 €", "88 €", "40 €"],
      answers: [2],
      explanation:
        "Coût marginal total = 48 × 300 + 12 000 = 26 400 €, soit 26 400 / 300 = 88 € par pièce. Le prix plancher est égal au coût marginal unitaire : structure insuffisante oblige, il inclut le coût de structure supplémentaire. Retenir 48 € (le seul coût variable) est l'erreur classique : elle oublie la location rendue nécessaire par la commande.",
    },
    {
      id: "q9",
      question: "Au bilan, à quel coût les stocks doivent-ils être valorisés ?",
      choices: [
        "Au coût variable",
        "Au coût spécifique",
        "Au coût marginal",
        "Au coût complet",
      ],
      answers: [3],
      explanation:
        "C'est une limite des coûts partiels et un piège classique : un coût partiel sous-évalue les stocks. La norme comptable impose une valorisation au coût complet — de même que la fixation d'un prix de vente durable exige un coût complet, puisqu'il doit couvrir toutes les charges.",
    },
    {
      id: "q10",
      question: "Dans un compte de résultat différentiel, comment les charges fixes sont-elles traitées ?",
      choices: [
        "Réparties entre les produits au prorata du chiffre d'affaires",
        "Déduites en une seule masse globale de la marge sur coût variable totale",
        "Imputées aux produits selon leur taux d'activité",
        "Exclues définitivement du calcul du résultat",
      ],
      answers: [1],
      explanation:
        "Les charges fixes ne sont jamais réparties par produit : elles forment une masse non répartie, déduite une seule fois de la MCV totale pour obtenir le résultat. C'est ce qui rend le compte différentiel commode pour les décisions de court terme (la structure n'est pas affectée) — et c'est ce qui le distingue du coût complet, dont les répartitions au prorata du CA font paraître déficitaires des produits pourtant contributifs.",
    },
  ],
};
