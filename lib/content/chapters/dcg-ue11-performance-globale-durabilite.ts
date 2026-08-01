import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-performance-globale-durabilite.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const performanceGlobaleDurabilite: Chapter = {
  ...generated,
  videos: [{ youtubeId: "aNjmqO_ox18", title: "Performance globale, durabilité et contrôle de gestion numérique" }],
  description:
    "Du pilotage financier au pilotage multidimensionnel : performance globale et ses cinq dimensions, critères ESG, reporting de durabilité (CSRD) et prix de cession interne. Puis la transformation numérique du contrôle de gestion : ERP, Business Intelligence, Data Analytics, Big Data, IA et contrôleur augmenté.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce que la performance globale ?",
      back: "La capacité d'une organisation à atteindre ses objectifs dans toutes les dimensions de son activité — économique, financière, sociale, environnementale et sociétale — en conciliant création de valeur à court terme et pérennité à long terme. Elle intègre les attentes des parties prenantes et les impératifs de durabilité.",
    },
    {
      id: "fc2",
      front: "Les quatre « E » de la performance",
      back: "Économie (acquérir les ressources au meilleur prix : coût des moyens / ressources acquises), Efficience (résultats / moyens engagés), Efficacité (résultats / objectifs), Pertinence (moyens / objectifs). Ils relient les trois pôles : objectifs, moyens, résultats.",
    },
    {
      id: "fc3",
      front: "Les trois limites d'un pilotage exclusivement financier",
      back: "1. Vision de court terme (on sacrifie formation, R&D, transition écologique). 2. Limites comptables : la comptabilité ignore le capital immatériel et les externalités négatives. 3. Signaux tardifs : les indicateurs financiers arrivent « trop tard », les indicateurs extra-financiers sont des signaux avancés.",
    },
    {
      id: "fc4",
      front: "Qu'est-ce qu'une partie prenante (stakeholder) ?",
      back: "Tout acteur — interne ou externe — qui influence l'activité de l'entreprise ou est affecté par elle : actionnaires, salariés, clients, fournisseurs, banques, collectivités, environnement, société civile. La théorie des parties prenantes (R. E. Freeman) impose de créer de la valeur pour l'ensemble de ces acteurs.",
    },
    {
      id: "fc5",
      front: "Origine de la performance globale : Brundtland, RSE et triple bottom line",
      back: "Le rapport Brundtland (1987) définit le développement durable : répondre aux besoins du présent sans compromettre ceux des générations futures. Appliqué à l'entreprise, il donne la RSE, puis la triple performance (triple bottom line de J. Elkington) : profit, people, planet — économique, sociale, environnementale.",
    },
    {
      id: "fc6",
      front: "Que sont les critères ESG ?",
      back: "Les facteurs Environnementaux (émissions, énergie, déchets, biodiversité), Sociaux (conditions de travail, formation, diversité, droits humains) et de Gouvernance (éthique, transparence, indépendance des organes de direction) utilisés pour évaluer la performance extra-financière et la durabilité d'une organisation.",
    },
    {
      id: "fc7",
      front: "Qualités d'un bon indicateur de durabilité",
      back: "Comme tout indicateur de tableau de bord : pertinent, fiable, mesurable et rattaché à un responsable. Règle de méthode : préférer un indicateur RELATIF (par unité, en %) à une donnée brute — il neutralise l'effet volume (ex. : kg CO₂ éq. / unité produite = impact total / volume d'activité).",
    },
    {
      id: "fc8",
      front: "La CSRD : quels principes ?",
      back: "Directive européenne (Corporate Sustainability Reporting Directive) qui structure et harmonise le reporting de durabilité (elle remplace la DPEF). Trois principes : des normes communes (ESRS), la double matérialité, une information de durabilité vérifiée par un tiers comme les comptes financiers.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce que la double matérialité ?",
      back: "Principe de la CSRD : l'entreprise rend compte à la fois de l'impact des enjeux de durabilité sur sa situation (matérialité financière) ET de l'impact de son activité sur l'environnement et la société (matérialité d'impact).",
    },
    {
      id: "fc10",
      front: "Qu'est-ce que le greenwashing ?",
      back: "L'écoblanchiment : se donner une image de responsabilité environnementale ou sociale supérieure à la réalité, en communiquant sur des indicateurs flatteurs tout en masquant les impacts négatifs. La vérification par un tiers et la double matérialité de la CSRD visent à limiter ce risque.",
    },
    {
      id: "fc11",
      front: "Prix de cession interne (PCI) : définition et différence avec le prix de transfert",
      back: "Le PCI est la valeur à laquelle un centre cédant facture un bien ou service à un centre preneur de la MÊME organisation ; il transforme un centre de coûts en centre de profit. À ne pas confondre avec le prix de transfert (entités juridiquement distinctes d'un groupe, enjeu fiscal) — hors programme UE11.",
    },
    {
      id: "fc12",
      front: "Les trois bases de fixation du prix de cession interne",
      back: "1. Prix de marché : objectif, incite à la compétitivité, mais suppose un marché de référence. 2. Coût standard (+ marge) : stable, motive le cédant à tenir ses coûts. 3. Coût réel : simple, mais transfère l'inefficience du cédant au preneur et le déresponsabilise. Résultat du cédant = (PCI − coût de production) × quantités cédées.",
    },
    {
      id: "fc13",
      front: "Qu'est-ce qu'un ERP (ou PGI) ?",
      back: "Un logiciel unique composé de modules (achats, production, ventes, finance, RH…) partageant une même base de données. Principe fondateur : l'unicité de la donnée — saisie une fois à la source, disponible pour tous les modules. Avantages : fiabilité, intégration, traçabilité. Limites : coût, rigidité, dépendance à l'éditeur.",
    },
    {
      id: "fc14",
      front: "La chaîne décisionnelle de la Business Intelligence",
      back: "ETL (Extraire, Transformer, Charger : collecte et nettoie les données) → Data Warehouse (entrepôt central de l'historique consolidé) → Data Mart (sous-ensemble dédié à un métier) → outils de visualisation (tableaux de bord interactifs). L'ETL est le maillon de la qualité : « garbage in, garbage out ».",
    },
    {
      id: "fc15",
      front: "Les quatre niveaux du Data Analytics",
      back: "Descriptif : que s'est-il passé ? (reporting). Diagnostique : pourquoi ? (analyse des écarts). Prédictif : que va-t-il se passer ? (statistiques, machine learning). Prescriptif : que faut-il faire ? (optimisation, IA). Sophistication et création de valeur croissantes.",
    },
    {
      id: "fc16",
      front: "Big Data (5 V) et contrôleur augmenté",
      back: "Le Big Data se caractérise par 5 V ; les deux décisifs pour le contrôle de gestion sont la véracité (fiabilité de la donnée) et la valeur (utilité pour le pilotage). Le contrôleur « augmenté » n'est pas remplacé par l'IA : elle traite le volume et la routine, il apporte jugement, sens et responsabilité — l'humain reste au centre de la décision.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Parmi les quatre « E » de la performance, lequel mesure le rapport entre les résultats obtenus et les moyens engagés ?",
      choices: ["La pertinence", "L'économie", "L'efficience", "L'efficacité"],
      answers: [2],
      explanation:
        "Efficience = résultats / moyens engagés (bien utiliser les ressources). L'efficacité rapporte les résultats aux objectifs, l'économie mesure le coût d'acquisition des ressources, la pertinence l'adéquation des moyens aux objectifs. Piège classique : confondre efficacité (objectif atteint) et efficience (sans gaspiller).",
    },
    {
      id: "q2",
      question: "Que signifie le principe de « double matérialité » introduit par la CSRD ?",
      choices: [
        "L'entreprise rend compte à la fois de l'impact des enjeux de durabilité sur sa situation et de l'impact de son activité sur l'environnement et la société",
        "Les données de durabilité doivent être publiées deux fois par an",
        "Chaque indicateur ESG doit être calculé selon deux méthodes différentes",
        "Le reporting doit couvrir à la fois la maison mère et ses filiales",
      ],
      answers: [0],
      explanation:
        "La double matérialité combine la matérialité financière (impact des enjeux de durabilité sur la situation de l'entreprise) et la matérialité d'impact (impact de l'activité sur l'environnement et la société). C'est, avec les normes communes ESRS et la vérification par un tiers, l'un des trois principes de la CSRD.",
    },
    {
      id: "q3",
      question: "Quelle affirmation distingue correctement le prix de cession interne (PCI) du prix de transfert ?",
      choices: [
        "Les deux termes sont synonymes",
        "Le PCI concerne les ventes aux clients externes, le prix de transfert les ventes internes",
        "Le prix de transfert est toujours égal au prix de marché, le PCI au coût réel",
        "Le PCI s'applique entre centres de responsabilité d'une même entité ; le prix de transfert entre entités juridiquement distinctes d'un groupe (enjeu fiscal), hors programme UE11",
      ],
      answers: [3],
      explanation:
        "Le référentiel précise que seul le prix de cession interne est au programme : transaction entre centres d'une même organisation, à finalité de pilotage. Le prix de transfert vise les transactions entre entités juridiquement distinctes d'un groupe, avec un enjeu fiscal et international — il n'est pas traité en UE11. Confusion signalée dans les pièges à éviter.",
    },
    {
      id: "q4",
      question: "Quelle est la principale limite du coût réel comme base de fixation du prix de cession interne ?",
      choices: [
        "Il est trop complexe à calculer",
        "Il transfère l'inefficience du centre cédant au centre preneur et déresponsabilise le cédant",
        "Il subit les fluctuations du marché",
        "Il exige l'existence d'un marché de référence",
      ],
      answers: [1],
      explanation:
        "Avec un PCI au coût réel, tout dérapage de coûts du cédant est automatiquement facturé au preneur : le cédant n'est plus incité à maîtriser ses coûts. Les fluctuations et l'exigence d'un marché de référence sont les limites du PCI au prix de marché ; le coût standard, lui, motive le cédant à tenir ses coûts.",
    },
    {
      id: "q5",
      question:
        "En N, l'atelier de Rakéo a émis 117 000 kg CO₂ éq. pour 65 000 unités produites (96 000 kg pour 60 000 unités en N−1). Quelle est l'empreinte carbone unitaire en N et son évolution ?",
      choices: [
        "1,60 kg/unité, en amélioration",
        "1,17 kg/unité, stable",
        "1,80 kg/unité, en dégradation de + 12,5 %",
        "0,56 kg/unité, en amélioration",
      ],
      answers: [2],
      explanation:
        "Indicateur unitaire = impact total / volume d'activité : 117 000 / 65 000 = 1,80 kg CO₂/unité contre 96 000 / 60 000 = 1,60 en N−1, soit (1,80 − 1,60) / 1,60 = + 12,5 %. L'indicateur relatif révèle une dégradation que la seule hausse de production aurait masquée — toujours préférer l'indicateur par unité à la donnée brute.",
    },
    {
      id: "q6",
      question: "Dans la chaîne décisionnelle de la Business Intelligence, quel est le rôle de l'ETL ?",
      choices: [
        "Extraire, Transformer, Charger : collecter les données des sources et les nettoyer avant stockage",
        "Stocker l'historique consolidé de toute l'organisation",
        "Restituer l'information sous forme de tableaux de bord interactifs",
        "Fournir un sous-ensemble de données dédié à un métier",
      ],
      answers: [0],
      explanation:
        "ETL = Extraire, Transformer, Charger : c'est le maillon de la qualité, où les données sont nettoyées, dédoublonnées et harmonisées. Le stockage consolidé est le rôle du Data Warehouse, le sous-ensemble métier celui du Data Mart, la restitution celui des outils de visualisation. « Garbage in, garbage out » : un ETL défaillant produit des tableaux de bord trompeurs.",
    },
    {
      id: "q7",
      question: "Quel niveau du Data Analytics répond à la question « Que faut-il faire ? » ?",
      choices: ["Le niveau prédictif", "Le niveau prescriptif", "Le niveau diagnostique", "Le niveau descriptif"],
      answers: [1],
      explanation:
        "Descriptif : que s'est-il passé ? Diagnostique : pourquoi ? Prédictif : que va-t-il se passer ? Prescriptif : que faut-il faire ? (optimisation, IA — ex. : niveau de stock optimal). Piège signalé dans la fiche de révision : ne pas confondre prédictif (anticiper) et prescriptif (recommander une action).",
    },
    {
      id: "q8",
      question: "Parmi les 5 V du Big Data, lesquels sont jugés décisifs pour le contrôle de gestion ?",
      choices: [
        "Volume et vitesse",
        "Variété et volume",
        "Véracité et valeur",
        "Vitesse et variété",
      ],
      answers: [2],
      explanation:
        "La véracité (fiabilité de la donnée) conditionne la confiance dans l'analyse ; la valeur rappelle qu'une masse de données n'a d'intérêt que si elle débouche sur une information utile au pilotage. Volume, vitesse et variété caractérisent la masse de données, mais ne garantissent ni sa fiabilité ni son utilité décisionnelle.",
    },
    {
      id: "q9",
      question: "Qu'est-ce que le greenwashing ?",
      choices: [
        "Se donner une image de responsabilité environnementale ou sociale supérieure à la réalité en communiquant sur des indicateurs flatteurs",
        "Investir massivement dans la transition écologique au détriment de la rentabilité",
        "Remplacer tous les indicateurs financiers par des indicateurs environnementaux",
        "Externaliser la production dans des pays aux normes environnementales moins strictes",
      ],
      answers: [0],
      explanation:
        "Le greenwashing (écoblanchiment) détourne le reporting extra-financier en outil de communication plutôt que de pilotage : indicateurs flatteurs mis en avant, impacts négatifs masqués. La vérification par un tiers et la double matérialité introduites par la CSRD visent précisément à limiter ce risque.",
    },
    {
      id: "q10",
      question:
        "Le centre cédant de Rakéo facture ses cadres au coût standard majoré d'une marge, soit un PCI de 42 € pour un coût de production de 38 €, et cède 65 000 unités. Quelle est la contribution du centre cédant ?",
      choices: ["2 730 000 €", "130 000 €", "442 000 €", "260 000 €"],
      answers: [3],
      explanation:
        "Résultat du centre cédant = (PCI − coût de production) × quantités cédées = (42 − 38) × 65 000 = 260 000 €. Le PCI au coût standard + marge responsabilise le cédant (il doit tenir son standard de 38 €) tout en lui reconnaissant une contribution au résultat. 2 730 000 € correspondrait au chiffre d'affaires interne (42 × 65 000), pas à la contribution.",
    },
  ],
};
