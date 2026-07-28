import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-fondements-construction-couts.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const fondementsConstructionCouts: Chapter = {
  ...generated,
  description:
    "Chapitre fondateur du bloc « coûts » : le coût comme construction au service de la décision, le tri des charges (incorporables, non incorporables, supplétives), les classifications directes/indirectes et fixes/variables, puis l'enchaînement coût d'achat → coût de production → coût de revient → résultat analytique, avec marges, taux et panorama des grandes méthodes.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'une charge ?",
      back: "La valorisation monétaire d'une consommation de ressources par l'organisation. En comptabilité financière, elle diminue le résultat de l'exercice ; en comptabilité de gestion, elle est la matière première du calcul des coûts.",
    },
    {
      id: "fc2",
      front: "Pourquoi dit-on qu'un coût est une « construction » ?",
      back: "Un coût n'est pas une donnée objective que l'on relève : c'est le résultat de choix et de conventions (quelles charges retenir ? comment les répartir ?). Selon les conventions adoptées, le coût d'un même produit varie — d'où la coexistence de plusieurs méthodes.",
    },
    {
      id: "fc3",
      front: "Comptabilité financière vs comptabilité de gestion : quelle différence de logique ?",
      back: "La comptabilité financière enregistre les charges PAR NATURE (achats, salaires, amortissements) pour un résultat global et des obligations légales. La comptabilité de gestion retraite et réorganise ces charges PAR OBJET (produit, client, activité) pour la décision interne.",
    },
    {
      id: "fc4",
      front: "Que sont les charges incorporables ?",
      back: "Les charges correspondant à l'activité normale et courante d'exploitation, reprises dans le calcul des coûts : achats de matières, salaires, loyers, énergie, amortissements des équipements de production.",
    },
    {
      id: "fc5",
      front: "Que sont les charges non incorporables ? Exemples.",
      back: "Des charges enregistrées en comptabilité financière mais EXCLUES du calcul des coûts car étrangères à l'exploitation normale et courante : charges exceptionnelles (pénalités, amendes), charges sans rapport avec l'objet de l'entreprise, dotations à caractère fiscal ou exceptionnel.",
    },
    {
      id: "fc6",
      front: "Que sont les charges supplétives ? Les deux exemples classiques.",
      back: "Des charges ABSENTES de la comptabilité financière mais AJOUTÉES en comptabilité de gestion car elles représentent une consommation économique réelle : la rémunération du travail de l'exploitant (entreprise individuelle) et la rémunération des capitaux propres.",
    },
    {
      id: "fc7",
      front: "À quoi servent les charges supplétives ?",
      back: "À assurer la comparabilité économique entre entreprises de statuts ou de financements différents : une entreprise financée par emprunt supporte des intérêts en charges, celle financée par capitaux propres non — alors qu'elles consomment la même ressource « capital ».",
    },
    {
      id: "fc8",
      front: "Relation fondamentale : charges incorporées aux coûts = ?",
      back: "Charges incorporées = charges de la comptabilité financière − charges non incorporables + charges supplétives. La différence d'incorporation (supplétives − non incorporables) réconcilie résultat analytique et résultat comptable.",
    },
    {
      id: "fc9",
      front: "Charge directe vs charge indirecte",
      back: "Directe : affectable sans ambiguïté à un seul objet de coût (bois d'une table, salaire d'un ouvrier dédié). Indirecte : commune à plusieurs objets, elle doit être répartie via une clé ou une unité d'œuvre (loyer de l'atelier, salaire du chef d'atelier). Le critère est la DESTINATION de la charge.",
    },
    {
      id: "fc10",
      front: "Charge variable vs charge fixe",
      back: "Variable (opérationnelle) : varie avec le niveau d'activité (matières, consommables). Fixe (de structure) : indépendante du volume sur une période et une zone d'activité données (loyer, amortissement, encadrement). Le critère est le COMPORTEMENT face au volume.",
    },
    {
      id: "fc11",
      front: "Comment évoluent les charges fixes et variables À L'UNITÉ ?",
      back: "La charge variable unitaire est constante ; la charge fixe unitaire DIMINUE quand l'activité augmente — c'est l'effet d'absorption des charges fixes (« économies d'échelle »). Attention : une charge n'est fixe que dans sa zone de pertinence, au-delà elle augmente par paliers.",
    },
    {
      id: "fc12",
      front: "Qu'est-ce qu'un coût irrécupérable (sunk cost) ?",
      back: "Une charge déjà engagée et non récupérable quelle que soit la décision future. Elle ne doit JAMAIS influencer une décision : seule compte la comparaison des coûts et recettes futurs (charges pertinentes = celles qui changent selon la décision).",
    },
    {
      id: "fc13",
      front: "Qu'est-ce qu'un objet de coût ? L'enchaînement des niveaux de coûts ?",
      back: "Tout élément dont on veut mesurer le coût de façon autonome (produit, service, client, projet, processus). L'enchaînement suit le cycle d'exploitation : coût d'achat → coût de production (+ MOD + frais d'atelier) → coût de revient (+ charges hors production) → résultat analytique.",
    },
    {
      id: "fc14",
      front: "Marge, résultat, taux de marge, taux de profitabilité : les formules",
      back: "Marge = prix (ou CA) − un coût. Résultat = CA − coût de revient complet. Taux de marge = (marge ÷ coût) × 100. Taux de profitabilité = (résultat ÷ CA) × 100. Ne pas confondre profitabilité (résultat/CA) et rentabilité (résultat/capitaux engagés).",
    },
    {
      id: "fc15",
      front: "Les quatre grandes méthodes de calcul des coûts",
      back: "1. Coûts complets (centres d'analyse, fixation des prix). 2. ABC (activités et inducteurs, charges indirectes plus justes). 3. Coûts partiels (charges variables ou directes, décisions de court terme). 4. Imputation rationnelle (neutralise l'effet du niveau d'activité sur le coût unitaire).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "La rémunération des capitaux propres apportés par les associés est, en comptabilité de gestion :",
      choices: [
        "Une charge non incorporable, exclue des coûts",
        "Une charge incorporable, reprise telle quelle de la comptabilité financière",
        "Une charge supplétive, ajoutée aux coûts alors qu'elle est absente de la comptabilité financière",
        "Une charge exceptionnelle",
      ],
      answer: 2,
      explanation:
        "Les capitaux propres ont un coût d'opportunité réel qui n'apparaît pas en charges comptables. On l'ajoute en comptabilité de gestion (charge supplétive), comme la rémunération du travail de l'exploitant, pour assurer la comparabilité entre entreprises financées différemment.",
    },
    {
      id: "q2",
      question:
        "Une amende payée par l'entreprise est enregistrée en comptabilité financière. Dans le calcul des coûts, elle est :",
      choices: [
        "Exclue : c'est une charge non incorporable, étrangère à l'exploitation normale et courante",
        "Reprise dans le coût de revient, puisqu'elle diminue le résultat",
        "Ajoutée comme charge supplétive",
        "Répartie entre les produits via une unité d'œuvre",
      ],
      answer: 0,
      explanation:
        "Les charges exceptionnelles (pénalités, amendes, créances irrécouvrables) et les dotations à caractère fiscal ou exceptionnel ne relèvent pas de l'exploitation normale : les intégrer fausserait le coût des produits. Elles sont enregistrées en comptabilité financière mais exclues des coûts.",
    },
    {
      id: "q3",
      question: "Le salaire du chef d'atelier, qui supervise la fabrication de plusieurs produits, est :",
      choices: [
        "Une charge directe, car il travaille dans l'atelier de production",
        "Une charge indirecte, car commune à plusieurs objets de coût, à répartir via une clé",
        "Une charge non incorporable",
        "Une charge supplétive",
      ],
      answer: 1,
      explanation:
        "Le critère est la possibilité d'affectation : le chef d'atelier travaille pour toutes les références, sa rémunération ne peut être affectée sans ambiguïté à un seul produit. C'est une charge indirecte, contrairement au salaire d'un ouvrier dédié à un seul produit (MOD, directe).",
    },
    {
      id: "q4",
      question:
        "COMPOSAL vend son composant 90 € ; le coût variable unitaire est de 40 € et les charges fixes annuelles de 200 000 €. Quel est le seuil de profitabilité en quantité ?",
      choices: ["2 222 produits", "5 000 produits", "2 500 produits", "4 000 produits"],
      answer: 3,
      explanation:
        "Marge sur coût variable unitaire = 90 − 40 = 50 €. Seuil = charges fixes ÷ MCV unitaire = 200 000 ÷ 50 = 4 000 produits. Diviser les charges fixes par le prix de vente (200 000 ÷ 90 ≈ 2 222) est l'erreur classique : c'est la marge, et non le prix, qui couvre les charges fixes.",
    },
    {
      id: "q5",
      question:
        "« On a déjà investi 100 000 € dans ce projet, il faut continuer pour ne pas les perdre. » Ce raisonnement est :",
      choices: [
        "Correct : abandonner ferait perdre l'investissement",
        "Correct si le projet est proche de son terme",
        "Erroné : les 100 000 € sont un coût irrécupérable, perdu quoi qu'il arrive ; seuls comptent les coûts et recettes futurs",
        "Erroné : il fallait amortir l'investissement avant de décider",
      ],
      answer: 2,
      explanation:
        "C'est le piège des coûts irréversibles (sunk costs) signalé par le chapitre : une dépense déjà engagée et non récupérable ne doit jamais influencer une décision future. Seules les charges pertinentes — celles qui changent selon la décision — entrent dans le raisonnement.",
    },
    {
      id: "q6",
      question:
        "Le composant COMPOSAL est vendu 90 € pour un coût de revient de 80 €, soit un résultat analytique de 10 €. Le taux de profitabilité est :",
      choices: [
        "(10 ÷ 80) × 100 = 12,5 %",
        "(10 ÷ 90) × 100 ≈ 11,1 %",
        "(80 ÷ 90) × 100 ≈ 88,9 %",
        "(90 − 80) = 10 %",
      ],
      answer: 1,
      explanation:
        "Le taux de profitabilité rapporte le résultat au CHIFFRE D'AFFAIRES : (10 ÷ 90) × 100 ≈ 11,1 %. Le rapport (10 ÷ 80) × 100 = 12,5 % est le taux de marge, qui rapporte la marge au COÛT. Les deux taux mesurent des choses différentes et ne doivent pas être confondus.",
    },
    {
      id: "q7",
      question: "Dans la construction des coûts, le coût de revient d'un produit vendu se définit comme :",
      choices: [
        "Le coût de production des produits vendus, augmenté des charges hors production (distribution, administration)",
        "Le coût d'achat des matières, augmenté des frais d'approvisionnement",
        "La somme des seules charges directes du produit",
        "Le prix de vente diminué de la marge cible",
      ],
      answer: 0,
      explanation:
        "L'enchaînement suit le cycle d'exploitation : coût d'achat (prix d'achat + frais d'approvisionnement) → coût de production (+ MOD + charges indirectes d'atelier) → coût de revient (+ charges hors production). C'est le coût complet et final du produit vendu ; résultat analytique = prix de vente − coût de revient.",
    },
    {
      id: "q8",
      question:
        "COMPOSAL (coût de revient complet 80 €, coût variable 40 €, charges fixes déjà couvertes, capacité disponible) reçoit une commande spéciale ponctuelle de 800 produits à 60 €. Quel est l'impact sur le résultat si elle accepte ?",
      choices: [
        "− 16 000 €, car 60 € est inférieur au coût de revient de 80 €",
        "0 €, la commande est neutre",
        "+ 16 000 €, car chaque produit dégage 60 − 40 = 20 € de marge sur coût variable",
        "+ 48 000 €, soit 800 × 60 €",
      ],
      answer: 2,
      explanation:
        "Les charges fixes étant déjà absorbées par l'activité courante et la capacité disponible, seules les charges variables sont pertinentes : marge = 800 × (60 − 40) = 16 000 € qui s'ajoutent intégralement au résultat. Raisonner en coût complet (60 − 80 = − 20 €) conduirait à refuser à tort — c'est le piège signalé par le chapitre. La décision ne vaut que si la commande reste ponctuelle et ne cannibalise pas les ventes à 90 €.",
    },
    {
      id: "q9",
      question: "Les charges incorporées aux coûts se calculent par la relation :",
      choices: [
        "Charges de la comptabilité financière + non incorporables − supplétives",
        "Charges de la comptabilité financière + non incorporables + supplétives",
        "Charges de la comptabilité financière − supplétives",
        "Charges de la comptabilité financière − non incorporables + supplétives",
      ],
      answer: 3,
      explanation:
        "On part des charges de la comptabilité financière, on RETIRE les non incorporables (hors exploitation normale) et on AJOUTE les supplétives (rémunération de l'exploitant, des capitaux propres). La différence d'incorporation (supplétives − non incorporables) permet de réconcilier résultat analytique et résultat comptable.",
    },
    {
      id: "q10",
      question: "Quand le volume d'activité augmente (dans la zone de pertinence), la charge fixe unitaire :",
      choices: [
        "Reste constante, puisque la charge est fixe",
        "Diminue, par effet d'absorption des charges fixes sur un plus grand nombre d'unités",
        "Augmente proportionnellement au volume",
        "Devient une charge variable",
      ],
      answer: 1,
      explanation:
        "En TOTAL, les charges fixes sont constantes ; à L'UNITÉ, elles diminuent quand l'activité augmente (effet d'absorption, « économies d'échelle »), tandis que la charge variable unitaire reste constante. Attention : une charge n'est fixe que sur sa zone de pertinence — au-delà, elle augmente par paliers.",
    },
  ],
};
