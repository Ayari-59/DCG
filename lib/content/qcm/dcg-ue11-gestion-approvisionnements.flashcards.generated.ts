// Généré par scripts/convert-qcm.mjs — ne pas modifier à la main.
// Source : sources/UE 11 - CDG/QCM - refonte fil rouge/
// Flashcards tirées du corrigé : énoncé au recto, justification au verso.
import type { Flashcard } from "../types";

export const flashcards: Flashcard[] = [
  {
    "id": "qcm1",
    "front": "Le stock est souvent qualifié de :",
    "back": "Le stock est un mal nécessaire : utile (régulation, sécurité) mais coûteux (immobilisation, obsolescence)."
  },
  {
    "id": "qcm2",
    "front": "Quel coût décroît lorsque la quantité commandée Q augmente ?",
    "back": "Commander en grandes quantités réduit le nombre de commandes, donc le coût de passation total."
  },
  {
    "id": "qcm3",
    "front": "Dans le profil en dent de scie de Wilson, le stock moyen est égal à :",
    "back": "Avec un réapprovisionnement instantané, le stock varie linéairement de Q à 0, soit un stock moyen Q/2."
  },
  {
    "id": "qcm4",
    "front": "La formule de la quantité économique de Wilson est :",
    "back": "Q* = racine de (2 × coût de lancement × demande / coût de possession unitaire)."
  },
  {
    "id": "qcm5",
    "front": "Données : D = 7 200 m²/an ; c_l = 180 € ; c_s = 16,2 €/m²/an. La quantité économique Q* vaut :",
    "back": "Q* = √(2×180×7200/16,2) = √160000 = 400 m²."
  },
  {
    "id": "qcm6",
    "front": "Avec Q* = 400 m² et D = 7 200 m²/an, le nombre optimal de commandes n* est :",
    "back": "n* = D/Q* = 7 200/400 = 18 commandes par an."
  },
  {
    "id": "qcm7",
    "front": "Avec n* = 18 commandes par an (base 360 jours), la période entre deux commandes T* est :",
    "back": "T* = 360/n* = 360/18 = 20 jours."
  },
  {
    "id": "qcm8",
    "front": "Pour Q* = 400, c_l = 180 €, c_s = 16,2 €, le coût de gestion minimal C* vaut :",
    "back": "C* = passation + possession = 18×180 + 200×16,2 = 3 240 + 3 240 = 6 480 €."
  },
  {
    "id": "qcm9",
    "front": "À l'optimum de Wilson, quelle égalité est vérifiée ?",
    "back": "À l'optimum, le coût de passation égale le coût de possession (la dérivée du coût total est nulle)."
  },
  {
    "id": "qcm10",
    "front": "Consommation annuelle 7 200 m² et stock moyen 200 m² : le taux de rotation est :",
    "back": "Taux de rotation = consommation / stock moyen = 7 200/200 = 36 rotations par an."
  },
  {
    "id": "qcm11",
    "front": "Stock moyen 200 m², consommation 7 200 m²/an (base 360 jours) : la durée de couverture est :",
    "back": "Couverture = stock moyen / consommation × 360 = 200/7200 × 360 = 10 jours."
  },
  {
    "id": "qcm12",
    "front": "Le stock d'alerte (point de commande) se calcule par :",
    "back": "Stock d'alerte = consommation pendant le délai de livraison + stock de sécurité."
  },
  {
    "id": "qcm13",
    "front": "Consommation 20 m²/jour, délai de livraison 5 jours, stock de sécurité 50 m² : le stock d'alerte est :",
    "back": "SA = 20×5 + 50 = 100 + 50 = 150 m²."
  },
  {
    "id": "qcm14",
    "front": "En présence d'un tarif dégressif (remises sur quantité), sur quel critère se prend la décision ?",
    "back": "Avec un tarif dégressif, on minimise le coût total : coût d'achat + coût de gestion."
  },
  {
    "id": "qcm15",
    "front": "En avenir aléatoire continu suivant une loi normale, le stock de sécurité correspond à :",
    "back": "Le stock de sécurité = S* - μ, soit la réserve au-delà de la demande moyenne, fixée par le niveau de service."
  },
  {
    "id": "qcm16",
    "front": "Parmi ces propositions, lesquelles sont des fonctions du stock ?",
    "back": "Régulation, économie et spéculation sont des fonctions du stock ; il n'annule jamais le coût de possession."
  },
  {
    "id": "qcm17",
    "front": "Parmi ces coûts, lesquels figurent parmi les quatre coûts liés aux stocks ?",
    "back": "Passation, possession et rupture en font partie (avec le coût d'achat) ; le coût de cession interne n'en fait pas partie."
  },
  {
    "id": "qcm18",
    "front": "Quelles hypothèses fonde le modèle de Wilson de base ?",
    "back": "Wilson suppose demande régulière, délai nul, réapprovisionnement instantané, sans rupture ni remise."
  },
  {
    "id": "qcm19",
    "front": "Concernant le stock de sécurité, quelles affirmations sont exactes ?",
    "back": "Le stock de sécurité protège des aléas, s'ajoute en permanence et augmente donc le stock moyen et la possession."
  },
  {
    "id": "qcm20",
    "front": "Quelles affirmations caractérisent l'optimum de Wilson ?",
    "back": "Courbe en U, aplatie autour de Q* (arrondi possible) mais s'en éloigner fortement coûte cher."
  },
  {
    "id": "qcm21",
    "front": "Quelles affirmations distinguent les deux décisions du réapprovisionnement ?",
    "back": "Q* répond au \"combien\", le stock d'alerte au \"quand\" et sert d'outil de délégation."
  },
  {
    "id": "qcm22",
    "front": "Le taux de rotation et la durée de couverture sont deux ratios inverses : une rotation rapide correspond à une couverture courte.",
    "back": "Vrai : plus le stock tourne vite, plus la durée de couverture est courte."
  },
  {
    "id": "qcm23",
    "front": "Selon Wilson, le coût de possession total augmente quand la quantité commandée Q augmente.",
    "back": "Vrai : le coût de possession = c_s × Q/2 croît avec Q (stock moyen plus élevé)."
  },
  {
    "id": "qcm24",
    "front": "Le modèle de Wilson reste pleinement valable même lorsque la demande est aléatoire et le délai de livraison important.",
    "back": "Faux : Wilson suppose une demande certaine et un délai nul ; ces cas exigent des extensions (stock de sécurité, alerte)."
  },
  {
    "id": "qcm25",
    "front": "Le Supply Chain Management cherche à minimiser le coût total de la chaîne logistique, et non d'un stock isolé.",
    "back": "Vrai : le SCM coordonne les flux de bout en bout pour optimiser le coût global de la chaîne."
  },
  {
    "id": "qcm26",
    "front": "En avenir aléatoire discret, on retient le niveau de stock qui maximise l'espérance de coût de gestion.",
    "back": "Faux : on retient le niveau de stock qui minimise l'espérance de coût."
  }
];
