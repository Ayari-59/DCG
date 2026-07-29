import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-pilotage-fonctions-support.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const pilotageFonctionsSupport: Chapter = {
  ...generated,
  description:
    "Pilotage des fonctions support (achats, logistique, RH, SI) : chaîne de valeur de Porter, matrice de Kraljic, Pareto et TCO, centres de responsabilité et coûts discrétionnaires, facturation interne (coûts complets, ABC, prix de marché), tableaux de bord et Balanced Scorecard.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'une fonction support ?",
      back: "Une fonction qui ne produit pas directement l'offre vendue mais fournit aux autres fonctions les ressources et services nécessaires. Trois traits : clients internes, contribution indirecte à la valeur, activité souvent discrétionnaire.",
    },
    {
      id: "fc2",
      front: "La chaîne de valeur de Porter : activités primaires et de soutien ?",
      back: "5 activités primaires (logistique interne, production, logistique externe, commercialisation/vente, services) et 4 activités de soutien (approvisionnements/achats, développement technologique, GRH, infrastructure de la firme). Les activités de soutien participent pleinement à la création de valeur.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce qu'un centre de coûts discrétionnaire ?",
      back: "Un centre dont le niveau de dépense n'est pas lié mécaniquement au niveau d'activité — cas typique des fonctions support (DRH, DSI, juridique, communication). Il est particulièrement difficile à contrôler : on suit le respect du budget ET des indicateurs de service.",
    },
    {
      id: "fc4",
      front: "Prix de cession interne (PCI) : définition et objectifs de la facturation interne",
      back: "Prix de facturation d'une prestation entre centres internes. Trois objectifs : responsabiliser les clients internes (ils « paient » ce qu'ils consomment), évaluer la performance du support (face à un prix de marché), éclairer les décisions de mutualisation ou d'externalisation.",
    },
    {
      id: "fc5",
      front: "Qu'est-ce que le TCO (Total Cost of Ownership) ?",
      back: "Le coût total d'acquisition, au-delà du prix d'achat : prix + transport, douane, stockage, coûts de non-qualité, maintenance, fin de vie. Un fournisseur moins cher à l'achat peut être plus coûteux en TCO.",
    },
    {
      id: "fc6",
      front: "Quels sont les deux axes de la matrice de Kraljic ?",
      back: "L'impact sur le résultat / poids financier de l'achat (en ordonnée) et le risque d'approvisionnement / complexité du marché fournisseur (en abscisse). Le croisement définit 4 quadrants appelant chacun une stratégie d'achat distincte.",
    },
    {
      id: "fc7",
      front: "Les 4 quadrants de la matrice de Kraljic et leurs stratégies",
      back: "Achats simples (faible risque, faible poids : gérer au moindre coût administratif) ; achats leviers (faible risque, fort poids : mise en concurrence) ; achats critiques/goulots (fort risque, faible poids : sécuriser l'approvisionnement) ; achats stratégiques (fort risque, fort poids : partenariat de long terme).",
    },
    {
      id: "fc8",
      front: "Le diagramme de Pareto appliqué aux achats",
      back: "Loi des 80/20 : environ 20 % des fournisseurs concentrent 80 % de la dépense. On en déduit des classes A/B/C : gestion stratégique des fournisseurs A (contrats-cadres, revues de performance), suivi standard des B, gestion au moindre coût administratif des C.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce que l'effet de levier des achats ?",
      back: "Un euro économisé sur les achats se répercute intégralement sur le résultat, alors qu'un euro de CA supplémentaire n'y contribue qu'à hauteur de sa marge. Dans une entreprise à 5 % de marge, réduire les achats de 2 % équivaut à augmenter le CA de près de 40 %.",
    },
    {
      id: "fc10",
      front: "Formule de la rotation des stocks et son interprétation",
      back: "Rotation des stocks = coût des ventes ÷ stock moyen. Une rotation élevée libère de la trésorerie (BFR) mais accroît le risque de rupture — d'où la tension permanente avec le taux de service.",
    },
    {
      id: "fc11",
      front: "Qu'est-ce que l'effet coup de fouet (bullwhip effect) ?",
      back: "L'amplification des variations de la demande à mesure qu'on remonte la chaîne logistique (Forrester, Lee) : une légère variation de la demande finale, mal transmise, provoque des sur-réactions de commandes en amont (surstocks et ruptures alternés). Remèdes : partage d'information, réduction des délais, collaboration entre maillons.",
    },
    {
      id: "fc12",
      front: "Les coûts cachés de Savall appliqués aux RH",
      back: "L'absentéisme, le turnover, les défauts de qualité et les écarts de productivité engendrent des coûts (remplacement, désorganisation, sur-temps, non-qualité) que la comptabilité générale ne fait pas apparaître — souvent plusieurs milliers d'euros par salarié et par an. Les chiffrer justifie économiquement les investissements RH.",
    },
    {
      id: "fc13",
      front: "Les méthodes de facturation interne d'une fonction support",
      back: "Coût complet (refacturation au prorata d'une unité d'œuvre — simple mais transmet l'inefficience) ; ABC (imputation selon les activités réellement consommées — plus juste mais complexe) ; prix de marché (mesure la compétitivité du support interne) ; coût standard négocié (PCI fixé par accord, stable).",
    },
    {
      id: "fc14",
      front: "Les 4 perspectives du Balanced Scorecard et leur chaîne de causalité",
      back: "Apprentissage → processus internes → client → financière. Le BSC se construit « à partir du bas et en remontant vers le haut » : les fonctions support (apprentissage, processus) sont à la racine de la création de valeur, pas en bout de chaîne des coûts.",
    },
    {
      id: "fc15",
      front: "Qu'est-ce qu'un centre de services partagés (CSP) ?",
      back: "Une entité unique qui mutualise des fonctions support (paie, comptabilité fournisseurs, support informatique) pour l'ensemble des filiales d'un groupe : économies d'échelle, standardisation, professionnalisation — avec facturation des prestations aux entités clientes.",
    },
    {
      id: "fc16",
      front: "Qu'est-ce que la sous-optimisation entre centres de responsabilité ?",
      back: "L'effet pervers de la responsabilisation par centres : chaque responsable optimise son centre au détriment du tout (ex. : l'acheteur économise sur la matière mais dégrade la qualité et augmente les rebuts en production). Parade : compléter les objectifs locaux par des indicateurs transverses.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Dans la chaîne de valeur de Porter, laquelle de ces activités est une activité de SOUTIEN ?",
      choices: [
        "La logistique interne",
        "La commercialisation et la vente",
        "La gestion des ressources humaines",
        "Les services (après-vente)",
      ],
      answers: [2],
      explanation:
        "Porter distingue 5 activités primaires (logistique interne, production, logistique externe, commercialisation/vente, services) et 4 activités de soutien (achats, développement technologique, GRH, infrastructure). Piège classique : la logistique interne est une activité PRIMAIRE, pas de soutien.",
    },
    {
      id: "q2",
      question: "Quels sont les deux axes de la matrice de Kraljic ?",
      choices: [
        "Le poids financier de l'achat et le risque d'approvisionnement",
        "Le prix unitaire et le volume acheté",
        "La qualité fournisseur et le délai de livraison",
        "La part de marché et la croissance du marché",
      ],
      answers: [0],
      explanation:
        "La matrice de Kraljic (1983) croise l'impact sur le résultat / poids financier (ordonnée) et le risque d'approvisionnement / complexité du marché fournisseur (abscisse). Part de marché × croissance, c'est la matrice BCG — ne pas confondre.",
    },
    {
      id: "q3",
      question:
        "Dans la matrice de Kraljic, un composant rare mais peu coûteux (fort risque d'approvisionnement, faible poids financier) relève des achats :",
      choices: [
        "Simples, à gérer par catalogues automatisés",
        "Leviers, à piloter par la mise en concurrence",
        "Stratégiques, appelant un partenariat de long terme",
        "Critiques (goulots), exigeant de sécuriser l'approvisionnement",
      ],
      answers: [3],
      explanation:
        "Fort risque + faible poids = achats critiques/goulots : la priorité est de sécuriser l'approvisionnement (stocks de sécurité, fournisseurs alternatifs). Les achats stratégiques combinent fort risque ET fort poids ; les leviers, fort poids et faible risque.",
    },
    {
      id: "q4",
      question:
        "Un CSP informatique coûte 1 200 000 € par an et sert 3 directions. En coût complet au prorata des postes (Commerciale 250, Production 150, Administrative 100), combien est refacturé à la Direction Production ?",
      choices: ["240 000 €", "360 000 €", "600 000 €", "576 000 €"],
      answers: [1],
      explanation:
        "Total = 500 postes. Production = 150/500 = 30 %. Refacturation = 1 200 000 × 30 % = 360 000 €. La Commerciale (50 %) reçoit 600 000 € et l'Administrative (20 %) 240 000 €. 576 000 € est le montant obtenu par la méthode ABC, pas par le coût complet.",
    },
    {
      id: "q5",
      question:
        "Dans l'exemple du chapitre, la Direction Production est facturée 360 000 € en coût complet mais 576 000 € en ABC. Que révèle cet écart de + 216 000 € ?",
      choices: [
        "Une erreur de calcul dans la méthode ABC",
        "Que la Production a trop de postes informatiques",
        "Que le coût complet sous-facturait la Production, subventionnée à son insu par la Commerciale",
        "Que le CSP est inefficient et doit être externalisé",
      ],
      answers: [2],
      explanation:
        "L'ABC révèle la consommation réelle : la Production, avec peu de postes mais une forte consommation d'hébergement et de projets, est le principal consommateur de ressources IT. Sous coût complet, la Commerciale la subventionnait sans le savoir, ce qui faussait les arbitrages (risque d'externalisation à tort d'une IT jugée « trop chère »).",
    },
    {
      id: "q6",
      question:
        "Quelle est la principale limite de la facturation interne au coût complet (au prorata d'une unité d'œuvre) ?",
      choices: [
        "Elle peut transmettre l'inefficience du support aux clients internes et repose sur une clé arbitraire",
        "Elle ne couvre jamais la totalité des coûts du support",
        "Elle exige un marché de référence externe pas toujours disponible",
        "Elle est trop complexe et coûteuse à mettre en œuvre",
      ],
      answers: [0],
      explanation:
        "Le coût complet est simple et couvre tous les coûts, mais il refacture aussi l'inefficience éventuelle du support, et le choix de la clé (unité d'œuvre) peut être arbitraire. L'absence de marché de référence est la limite du prix de marché ; la complexité, celle de l'ABC.",
    },
    {
      id: "q7",
      question: "Un centre de coûts discrétionnaire se caractérise par :",
      choices: [
        "La responsabilité de ses coûts ET de son chiffre d'affaires",
        "Un niveau de dépense sans lien mécanique avec le niveau d'activité, d'où un contrôle particulièrement difficile",
        "Un coût unitaire piloté par rapport à un standard, pour un volume donné",
        "La responsabilité de sa marge et de ses investissements",
      ],
      answers: [1],
      explanation:
        "Le centre de coûts discrétionnaire (DRH, DSI, communication, juridique) a une dépense non liée mécaniquement au volume : impossible de juger le « bon montant » par une relation coût/production. On le pilote par le respect du budget complété d'indicateurs de service. Coûts + CA = centre de profit ; marge + investissements = centre d'investissement.",
    },
    {
      id: "q8",
      question:
        "Une entreprise a un coût des ventes annuel de 2 400 000 € et un stock moyen de 300 000 €. Quelle est la rotation de ses stocks ?",
      choices: ["0,125", "6", "12,5", "8"],
      answers: [3],
      explanation:
        "Rotation des stocks = coût des ventes ÷ stock moyen = 2 400 000 ÷ 300 000 = 8. Le stock « tourne » 8 fois par an. 0,125 est le ratio inverse. Une rotation élevée libère de la trésorerie (BFR) mais accroît le risque de rupture.",
    },
    {
      id: "q9",
      question:
        "Un acheteur réalise des économies sur les matières premières, mais leur moindre qualité augmente les rebuts en production. De quel phénomène s'agit-il ?",
      choices: [
        "D'une sous-optimisation : l'optimisation locale d'un centre dégrade la performance globale",
        "De l'effet de levier des achats",
        "De l'effet coup de fouet (bullwhip effect)",
        "D'un coût irrécupérable (sunk cost)",
      ],
      answers: [0],
      explanation:
        "C'est l'effet pervers classique de la responsabilisation par centres : l'acheteur optimise SON centre (prix d'achat) au détriment du tout. D'où la nécessité de raisonner en coût total (TCO) et de compléter les objectifs locaux par des indicateurs transverses. L'effet coup de fouet concerne l'amplification de la demande dans la supply chain.",
    },
    {
      id: "q10",
      question:
        "Dans le Balanced Scorecard appliqué aux fonctions support, quelle perspective est à la RACINE de la chaîne de causalité ?",
      choices: [
        "La perspective financière",
        "La perspective client",
        "La perspective apprentissage (compétences, SI, climat)",
        "La perspective processus internes",
      ],
      answers: [2],
      explanation:
        "La chaîne de causalité est ascendante : apprentissage → processus internes → client → financière. Le BSC « se construit à partir du bas et en remontant vers le haut » : compétences et SI (domaine des fonctions support) améliorent les processus, donc la satisfaction client, donc le résultat. Les fonctions support sont à la racine de la valeur, pas en bout de chaîne.",
    },
  ],
};
