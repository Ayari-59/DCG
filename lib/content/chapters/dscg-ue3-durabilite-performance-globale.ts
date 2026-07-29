import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-durabilite-performance-globale.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const durabilitePerformanceGlobale: Chapter = {
  ...generated,
  description:
    "Performance globale et parties prenantes (Freeman, Mitchell), valeur partagée, critères ESG, double matérialité, reporting CSRD et normes ESRS, bilan carbone (scopes 1/2/3), Balanced Scorecard durable et rôle du contrôle de gestion dans la transition.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce que la performance globale ?",
      back: "L'intégration et l'équilibre de plusieurs dimensions de la performance au-delà du seul économique : économique, sociale, environnementale et sociétale (auxquelles on ajoute la gouvernance). L'enjeu n'est pas de les juxtaposer mais de les articuler et d'arbitrer leurs tensions.",
    },
    {
      id: "fc2",
      front: "Définition d'une partie prenante selon Freeman (1984)",
      back: "« Tout groupe ou individu qui peut affecter ou être affecté par la réalisation des objectifs de l'organisation » : salariés, clients, fournisseurs, créanciers, pouvoirs publics, communautés, environnement — et pas seulement les actionnaires.",
    },
    {
      id: "fc3",
      front: "Parties prenantes primaires vs secondaires (Clarkson)",
      back: "Primaires : essentielles à la survie de l'entreprise (actionnaires, salariés, clients, fournisseurs). Secondaires : elles influencent ou sont influencées sans être vitales (médias, ONG, communautés).",
    },
    {
      id: "fc4",
      front: "Les 3 attributs de la typologie de Mitchell pour hiérarchiser les parties prenantes",
      back: "Pouvoir (capacité d'influence), légitimité (du lien avec l'entreprise) et urgence (caractère pressant des attentes). Une partie prenante cumulant les trois est « définitive » (prioritaire) ; celle qui n'en a qu'un est « latente ».",
    },
    {
      id: "fc5",
      front: "Qu'est-ce que la création de valeur partagée (Porter & Kramer, 2011) ?",
      back: "Créer simultanément de la valeur économique et de la valeur sociétale en intégrant les enjeux sociaux au cœur de la stratégie (et non par philanthropie) : résoudre un problème de société devient source d'avantage concurrentiel. Elle déplace la RSE de la périphérie vers le modèle d'affaires.",
    },
    {
      id: "fc6",
      front: "Qu'est-ce que le triple bottom line (Elkington, 1994) ?",
      back: "Le triple résultat « people, planet, profit » : mesurer la performance sur les dimensions sociale, environnementale et économique. C'est la matrice conceptuelle de la performance globale.",
    },
    {
      id: "fc7",
      front: "Définition du développement durable (rapport Brundtland, 1987)",
      back: "« Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs. » Il s'est traduit en entreprise par la RSE, les critères ESG et le reporting de durabilité.",
    },
    {
      id: "fc8",
      front: "Que recouvrent les trois piliers ESG ?",
      back: "E — Environnement : climat, énergie, ressources, déchets, biodiversité. S — Social : conditions de travail, diversité, santé-sécurité, chaîne de valeur. G — Gouvernance : éthique, transparence, indépendance des organes, conformité — le socle qui conditionne la crédibilité du E et du S.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce que la double matérialité ?",
      back: "La combinaison de la matérialité financière (perspective outside-in : les enjeux de durabilité affectent l'entreprise) et de la matérialité d'impact (perspective inside-out : l'entreprise affecte la société et l'environnement). Un enjeu est matériel s'il est significatif selon l'une OU l'autre perspective.",
    },
    {
      id: "fc10",
      front: "Les 3 étapes de l'analyse de double matérialité",
      back: "1. Identification des enjeux de durabilité pertinents (en dialogue avec les parties prenantes). 2. Évaluation selon les deux matérialités (financière et d'impact). 3. Hiérarchisation : les enjeux matériels déterminent le contenu du rapport de durabilité.",
    },
    {
      id: "fc11",
      front: "Qu'est-ce que la CSRD ?",
      back: "La directive européenne sur le reporting de durabilité (Corporate Sustainability Reporting Directive), qui renforce et remplace la NFRD : reporting normé (ESRS), audité par un tiers, fondé sur la double matérialité, avec un périmètre élargi selon un calendrier progressif.",
    },
    {
      id: "fc12",
      front: "L'architecture des normes ESRS",
      back: "Normes transversales (ESRS 1 et 2 : principes généraux, double matérialité, gouvernance de la durabilité) + normes thématiques : E1 à E5 (climat, pollution, eau, biodiversité, économie circulaire), S1 à S4 (effectifs, travailleurs de la chaîne de valeur, communautés, consommateurs), G1 (conduite des affaires). On reporte sur les enjeux matériels.",
    },
    {
      id: "fc13",
      front: "Les 3 scopes du bilan carbone (GHG Protocol)",
      back: "Scope 1 : émissions directes des sources détenues ou contrôlées. Scope 2 : émissions indirectes liées à l'énergie achetée (électricité, chaleur, froid). Scope 3 : autres émissions indirectes de la chaîne de valeur, en amont (achats, transport) et en aval (utilisation, fin de vie des produits).",
    },
    {
      id: "fc14",
      front: "Pourquoi le scope 3 est-il stratégique ?",
      back: "Il représente généralement 70 à 90 % des émissions totales et est le plus difficile à maîtriser car il dépend de tiers (fournisseurs, clients). Se limiter aux scopes 1 et 2 donne une vision tronquée de l'empreinte réelle — c'est un piège classique.",
    },
    {
      id: "fc15",
      front: "Les deux approches du Balanced Scorecard durable",
      back: "Soit ajouter une 5e perspective dédiée « société/environnement » (visibilité forte mais risque de silo ESG), soit intégrer les enjeux ESG dans les quatre perspectives existantes (durabilité incorporée mais moins visible). Le choix dépend de la maturité de l'organisation ; l'enjeu est d'établir les relations de cause à effet.",
    },
    {
      id: "fc16",
      front: "Qu'est-ce que le contrôle de gestion durable (sustainability controlling) ?",
      back: "L'extension du contrôle de gestion à la performance globale : indicateurs ESG, tableaux de bord de durabilité, objectifs durables. Le contrôleur fiabilise les données extra-financières avec la même rigueur que les données financières, alimente le reporting CSRD et éclaire les arbitrages entre performance économique et durable.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Selon Freeman (1984), une partie prenante est :",
      choices: [
        "Tout actionnaire détenant une part significative du capital",
        "Tout acteur lié à l'entreprise par un contrat",
        "Tout groupe ou individu qui peut affecter ou être affecté par la réalisation des objectifs de l'organisation",
        "Tout investisseur intégrant les critères ESG dans ses décisions",
      ],
      answers: [2],
      explanation:
        "La théorie des parties prenantes (stakeholder theory) élargit la responsabilité de l'entreprise au-delà des seuls actionnaires (shareholders) : salariés, clients, fournisseurs, pouvoirs publics, communautés, environnement. C'est le socle conceptuel de la performance durable.",
    },
    {
      id: "q2",
      question: "Dans le cadre de la CSRD, un enjeu de durabilité est considéré comme matériel :",
      choices: [
        "Uniquement s'il est significatif selon les deux matérialités à la fois",
        "S'il est significatif selon la matérialité financière OU la matérialité d'impact",
        "Uniquement s'il présente un risque financier pour l'entreprise",
        "Uniquement s'il figure dans la liste des normes ESRS thématiques",
      ],
      answers: [1],
      explanation:
        "C'est le piège classique : la double matérialité fonctionne en OU, pas en ET. Un enjeu significatif selon l'une seule des deux perspectives doit être reporté — l'entreprise rend compte de ses impacts même sans conséquence financière (encore) pour elle.",
    },
    {
      id: "q3",
      question: "La matérialité d'impact correspond à la perspective :",
      choices: [
        "Inside-out : la façon dont l'entreprise affecte la société et l'environnement",
        "Outside-in : la façon dont les enjeux de durabilité affectent l'entreprise",
        "De l'investisseur : la durabilité comme risque ou opportunité financière",
        "Du régulateur : la conformité aux normes ESRS",
      ],
      answers: [0],
      explanation:
        "Matérialité d'impact = inside-out (l'entreprise affecte le monde, indépendamment des conséquences financières pour elle). Matérialité financière = outside-in (les enjeux affectent l'entreprise), qui est la perspective traditionnelle de l'investisseur. Ne pas les confondre est un piège signalé par la fiche de révision.",
    },
    {
      id: "q4",
      question: "Dans le bilan carbone selon le GHG Protocol, le scope 2 regroupe :",
      choices: [
        "Les émissions directes des installations et véhicules de l'entreprise",
        "Les émissions indirectes liées à la production de l'électricité, de la chaleur ou du froid achetés",
        "Les émissions de la chaîne de valeur en amont et en aval",
        "Les émissions liées à l'utilisation des produits vendus",
      ],
      answers: [1],
      explanation:
        "Scope 1 = émissions directes (sources détenues ou contrôlées). Scope 2 = émissions indirectes liées à l'énergie achetée et consommée. Scope 3 = autres émissions indirectes de la chaîne de valeur (dont l'utilisation des produits vendus, qui relève de l'aval du scope 3).",
    },
    {
      id: "q5",
      question: "Quelle part des émissions totales le scope 3 représente-t-il généralement ?",
      choices: ["Moins de 10 %", "Environ 20 à 30 %", "Environ 40 à 50 %", "Souvent 70 à 90 %"],
      answers: [3],
      explanation:
        "Le scope 3 (chaîne de valeur) est généralement le poste le plus important — souvent 70 à 90 % du total — et le plus difficile à maîtriser car il dépend de tiers. Une entreprise qui ne piloterait que ses scopes 1 et 2 négligerait l'essentiel de son empreinte : piège classique d'examen.",
    },
    {
      id: "q6",
      question: "Dans l'architecture des normes ESRS, la norme S2 couvre :",
      choices: [
        "Les effectifs de l'entreprise",
        "Les communautés affectées",
        "Les travailleurs de la chaîne de valeur",
        "Les consommateurs et utilisateurs finaux",
      ],
      answers: [2],
      explanation:
        "Normes sociales : S1 = effectifs de l'entreprise, S2 = travailleurs de la chaîne de valeur (devoir de vigilance, audits fournisseurs), S3 = communautés affectées, S4 = consommateurs et utilisateurs finaux. Les normes E1 à E5 couvrent l'environnement et G1 la conduite des affaires.",
    },
    {
      id: "q7",
      question: "Selon la typologie de Mitchell (1997), les trois attributs qui permettent de hiérarchiser les parties prenantes sont :",
      choices: [
        "Le pouvoir, la légitimité et l'urgence",
        "Le pouvoir, l'intérêt et la proximité",
        "La légitimité, la rentabilité et l'influence",
        "L'urgence, la taille et l'ancienneté de la relation",
      ],
      answers: [0],
      explanation:
        "Mitchell (avec Agle et Wood) retient le pouvoir (capacité d'influence), la légitimité (du lien avec l'entreprise) et l'urgence (des attentes). Une partie prenante cumulant les trois est « définitive » et prioritaire ; avec un seul attribut, elle est « latente » — mais peut devenir définitive (ex. : une ONG qui mobilise les médias).",
    },
    {
      id: "q8",
      question: "La création de valeur partagée (Porter & Kramer) se distingue de la RSE classique parce qu'elle :",
      choices: [
        "Repose principalement sur le mécénat et la philanthropie",
        "Se limite à la conformité aux obligations réglementaires",
        "Consiste à redistribuer les profits aux parties prenantes",
        "Intègre les enjeux sociétaux au cœur de la stratégie comme source d'avantage concurrentiel",
      ],
      answers: [3],
      explanation:
        "La valeur partagée (CSV, 2011) déplace la RSE de la périphérie (mécénat, communication) vers le cœur stratégique : résoudre un problème de société crée simultanément de la valeur économique et sociétale. Limite signalée par le cours : la convergence entre intérêt privé et bien commun n'est pas toujours réelle.",
    },
    {
      id: "q9",
      question: "Laquelle de ces affirmations sur la CSRD est exacte ?",
      choices: [
        "La CSRD est une démarche volontaire laissée à l'initiative des entreprises",
        "La CSRD impose un reporting normé (ESRS), vérifié par un tiers et fondé sur la double matérialité",
        "La CSRD ne concerne que la matérialité financière des enjeux climatiques",
        "La CSRD restreint le périmètre des entreprises soumises au reporting par rapport à la NFRD",
      ],
      answers: [1],
      explanation:
        "La CSRD renforce et remplace la NFRD : normes communes (ESRS), vérification par un tiers indépendant, double matérialité obligatoire et périmètre considérablement élargi (calendrier progressif). Piège signalé : ne pas confondre la RSE (démarche volontaire) et la CSRD (obligation réglementaire).",
    },
    {
      id: "q10",
      question: "Dans un Balanced Scorecard durable, quel est le principal risque d'ajouter une cinquième perspective dédiée « société/environnement » ?",
      choices: [
        "Rendre les enjeux durables invisibles dans le pilotage",
        "Supprimer la perspective financière du tableau de bord",
        "Isoler les enjeux ESG du reste de la stratégie (silo ESG)",
        "Rendre impossible l'établissement de relations de cause à effet",
      ],
      answers: [2],
      explanation:
        "La perspective dédiée donne de la visibilité et un porteur clair (utile au démarrage), mais risque d'isoler l'ESG dans un silo. L'alternative — intégrer les enjeux ESG dans les quatre perspectives existantes — ancre la durabilité au cœur de chaque dimension, au prix d'une moindre visibilité. Le choix dépend de la maturité de l'organisation.",
    },
  ],
};
