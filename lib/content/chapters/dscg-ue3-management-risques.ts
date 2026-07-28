import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-management-risques.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const managementRisques: Chapter = {
  ...generated,
  description:
    "Démarche complète de management des risques : identification, évaluation (criticité = probabilité × impact), cartographie et heat map, stratégies de traitement, contrôle interne et référentiels (COSO, COSO ERM, ISO 31000), trois lignes de maîtrise, articulation audit/contrôle de gestion, risques cyber et ESG.",
  flashcards: [
    {
      id: "fc1",
      front: "Définition du risque selon ISO 31000",
      back: "« L'effet de l'incertitude sur l'atteinte des objectifs. » Définition de référence : elle relie le risque aux objectifs (donc à la stratégie) et reconnaît que l'effet peut être négatif (menace) OU positif (opportunité).",
    },
    {
      id: "fc2",
      front: "Risque vs incertitude selon Frank Knight (1921)",
      back: "Risque : situation où les issues sont connues et probabilisables (on peut calculer). Incertitude : issues ou probabilités inconnues (non probabilisable). Face à l'incertitude radicale (cygnes noirs de Taleb), on privilégie la résilience plutôt que le calcul.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce que l'appétence au risque ?",
      back: "Le niveau de risque qu'une organisation est prête à accepter pour atteindre ses objectifs — décision stratégique de gouvernance. Elle se décline en tolérance (limites acceptables autour des objectifs) et capacité (risque maximal soutenable). Une appétence nulle paralyserait l'organisation.",
    },
    {
      id: "fc4",
      front: "Formule de la criticité d'un risque",
      back: "Criticité = Probabilité × Impact. Avec des échelles de 1 à 5, elle va de 1 à 25 : critique (15-25, rouge), élevé (8-14, orange), modéré (4-7, jaune), faible (1-3, vert). Elle hiérarchise les risques et fonde la priorisation.",
    },
    {
      id: "fc5",
      front: "Risque inhérent vs risque résiduel",
      back: "Risque inhérent : risque brut, avant prise en compte des dispositifs de maîtrise. Risque résiduel : risque net, après prise en compte des dispositifs de contrôle en place. Un risque critique déjà bien maîtrisé n'appelle pas la même vigilance qu'un risque critique non maîtrisé.",
    },
    {
      id: "fc6",
      front: "Définition du contrôle interne",
      back: "Ensemble des dispositifs (organisation, procédures, contrôles) mis en place pour maîtriser les activités et donner une assurance RAISONNABLE — jamais absolue — d'atteinte des objectifs : protection des actifs, conformité, fiabilité de l'information, efficacité des opérations.",
    },
    {
      id: "fc7",
      front: "Les 5 composantes du contrôle interne (COSO)",
      back: "1. Environnement de contrôle (socle : culture, éthique, tone at the top). 2. Évaluation des risques. 3. Activités de contrôle (procédures, séparation des fonctions, rapprochements). 4. Information et communication. 5. Pilotage (monitoring : auto-évaluation, audit interne).",
    },
    {
      id: "fc8",
      front: "Le principe de séparation des fonctions",
      back: "Ne pas confier à une même personne l'autorisation, l'exécution, la conservation et le contrôle d'une opération (« si le vendeur est en même temps caissier, il y a un risque objectif de détournement »). C'est l'un des contrôles les plus efficaces et universels contre la fraude.",
    },
    {
      id: "fc9",
      front: "Le triangle de la fraude (Cressey)",
      back: "Trois conditions réunies chez le fraudeur : pression (besoin, objectifs intenables), opportunité (faille du contrôle interne — seul facteur sur lequel l'organisation a une prise directe) et rationalisation (justification que le fraudeur se donne). Illustré par l'affaire Société Générale.",
    },
    {
      id: "fc10",
      front: "Contrôles préventifs, détectifs, correctifs : la différence ?",
      back: "Préventifs : agissent en amont pour empêcher l'incident (autorisations, habilitations, séparation des fonctions) — les plus efficaces. Détectifs : repèrent les anomalies a posteriori (rapprochements, inventaires, alertes). Correctifs : rétablissent la situation (remédiation, plans de continuité).",
    },
    {
      id: "fc11",
      front: "Les 4 stratégies de traitement d'un risque",
      back: "Éviter (renoncer à l'activité si le risque est inacceptable) ; Réduire (abaisser probabilité ou impact par des contrôles) ; Transférer (assurance, sous-traitance, clause contractuelle) ; Accepter (assumer le risque faible ou dont le coût de traitement excède l'enjeu).",
    },
    {
      id: "fc12",
      front: "Le modèle des trois lignes de maîtrise (IIA)",
      back: "1ʳᵉ ligne : management opérationnel — détient et gère les risques au quotidien. 2ᵉ ligne : fonctions spécialisées (risk management, conformité, contrôle interne) — cadrent, outillent, surveillent. 3ᵉ ligne : audit interne — assurance indépendante, rattachée au comité d'audit. S'y ajoute l'assurance externe (CAC, régulateurs).",
    },
    {
      id: "fc13",
      front: "COSO ERM vs ISO 31000 : complémentarité ?",
      back: "COSO ERM (2017) apporte la vision stratégique : intégrer le management des risques à la stratégie et à la performance, appétence centrale (le « pourquoi »). ISO 31000 apporte le processus opérationnel universel : principes + cadre + processus, lignes directrices non certifiables (le « comment »). Complémentaires, pas concurrents.",
    },
    {
      id: "fc14",
      front: "Contrôle interne vs audit interne : le piège classique",
      back: "Contrôle interne : dispositif PERMANENT de maîtrise, porté par le management. Audit interne : fonction INDÉPENDANTE qui évalue PÉRIODIQUEMENT (par missions) l'efficacité de ce dispositif et rapporte au comité d'audit, non au management qu'elle évalue.",
    },
    {
      id: "fc15",
      front: "Quels biais cognitifs faussent l'identification des risques ?",
      back: "Biais de disponibilité (surévaluer les risques récents/médiatisés), biais d'optimisme (« cela n'arrive qu'aux autres »), biais de confirmation (privilégier ce qui rassure), effet de groupe (groupthink). On les contre en croisant méthodes, points de vue et regards externes.",
    },
    {
      id: "fc16",
      front: "Qu'est-ce que la double matérialité (CSRD) ?",
      back: "Distinction introduite par la réglementation européenne : matérialité financière (en quoi les enjeux ESG affectent la performance de l'entreprise) et matérialité d'impact (en quoi l'entreprise affecte l'environnement et la société). L'organisation doit considérer les deux ; la CSRD impose un reporting de durabilité détaillé et audité.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Comment la norme ISO 31000 définit-elle le risque ?",
      choices: [
        "La probabilité d'un événement dommageable",
        "Un danger menaçant le patrimoine de l'entreprise",
        "L'effet de l'incertitude sur l'atteinte des objectifs",
        "Un aléa non probabilisable",
      ],
      answer: 2,
      explanation:
        "ISO 31000 : « l'effet de l'incertitude sur l'atteinte des objectifs ». Définition à retenir impérativement : elle relie le risque aux objectifs et reconnaît sa double nature menace/opportunité. Une copie qui ne voit le risque que comme un danger passe à côté de la vision moderne attendue.",
    },
    {
      id: "q2",
      question: "Selon Frank Knight (1921), qu'est-ce qui distingue le risque de l'incertitude ?",
      choices: [
        "Le risque est probabilisable, l'incertitude ne l'est pas",
        "Le risque est toujours négatif, l'incertitude peut être positive",
        "Le risque est externe, l'incertitude est interne",
        "Le risque est financier, l'incertitude est stratégique",
      ],
      answer: 0,
      explanation:
        "Distinction fondatrice de Knight (Risk, Uncertainty and Profit, 1921) : le risque désigne des issues connues et probabilisables (comme au jeu de dés) ; l'incertitude, des issues ou probabilités inconnues. Face à l'incertitude radicale, on privilégie la résilience plutôt que le calcul.",
    },
    {
      id: "q3",
      question:
        "Un risque est évalué avec une probabilité de 4 et un impact de 3 (échelles de 1 à 5). Quelle est sa criticité et dans quelle zone se situe-t-il ?",
      choices: [
        "Criticité 7, zone modérée (jaune)",
        "Criticité 12, zone élevée (orange)",
        "Criticité 12, zone critique (rouge)",
        "Criticité 1, zone faible (verte)",
      ],
      answer: 1,
      explanation:
        "Criticité = Probabilité × Impact = 4 × 3 = 12 (et non 4 + 3 = 7). Selon la grille de lecture du cours : critique 15-25 (rouge), élevé 8-14 (orange), modéré 4-7 (jaune), faible 1-3 (vert). Une criticité de 12 est donc en zone élevée : à traiter en priorité, réduire et/ou transférer.",
    },
    {
      id: "q4",
      question:
        "Dans le triangle de la fraude de Cressey, sur quel facteur le contrôle interne agit-il principalement ?",
      choices: ["La pression", "La rationalisation", "La collusion", "L'opportunité"],
      answer: 3,
      explanation:
        "Le triangle de Cressey réunit pression, opportunité et rationalisation. Le contrôle interne agit principalement sur l'opportunité (séparation des fonctions, contrôles, supervision) — le seul facteur sur lequel l'organisation a une prise directe. La prévention complète suppose aussi d'agir sur la pression (objectifs réalistes) et la rationalisation (éthique, culture).",
    },
    {
      id: "q5",
      question: "Dans le modèle des trois lignes de maîtrise (IIA), la troisième ligne correspond :",
      choices: [
        "À l'audit interne, indépendant et rattaché au comité d'audit",
        "Au commissaire aux comptes",
        "Aux fonctions de risk management et de conformité",
        "Au management opérationnel qui gère les risques au quotidien",
      ],
      answer: 0,
      explanation:
        "1ʳᵉ ligne : management opérationnel (détient et gère les risques). 2ᵉ ligne : fonctions spécialisées (risk management, conformité, contrôle interne). 3ᵉ ligne : audit interne, seule fonction véritablement indépendante car rattachée à la gouvernance (comité d'audit). Le CAC et les régulateurs sont une assurance externe, parfois qualifiée de « quatrième ligne ».",
    },
    {
      id: "q6",
      question:
        "Un risque d'incendie d'entrepôt a une faible probabilité mais une gravité très élevée. Quelle est la stratégie de traitement type recommandée par le cours ?",
      choices: [
        "L'accepter, car il est peu probable",
        "L'éviter en fermant l'entrepôt",
        "Le transférer par assurance",
        "Le réduire en priorité absolue avant tout autre risque",
      ],
      answer: 2,
      explanation:
        "Les risques de forte gravité mais faible probabilité relèvent typiquement du transfert par assurance (et des plans de continuité), plutôt que d'une coûteuse réduction. C'est l'exemple R3 du cours : incendie P=2, I=5, criticité 10, traité par assurance à 18 000 €. L'arbitrage optimise le rapport réduction de criticité / coût de maîtrise.",
    },
    {
      id: "q7",
      question: "Quelle composante du modèle COSO constitue le socle du contrôle interne ?",
      choices: [
        "Les activités de contrôle",
        "L'environnement de contrôle",
        "Le pilotage (monitoring)",
        "L'information et la communication",
      ],
      answer: 1,
      explanation:
        "L'environnement de contrôle est le socle de la pyramide COSO : culture, intégrité, valeurs éthiques, compétence, « ton donné par le sommet » (tone at the top). Sans un environnement sain, les meilleurs contrôles restent lettre morte — le contrôle interne est autant affaire de culture que de procédures.",
    },
    {
      id: "q8",
      question:
        "Le risque A a une probabilité de 5 et un impact de 2 ; le risque B a une probabilité de 3 et un impact de 4. Lequel est prioritaire selon la criticité ?",
      choices: [
        "A, car sa probabilité est maximale",
        "Ils sont équivalents",
        "A, car criticité 10 contre 8 pour B",
        "B, car sa criticité (12) dépasse celle de A (10)",
      ],
      answer: 3,
      explanation:
        "Criticité A = 5 × 2 = 10 ; criticité B = 3 × 4 = 12. B est prioritaire malgré la probabilité maximale de A : la hiérarchisation se fonde sur le produit probabilité × impact, pas sur une seule dimension. L'arbitrage final intègre ensuite le coût de maîtrise et le niveau de maîtrise existant (risque résiduel).",
    },
    {
      id: "q9",
      question: "Laquelle de ces affirmations sur la norme ISO 31000 est exacte ?",
      choices: [
        "Ce sont des lignes directrices non certifiables, structurées en principes, cadre et processus",
        "C'est une norme certifiable délivrée aux entreprises conformes",
        "Elle ne s'applique qu'aux institutions financières",
        "Elle est centrée sur le reporting financier américain",
      ],
      answer: 0,
      explanation:
        "ISO 31000 (2009, révisée 2018) est le standard international du management des risques : elle ne certifie pas (lignes directrices) et s'articule en trois éléments — principes, cadre organisationnel (framework) et processus (contexte, appréciation, traitement, suivi, communication). Elle est universelle, applicable à toute organisation. Le reporting financier est l'origine du COSO, pas d'ISO 31000.",
    },
    {
      id: "q10",
      question: "Quelle est la différence entre contrôle interne et audit interne ?",
      choices: [
        "Le contrôle interne est externe à l'entreprise, l'audit interne est interne",
        "Ce sont deux noms du même dispositif",
        "L'audit interne est permanent, le contrôle interne est périodique",
        "Le contrôle interne est un dispositif permanent porté par le management ; l'audit interne l'évalue périodiquement de façon indépendante",
      ],
      answer: 3,
      explanation:
        "Piège classique signalé par le cours : le contrôle interne est le dispositif permanent de maîtrise, conçu et porté par le management ; l'audit interne est une fonction indépendante qui évalue périodiquement (par missions) l'efficacité de ce dispositif et rapporte au comité d'audit. Confondre les deux — ou inverser permanent/périodique — est une erreur fréquente à l'examen.",
    },
  ],
};
