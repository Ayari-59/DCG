// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// QCM du manuel, complet.
import type { QuizQuestion } from "../types";

export const quiz: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "La masse salariale « chargée » se calcule par :",
    "choices": [
      "Rémunérations brutes × (1 + taux de charges patronales)",
      "Rémunérations brutes - cotisations salariales",
      "Rémunérations nettes × (1 + taux patronal)",
      "Rémunérations nettes - cotisations patronales"
    ],
    "answers": [
      0
    ],
    "explanation": "MS chargée = rémunérations brutes × (1 + taux de charges patronales)."
  },
  {
    "id": "qcm2",
    "question": "Le coût total employeur (« super-brut ») correspond à :",
    "choices": [
      "Le brut diminué de l'impôt",
      "Le brut diminué des cotisations salariales",
      "Le salaire net perçu",
      "Le brut augmenté des cotisations patronales"
    ],
    "answers": [
      3
    ],
    "explanation": "Le super-brut = rémunération brute + cotisations patronales : c'est le coût réel supporté par l'employeur."
  },
  {
    "id": "qcm3",
    "question": "L'« effet cliquet » applicable aux salaires signifie que :",
    "choices": [
      "Les salaires baissent automatiquement chaque année",
      "Les salaires sont rigides à la baisse : une augmentation est quasi définitive",
      "Les cotisations patronales diminuent avec l'ancienneté",
      "Les augmentations sont toujours collectives"
    ],
    "answers": [
      1
    ],
    "explanation": "L'effet cliquet traduit la rigidité à la baisse : une augmentation accordée engage durablement l'organisation."
  },
  {
    "id": "qcm4",
    "question": "Dans la méthode des indices (base 100 = décembre N), les augmentations successives se combinent de manière :",
    "choices": [
      "Moyennée",
      "Multiplicative",
      "Additive",
      "Soustractive"
    ],
    "answers": [
      1
    ],
    "explanation": "Les augmentations sont multiplicatives : +1 % puis +1,5 % donne 1,01 × 1,015 = 1,02515."
  },
  {
    "id": "qcm5",
    "question": "Indice de base 100, +1 % au 1er avril puis +1,5 % au 1er octobre. L'indice du dernier trimestre est :",
    "choices": [
      "102,515",
      "102,5",
      "101,5",
      "102"
    ],
    "answers": [
      0
    ],
    "explanation": "100 × 1,01 × 1,015 = 102,515."
  },
  {
    "id": "qcm6",
    "question": "Indices : 100 (jan-mars), 101 (avr-sept), 102,515 (oct-déc). Le cumul annuel des indices (effectif stable) est :",
    "choices": [
      "1 213,545",
      "1 200",
      "1 206",
      "1 215"
    ],
    "answers": [
      0
    ],
    "explanation": "3×100 + 6×101 + 3×102,515 = 300 + 606 + 307,545 = 1 213,545."
  },
  {
    "id": "qcm7",
    "question": "Pour un salarié sortant en cours d'année, quel indice cumulé applique-t-on ?",
    "choices": [
      "Aucun, on l'ignore",
      "Le cumul à partir de la date de départ",
      "Le cumul annuel complet",
      "Le cumul partiel jusqu'à la date de départ"
    ],
    "answers": [
      3
    ],
    "explanation": "Le sortant n'est rémunéré que du 1er janvier à son départ : cumul partiel jusqu'à cette date."
  },
  {
    "id": "qcm8",
    "question": "Pour un salarié embauché en cours d'année, on retient :",
    "choices": [
      "La moitié du cumul annuel",
      "Le cumul annuel complet",
      "Le cumul jusqu'à la date d'embauche",
      "Le cumul partiel dès la date d'embauche jusqu'au 31 décembre"
    ],
    "answers": [
      3
    ],
    "explanation": "L'embauché est rémunéré de la date d'embauche au 31 décembre : cumul partiel dès l'entrée."
  },
  {
    "id": "qcm9",
    "question": "L'écart sur effectif (volume) sur la masse salariale se calcule par :",
    "choices": [
      "Nr × Hr × (Sr - Sp)",
      "(Nr - Np) × Hr × Sr",
      "Nr × (Hr - Hp) × Sp",
      "(Nr - Np) × Hp × Sp"
    ],
    "answers": [
      3
    ],
    "explanation": "Écart sur effectif = (Nr - Np) × Hp × Sp : l'effet volume est valorisé au prix prévu."
  },
  {
    "id": "qcm10",
    "question": "L'écart sur salaire (prix) se calcule par :",
    "choices": [
      "Nr × Hr × (Sr - Sp)",
      "Np × Hp × (Sr - Sp)",
      "(Nr - Np) × Hp × Sp",
      "Nr × (Hr - Hp) × Sp"
    ],
    "answers": [
      0
    ],
    "explanation": "Écart sur salaire = Nr × Hr × (Sr - Sp) : l'effet prix est rapporté aux quantités réelles."
  },
  {
    "id": "qcm11",
    "question": "Avec la convention écart = réalisé - prévu, un écart positif sur masse salariale est :",
    "choices": [
      "Impossible",
      "Favorable",
      "Neutre",
      "Défavorable (charge en hausse)"
    ],
    "answers": [
      3
    ],
    "explanation": "La MS est une charge : un écart positif (réalisé > prévu) est défavorable."
  },
  {
    "id": "qcm12",
    "question": "L'écart total sur masse salariale par catégories se décompose en :",
    "choices": [
      "Écart sur prix + écart sur volume seulement",
      "Écart sur effectif total + écart de structure professionnelle + écart sur taux nominal",
      "Écart sur CA + écart sur marge",
      "Écart sur activité + écart sur rendement + écart sur budget"
    ],
    "answers": [
      1
    ],
    "explanation": "Écart total = écart sur effectif total + écart de structure professionnelle + écart sur taux nominal."
  },
  {
    "id": "qcm13",
    "question": "Le modèle général du coût de main-d'œuvre directe s'écrit :",
    "choices": [
      "Coût = N × H / S",
      "Coût = N × H × S",
      "Coût = N + H + S",
      "Coût = (N + H) × S"
    ],
    "answers": [
      1
    ],
    "explanation": "Coût = N (effectif) × H (heures/salarié) × S (salaire horaire)."
  },
  {
    "id": "qcm14",
    "question": "L'effet de report sur N+1 d'une augmentation accordée en cours d'année N se calcule par :",
    "choices": [
      "indice fin N - indice moyen N",
      "(indice moyen N / indice fin N) - 1",
      "(indice fin N / indice moyen N) - 1",
      "indice moyen N × indice fin N"
    ],
    "answers": [
      2
    ],
    "explanation": "Report N+1 = (indice fin N / indice moyen N) - 1 : impact mécanique sur l'année suivante."
  },
  {
    "id": "qcm15",
    "question": "L'effet de noria désigne :",
    "choices": [
      "Le surcoût des heures supplémentaires",
      "La hausse mécanique due à l'ancienneté",
      "L'économie liée au remplacement d'anciens par des jeunes moins payés",
      "La hausse des cotisations patronales"
    ],
    "answers": [
      2
    ],
    "explanation": "L'effet de noria est l'économie résultant du départ d'anciens (mieux payés) remplacés par des jeunes."
  },
  {
    "id": "qcm16",
    "question": "Parmi ces propositions, lesquelles font évoluer la masse salariale ?",
    "choices": [
      "Le taux de rotation des stocks",
      "Les augmentations générales",
      "Les variations d'effectif",
      "Les variations de structure (qualification, ancienneté)"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Augmentations, variations d'effectif et de structure font évoluer la MS ; la rotation des stocks n'y figure pas."
  },
  {
    "id": "qcm17",
    "question": "Que recouvre le sigle GVT ?",
    "choices": [
      "Technicité",
      "Vieillissement (ancienneté)",
      "Glissement (promotions)",
      "Turnover"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "GVT = Glissement + Vieillissement + Technicité ; il décrit l'évolution de la MS à effectif constant."
  },
  {
    "id": "qcm18",
    "question": "Quelles sont les trois populations distinguées pour la prévision de la MS N+1 ?",
    "choices": [
      "Les fournisseurs",
      "Le personnel embauché",
      "Les clients",
      "L'effectif stable",
      "Le personnel sortant"
    ],
    "answers": [
      1,
      3,
      4
    ],
    "explanation": "On distingue le personnel sortant, l'effectif stable et le personnel embauché."
  },
  {
    "id": "qcm19",
    "question": "Quels sous-écarts composent l'analyse de l'écart sur main-d'œuvre (modèle N×H×S) ?",
    "choices": [
      "Écart sur heures (quantité)",
      "Écart sur composition (mix)",
      "Écart sur effectif (volume)",
      "Écart sur salaire (prix)"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Le modèle se décompose en écart sur effectif, écart sur heures et écart sur salaire."
  },
  {
    "id": "qcm20",
    "question": "Parmi ces indicateurs, lesquels servent au pilotage RH ?",
    "choices": [
      "Productivité du travail",
      "Quantité économique de Wilson",
      "Taux de turnover",
      "Ratio MS / CA"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "MS/CA, turnover et productivité sont des indicateurs RH ; la quantité de Wilson concerne les stocks."
  },
  {
    "id": "qcm21",
    "question": "La masse salariale est généralement le premier poste de charges de l'entreprise.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : elle représente souvent de 25 % à 90 % du total des charges."
  },
  {
    "id": "qcm22",
    "question": "Pour cumuler deux augmentations de +1 % puis +1,5 %, on peut simplement additionner les taux pour obtenir +2,5 %.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : les augmentations sont multiplicatives (1,01 × 1,015 = 1,02515, soit +2,515 %), pas additives."
  },
  {
    "id": "qcm23",
    "question": "Dans la méthode des écarts, l'effet quantité est valorisé au prix prévu et l'effet prix à la quantité réelle.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : c'est la convention du modèle PCG (quantité au prix prévu, prix à la quantité réelle)."
  },
  {
    "id": "qcm24",
    "question": "Une baisse de la masse salariale obtenue par rajeunissement des effectifs est toujours sans risque pour l'entreprise.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : elle peut entraîner une perte de compétences et d'expérience ; l'économie est réelle mais fragile."
  },
  {
    "id": "qcm25",
    "question": "Le détail des effets de masse, de report, de niveau, le GVT et la noria relèvent davantage du DSCG que du DCG.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : au DCG on traite effectifs, salaires et écarts ; ces effets détaillés relèvent du DSCG."
  }
];
