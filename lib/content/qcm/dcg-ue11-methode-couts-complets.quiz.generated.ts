// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// QCM du manuel, complet.
import type { QuizQuestion } from "../types";

export const quiz: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Qu'est-ce qu'un coût complet ?",
    "choices": [
      "Un coût qui exclut les charges fixes",
      "Un coût qui ne retient que les charges variables",
      "Un coût limité aux seules charges directes",
      "Un coût réunissant la totalité des charges (directes et indirectes) consommées par un objet de coût"
    ],
    "answers": [
      3
    ],
    "explanation": "Le coût complet incorpore l'ensemble des charges directes et indirectes."
  },
  {
    "id": "qcm2",
    "question": "Quelles sont les deux finalités de la méthode des coûts complets ?",
    "choices": [
      "Fixer un seuil de rentabilité et calculer la MCV",
      "Apprécier la rentabilité (coût de revient) et valoriser les stocks au bilan",
      "Neutraliser l'effet d'activité et calculer un boni",
      "Calculer un coût marginal et arbitrer un mix"
    ],
    "answers": [
      1
    ],
    "explanation": "Le coût complet sert à apprécier la rentabilité et à valoriser les stocks (obligation comptable)."
  },
  {
    "id": "qcm3",
    "question": "Comment traite-t-on une charge directe ?",
    "choices": [
      "Par affectation directe au coût concerné",
      "Par répartition via des clés",
      "Par imputation via des unités d'œuvre",
      "Par déversement secondaire"
    ],
    "answers": [
      0
    ],
    "explanation": "Une charge directe est affectée directement, sans calcul intermédiaire."
  },
  {
    "id": "qcm4",
    "question": "Quelle opération transfère les charges des centres principaux vers les coûts des produits ?",
    "choices": [
      "La répartition primaire",
      "L'imputation via les unités d'œuvre",
      "La répartition secondaire",
      "L'affectation"
    ],
    "answers": [
      1
    ],
    "explanation": "L'imputation rattache les charges des centres principaux aux produits au moyen des unités d'œuvre."
  },
  {
    "id": "qcm5",
    "question": "Que réalise la répartition secondaire ?",
    "choices": [
      "Elle calcule le coût de revient",
      "Elle valorise les sorties de stock",
      "Elle affecte les charges directes aux produits",
      "Elle déverse les centres auxiliaires sur les centres principaux"
    ],
    "answers": [
      3
    ],
    "explanation": "La répartition secondaire vide les centres auxiliaires en les déversant sur les centres principaux."
  },
  {
    "id": "qcm6",
    "question": "Quel est l'ordre correct des opérations sur les charges indirectes ?",
    "choices": [
      "Primaire → imputation → secondaire",
      "Secondaire → primaire → imputation",
      "Primaire → secondaire → imputation",
      "Imputation → secondaire → primaire"
    ],
    "answers": [
      2
    ],
    "explanation": "L'ordre est toujours : répartition primaire, puis secondaire, puis imputation."
  },
  {
    "id": "qcm7",
    "question": "Un centre Atelier totalise 31 000 € après répartition secondaire pour 400 heures-machine. Quel est le coût de l'unité d'œuvre ?",
    "choices": [
      "12,90 €/h-machine",
      "77,50 €/h-machine",
      "0,0129 €/h-machine",
      "124,00 €/h-machine"
    ],
    "answers": [
      1
    ],
    "explanation": "Coût d'UO = 31 000 / 400 = 77,50 € par heure-machine."
  },
  {
    "id": "qcm8",
    "question": "Achat de 3 000 kg de hêtre à 6 € le kg avec 600 € de transport : quel est le coût d'achat unitaire ?",
    "choices": [
      "6,20 €/kg",
      "6,00 €/kg",
      "2,00 €/kg",
      "9,60 €/kg"
    ],
    "answers": [
      0
    ],
    "explanation": "(3 000 × 6 + 600) / 3 000 = 18 600 / 3 000 = 6,20 € le kg."
  },
  {
    "id": "qcm9",
    "question": "Pour les éléments achetés, comment calcule-t-on la variation de stock (consommations) ?",
    "choices": [
      "Sorties + Stock final",
      "Stock initial + Entrées",
      "Stock initial − Stock final",
      "Stock final − Stock initial"
    ],
    "answers": [
      2
    ],
    "explanation": "Pour les achats, Variation = Stock initial − Stock final donne la consommation."
  },
  {
    "id": "qcm10",
    "question": "Dans le compte de stock des produits finis, à quel coût sont valorisées les sorties (produits vendus) ?",
    "choices": [
      "Au chiffre d'affaires",
      "Au coût de production des produits vendus",
      "Au prix de vente",
      "Au coût d'achat"
    ],
    "answers": [
      1
    ],
    "explanation": "Les sorties de produits finis sont valorisées au coût de production, jamais au CA."
  },
  {
    "id": "qcm11",
    "question": "Quelle relation fondamentale régit un compte de stock ?",
    "choices": [
      "SI + Entrées = Sorties + SF",
      "SI − Entrées = Sorties − SF",
      "Entrées = Sorties",
      "SI + Sorties = Entrées + SF"
    ],
    "answers": [
      0
    ],
    "explanation": "Stock initial + Entrées = Sorties + Stock final."
  },
  {
    "id": "qcm12",
    "question": "Quelle méthode de valorisation des sorties est interdite comptablement et fiscalement ?",
    "choices": [
      "PEPS (FIFO)",
      "DEPS (LIFO)",
      "CMUP",
      "Coût standard"
    ],
    "answers": [
      1
    ],
    "explanation": "Le DEPS (LIFO) est interdit en comptabilité et en fiscalité françaises."
  },
  {
    "id": "qcm13",
    "question": "En période de hausse des prix, quelle méthode minore le coût des sorties ?",
    "choices": [
      "PEPS",
      "DEPS",
      "Coût marginal",
      "CMUP après chaque entrée"
    ],
    "answers": [
      0
    ],
    "explanation": "En hausse des prix, le PEPS sort les lots anciens (moins chers) et minore les sorties."
  },
  {
    "id": "qcm14",
    "question": "Comment se calcule le coût de revient d'un produit ?",
    "choices": [
      "CA − charges variables",
      "Coût d'achat seul",
      "Coût de production des produits vendus + coût de distribution",
      "Coût de production des produits fabriqués uniquement"
    ],
    "answers": [
      2
    ],
    "explanation": "Le coût de revient = coût de production des produits VENDUS + coût de distribution."
  },
  {
    "id": "qcm15",
    "question": "Comment se calcule le résultat analytique d'un produit ?",
    "choices": [
      "Chiffre d'affaires − coût de revient complet",
      "CA − charges variables",
      "MCV − charges fixes",
      "Coût de production − coût d'achat"
    ],
    "answers": [
      0
    ],
    "explanation": "Résultat analytique = chiffre d'affaires − coût de revient complet, produit par produit."
  },
  {
    "id": "qcm16",
    "question": "Un stock final réel inférieur au stock théorique traduit :",
    "choices": [
      "Un boni d'inventaire",
      "Une suractivité",
      "Une production stockée",
      "Un mali (consommations sous-évaluées)"
    ],
    "answers": [
      3
    ],
    "explanation": "Stock réel < théorique → mali : les consommations ont été sous-évaluées."
  },
  {
    "id": "qcm17",
    "question": "Quelles affirmations sur les centres d'analyse sont exactes ?",
    "choices": [
      "Un centre doit être homogène (une seule activité)",
      "Les centres auxiliaires sont déversés sur les principaux",
      "Un centre principal est lié au processus (appro, production, distribution)",
      "Un centre auxiliaire est impliqué directement dans le process produit",
      "Le coût d'UO se calcule avant la répartition secondaire"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Le centre est homogène, le principal est lié au process, l'auxiliaire est déversé sur le principal."
  },
  {
    "id": "qcm18",
    "question": "Quelles charges peut contenir un coût d'achat ?",
    "choices": [
      "Les frais d'approvisionnement directs",
      "Le prix d'achat des matières",
      "Les commissions sur ventes",
      "Le coût de distribution",
      "L'imputation des charges indirectes d'approvisionnement"
    ],
    "answers": [
      0,
      1,
      4
    ],
    "explanation": "Le coût d'achat = prix d'achat + frais d'appro directs + indirects imputés ; la distribution n'y figure pas."
  },
  {
    "id": "qcm19",
    "question": "Quelles sont des limites de la méthode des coûts complets ?",
    "choices": [
      "L'arbitraire des clés de répartition et des UO",
      "Un coût unitaire sensible au niveau d'activité",
      "Elle ne fournit jamais de coût de revient",
      "Une assiette monétaire pas toujours causale",
      "L'incapacité à valoriser les stocks"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Arbitraire des clés, assiette monétaire non causale et sensibilité au niveau d'activité sont les limites reconnues."
  },
  {
    "id": "qcm20",
    "question": "Quelles méthodes répondent aux limites du coût complet ?",
    "choices": [
      "Les coûts partiels",
      "L'imputation rationnelle",
      "La méthode ABC",
      "La comptabilité d'engagement",
      "Le bilan fonctionnel"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "ABC (indirects lourds), imputation rationnelle (activité) et coûts partiels (CT) prolongent le coût complet."
  },
  {
    "id": "qcm21",
    "question": "Concernant le traitement des situations particulières, quelles propositions sont correctes ?",
    "choices": [
      "La valeur de revente d'un déchet récupérable se déduit du coût du produit principal",
      "Un sous-produit se valorise au prorata de sa valeur de revente",
      "Les en-cours de production sont au cœur du programme rénové",
      "Les co-produits se répartissent selon une clé physique (poids, volume)",
      "Une production d'immobilisation est immédiatement passée en charge"
    ],
    "answers": [
      0,
      1,
      3
    ],
    "explanation": "Co-produits = clé physique, déchet récupérable déduit, sous-produit au prorata de la revente ; les en-cours sont hors programme."
  },
  {
    "id": "qcm22",
    "question": "Quelles sont des forces de la méthode des coûts complets ?",
    "choices": [
      "Fournit le coût de revient utile à la fixation des prix",
      "Langage commun applicable à tous les secteurs",
      "Vision exhaustive du coût",
      "Élimine tout arbitraire de répartition"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Exhaustivité, coût de revient et universalité sont des forces ; l'arbitraire des clés subsiste."
  },
  {
    "id": "qcm23",
    "question": "L'affectation concerne les charges directes, tandis que les charges indirectes sont réparties puis imputées.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : directes affectées ; indirectes réparties puis imputées via les UO."
  },
  {
    "id": "qcm24",
    "question": "Les prestations réciproques entre deux centres auxiliaires se résolvent par un système d'équations.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : des centres qui se fournissent mutuellement imposent un système d'équations."
  },
  {
    "id": "qcm25",
    "question": "Dans le compte des produits finis, les sorties sont valorisées au chiffre d'affaires.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : elles sont valorisées au coût de production des produits vendus, pas au CA."
  },
  {
    "id": "qcm26",
    "question": "Pour les éléments produits, la variation de stock se calcule Stock final − Stock initial.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : pour les produits, Variation = SF − SI (production stockée, au crédit)."
  }
];
