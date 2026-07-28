import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-imputation-rationnelle.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const imputationRationnelle: Chapter = {
  ...generated,
  description:
    "Neutraliser l'effet du niveau d'activité sur le coût unitaire : coefficient d'imputation rationnelle, charges fixes imputées au prorata de l'activité, coût de sous-activité et boni de suractivité. La méthode isole la performance productive de l'utilisation de l'outil pour éclairer les décisions de pilotage des capacités.",
  flashcards: [
    {
      id: "fc1",
      front: "Formule du coefficient d'imputation rationnelle (coefficient d'activité)",
      back: "Coefficient = activité RÉELLE / activité NORMALE. Coef = 1 : activité normale (on retombe sur le coût complet classique) ; coef < 1 : sous-activité ; coef > 1 : suractivité. Attention à ne pas inverser le rapport.",
    },
    {
      id: "fc2",
      front: "Qu'est-ce que l'activité normale ?",
      back: "Le niveau d'activité pour lequel l'outil de production a été conçu et dimensionné. Ce n'est ni la capacité maximale (qui laisse une marge pour l'entretien et les aléas), ni l'activité réelle du moment : c'est un niveau de référence, voulu et stable.",
    },
    {
      id: "fc3",
      front: "Les trois approches pour déterminer l'activité normale",
      back: "1. Capacité théorique minorée (capacité maximale − entretien et aléas) : objective mais peut surévaluer la normale. 2. Moyenne historique : réaliste mais reproduit les sous-activités passées. 3. Prévision budgétaire : cohérente avec le pilotage mais sensible aux biais de prévision.",
    },
    {
      id: "fc4",
      front: "Formule du coût d'imputation rationnelle",
      back: "Coût IR = totalité des charges variables + charges fixes × coefficient d'activité. On incorpore toutes les charges variables (elles suivent l'activité réelle) et seulement la fraction des charges fixes correspondant au coefficient.",
    },
    {
      id: "fc5",
      front: "Propriété remarquable du coût unitaire d'imputation rationnelle",
      back: "Il est indépendant du niveau réel d'activité : il reste toujours égal au coût unitaire calculé dans les conditions normales (67 € dans l'exemple de l'atelier, quel que soit le volume). S'il augmente, c'est le signe d'une vraie dérive d'exploitation, non d'un effet de volume.",
    },
    {
      id: "fc6",
      front: "Qu'est-ce que la différence d'imputation rationnelle (DIR) ?",
      back: "L'écart entre les charges fixes réelles et les charges fixes imputées rationnellement : DIR = CF × (1 − coefficient). Elle mesure précisément l'effet du niveau d'activité. Positive en sous-activité (coût), négative en suractivité (boni).",
    },
    {
      id: "fc7",
      front: "Le coût de sous-activité (coût de chômage, mali de sous-activité)",
      back: "Quand le coefficient est inférieur à 1, la DIR est positive : elle mesure le coût de la capacité de production inemployée. Exemple : à 16 000 meubles pour une normale de 20 000 (coef 0,80), DIR = 580 000 × (1 − 0,80) = 116 000 €.",
    },
    {
      id: "fc8",
      front: "Le boni de suractivité",
      back: "Quand le coefficient est supérieur à 1, la DIR est négative : c'est un gain (l'entreprise a « sur-utilisé » son outil). Exemple : à 24 000 meubles (coef 1,20), DIR = 580 000 × (1 − 1,20) = −116 000 €. Gain non récurrent, obtenu au prix d'une usure accélérée et de risques accrus.",
    },
    {
      id: "fc9",
      front: "Mali ou malus ? Boni ou bonus ?",
      back: "On dit « mali » de sous-activité et « boni » de suractivité (du latin), jamais « malus » / « bonus ». Le coût de sous-activité est un COÛT (il s'ajoute aux charges) ; le boni est un produit qui vient en déduction.",
    },
    {
      id: "fc10",
      front: "L'identité de contrôle entre coût réel, coût IR et DIR",
      back: "Coût complet réel = Coût d'imputation rationnelle + Différence d'imputation. C'est le contrôle de cohérence à mener systématiquement (ex. : 1 072 000 + 116 000 = 1 188 000 €).",
    },
    {
      id: "fc11",
      front: "La décomposition du résultat par l'imputation rationnelle",
      back: "Résultat réel = résultat rationnel − coût de sous-activité (ou + boni de suractivité). Le résultat rationnel = (prix de vente − coût IR unitaire) × quantité mesure la performance hors effet d'activité ; la DIR isole l'effet du niveau d'activité.",
    },
    {
      id: "fc12",
      front: "Comment appliquer la méthode quand il y a plusieurs centres d'analyse ?",
      back: "Un coefficient PAR CENTRE, appliqué aux seules charges fixes du centre : les taux d'activité diffèrent d'un atelier à l'autre. Les coûts de sous-activité s'additionnent ensuite. Un coefficient global unique appliqué aux CF totales donnerait un résultat faux.",
    },
    {
      id: "fc13",
      front: "À quel coût valorise-t-on les stocks en imputation rationnelle ?",
      back: "Au coût IR, et non au coût réel : on n'incorpore pas le coût de sous-activité dans la valeur des stocks (principe de prudence), et on ne gonfle pas davantage les stocks d'un boni non réalisé.",
    },
    {
      id: "fc14",
      front: "Les principales limites de l'imputation rationnelle",
      back: "1. L'activité normale est une convention : selon le choix (capacité minorée, moyenne historique, budget), le coefficient et le coût de sous-activité changent. 2. La distinction fixe/variable est parfois délicate (charges semi-variables). 3. Les charges fixes ne sont fixes que par paliers.",
    },
    {
      id: "fc15",
      front: "Quand l'imputation rationnelle est-elle pertinente ?",
      back: "Quand les charges fixes sont importantes et l'activité fluctuante (industrie capitalistique, activités saisonnières), avec une référence d'activité normale crédible. Elle apporte peu si les charges fixes sont faibles ou l'activité stable.",
    },
    {
      id: "fc16",
      front: "La place de l'imputation rationnelle parmi les méthodes de coûts",
      back: "C'est un perfectionnement du coût complet : elle en conserve la logique mais neutralise l'effet du niveau d'activité (les deux coïncident à l'activité normale). Elle est complémentaire des coûts partiels (décision de court terme) et de l'ABC (pertinence de la répartition des indirects).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Comment se calcule le coefficient d'imputation rationnelle ?",
      choices: [
        "Activité normale / activité réelle",
        "Charges fixes / charges variables",
        "Activité réelle / activité normale",
        "Capacité maximale / activité réelle",
      ],
      answer: 2,
      explanation:
        "Coefficient = activité RÉELLE / activité NORMALE. L'erreur classique est d'inverser le rapport. Coef < 1 : sous-activité ; coef = 1 : activité normale ; coef > 1 : suractivité. Attention aussi à ne pas confondre activité normale et capacité maximale : la normale est inférieure à la capacité.",
    },
    {
      id: "q2",
      question:
        "Un atelier a une activité normale de 25 000 produits par mois. En mars, il n'en a traité que 20 000. Quel est son coefficient d'imputation rationnelle ?",
      choices: ["1,25", "0,80", "0,75", "0,20"],
      answer: 1,
      explanation:
        "Coefficient = activité réelle / activité normale = 20 000 / 25 000 = 0,80, soit une sous-activité de 20 %. Répondre 1,25 reviendrait à inverser le rapport (25 000 / 20 000) ; 0,20 est le taux de sous-activité (1 − 0,80), pas le coefficient.",
    },
    {
      id: "q3",
      question:
        "Un centre supporte 580 000 € de charges fixes ; son activité normale est de 20 000 unités et son activité réelle de 18 000 unités. Quel montant de charges fixes est imputé rationnellement ?",
      choices: ["522 000 €", "580 000 €", "58 000 €", "644 444 €"],
      answer: 0,
      explanation:
        "Coefficient = 18 000 / 20 000 = 0,90. Charges fixes imputées = 580 000 × 0,90 = 522 000 €. Les 58 000 € restants (580 000 × 0,10) constituent le coût de sous-activité. 580 000 € serait le coût complet classique ; 644 444 € résulterait d'une division par le coefficient au lieu d'une multiplication.",
    },
    {
      id: "q4",
      question:
        "Un atelier a des charges fixes mensuelles de 300 000 €, une activité normale de 25 000 produits et une activité réelle de 20 000 produits. Quel est le coût de sous-activité ?",
      choices: ["240 000 €", "75 000 €", "60 000 €", "30 000 €"],
      answer: 2,
      explanation:
        "Coefficient = 20 000 / 25 000 = 0,80. Coût de sous-activité (DIR) = CF × (1 − coef) = 300 000 × 0,20 = 60 000 €. C'est le coût de la capacité inemployée. 240 000 € correspond aux charges fixes imputées (300 000 × 0,80), pas au coût de sous-activité.",
    },
    {
      id: "q5",
      question:
        "Même atelier : charges variables de 12 €/produit, charges fixes de 300 000 €, activité normale de 25 000 produits, activité réelle de 20 000 produits. Quel est le coût unitaire d'imputation rationnelle ?",
      choices: ["12 €", "27 €", "30 €", "24 €"],
      answer: 3,
      explanation:
        "Coût IR total = (12 × 20 000) + (300 000 × 0,80) = 240 000 + 240 000 = 480 000 €. Coût IR unitaire = 480 000 / 20 000 = 24 €. On vérifie qu'il est égal au coût unitaire à l'activité normale : 12 + 300 000 / 25 000 = 12 + 12 = 24 €. Le coût réel, lui, serait de 540 000 / 20 000 = 27 € : l'écart de 3 € est le coût de sous-activité unitaire.",
    },
    {
      id: "q6",
      question:
        "Quelle est la propriété remarquable du coût unitaire d'imputation rationnelle ?",
      choices: [
        "Il reste égal au coût unitaire des conditions normales, quel que soit le niveau réel d'activité",
        "Il diminue quand l'activité augmente, comme le coût complet réel",
        "Il est toujours inférieur au coût complet réel",
        "Il ne comprend que les charges variables",
      ],
      answer: 0,
      explanation:
        "En « variabilisant » les charges fixes, la méthode rend le coût unitaire IR indépendant du volume : il reste rivé au coût normal (67 € dans l'exemple du chapitre, à 16 000 comme à 24 000 unités). Il n'est inférieur au coût réel qu'en sous-activité ; en suractivité, c'est l'inverse. Et il comprend bien toutes les charges : c'est toujours un coût complet.",
    },
    {
      id: "q7",
      question:
        "En période de suractivité (coefficient supérieur à 1), la différence d'imputation rationnelle est :",
      choices: [
        "Positive : c'est un coût de sous-activité",
        "Nulle : les charges fixes sont intégralement imputées",
        "Positive : c'est un bonus d'activité",
        "Négative : c'est un boni de suractivité, un gain non récurrent",
      ],
      answer: 3,
      explanation:
        "DIR = CF × (1 − coef). Si coef > 1, la DIR est négative : on a imputé plus de charges fixes qu'il n'y en a réellement, d'où un boni de suractivité (ex. : 580 000 × (1 − 1,20) = −116 000 €). On dit « boni », jamais « bonus ». Ce gain, obtenu au prix d'une usure accélérée de l'outil, ne doit pas être considéré comme acquis.",
    },
    {
      id: "q8",
      question: "Le coefficient d'imputation rationnelle s'applique :",
      choices: [
        "À toutes les charges, fixes et variables",
        "Aux seules charges fixes ; les charges variables sont incorporées en totalité",
        "Aux seules charges variables",
        "Aux seules charges directes",
      ],
      answer: 1,
      explanation:
        "Le coefficient ne porte QUE sur les charges fixes : ce sont elles qui créent la distorsion du coût unitaire. Les charges variables suivent naturellement l'activité réelle et sont incorporées en totalité, sans coefficient. Appliquer le coefficient aux charges variables est une erreur fréquente signalée par le chapitre.",
    },
    {
      id: "q9",
      question:
        "Une entreprise a deux ateliers avec des taux d'activité différents. Comment calcule-t-on le coût de sous-activité total ?",
      choices: [
        "En appliquant un coefficient global moyen aux charges fixes totales",
        "En ne retenant que l'atelier le plus en sous-activité",
        "En calculant un coefficient par centre, puis en additionnant les coûts de sous-activité de chaque centre",
        "En appliquant le coefficient du centre principal à tous les centres",
      ],
      answer: 2,
      explanation:
        "La méthode s'applique centre par centre : chaque centre a son propre coefficient, appliqué à ses propres charges fixes, et les coûts de sous-activité s'additionnent. Dans l'exemple du chapitre (Montage 58 000 € + Finition 60 000 € = 118 000 €), un coefficient global (≈ 0,844) appliqué aux 880 000 € de CF totales donnerait environ 137 000 €, un résultat faux, car il « moyenne » à tort des centres de tailles et de sous-activités différentes.",
    },
    {
      id: "q10",
      question:
        "En imputation rationnelle, à quel coût les stocks sont-ils valorisés ?",
      choices: [
        "Au coût d'imputation rationnelle, sans le coût de sous-activité ni le boni",
        "Au coût complet réel, incluant la totalité des charges fixes",
        "Au coût variable uniquement",
        "Au coût réel majoré du boni de suractivité",
      ],
      answer: 0,
      explanation:
        "Les stocks sont valorisés au coût IR et non au coût réel : conformément au principe de prudence, on n'incorpore pas le coût de sous-activité dans la valeur des stocks, et on ne les gonfle pas davantage d'un boni non réalisé. Le coût variable seul relèverait d'une autre méthode (coûts partiels), pas de l'imputation rationnelle.",
    },
  ],
};
