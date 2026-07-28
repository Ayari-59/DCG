import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-modele-volume-cout-profit.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const modeleVolumeCoutProfit: Chapter = {
  ...generated,
  description:
    "Le modèle volume-coût-profit (CVP) relie coûts, volume d'activité et résultat : marge sur coût variable, seuil de profitabilité, point mort, marge et indice de sécurité, levier opérationnel. Un outil de diagnostic du risque d'exploitation et d'aide à la décision, dont il faut aussi connaître les hypothèses et les limites.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce que le modèle coût-volume-profit (CVP) ?",
      back: "Une modélisation mathématique qui met en relation, sous forme d'une équation, les trois dimensions que sont le coût, le volume d'activité (les ventes) et le profit (le résultat). C'est une représentation linéaire et volontairement simplifiée de la structure de coûts, de la forme Y = aX + b.",
    },
    {
      id: "fc2",
      front: "Équation fondamentale du modèle CVP",
      back: "R = CA − CV − CF, avec CA = P × Q et CV = c × CA (c = coût variable relatif). D'où R = (1 − c) × CA − CF, où (1 − c) est la marge sur coût variable relative (le taux de MCV).",
    },
    {
      id: "fc3",
      front: "Qu'est-ce que la marge sur coût variable (MCV) ?",
      back: "Différence entre le chiffre d'affaires et les charges variables : MCV = CA − CV. Elle mesure ce qui reste, après couverture des charges variables, pour financer les charges fixes puis dégager un résultat. C'est le pivot de tout le modèle.",
    },
    {
      id: "fc4",
      front: "Formule du taux de marge sur coût variable",
      back: "Taux de MCV = MCV / CA = 1 − c (part de marge dans chaque euro de CA). Exemple Brasserie du Mont : 400 000 / 1 000 000 = 40 %. Connaître CF et taux de MCV suffit à calculer le seuil en valeur instantanément.",
    },
    {
      id: "fc5",
      front: "Définition et formule du seuil de profitabilité (seuil de rentabilité)",
      back: "Niveau de ventes pour lequel le résultat est nul : la MCV couvre exactement les charges fixes. En valeur : Seuil = CF / taux de MCV. Il peut s'exprimer en valeur (un CA) ou en volume (un nombre d'unités).",
    },
    {
      id: "fc6",
      front: "Formule du seuil de profitabilité en volume",
      back: "Seuil en volume = CF / MCV unitaire, ou Seuil en valeur / prix de vente unitaire. Exemple Brasserie du Mont : 300 000 / 20 = 15 000 sodas (= 750 000 / 50).",
    },
    {
      id: "fc7",
      front: "Qu'est-ce que le point mort ?",
      back: "La date à laquelle le seuil de profitabilité est atteint au cours de l'exercice. Si l'activité est régulière : m = (Seuil × 12) / CA annuel (en mois). Plus cette date est précoce, plus l'entreprise est en sécurité.",
    },
    {
      id: "fc8",
      front: "« Seuil de profitabilité » et « point mort » : quelle différence ?",
      back: "Rigoureusement, le seuil est un montant (ex. 750 000 €) tandis que le point mort est la date à laquelle ce montant est atteint (ex. fin septembre). En pratique les deux sont atteints au même instant ; il faut préciser l'un ou l'autre selon la question posée.",
    },
    {
      id: "fc9",
      front: "Formule de la marge de sécurité (MS)",
      back: "MS = CA − Seuil de profitabilité. C'est la baisse de chiffre d'affaires que l'entreprise peut supporter avant de tomber en perte (le « matelas »).",
    },
    {
      id: "fc10",
      front: "Formule de l'indice de sécurité (IS)",
      back: "IS = MS / CA = (CA − Seuil) / CA. C'est la marge de sécurité exprimée en pourcentage du chiffre d'affaires ; il permet la comparaison entre entreprises ou entre exercices. Brasserie du Mont : 250 000 / 1 000 000 = 25 %.",
    },
    {
      id: "fc11",
      front: "Formule de l'indice de prélèvement (IP)",
      back: "IP = (CF / CA) × 100 : pourcentage de chiffre d'affaires nécessaire pour couvrir les charges fixes. Plus il est faible, plus l'entreprise atteint facilement son seuil. Brasserie du Mont : 300 000 / 1 000 000 = 30 %.",
    },
    {
      id: "fc12",
      front: "Définition et formules du levier opérationnel (LO)",
      back: "Aussi appelé levier d'exploitation ou coefficient de volatilité : élasticité du résultat par rapport au CA. LO = (ΔR/R) / (ΔCA/CA) ; si taux de MCV et CF sont stables : LO = MCV / Résultat = 1 / Indice de sécurité. Brasserie du Mont : 400 000 / 100 000 = 4.",
    },
    {
      id: "fc13",
      front: "Comment interpréter un levier opérationnel de 4 ?",
      back: "Une variation de 1 % du CA fait varier le résultat de 4 %. Plus les charges fixes sont lourdes et l'indice de sécurité faible, plus le levier est puissant : profits amplifiés en haute conjoncture, pertes creusées en basse conjoncture. Plus le levier est puissant, plus le risque l'est aussi.",
    },
    {
      id: "fc14",
      front: "Les 5 hypothèses du modèle CVP",
      back: "1. Linéarité des charges (CV proportionnelles, CF constantes). 2. Prix de vente constant. 3. Structure stable (validité à l'intérieur d'un palier). 4. Pas de stock : production = ventes. 5. Court terme : outil de pilotage tactique, non stratégique.",
    },
    {
      id: "fc15",
      front: "Piège de la multiproduction : à quelle condition le seuil global est-il valable ?",
      back: "Le seuil global (CF / taux de MCV moyen) suppose une structure des ventes (mix produit) constante. Si le mix évolue, le taux de marge moyen change et le seuil global devient faux. Toujours mentionner cette hypothèse à l'examen.",
    },
    {
      id: "fc16",
      front: "Erreur fréquente : charge fixe unitaire et charge fixe totale",
      back: "La charge fixe totale est constante, mais rapportée à l'unité produite elle diminue quand le volume augmente (effet de dilution). Inversement, la charge variable unitaire est constante alors que la charge variable totale croît avec le volume.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Que mesure la marge sur coût variable (MCV) ?",
      choices: [
        "La différence entre le chiffre d'affaires et l'ensemble des charges",
        "Le pourcentage de chiffre d'affaires absorbé par les charges fixes",
        "Ce qui reste, après couverture des charges variables, pour financer les charges fixes puis dégager un résultat",
        "Le résultat dégagé par chaque unité vendue au-delà du seuil de profitabilité uniquement",
      ],
      answer: 2,
      explanation:
        "MCV = CA − charges variables. La formation du résultat suit une cascade : le CA absorbe d'abord les charges variables pour dégager la MCV, laquelle doit couvrir les charges fixes avant de laisser apparaître un résultat. C'est le pivot de tout le modèle CVP.",
    },
    {
      id: "q2",
      question:
        "Une entreprise monoproduit supporte 240 000 € de charges fixes ; le prix de vente unitaire est de 8 € et le coût variable unitaire de 4 €. Quel est le seuil de profitabilité en volume ?",
      choices: ["30 000 produits", "60 000 produits", "48 000 produits", "120 000 produits"],
      answer: 1,
      explanation:
        "MCV unitaire = 8 − 4 = 4 € ; taux de MCV = 4 / 8 = 50 %. Seuil en volume = CF / MCV unitaire = 240 000 / 4 = 60 000 produits (cohérent avec le seuil en valeur : 240 000 / 0,50 = 480 000 €, soit 480 000 / 8 = 60 000 unités).",
    },
    {
      id: "q3",
      question:
        "La Brasserie du Mont réalise un chiffre d'affaires annuel de 1 000 000 €, régulier sur l'année, et son seuil de profitabilité est de 750 000 €. À quelle date le point mort est-il atteint ?",
      choices: ["Fin juin", "Fin août", "Fin septembre", "Fin octobre"],
      answer: 2,
      explanation:
        "Activité régulière : règle de trois. m = (750 000 × 12) / 1 000 000 = 9 mois. Le seuil est donc atteint à la fin du 9ᵉ mois, c'est-à-dire fin septembre. Attention : le point mort est une date, le seuil un montant.",
    },
    {
      id: "q4",
      question:
        "Une entreprise affiche une MCV de 400 000 € et un résultat de 100 000 €. Si son chiffre d'affaires baisse de 10 % (taux de MCV et charges fixes stables), de combien varie son résultat ?",
      choices: ["−40 %", "−10 %", "−4 %", "−25 %"],
      answer: 0,
      explanation:
        "Levier opérationnel LO = MCV / Résultat = 400 000 / 100 000 = 4. Variation du résultat = LO × variation du CA = 4 × (−10 %) = −40 %. Vérification : à 18 000 sodas au lieu de 20 000, la MCV tombe à 360 000 € et le résultat à 60 000 €, soit bien −40 %.",
    },
    {
      id: "q5",
      question: "Laquelle de ces propositions n'est PAS une hypothèse du modèle CVP ?",
      choices: [
        "Les charges variables sont strictement proportionnelles au volume",
        "Le prix de vente unitaire est constant",
        "Les charges fixes sont stables sur la période (structure stable)",
        "La production est supérieure aux ventes pour constituer des stocks",
      ],
      answer: 3,
      explanation:
        "C'est l'inverse : le modèle suppose l'absence de stock, c'est-à-dire production = ventes (tout ce qui est produit est vendu). Les autres propositions correspondent bien aux hypothèses de linéarité des charges, de prix constant et de structure stable.",
    },
    {
      id: "q6",
      question:
        "Pourquoi le programme rénové privilégie-t-il l'expression « seuil de profitabilité » plutôt que « seuil de rentabilité » ?",
      choices: [
        "Parce que les deux expressions désignent des calculs différents",
        "Parce que la profitabilité rapporte le résultat au chiffre d'affaires, alors que la rentabilité le rapporte à l'actif économique",
        "Parce que le seuil de rentabilité intègre les charges financières",
        "Parce que « seuil de rentabilité » est réservé aux entreprises industrielles",
      ],
      answer: 1,
      explanation:
        "La profitabilité rapporte le résultat au chiffre d'affaires ; la rentabilité rapporte le résultat à l'actif économique (notion étudiée en UE 6). Les deux expressions désignent le même calcul, mais le programme rénové attend le terme « profitabilité ».",
    },
    {
      id: "q7",
      question:
        "La société Lumina réalise un chiffre d'affaires de 1 800 000 € pour un seuil de profitabilité de 1 200 000 €. Quel est son indice de sécurité ?",
      choices: ["33,3 %", "25 %", "66,7 %", "40 %"],
      answer: 0,
      explanation:
        "Marge de sécurité MS = 1 800 000 − 1 200 000 = 600 000 €. Indice de sécurité IS = MS / CA = 600 000 / 1 800 000 = 33,3 % : le chiffre d'affaires peut reculer d'un tiers avant que l'entreprise ne tombe en perte. On retrouve d'ailleurs LO = 1 / 0,333 = 3.",
    },
    {
      id: "q8",
      question: "En multiproduction, le calcul d'un seuil de profitabilité global n'est valable que si :",
      choices: [
        "Tous les produits ont le même prix de vente",
        "Les charges fixes sont réparties entre les produits",
        "L'entreprise ne produit que deux produits",
        "La structure des ventes (mix produit) reste constante",
      ],
      answer: 3,
      explanation:
        "Le seuil global repose sur un taux de MCV moyen : si le mix évolue, ce taux moyen change et le seuil global devient faux. Le raisonnement rigoureux exprime le seuil en fonction des quantités (ex. 20 A + 60 B ≥ 300 000) : le seuil n'est plus un point mais une droite.",
    },
    {
      id: "q9",
      question:
        "La Brasserie du Mont supporte 300 000 € de charges de structure pour un chiffre d'affaires de 1 000 000 €. Quel est son indice de prélèvement ?",
      choices: ["40 %", "25 %", "30 %", "70 %"],
      answer: 2,
      explanation:
        "IP = (CF / CA) × 100 = 300 000 / 1 000 000 = 30 % : près d'un tiers du chiffre d'affaires sert à couvrir les charges fixes. Plus cet indice est faible, plus l'entreprise atteint facilement son seuil. Ne pas confondre avec le taux de MCV (40 %) ni l'indice de sécurité (25 %).",
    },
    {
      id: "q10",
      question: "Quelle affirmation distingue correctement le seuil de profitabilité du point mort ?",
      choices: [
        "Le seuil s'exprime toujours en volume, le point mort toujours en valeur",
        "Le seuil est un montant de chiffre d'affaires, le point mort la date à laquelle ce montant est atteint",
        "Le point mort n'existe que pour les activités saisonnières",
        "Le seuil intègre les charges variables, le point mort seulement les charges fixes",
      ],
      answer: 1,
      explanation:
        "Rigoureusement, le seuil est un montant (ex. 750 000 €) et le point mort une date (ex. fin septembre). En pratique les deux sont atteints au même instant, mais c'est un piège classique de l'épreuve : il faut savoir préciser l'un ou l'autre selon ce que demande l'énoncé.",
    },
  ],
};
