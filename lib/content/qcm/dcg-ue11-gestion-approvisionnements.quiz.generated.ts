// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM/_json/
// QCM du manuel, complet.
import type { QuizQuestion } from "../types";

export const quiz: QuizQuestion[] = [
  {
    "id": "qcm1",
    "question": "Le stock est souvent qualifié de :",
    "choices": [
      "Mal nécessaire",
      "Avantage concurrentiel certain",
      "Charge fixe non maîtrisable",
      "Source de profit direct"
    ],
    "answers": [
      0
    ],
    "explanation": "Le stock est un mal nécessaire : utile (régulation, sécurité) mais coûteux (immobilisation, obsolescence)."
  },
  {
    "id": "qcm2",
    "question": "Quel coût décroît lorsque la quantité commandée Q augmente ?",
    "choices": [
      "Le coût de possession",
      "Le coût de passation (lancement)",
      "Le coût de rupture",
      "Le coût d'achat unitaire (hors remise)"
    ],
    "answers": [
      1
    ],
    "explanation": "Commander en grandes quantités réduit le nombre de commandes, donc le coût de passation total."
  },
  {
    "id": "qcm3",
    "question": "Dans le profil en dent de scie de Wilson, le stock moyen est égal à :",
    "choices": [
      "D/Q",
      "2Q",
      "Q/2",
      "Q"
    ],
    "answers": [
      2
    ],
    "explanation": "Avec un réapprovisionnement instantané, le stock varie linéairement de Q à 0, soit un stock moyen Q/2."
  },
  {
    "id": "qcm4",
    "question": "La formule de la quantité économique de Wilson est :",
    "choices": [
      "Q* = 2·c_l·D/c_s",
      "Q* = √(c_s·D/2·c_l)",
      "Q* = √(c_l·D/2·c_s)",
      "Q* = √(2·c_l·D/c_s)"
    ],
    "answers": [
      3
    ],
    "explanation": "Q* = racine de (2 × coût de lancement × demande / coût de possession unitaire)."
  },
  {
    "id": "qcm5",
    "question": "Données : D = 7 200 m²/an ; c_l = 180 € ; c_s = 16,2 €/m²/an. La quantité économique Q* vaut :",
    "choices": [
      "200 m²",
      "400 m²",
      "800 m²",
      "160 m²"
    ],
    "answers": [
      1
    ],
    "explanation": "Q* = √(2×180×7200/16,2) = √160000 = 400 m²."
  },
  {
    "id": "qcm6",
    "question": "Avec Q* = 400 m² et D = 7 200 m²/an, le nombre optimal de commandes n* est :",
    "choices": [
      "20",
      "12",
      "18",
      "36"
    ],
    "answers": [
      2
    ],
    "explanation": "n* = D/Q* = 7 200/400 = 18 commandes par an."
  },
  {
    "id": "qcm7",
    "question": "Avec n* = 18 commandes par an (base 360 jours), la période entre deux commandes T* est :",
    "choices": [
      "30 jours",
      "18 jours",
      "20 jours",
      "10 jours"
    ],
    "answers": [
      2
    ],
    "explanation": "T* = 360/n* = 360/18 = 20 jours."
  },
  {
    "id": "qcm8",
    "question": "Pour Q* = 400, c_l = 180 €, c_s = 16,2 €, le coût de gestion minimal C* vaut :",
    "choices": [
      "4 320 €",
      "6 480 €",
      "12 960 €",
      "3 240 €"
    ],
    "answers": [
      1
    ],
    "explanation": "C* = passation + possession = 18×180 + 200×16,2 = 3 240 + 3 240 = 6 480 €."
  },
  {
    "id": "qcm9",
    "question": "À l'optimum de Wilson, quelle égalité est vérifiée ?",
    "choices": [
      "Coût d'achat = coût de rupture",
      "Coût de passation = coût de possession",
      "Coût de passation = coût d'achat",
      "Stock moyen = stock d'alerte"
    ],
    "answers": [
      1
    ],
    "explanation": "À l'optimum, le coût de passation égale le coût de possession (la dérivée du coût total est nulle)."
  },
  {
    "id": "qcm10",
    "question": "Consommation annuelle 7 200 m² et stock moyen 200 m² : le taux de rotation est :",
    "choices": [
      "36",
      "10",
      "18",
      "20"
    ],
    "answers": [
      0
    ],
    "explanation": "Taux de rotation = consommation / stock moyen = 7 200/200 = 36 rotations par an."
  },
  {
    "id": "qcm11",
    "question": "Stock moyen 200 m², consommation 7 200 m²/an (base 360 jours) : la durée de couverture est :",
    "choices": [
      "10 jours",
      "20 jours",
      "5 jours",
      "36 jours"
    ],
    "answers": [
      0
    ],
    "explanation": "Couverture = stock moyen / consommation × 360 = 200/7200 × 360 = 10 jours."
  },
  {
    "id": "qcm12",
    "question": "Le stock d'alerte (point de commande) se calcule par :",
    "choices": [
      "Coût de passation / coût de possession",
      "Consommation pendant le délai + stock de sécurité",
      "Q*/2",
      "Demande annuelle / nombre de commandes"
    ],
    "answers": [
      1
    ],
    "explanation": "Stock d'alerte = consommation pendant le délai de livraison + stock de sécurité."
  },
  {
    "id": "qcm13",
    "question": "Consommation 20 m²/jour, délai de livraison 5 jours, stock de sécurité 50 m² : le stock d'alerte est :",
    "choices": [
      "100 m²",
      "150 m²",
      "50 m²",
      "250 m²"
    ],
    "answers": [
      1
    ],
    "explanation": "SA = 20×5 + 50 = 100 + 50 = 150 m²."
  },
  {
    "id": "qcm14",
    "question": "En présence d'un tarif dégressif (remises sur quantité), sur quel critère se prend la décision ?",
    "choices": [
      "Le seul coût de gestion",
      "Le seul coût d'achat",
      "Le coût total d'approvisionnement (achat + gestion)",
      "Le seul stock de sécurité"
    ],
    "answers": [
      2
    ],
    "explanation": "Avec un tarif dégressif, on minimise le coût total : coût d'achat + coût de gestion."
  },
  {
    "id": "qcm15",
    "question": "En avenir aléatoire continu suivant une loi normale, le stock de sécurité correspond à :",
    "choices": [
      "μ - σ",
      "S* + μ",
      "S* - μ (écart à la demande moyenne)",
      "Q*/2"
    ],
    "answers": [
      2
    ],
    "explanation": "Le stock de sécurité = S* - μ, soit la réserve au-delà de la demande moyenne, fixée par le niveau de service."
  },
  {
    "id": "qcm16",
    "question": "Parmi ces propositions, lesquelles sont des fonctions du stock ?",
    "choices": [
      "Suppression du coût de possession",
      "Régulation des écarts amont/aval",
      "Économie (remises sur quantité)",
      "Spéculation (anticiper une hausse de prix)"
    ],
    "answers": [
      1,
      2,
      3
    ],
    "explanation": "Régulation, économie et spéculation sont des fonctions du stock ; il n'annule jamais le coût de possession."
  },
  {
    "id": "qcm17",
    "question": "Parmi ces coûts, lesquels figurent parmi les quatre coûts liés aux stocks ?",
    "choices": [
      "Coût de rupture",
      "Coût de cession interne",
      "Coût de possession",
      "Coût de passation (lancement)"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Passation, possession et rupture en font partie (avec le coût d'achat) ; le coût de cession interne n'en fait pas partie."
  },
  {
    "id": "qcm18",
    "question": "Quelles hypothèses fonde le modèle de Wilson de base ?",
    "choices": [
      "Remises sur quantité systématiques",
      "Délai de livraison nul",
      "Réapprovisionnement instantané",
      "Possibilité de rupture admise",
      "Demande connue et régulière"
    ],
    "answers": [
      1,
      2,
      4
    ],
    "explanation": "Wilson suppose demande régulière, délai nul, réapprovisionnement instantané, sans rupture ni remise."
  },
  {
    "id": "qcm19",
    "question": "Concernant le stock de sécurité, quelles affirmations sont exactes ?",
    "choices": [
      "Il relève le stock moyen et le coût de possession",
      "Il s'ajoute en permanence au stock",
      "Il protège des aléas de demande et de délai",
      "Il diminue le coût de possession"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Le stock de sécurité protège des aléas, s'ajoute en permanence et augmente donc le stock moyen et la possession."
  },
  {
    "id": "qcm20",
    "question": "Quelles affirmations caractérisent l'optimum de Wilson ?",
    "choices": [
      "La courbe est très aplatie autour de Q*",
      "La courbe de coût total est en U",
      "Un arrondi au conditionnement reste quasi optimal",
      "S'éloigner fortement de Q* reste sans conséquence"
    ],
    "answers": [
      0,
      1,
      2
    ],
    "explanation": "Courbe en U, aplatie autour de Q* (arrondi possible) mais s'en éloigner fortement coûte cher."
  },
  {
    "id": "qcm21",
    "question": "Quelles affirmations distinguent les deux décisions du réapprovisionnement ?",
    "choices": [
      "Le stock d'alerte est un outil de délégation (ERP, magasinier)",
      "Combien commander : au stock d'alerte",
      "Combien commander : la quantité Q*",
      "Quand commander : au stock d'alerte"
    ],
    "answers": [
      0,
      2,
      3
    ],
    "explanation": "Q* répond au \"combien\", le stock d'alerte au \"quand\" et sert d'outil de délégation."
  },
  {
    "id": "qcm22",
    "question": "Le taux de rotation et la durée de couverture sont deux ratios inverses : une rotation rapide correspond à une couverture courte.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : plus le stock tourne vite, plus la durée de couverture est courte."
  },
  {
    "id": "qcm23",
    "question": "Selon Wilson, le coût de possession total augmente quand la quantité commandée Q augmente.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : le coût de possession = c_s × Q/2 croît avec Q (stock moyen plus élevé)."
  },
  {
    "id": "qcm24",
    "question": "Le modèle de Wilson reste pleinement valable même lorsque la demande est aléatoire et le délai de livraison important.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : Wilson suppose une demande certaine et un délai nul ; ces cas exigent des extensions (stock de sécurité, alerte)."
  },
  {
    "id": "qcm25",
    "question": "Le Supply Chain Management cherche à minimiser le coût total de la chaîne logistique, et non d'un stock isolé.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      0
    ],
    "explanation": "Vrai : le SCM coordonne les flux de bout en bout pour optimiser le coût global de la chaîne."
  },
  {
    "id": "qcm26",
    "question": "En avenir aléatoire discret, on retient le niveau de stock qui maximise l'espérance de coût de gestion.",
    "choices": [
      "Vrai",
      "Faux"
    ],
    "answers": [
      1
    ],
    "explanation": "Faux : on retient le niveau de stock qui minimise l'espérance de coût."
  }
];
