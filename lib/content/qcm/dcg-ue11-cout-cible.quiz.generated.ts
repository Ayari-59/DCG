// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// QCM du manuel, complet.
import type { QuizQuestion } from "../types";

export const quiz: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Quelle formule définit le coût cible ?",
    "choices": [
      "Coût cible = Prix imposé + Profit cible",
      "Coût cible = Prix imposé - Profit cible",
      "Coût cible = Coût de revient + Marge",
      "Coût cible = Coût estimé - Cost gap"
    ],
    "answers": [
      1
    ],
    "explanation": "Le coût cible = Prix imposé par le marché - Profit cible : le coût devient une variable d'action."
  },
  {
    "id": "qcm2",
    "question": "En quoi le coût cible s'oppose-t-il à la logique « cost-plus » ?",
    "choices": [
      "Il fixe le prix à partir du coût de revient",
      "Il ajoute la marge au coût pour fixer le prix",
      "Il ignore totalement la marge",
      "Le marché impose le prix et le coût doit s'y adapter"
    ],
    "answers": [
      3
    ],
    "explanation": "Dans le cost-plus, prix = coût + marge ; dans le coût cible, le marché impose le prix et le coût s'y adapte."
  },
  {
    "id": "qcm3",
    "question": "Comment calcule-t-on le coût cible annuel à partir du taux de marge ?",
    "choices": [
      "Prix × taux de marge",
      "Prix × (1 - taux de marge)",
      "Prix + taux de marge",
      "Prix / (1 - taux de marge)"
    ],
    "answers": [
      1
    ],
    "explanation": "Coût cible annuel = Prix × (1 - taux de marge)."
  },
  {
    "id": "qcm4",
    "question": "Un produit a un prix de 60 € et une marge cible de 25 %. Quel est son coût cible ?",
    "choices": [
      "45 €",
      "48 €",
      "75 €",
      "15 €"
    ],
    "answers": [
      0
    ],
    "explanation": "Coût cible = 60 × (1 - 0,25) = 60 × 0,75 = 45 €."
  },
  {
    "id": "qcm5",
    "question": "Comment calcule-t-on le cost gap (écart de coût) ?",
    "choices": [
      "Prix - Coût cible",
      "Coût cible - Coût estimé",
      "Coût estimé - Coût cible",
      "Coût estimé - Prix"
    ],
    "answers": [
      2
    ],
    "explanation": "Cost gap = Coût estimé - Coût cible : c'est l'écart à résorber."
  },
  {
    "id": "qcm6",
    "question": "Avec un coût estimé de 49,50 € et un coût cible de 43,79 €, quel est le cost gap unitaire ?",
    "choices": [
      "5,71 €",
      "93,29 €",
      "43,79 €",
      "6,29 €"
    ],
    "answers": [
      0
    ],
    "explanation": "Cost gap = 49,50 - 43,79 = 5,71 €/produit."
  },
  {
    "id": "qcm7",
    "question": "Avec un coût estimé de 74,00 € et un coût cible de 68,24 €, quel est le cost gap ?",
    "choices": [
      "6,76 €",
      "5,76 €",
      "142,24 €",
      "68,24 €"
    ],
    "answers": [
      1
    ],
    "explanation": "Cost gap = 74,00 - 68,24 = 5,76 €/produit."
  },
  {
    "id": "qcm8",
    "question": "Quelle proportion des coûts est engagée dès la conception du produit ?",
    "choices": [
      "Environ 80 %",
      "Environ 20 %",
      "Environ 100 %",
      "Environ 50 %"
    ],
    "answers": [
      0
    ],
    "explanation": "Environ 80 % des coûts du cycle sont pré-engagés dès la phase de conception."
  },
  {
    "id": "qcm9",
    "question": "Comment définit-on la valeur dans l'analyse de la valeur ?",
    "choices": [
      "La marge réalisée",
      "Le rapport entre la satisfaction des besoins et les ressources (coûts) engagées",
      "Le prix de vente du produit",
      "Le coût total du produit"
    ],
    "answers": [
      1
    ],
    "explanation": "La valeur = rapport entre la satisfaction des besoins procurée et les ressources (coûts) engagées."
  },
  {
    "id": "qcm10",
    "question": "Que signifie l'expression « coûts engagés » par opposition à « coûts dépensés » ?",
    "choices": [
      "Coûts décidés par la conception (maîtrisables)",
      "Coûts variables uniquement",
      "Coûts cachés de la non-qualité",
      "Coûts effectivement décaissés"
    ],
    "answers": [
      0
    ],
    "explanation": "Les coûts engagés sont décidés par la conception (maîtrisables) ; les coûts dépensés sont effectivement décaissés."
  },
  {
    "id": "qcm11",
    "question": "Pour une fonction, le coût estimé est nettement supérieur au coût cible alors que la fonction est secondaire. Que faire ?",
    "choices": [
      "Enrichir la fonction",
      "Ne rien faire",
      "Augmenter le prix de vente",
      "Rationaliser / réduire le coût de cette fonction"
    ],
    "answers": [
      3
    ],
    "explanation": "Coût > valeur pour une fonction secondaire : la fonction est sur-investie, il faut rationaliser et réduire son coût."
  },
  {
    "id": "qcm12",
    "question": "Une fonction très valorisée par le client a un coût estimé inférieur au coût cible. Que recommander ?",
    "choices": [
      "La laisser telle quelle sans analyse",
      "Enrichir le produit en y investissant le surplus",
      "Réduire encore son coût mécaniquement",
      "La supprimer"
    ],
    "answers": [
      1
    ],
    "explanation": "Coût < cible pour une fonction valorisée : un coût inférieur n'est pas forcément bon ; il faut investir le surplus pour renforcer l'avantage."
  },
  {
    "id": "qcm13",
    "question": "Quelle méthode d'estimation du coût repose sur une corrélation coût/paramètres physiques (Y = aX + b) ?",
    "choices": [
      "La méthode analogique",
      "La méthode analytique",
      "La méthode paramétrique",
      "La méthode ABC"
    ],
    "answers": [
      2
    ],
    "explanation": "La méthode paramétrique relie le coût à des paramètres physiques (Y = aX + b), utilisée très en amont."
  },
  {
    "id": "qcm14",
    "question": "Qu'est-ce que l'ingénierie simultanée ?",
    "choices": [
      "Calculer le coût après la production",
      "Réduire mécaniquement tous les coûts",
      "Faire travailler en parallèle, dès la conception, toutes les fonctions concernées",
      "Externaliser la conception"
    ],
    "answers": [
      2
    ],
    "explanation": "L'ingénierie simultanée fait travailler en parallèle, dès la conception, marketing, BE, achats, production et contrôle de gestion."
  },
  {
    "id": "qcm15",
    "question": "Comment calcule-t-on le taux d'acceptabilité d'un prix psychologique ?",
    "choices": [
      "% acheteurs - % non-acheteurs",
      "100 % + % non-acheteurs",
      "100 % - % non-acheteurs",
      "Prix / volume"
    ],
    "answers": [
      2
    ],
    "explanation": "Taux d'acceptabilité = 100 % - % de non-acheteurs ; le prix cible maximise ce taux."
  },
  {
    "id": "qcm16",
    "question": "Quelles sont des limites des approches traditionnelles de coûts justifiant le coût cible ?",
    "choices": [
      "Impossibilité de tout calcul de coût",
      "Focalisation sur la production alors que 70-90 % des coûts sont en amont et en aval",
      "Inadaptation aux produits innovants à cycle court",
      "Logique de production et non de marché"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Les approches traditionnelles sont centrées production, a posteriori et mal adaptées à l'innovation à cycle court."
  },
  {
    "id": "qcm17",
    "question": "Parmi les méthodes d'estimation du coût, lesquelles sont citées ?",
    "choices": [
      "Analytique",
      "Paramétrique",
      "Analogique",
      "Aléatoire",
      "Comptable légale"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Les trois méthodes : paramétrique, analogique et analytique (l'ABC est fréquemment mobilisée pour le coût estimé)."
  },
  {
    "id": "qcm18",
    "question": "Parmi les propositions, lesquelles sont des étapes de la démarche de coût cible ?",
    "choices": [
      "Supprimer la phase de conception",
      "Calculer le cost gap",
      "Déterminer le prix de vente de marché",
      "Fixer le prix au coût de revient majoré"
    ],
    "answers": [
      1,
      2
    ],
    "explanation": "Le prix de marché et le cost gap sont des étapes du coût cible ; fixer le prix au coût majoré relève du cost-plus, et la conception est au contraire centrale."
  },
  {
    "id": "qcm19",
    "question": "Quelles fonctions du produit sont distinguées dans l'analyse fonctionnelle ?",
    "choices": [
      "Fonctions de service et techniques",
      "Fonctions d'usage et d'estime",
      "Fonctions principales et de contrainte",
      "Fonctions fiscales et comptables"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "On distingue service/technique, usage/estime, principale/contrainte."
  },
  {
    "id": "qcm20",
    "question": "Quels outils numériques soutiennent le coût cible ?",
    "choices": [
      "Tableur de paie",
      "PLM (gestion du cycle de vie produit)",
      "Jumeaux numériques",
      "Data analytics"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "PLM, ERP, jumeaux numériques, data analytics et IA générative soutiennent la démarche de coût cible."
  },
  {
    "id": "qcm21",
    "question": "Le coût cible remplace les méthodes de coûts complets et ABC.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : le coût cible est une approche prospective complémentaire ; les méthodes classiques restent indispensables (l'ABC sert au coût estimé)."
  },
  {
    "id": "qcm22",
    "question": "Un coût estimé inférieur au coût cible est toujours une bonne nouvelle.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : si la fonction est valorisée par le client, un coût inférieur peut signaler une fonction sous-investie qu'il faut enrichir."
  },
  {
    "id": "qcm23",
    "question": "Le coût cible est un coût maximal admissible défini ex ante (avant le lancement).",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : le coût cible est le coût maximal admissible, défini ex ante sous la contrainte du marché."
  },
  {
    "id": "qcm24",
    "question": "Dans l'analyse de la valeur, on doit amputer un coût même si cela dégrade la valeur perçue par le client.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : la règle d'or est de ne jamais amputer un coût si cela dégrade la valeur perçue ; on optimise le rapport valeur/coût."
  },
  {
    "id": "qcm25",
    "question": "L'éco-conception est au cœur du coût cible car 80 % des coûts et des impacts sont décidés en conception.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : puisque 80 % des coûts et des impacts sont décidés en conception, c'est là que se joue la performance environnementale."
  }
];
