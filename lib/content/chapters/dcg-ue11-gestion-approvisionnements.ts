import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-gestion-approvisionnements.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const gestionApprovisionnements: Chapter = {
  ...generated,
  videos: [{ youtubeId: "o8F31-fMiMU", title: "La gestion des stocks" }],
  description:
    "Coûts des stocks (passation, possession, rupture), modèle de Wilson (Q*, n*, T*) et ses adaptations — stock de sécurité, stock d'alerte, tarif dégressif, avenir aléatoire — jusqu'à la budgétisation des approvisionnements et le pilotage de la supply chain.",
  flashcards: [
    {
      id: "fc1",
      front: "Les quatre coûts liés aux stocks",
      back: "1. Coût d'acquisition (prix d'achat, constant sauf tarif dégressif). 2. Coût de passation ou lancement (charges pour passer une commande — diminue quand Q augmente). 3. Coût de possession ou stockage (local, manutention, capitaux immobilisés — augmente avec Q). 4. Coût de rupture ou pénurie (manque à gagner, insatisfaction client).",
    },
    {
      id: "fc2",
      front: "Qu'est-ce que le coût de passation (ou de lancement) ?",
      back: "L'ensemble des charges engagées pour passer une commande (recherche du fournisseur, administration). Sur la période, CL = cl × (D/Q) = cl × n : il diminue quand la quantité commandée Q augmente, car on passe moins de commandes.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce que le coût de possession (ou de stockage) ?",
      back: "Le coût de détention du stock : local, manutention, gardiennage, obsolescence, capitaux immobilisés. Il s'exprime souvent par un taux appliqué à la valeur du bien (cs = coût du bien × taux) et augmente avec Q : CS = (Q/2) × cs, car le stock moyen est Q/2.",
    },
    {
      id: "fc4",
      front: "Qu'est-ce que le coût de rupture (pénurie) ?",
      back: "Le coût subi quand le stock est insuffisant : manque à gagner (ventes perdues, marge sur coût variable perdue), arrêt de production, insatisfaction du client. Il augmente lorsque le stock est insuffisant. NB : le modèle avec pénurie n'est pas au programme.",
    },
    {
      id: "fc5",
      front: "Les fonctions des stocks",
      back: "Régulation (absorber les écarts de rythme entre l'amont et l'aval), sécurité (faire face aux aléas de la demande et des délais), économie (profiter de remises sur quantité), et parfois spéculation (anticiper une hausse de prix). Ces fonctions s'opposent : gérer les stocks, c'est arbitrer entre elles.",
    },
    {
      id: "fc6",
      front: "Les hypothèses du modèle de Wilson",
      back: "La demande est régulière et connue avec certitude ; le réapprovisionnement est instantané (délai nul) ; en conséquence, les ruptures sont exclues et un stock de sécurité est en principe inutile. Le stock évolue en « dent de scie » de Q à 0.",
    },
    {
      id: "fc7",
      front: "La formule de Wilson (quantité économique)",
      back: "Q* = √(2 × D × cl / cs), avec D la demande de la période, cl le coût de lancement d'une commande et cs le coût de stockage unitaire rapporté à la période. On l'obtient en annulant la dérivée de CG(Q) = cl·(D/Q) + (Q/2)·cs. La racine négative est écartée.",
    },
    {
      id: "fc8",
      front: "Cadence optimale : comment déduire n* et T* de Q* ?",
      back: "n* = D / Q* (nombre de commandes sur la période) et T* = P / n* (durée entre deux approvisionnements). Exemple du chapitre : D = 7 200, Q* = 400 → n* = 18 commandes et T* = 360/18 = 20 jours, pour un coût CG = 3 240 + 3 240 = 6 480 €.",
    },
    {
      id: "fc9",
      front: "Propriété du coût de gestion à l'optimum de Wilson",
      back: "À l'optimum, le coût de lancement égale le coût de stockage (CL = CS). De plus, la courbe de coût total est aplatie au voisinage de Q* : de petits écarts (arrondir à un conditionnement) ne dégradent presque pas le coût.",
    },
    {
      id: "fc10",
      front: "Le stock de sécurité modifie-t-il le programme optimal ?",
      back: "Non. Étant une constante, il disparaît à la dérivation : Q*, n* et T* sont strictement inchangés. Seul le coût global augmente du surcoût de possession (ex. : 50 m² × 16,2 € = 810 € par an). Il se justifie tant que le coût attendu d'une rupture dépasse ce surcoût.",
    },
    {
      id: "fc11",
      front: "Formule du stock d'alerte (point de commande)",
      back: "Stock d'alerte = consommation pendant le délai de livraison + stock de sécurité. C'est le niveau de stock qui déclenche une commande. Si le délai de livraison dépasse la période T, il faut retrancher la (les) commande(s) en cours.",
    },
    {
      id: "fc12",
      front: "Stock d'alerte : « quand commander » vs « combien commander »",
      back: "Les deux décisions sont indépendantes : combien = Q* (modèle de Wilson) ; quand = stock d'alerte (délai de livraison + stock de sécurité). Consigne type : « lancer une commande de 400 m² dès que le stock descend à 150 m² ». C'est aussi un outil de délégation (réapprovisionnement automatique des ERP).",
    },
    {
      id: "fc13",
      front: "Avenir aléatoire continu : le seuil optimal S*",
      back: "Le coût de gestion est minimal pour le stock S tel que P(D ≤ S) = cp / (cp + cs), où cp est le coût de pénurie et cs le coût d'un invendu. Ce rapport est le taux de service optimal. Si D suit une loi normale, on lit t dans la table après t = (S − μ)/σ ; le stock de sécurité vaut S* − μ.",
    },
    {
      id: "fc14",
      front: "Taux de rotation et durée de couverture d'un stock",
      back: "Taux de rotation = consommation de la période / stock moyen (combien de fois le stock « tourne »). Durée de couverture = stock moyen / consommation × durée de la période (en jours). Les deux ratios sont inverses. Exemple : stock moyen 200, consommation 7 200 → 36 rotations, couverture 10 jours.",
    },
    {
      id: "fc15",
      front: "Méthode en présence d'un tarif dégressif",
      back: "On minimise le coût total d'approvisionnement CA = coût d'achat + coût de gestion du stock. Pour chaque tranche de prix : écrire CA(Q), calculer la quantité qui annule la dérivée ; si elle appartient à la tranche l'étudier, sinon étudier les bornes. Comparer les CA et retenir le minimum global.",
    },
    {
      id: "fc16",
      front: "Quelles notions sont hors programme dans ce chapitre ?",
      back: "Le modèle avec pénurie (rupture volontaire), les méthodes 20/80 (Pareto) et ABC de classification des références, et le juste-à-temps (JàT : tendre vers le « zéro stock » par des livraisons synchronisées avec la production). Ils relèvent de la culture professionnelle et ne sont pas exigés à l'examen.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Une entreprise consomme 14 400 m² de textile par an. Le coût de lancement d'une commande est de 200 € et le coût de stockage de 16 € par m² et par an. Quelle est la quantité économique Q* ?",
      choices: ["400 m²", "600 m²", "1 200 m²", "300 m²"],
      answers: [1],
      explanation:
        "Q* = √(2 × D × cl / cs) = √(2 × 14 400 × 200 / 16) = √360 000 = 600 m². On en déduit n* = 14 400/600 = 24 commandes, T* = 360/24 = 15 jours et CG = 4 800 + 4 800 = 9 600 € (le coût de lancement égale le coût de stockage à l'optimum).",
    },
    {
      id: "q2",
      question:
        "Avec une demande annuelle de 7 200 m² et une quantité économique Q* = 400 m², combien de commandes optimales n* l'entreprise passe-t-elle par an, et quelle est la période T* (année de 360 jours) ?",
      choices: [
        "12 commandes, T* = 30 jours",
        "24 commandes, T* = 15 jours",
        "18 commandes, T* = 20 jours",
        "36 commandes, T* = 10 jours",
      ],
      answers: [2],
      explanation:
        "n* = D / Q* = 7 200 / 400 = 18 commandes par an, et T* = P / n* = 360 / 18 = 20 jours. C'est le programme optimal de l'application du chapitre (coût de gestion : 3 240 + 3 240 = 6 480 €).",
    },
    {
      id: "q3",
      question:
        "Une entreprise consomme 14 400 m² par an (360 jours). Le délai de livraison est de 9 jours et elle conserve un stock de sécurité de 80 m². Quel est le stock d'alerte ?",
      choices: ["360 m²", "400 m²", "440 m²", "520 m²"],
      answers: [2],
      explanation:
        "Demande quotidienne = 14 400/360 = 40 m²/jour. Consommation pendant le délai = 40 × 9 = 360 m². Stock d'alerte = 360 + 80 = 440 m². Le délai (9 j) étant inférieur à T* (15 j), il n'y a pas de commande en cours à retrancher.",
    },
    {
      id: "q4",
      question: "Laquelle de ces affirmations est une hypothèse du modèle de Wilson ?",
      choices: [
        "La demande est aléatoire et suit une loi normale",
        "Le prix d'achat est dégressif selon les quantités",
        "Les ruptures de stock sont fréquentes et valorisées",
        "Le réapprovisionnement est instantané (délai nul)",
      ],
      answers: [3],
      explanation:
        "Les hypothèses de Wilson : demande régulière et connue avec certitude, réapprovisionnement instantané (délai nul), donc ruptures exclues et stock de sécurité en principe inutile. Demande aléatoire et tarif dégressif relèvent des adaptations du modèle.",
    },
    {
      id: "q5",
      question:
        "L'entreprise (Q* = 400 m², n* = 18, cs = 16,2 €/m²/an) décide de conserver un stock de sécurité permanent de 50 m². Quel est l'effet sur le programme optimal ?",
      choices: [
        "Q*, n* et T* restent inchangés ; seul le coût global augmente de 50 × 16,2 = 810 €",
        "Q* augmente de 50 m² pour intégrer la réserve",
        "n* diminue car le stock moyen est plus élevé",
        "Il faut recalculer Q* avec un stock moyen de Q/2 + 50",
      ],
      answers: [0],
      explanation:
        "Le stock de sécurité est une constante : sa dérivée est nulle, donc Q* = 400, n* = 18 et T* = 20 jours sont strictement inchangés. Seul le coût global passe de 6 480 à 7 290 € (+810 €). « Recalculer » Q* avec le stock de sécurité est l'erreur classique à éviter.",
    },
    {
      id: "q6",
      question: "À l'optimum du modèle de Wilson, quelle relation est vérifiée ?",
      choices: [
        "Le coût d'acquisition égale le coût de gestion",
        "Le coût de lancement égale le coût de stockage",
        "Le coût de rupture égale le coût de possession",
        "Le coût de passation est nul",
      ],
      answers: [1],
      explanation:
        "À l'optimum (Q*, n*, T*), obtenu en annulant la dérivée de CG, le coût de lancement égale le coût de stockage. Exemple du chapitre : CG = 3 240 + 3 240 = 6 480 €. C'est aussi un moyen de vérifier ses calculs à l'examen.",
    },
    {
      id: "q7",
      question:
        "Dans le modèle de Wilson, le stock évolue en « dent de scie » de Q à 0. Quel est le stock moyen ?",
      choices: ["Q/2", "Q", "Q × n", "D/2"],
      answers: [0],
      explanation:
        "Le stock décroît régulièrement de Q à 0 puis est reconstitué instantanément : le stock moyen est donc Q/2. C'est lui qui supporte le coût de possession : CS = (Q/2) × cs.",
    },
    {
      id: "q8",
      question:
        "En présence d'un tarif dégressif (remises sur quantité), sur quel critère la décision d'approvisionnement se prend-elle ?",
      choices: [
        "Sur le seul coût de gestion du stock, minimal en Q*",
        "Sur le prix d'achat unitaire le plus faible, quelle que soit la quantité",
        "Sur le nombre minimal de commandes",
        "Sur le coût total d'approvisionnement CA = coût d'achat + coût de gestion, comparé tranche par tranche",
      ],
      answers: [3],
      explanation:
        "On étudie CA(Q) pour chaque tranche de tarif (optimum de la tranche ou bornes) et on retient le minimum global. Dans l'application du chapitre, Q = 1 000 m² à 144 € l'emporte : la remise sur l'achat dépasse le surcoût de gestion, alors que le seul coût de gestion resterait minimal vers 400 m².",
    },
    {
      id: "q9",
      question:
        "En avenir aléatoire, lorsque la demande suit une loi continue, le coût de gestion est minimal pour le niveau de stock S tel que :",
      choices: [
        "P(D ≤ S) = cs / (cp + cs)",
        "P(D > S) = cp / (cp + cs)",
        "P(D ≤ S) = cp / (cp + cs)",
        "P(D ≤ S) = cp / cs",
      ],
      answers: [2],
      explanation:
        "Le seuil optimal vérifie P(D ≤ S) = cp / (cp + cs), où cp est le coût de pénurie et cs le coût d'un invendu : c'est le taux de service optimal. Exemple du chapitre : cp = 10, cs = 8 → P(D ≤ S) = 0,5555, t ≈ 0,14, S* = 500 + 0,14 × 75 = 510,5 kg.",
    },
    {
      id: "q10",
      question:
        "Un m² de cuir synthétique vaut 150 € et supporte un taux de possession financier de 0,5 % par mois, plus un coût physique de 0,02 € par jour (année de 360 jours). Quel est le coût de possession annuel cs par m² ?",
      choices: ["9,00 €", "16,20 €", "7,20 €", "0,77 €"],
      answers: [1],
      explanation:
        "Il faut d'abord tout ramener à la même unité de temps (l'année) : part financière = 150 × 0,5 % × 12 = 9 € ; part physique = 0,02 × 360 = 7,2 €. D'où cs = 9 + 7,2 = 16,2 € par m² et par an. Mélanger les unités de temps (cs mensuel avec P annuel) est l'erreur la plus fréquente.",
    },
  ],
};
