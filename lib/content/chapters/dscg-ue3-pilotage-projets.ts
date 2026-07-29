import type { Chapter } from "../types";
import { chapter as generated } from "./dscg-ue3-pilotage-projets.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const pilotageProjets: Chapter = {
  ...generated,
  description:
    "Organisation et gouvernance des projets (MOA/MOE, structures, PMO), planification par WBS, PERT/chemin critique et diagramme de Gantt, puis pilotage budgétaire par les trois grandeurs CBTP/CBTE/CRTE, la courbe en S et les indices EVM (CPI, SPI, EAC), sans oublier la gestion des risques et l'agilité.",
  flashcards: [
    {
      id: "fc1",
      front: "Qu'est-ce qu'un projet ?",
      back: "Un effort temporaire et unique visant un livrable sous contrainte QCD (qualité, coûts, délais). Deux invariants dans toutes les définitions (AFNOR, PMI, PRINCE2, ISO 21500) : l'unicité (non répétitif, contrairement à l'opération) et la temporalité (un début et une fin).",
    },
    {
      id: "fc2",
      front: "Maîtrise d'ouvrage (MOA) vs maîtrise d'œuvre (MOE) : la différence ?",
      back: "La MOA est le commanditaire : elle exprime le besoin, finance, valide les livrables. La MOE conçoit et réalise la solution répondant au besoin ; elle est redevable devant la MOA. Distinction héritée du BTP.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce que le chemin critique ?",
      back: "La séquence de tâches à marge totale nulle : tout retard sur l'une d'elles retarde mécaniquement la fin du projet. Il fixe la durée minimale du projet et hiérarchise l'attention managériale.",
    },
    {
      id: "fc4",
      front: "Marge totale vs marge libre ?",
      back: "Marge totale (MT) : retard maximal d'une tâche sans repousser la fin du projet. Marge libre (ML) : retard possible sans décaler le début au plus tôt de ses successeurs. ML ≤ MT ; sur le chemin critique, MT = ML = 0.",
    },
    {
      id: "fc5",
      front: "CBTP, CBTE, CRTE : définitions et équivalents EVM ?",
      back: "CBTP = coût budgété du travail prévu (PV, budget planifié à la date). CBTE = coût budgété du travail effectué (EV, valeur acquise : avancement physique valorisé au budget). CRTE = coût réel du travail effectué (AC, dépenses réelles).",
    },
    {
      id: "fc6",
      front: "Formules de l'écart de coût et de l'écart de délai ?",
      back: "Écart de coût : EC = CBTE − CRTE. Écart de délai : ED = CBTE − CBTP. Dans les deux cas, un écart négatif est défavorable (surcoût, retard) et un écart positif favorable.",
    },
    {
      id: "fc7",
      front: "Formules et lecture du CPI et du SPI ?",
      back: "CPI = CBTE / CRTE (efficience de la dépense) ; SPI = CBTE / CBTP (respect du planning). Seuil : > 1 favorable (économie / avance), < 1 défavorable (dérive de coût / retard).",
    },
    {
      id: "fc8",
      front: "Formules de l'EAC et du VAC ?",
      back: "EAC (coût final estimé) = BAC / CPI ; VAC (écart à terminaison) = BAC − EAC. Un VAC négatif anticipe un dépassement final. L'ETC (reste à faire estimé) = EAC − CRTE.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce que la courbe en S ?",
      back: "La représentation des dépenses cumulées dans le temps : lentes au démarrage, accélérées en exécution, ralenties à la clôture. Superposer CBTP, CBTE et CRTE rend les écarts de coût et de délai immédiatement visibles.",
    },
    {
      id: "fc10",
      front: "Qu'est-ce qu'un jalon (milestone) ?",
      back: "Un point de contrôle de durée nulle marquant l'achèvement d'une étape et conditionnant, en gouvernance « go / no-go », la poursuite du projet.",
    },
    {
      id: "fc11",
      front: "Qu'est-ce que le WBS et sa règle des 100 % ?",
      back: "Le Work Breakdown Structure (organigramme des tâches) décompose le projet en sous-projets, lots de travaux puis tâches. Règle des 100 % : la somme des éléments d'un niveau couvre exactement le périmètre du niveau supérieur — ni plus, ni moins.",
    },
    {
      id: "fc12",
      front: "Comment évalue-t-on et traite-t-on un risque projet ?",
      back: "Criticité = Probabilité × Impact, pour hiérarchiser les risques. Quatre stratégies de réponse : éviter (supprimer la cause), réduire (atténuer probabilité ou impact), transférer (assurance, clause contractuelle), accepter (avec ou sans provision).",
    },
    {
      id: "fc13",
      front: "Les phases du cycle de vie du projet selon le référentiel ?",
      back: "Conception, exécution et post-mortem. Détaillables en cinq groupes de processus (PMI / ISO 21500) : initialisation, planification, exécution, contrôle/suivi, clôture. Le post-mortem (retour d'expérience, lessons learned) est trop souvent négligé.",
    },
    {
      id: "fc14",
      front: "Les structures organisationnelles de projet ?",
      back: "Continuum d'autonomie croissante : structure fonctionnelle (chef de projet sans autorité), structure matricielle (double rattachement métier/projet, faible/équilibrée/forte), structure par projet « sortie » (équipe autonome dédiée), plus le PMO, cellule transverse qui standardise et consolide.",
    },
    {
      id: "fc15",
      front: "Formule de la durée attendue dans le PERT probabiliste ?",
      back: "te = (a + 4m + b) / 6, avec a = durée optimiste, m = la plus probable, b = pessimiste. L'écart-type est σ = (b − a) / 6. Cette pondération corrige le biais d'optimisme (planning fallacy).",
    },
    {
      id: "fc16",
      front: "Comment l'agile pilote-t-il le triptyque QCD par rapport au prédictif ?",
      back: "Le prédictif fige le périmètre et laisse varier coût et délai ; l'agile fige coût et délai (capacité stable par sprint) et laisse varier le périmètre, en livrant d'abord les fonctionnalités de plus forte valeur.",
    },
  ],
  quiz: [
    {
      id: "q1",
      question: "Que mesure le CBTE (coût budgété du travail effectué) ?",
      choices: [
        "Ce que l'on prévoyait d'avoir dépensé à la date du point d'avancement",
        "Ce que le travail réalisé a réellement coûté",
        "La valeur budgétaire du travail réellement réalisé (avancement physique valorisé au budget)",
        "Le coût total réestimé du projet à terminaison",
      ],
      answers: [2],
      explanation:
        "Le CBTE (valeur acquise, EV) valorise l'avancement physique au coût budgété. C'est la grandeur centrale du suivi : elle répond à la question « en ai-je fait pour mon argent ? ». Le budget prévu est le CBTP, le coût réel le CRTE, le coût réestimé l'EAC.",
    },
    {
      id: "q2",
      question:
        "Un projet a un budget total (BAC) de 120 000 €. À la date du point : CBTP = 60 000 €, avancement physique = 45 %, dépenses réelles (CRTE) = 58 000 €. Quel est l'écart de coût (EC) ?",
      choices: ["− 4 000 € (défavorable)", "− 6 000 € (défavorable)", "+ 4 000 € (favorable)", "+ 2 000 € (favorable)"],
      answers: [0],
      explanation:
        "CBTE = 45 % × 120 000 = 54 000 €. EC = CBTE − CRTE = 54 000 − 58 000 = − 4 000 € : défavorable, on a dépensé 58 000 € pour une valeur produite de 54 000 €. (− 6 000 € serait l'écart de délai : ED = 54 000 − 60 000.)",
    },
    {
      id: "q3",
      question:
        "BAC = 90 000 €, CBTE = 45 000 €, CRTE = 50 000 €. Quel est le coût final estimé (EAC) si la tendance de coût se poursuit ?",
      choices: ["81 000 €", "95 000 €", "100 000 €", "110 000 €"],
      answers: [2],
      explanation:
        "CPI = CBTE / CRTE = 45 000 / 50 000 = 0,9. EAC = BAC / CPI = 90 000 / 0,9 = 100 000 €. Le VAC = 90 000 − 100 000 = − 10 000 € : dépassement final anticipé de 10 000 €.",
    },
    {
      id: "q4",
      question:
        "Une tâche est estimée en PERT probabiliste : durée optimiste a = 2 j, la plus probable m = 5 j, pessimiste b = 14 j. Quelle est la durée attendue te ?",
      choices: ["5 jours", "6 jours", "7 jours", "8 jours"],
      answers: [1],
      explanation:
        "te = (a + 4m + b) / 6 = (2 + 20 + 14) / 6 = 36 / 6 = 6 jours, et non 5 (la durée la plus probable) : l'asymétrie vers le pessimiste pénalise l'estimation et corrige le biais d'optimisme (planning fallacy).",
    },
    {
      id: "q5",
      question:
        "Dans un réseau PERT, une tâche E a deux antériorités : C (fin au plus tôt à 17) et D (fin au plus tôt à 23). Quelle est la date de début au plus tôt de E ?",
      choices: [
        "17, car on retient la première antériorité achevée",
        "20, la moyenne des deux dates de fin",
        "40, la somme des deux dates de fin",
        "23, car une tâche convergente ne commence qu'après le maximum des fins de ses antériorités",
      ],
      answers: [3],
      explanation:
        "E ne peut commencer que lorsque TOUTES ses antériorités sont finies : on retient le maximum, soit 23. Mal traiter une tâche convergente est un piège d'examen signalé — il fausse le chemin critique et la durée du projet.",
    },
    {
      id: "q6",
      question: "Les tâches situées sur le chemin critique ont :",
      choices: [
        "Une marge totale et une marge libre nulles",
        "La marge totale la plus élevée du projet",
        "Une marge libre positive mais une marge totale nulle",
        "Une durée nulle, comme les jalons",
      ],
      answers: [0],
      explanation:
        "Le chemin critique est la séquence de tâches à marge totale nulle (et donc marge libre nulle, car ML ≤ MT) : tout retard sur l'une d'elles repousse la fin du projet. Les jalons, eux, sont des points de contrôle de durée nulle — autre notion.",
    },
    {
      id: "q7",
      question:
        "À mi-parcours, un chef de projet constate que les dépenses réelles (77 000 €) sont inférieures au budget prévu à cette date (79 000 €) et conclut que le projet est « sous budget ». Pourquoi ce raisonnement est-il l'erreur classique ?",
      choices: [
        "Parce qu'il faut comparer les dépenses réelles au budget total (BAC), pas au budget à date",
        "Parce qu'il ignore l'avancement physique : sans le CBTE, un projet peut sembler sous budget simplement parce qu'il est en retard",
        "Parce que la réserve pour aléas doit toujours être déduite du CRTE",
        "Parce que l'écart de délai se calcule en jours et non en euros",
      ],
      answers: [1],
      explanation:
        "Comparer le seul coût réel (CRTE) au budget prévu (CBTP) sans valoriser l'avancement fausse tout le diagnostic : c'est le piège « confondre CRTE et CBTE ». Dans l'exemple du cours, avec un CBTE de 70 200 €, le projet est en réalité en dépassement de coût (EC = − 6 800 €) ET en retard (ED = − 8 800 €). À noter : dans la méthode, l'écart de délai s'exprime bien en euros.",
    },
    {
      id: "q8",
      question:
        "Un projet en difficulté a déjà consommé 800 000 €. Sur quel critère le comité de pilotage doit-il fonder la décision de poursuivre ou d'arrêter ?",
      choices: [
        "Le montant déjà investi : on ne peut pas « perdre » 800 000 €",
        "Le ratio dépenses engagées / budget initial",
        "Le respect des jalons passés du projet",
        "La valeur du reste à faire (VAN du reste à faire), en ignorant les sommes déjà engagées",
      ],
      answers: [3],
      explanation:
        "Les sommes déjà engagées sont des coûts irrécupérables (sunk costs) : poursuivre un projet au seul motif des montants investis est la sunk cost fallacy, piège signalé par le chapitre. Seule compte la valeur restant à créer par rapport au coût du reste à faire.",
    },
    {
      id: "q9",
      question: "Dans l'approche agile (Scrum), comment le triptyque QCD est-il piloté ?",
      choices: [
        "Le périmètre est figé, coût et délai varient",
        "Qualité, coût et délai sont tous trois figés dès le départ",
        "Coût et délai sont figés (capacité stable par sprint), le périmètre est la variable d'ajustement",
        "Aucune contrainte n'est figée : tout est renégocié en continu",
      ],
      answers: [2],
      explanation:
        "L'agile inverse la logique prédictive : la capacité de l'équipe sur un sprint étant stable, coût et délai sont figés, et c'est le périmètre qui varie — on livre d'abord les fonctionnalités de plus forte valeur. Promettre Q, C et D simultanément est d'ailleurs un piège d'examen.",
    },
    {
      id: "q10",
      question:
        "Pour couvrir le risque de défaillance d'un sous-traitant, une entreprise souscrit une assurance et insère des clauses de pénalités au contrat. Quelle stratégie de réponse au risque met-elle en œuvre ?",
      choices: ["Éviter", "Transférer", "Réduire (atténuer)", "Accepter"],
      answers: [1],
      explanation:
        "Assurance et clauses contractuelles font porter le risque par un tiers : c'est la stratégie de transfert. Éviter supprime la cause, réduire abaisse la probabilité ou l'impact, accepter assume le risque (éventuellement provisionné via la réserve pour aléas).",
    },
  ],
};
