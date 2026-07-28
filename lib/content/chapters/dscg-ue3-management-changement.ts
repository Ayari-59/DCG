import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-management-changement.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const managementChangement: Chapter = {
  ...generated,
  description:
    "Formes et facteurs du changement, résistances et jeux d'acteurs (Crozier & Friedberg), modèles de conduite (Lewin, Kotter, théories E/O de Beer & Nohria, Senge, March), gouvernance et communication de la transformation, et rôle du contrôle de gestion : business case, indicateurs et tableau de bord équilibré du changement.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce que le changement organisationnel ?",
      back: "Toute modification significative et durable de l'état d'une organisation : de sa stratégie, de sa structure, de ses processus, de ses technologies ou de sa culture. Le changement culturel est le plus profond et le plus lent — il ne se décrète pas.",
    },
    {
      id: "fc2",
      front: "Changement réactif vs changement proactif : la différence ?",
      back: "Réactif : déclenché par une menace externe subie, conduit dans l'urgence — résistances et risques accrus. Proactif : anticipé avant que la nécessité ne devienne pressante — meilleures conditions, mais difficulté à mobiliser sans urgence visible. Le contrôle de gestion joue un rôle d'alerte précoce.",
    },
    {
      id: "fc3",
      front: "Les 4 formes du changement (ampleur × rythme)",
      back: "1. Incrémental : petites améliorations continues (kaizen), peu risqué. 2. Radical / transformationnel : profond et rapide, fort potentiel mais fortes résistances. 3. Continu : adaptation permanente institutionnalisée (organisation apprenante). 4. De rupture (disruptif) : réinvention brutale imposée par l'environnement.",
    },
    {
      id: "fc4",
      front: "Qu'est-ce qu'une zone d'incertitude (Crozier & Friedberg) ?",
      back: "La source de pouvoir d'un acteur : ce qu'il maîtrise et que les autres ne maîtrisent pas (compétence rare, information clé, relation à l'environnement, application des règles). Le pouvoir est une relation, pas un attribut hiérarchique. Un changement modifie les zones d'incertitude, donc la distribution du pouvoir.",
    },
    {
      id: "fc5",
      front: "Les 5 familles de facteurs de résistance au changement",
      back: "Psychologiques (peur de l'inconnu, habitudes), sociaux (normes du groupe, solidarités), culturels (« ça ne se fait pas ici »), organisationnels (procédures rigides, inertie structurelle, investissements passés), politiques (redistribution du pouvoir). La résistance est une réaction rationnelle, pas de la mauvaise volonté.",
    },
    {
      id: "fc6",
      front: "La courbe du changement : origine et phases",
      back: "Adaptée des travaux d'Elisabeth Kübler-Ross sur le deuil : choc et déni → colère et résistance → résignation/dépression (point bas, la « vallée du désespoir ») → acceptation → expérimentation → intégration. La performance suit une courbe en U ; l'accompagnement vise à raccourcir et adoucir la vallée.",
    },
    {
      id: "fc7",
      front: "Les 3 phases du modèle de Lewin",
      back: "1. Décristallisation (unfreezing) : ébranler l'équilibre, créer la prise de conscience. 2. Transition (moving) : nouvelles pratiques, période d'apprentissage et d'inconfort. 3. Recristallisation (refreezing) : ancrer les nouvelles pratiques dans les routines pour éviter le retour en arrière.",
    },
    {
      id: "fc8",
      front: "Le champ de forces de Lewin : quelle stratégie privilégier ?",
      back: "Toute situation est un équilibre entre forces motrices (qui poussent au changement) et forces de résistance. Renforcer les forces motrices accroît souvent symétriquement la résistance ; il est plus efficace de réduire les forces de résistance — mieux vaut lever les freins qu'accentuer la pression.",
    },
    {
      id: "fc9",
      front: "Les 8 étapes de Kotter (Leading Change, 1996)",
      back: "1. Créer un sentiment d'urgence. 2. Former une coalition directrice. 3. Développer une vision claire. 4. Communiquer la vision. 5. Lever les obstacles (empower). 6. Générer des victoires rapides (quick wins). 7. Consolider et amplifier. 8. Ancrer dans la culture.",
    },
    {
      id: "fc10",
      front: "Théorie E et théorie O (Beer & Nohria)",
      back: "Théorie E (Economic) : changement centré sur la valeur actionnariale, descendant, brutal, par restructuration. Théorie O (Organizational) : centré sur le développement des capacités humaines, participatif, progressif. Les transformations réussies combinent la rigueur économique de E et l'adhésion humaine de O.",
    },
    {
      id: "fc11",
      front: "L'organisation apprenante (Senge) : simple et double boucle",
      back: "Peter Senge (La Cinquième Discipline, 1990) : une organisation capable d'apprendre en continu de son expérience. Apprentissage en simple boucle : corriger les actions. Apprentissage en double boucle : remettre en cause les valeurs et représentations sous-jacentes — changement plus profond.",
    },
    {
      id: "fc12",
      front: "Qu'est-ce que l'organisation ambidextre (March) ?",
      back: "Une organisation capable d'exploiter l'existant ET d'explorer le nouveau simultanément. Elle concilie performance et innovation, au prix d'une tension organisationnelle à gérer. Elle érige la capacité de transformation permanente en compétence stratégique centrale.",
    },
    {
      id: "fc13",
      front: "L'apport de Weick : le sensemaking",
      back: "Le changement est un processus continu de construction de sens : les acteurs agissent selon l'interprétation qu'ils font de leur situation. Changer, c'est d'abord transformer les cadres d'interprétation — d'où la nécessité de communiquer le « pourquoi » (le sens) avant le « comment » (la méthode).",
    },
    {
      id: "fc14",
      front: "Les 4 rôles de la gouvernance d'une transformation",
      back: "Le sponsor (dirigeant) porte et légitime le changement — son engagement visible est le premier facteur de succès. Le comité de pilotage (COPIL) décide aux jalons et arbitre. Le chef de projet de transformation pilote opérationnellement. Les ambassadeurs (change agents) relaient sur le terrain et font remonter les résistances.",
    },
    {
      id: "fc15",
      front: "Les 4 rôles du contrôle de gestion dans le changement",
      back: "1. Accompagnement stratégique : objectiver la nécessité par le diagnostic chiffré. 2. Aide à la décision : évaluer économiquement les options (business case, ROI, VAN). 3. Pilotage des résultats : tableau de bord dédié de la transformation. 4. Mesure de la performance : évaluation ex post de la réussite — la dimension la plus négligée.",
    },
    {
      id: "fc16",
      front: "Les 4 dimensions d'indicateurs d'un tableau de bord de transformation",
      back: "Financiers (coûts engagés/budgétés, gains réalisés/attendus), opérationnels (taux d'adoption, productivité, qualité, délais), sociaux (turnover, absentéisme, climat social) et comportementaux (taux d'utilisation effective, engagement). Un jeu équilibré évite de ne piloter que ce qui est facile à mesurer.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Selon Crozier et Friedberg, d'où provient le pouvoir d'un acteur dans l'organisation ?",
      choices: [
        "De sa position dans la hiérarchie formelle",
        "De sa maîtrise d'une zone d'incertitude pertinente pour les autres",
        "De son ancienneté dans l'organisation",
        "De son adhésion à la stratégie de la direction",
      ],
      answer: 1,
      explanation:
        "Pour Crozier et Friedberg (L'Acteur et le système, 1977), le pouvoir n'est pas un attribut hiérarchique mais une relation : il naît de la maîtrise d'une zone d'incertitude (compétence rare, information clé, relation à l'environnement, application des règles). L'exemple canonique est l'ouvrier d'entretien qui maîtrise la réparation des machines.",
    },
    {
      id: "q2",
      question: "Quel est l'ordre correct des trois phases du modèle de Lewin ?",
      choices: [
        "Transition → décristallisation → recristallisation",
        "Recristallisation → transition → décristallisation",
        "Décristallisation → transition → recristallisation",
        "Décristallisation → recristallisation → transition",
      ],
      answer: 2,
      explanation:
        "Le modèle de Lewin s'enchaîne ainsi : décristallisation (unfreezing — ébranler l'équilibre, créer la prise de conscience), transition (moving — opérer le changement), recristallisation (refreezing — ancrer les nouvelles pratiques pour éviter le retour en arrière).",
    },
    {
      id: "q3",
      question: "Quelle est la première étape du modèle de Kotter ?",
      choices: [
        "Créer un sentiment d'urgence",
        "Former une coalition directrice",
        "Générer des victoires rapides",
        "Communiquer la vision",
      ],
      answer: 0,
      explanation:
        "Les 8 étapes de Kotter commencent par la création d'un sentiment d'urgence : faire prendre conscience de la nécessité de changer, sans sous-estimer la force de l'inertie. Les transformations échouent le plus souvent faute d'avoir suffisamment travaillé les premières étapes (urgence, coalition, vision).",
    },
    {
      id: "q4",
      question:
        "Dans le cadre de Beer & Nohria, la théorie E du changement se caractérise par :",
      choices: [
        "Une démarche participative et progressive",
        "Le développement des capacités organisationnelles et humaines",
        "L'institutionnalisation de l'apprentissage continu",
        "Une logique descendante centrée sur la valeur actionnariale",
      ],
      answer: 3,
      explanation:
        "La théorie E (Economic) est centrée sur la valeur actionnariale : descendante, brutale, par restructuration. La théorie O (Organizational) est participative et centrée sur les capacités humaines. La thèse de Beer & Nohria : les transformations réussies combinent les deux logiques.",
    },
    {
      id: "q5",
      question:
        "Selon Kotter, quel est le « grand classique » des causes d'échec en matière de communication du changement ?",
      choices: [
        "Communiquer trop tôt, avant la décision définitive",
        "Sous-communiquer la vision",
        "Utiliser trop de canaux différents",
        "Réserver la communication aux managers de proximité",
      ],
      answer: 1,
      explanation:
        "Kotter en fait sa cause d'échec n°4 : sous-communiquer. Un message de changement doit être diffusé largement et de façon répétée pour être intégré. La communication efficace explique le pourquoi avant le comment, est incarnée par le management et bidirectionnelle.",
    },
    {
      id: "q6",
      question:
        "D'après l'analyse du champ de forces de Lewin, quelle stratégie de changement est généralement la plus efficace ?",
      choices: [
        "Renforcer au maximum les forces motrices",
        "Maintenir l'équilibre entre forces motrices et forces de résistance",
        "Réduire les forces de résistance plutôt qu'accentuer la pression",
        "Supprimer toute communication pour éviter d'alimenter les résistances",
      ],
      answer: 2,
      explanation:
        "Renforcer les forces motrices accroît souvent symétriquement la résistance. Lewin enseigne qu'il est plus efficace de réduire les forces de résistance : il vaut souvent mieux lever les freins qu'accentuer la pression.",
    },
    {
      id: "q7",
      question:
        "Dans le tableau de bord d'une transformation, quel indicateur mesure l'adhésion réelle des acteurs, au-delà du déclaratif ?",
      choices: [
        "Les coûts engagés rapportés au budget",
        "Le nombre de jalons tenus",
        "Le taux d'absentéisme",
        "Le taux d'utilisation effective des nouvelles pratiques",
      ],
      answer: 3,
      explanation:
        "Le taux d'utilisation effective est un indicateur comportemental : il mesure l'adhésion réelle (au-delà du déclaratif). Un usage faible malgré la formation est un signal d'alerte — une faible adoption détruit le business case de la transformation. Les jalons mesurent l'avancement, l'absentéisme l'impact social.",
    },
    {
      id: "q8",
      question: "La courbe du changement est adaptée des travaux de quel auteur ?",
      choices: [
        "Elisabeth Kübler-Ross (travaux sur le deuil)",
        "Kurt Lewin (dynamique des groupes)",
        "Henry Mintzberg (configurations organisationnelles)",
        "Peter Senge (organisation apprenante)",
      ],
      answer: 0,
      explanation:
        "La courbe du changement est adaptée des travaux d'Elisabeth Kübler-Ross sur le deuil : choc, déni, colère, résistance, résignation (la « vallée du désespoir »), puis acceptation, expérimentation et intégration. Elle dédramatise la baisse de performance initiale, normale et transitoire.",
    },
    {
      id: "q9",
      question: "Qu'est-ce qu'une organisation ambidextre au sens de March ?",
      choices: [
        "Une organisation dont la structure alterne centralisation et décentralisation",
        "Une organisation qui combine style directif et style participatif",
        "Une organisation qui exploite l'existant tout en explorant le nouveau",
        "Une organisation qui conduit deux transformations en parallèle",
      ],
      answer: 2,
      explanation:
        "L'entreprise ambidextre, selon March, concilie exploitation (tirer parti de l'existant, performance) et exploration (chercher le nouveau, innovation). Son apport : concilier performance et innovation ; sa limite : une tension organisationnelle à gérer.",
    },
    {
      id: "q10",
      question:
        "Dans un sujet DSCG UE3 sur la conduite du changement, quelle erreur est signalée comme « fatale » par le chapitre ?",
      choices: [
        "Mobiliser à la fois Lewin et Kotter dans la même copie",
        "Ne proposer aucun indicateur de pilotage de la transformation",
        "Citer des cas d'entreprises réelles en illustration",
        "Relier le changement à la stratégie de l'organisation",
      ],
      answer: 1,
      explanation:
        "La fiche de révision liste parmi les pièges fréquents : « ne proposer aucun indicateur de pilotage (erreur fatale en UE3) ». L'angle UE3 attend la valeur ajoutée chiffrée du contrôle de gestion : objectiver, évaluer (business case), piloter (tableau de bord équilibré) et mesurer ex post — sans se cantonner aux modèles sociologiques.",
    },
  ],
};
