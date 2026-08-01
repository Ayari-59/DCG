import type { Chapter } from "../types";
import { chapter as generated } from "./dcg-ue11-gestion-production.generated";

/**
 * Leçon générée depuis le Word source (voir .generated.ts).
 * Ici : description, flashcards et quiz, rédigés à partir de la fiche de
 * révision du chapitre — c'est ce fichier qu'on édite à la main.
 */
export const gestionProduction: Chapter = {
  ...generated,
  videos: [
    { youtubeId: "M2AuPAmlCL0", title: "Gestion de production" },
    { youtubeId: "kgWHdnypwvw", title: "Méthode MPM pas à pas" },
    { youtubeId: "Zvpx0Yyo6Og", title: "Optimiser sous contrainte" },
  ],
  description:
    "Budget de production (Production = Ventes + Stock final − Stock initial), programmation linéaire (méthode graphique et facteur rare), pilotage MRP par l'amont et ordonnancement MPM : chemin critique, marges totales et libres.",
  flashcards: [
    {
      id: "fc1",
      front: "L'équation du programme de production",
      back: "Production = Ventes prévues + Stock final souhaité − Stock initial. Le budget de production découle du budget des ventes et commande le budget des approvisionnements : c'est la charnière de la chaîne budgétaire.",
    },
    {
      id: "fc2",
      front: "Pourquoi lisser la charge de production ?",
      back: "Les ventes sont irrégulières (saisonnalité) alors qu'il est préférable d'utiliser l'outil de production de façon régulière pour réduire les coûts. Les stocks jouent le rôle de régulation entre une demande variable et une production lissée.",
    },
    {
      id: "fc3",
      front: "Qu'est-ce que la programmation linéaire ?",
      back: "Une méthode qui optimise (maximise un résultat ou minimise un coût) une fonction économique linéaire compte tenu de contraintes linéaires. Pour deux produits, la résolution graphique est à privilégier.",
    },
    {
      id: "fc4",
      front: "Que maximise-t-on dans la fonction économique d'un programme linéaire ?",
      back: "La marge sur coûts variables (F = Σ marge sur coût variable × quantité), et NON le chiffre d'affaires — erreur classique. Les coûts fixes sont considérés comme non pertinents à court terme.",
    },
    {
      id: "fc5",
      front: "Qu'est-ce que le domaine des solutions acceptables (DSA) ?",
      back: "L'intersection de tous les demi-plans acceptables définis par les contraintes : la zone des combinaisons (x, y) qui respectent simultanément toutes les contraintes. Les contraintes de positivité limitent l'étude au quart de plan supérieur droit.",
    },
    {
      id: "fc6",
      front: "Où se trouve l'optimum dans la résolution graphique ?",
      back: "Sur un sommet du DSA : on trace la droite objectif F = k, on la translate parallèlement vers les valeurs croissantes, et l'optimum est le dernier sommet du DSA touché. On peut vérifier par la méthode énumérative (valeur de F à chaque sommet).",
    },
    {
      id: "fc7",
      front: "La méthode du facteur rare : quand et comment ?",
      back: "Au-delà de deux produits, quand une seule contrainte est commune à tous (atelier goulot d'étranglement) : on classe les produits selon la marge sur coût variable PAR UNITÉ de facteur rare consommée, et on sature la capacité en commençant par le plus rentable.",
    },
    {
      id: "fc8",
      front: "Contrainte saturée et prix dual",
      back: "Une contrainte saturée (vérifiée à l'égalité) correspond à une ressource limitante. Le prix dual (ou coût d'opportunité) mesure le gain procuré par une unité supplémentaire de cette ressource.",
    },
    {
      id: "fc9",
      front: "Qu'est-ce que le MRP ?",
      back: "Le Management Resources Planning (planification des besoins en composants) : un pilotage par l'amont qui part des prévisions de ventes et utilise nomenclatures, gammes opératoires et stocks pour calculer les besoins dépendants (flux poussés). Efficace quand la demande est prévisible.",
    },
    {
      id: "fc10",
      front: "Flux poussés vs flux tirés",
      back: "Flux poussés (modèle taylorien/fordien) : la production est poussée par les prévisions, outil MRP, stocks de régulation. Flux tirés (modèle Toyota) : la production est tirée par la demande réelle, juste-à-temps et Kanban, tendance au « zéro stock ».",
    },
    {
      id: "fc11",
      front: "Qu'est-ce que la méthode MPM ?",
      back: "La méthode des potentiels Métra : les tâches sont représentées par des sommets (carrés) et les contraintes de succession par des arcs valués par les durées. Elle organise les tâches dans le temps pour minimiser la durée totale du projet.",
    },
    {
      id: "fc12",
      front: "Règles de calcul des dates au plus tôt et au plus tard",
      back: "Date au plus tôt : de gauche à droite ; en convergence on retient le chemin le PLUS LONG. Date au plus tard : de la fin vers le début ; en convergence on retient le chemin le PLUS COURT.",
    },
    {
      id: "fc13",
      front: "Qu'est-ce que le chemin critique ?",
      back: "Le chemin le plus long du graphe : ses tâches ont une date au plus tôt égale à la date au plus tard (marges nulles), aucun retard n'y est toléré. Sa durée est la durée minimale du projet.",
    },
    {
      id: "fc14",
      front: "Marge totale et marge libre : formules et lien",
      back: "Marge totale = date au plus tard − date au plus tôt de la tâche (retard maximal sans allonger le projet). Marge libre = date au plus tôt de la tâche suivante − durée − date au plus tôt (retard sans décaler les suivantes). Toujours ML ≤ MT ; tâche critique : MT = ML = 0.",
    },
    {
      id: "fc15",
      front: "Que faire quand la demande dépasse durablement la capacité ?",
      back: "À court terme : heures supplémentaires, intérim, sous-traitance, équipes supplémentaires. À plus long terme : investissement en nouvelles machines. C'est un arbitrage entre coût et flexibilité.",
    },
    {
      id: "fc16",
      front: "Quelles méthodes sont hors programme au DCG (UE11) ?",
      back: "La méthode du simplexe, le diagramme de Gantt, le suivi des délais et des coûts, et le juste-à-temps : culture professionnelle seulement. Au programme : programmation linéaire (graphique et facteur rare) et ordonnancement MPM (marges libres et totales).",
    },
  ],
  quiz: [
    {
      id: "q1",
      question:
        "Une entreprise prévoit 500 ventes pour le mois. Son stock initial est de 80 unités et elle souhaite un stock final de 120 unités. Quelle quantité doit-elle produire ?",
      choices: ["460 unités", "500 unités", "540 unités", "700 unités"],
      answers: [2],
      explanation:
        "Production = Ventes prévues + Stock final souhaité − Stock initial = 500 + 120 − 80 = 540. Répondre 460 reviendrait à inverser les stocks (500 + 80 − 120) : c'est le piège classique de l'équation du programme de production.",
    },
    {
      id: "q2",
      question: "Dans un programme linéaire de production, la fonction économique à maximiser est généralement :",
      choices: [
        "La marge sur coûts variables",
        "Le chiffre d'affaires",
        "Le résultat net comptable",
        "Le taux d'utilisation des capacités",
      ],
      answers: [0],
      explanation:
        "On maximise la marge sur coûts variables (et non le chiffre d'affaires — erreur classique signalée par le cours), les coûts fixes étant considérés comme non pertinents à court terme.",
    },
    {
      id: "q3",
      question: "Dans la résolution graphique d'un programme linéaire, l'optimum est atteint :",
      choices: [
        "Au centre du domaine des solutions acceptables",
        "Au dernier sommet du DSA touché par la droite objectif translatée vers les valeurs croissantes",
        "À l'origine du repère",
        "À l'intersection des deux axes de coordonnées",
      ],
      answers: [1],
      explanation:
        "On admet qu'une solution optimale, si elle existe, correspond à un sommet du DSA. On translate la droite objectif F = k parallèlement vers les valeurs croissantes : le dernier sommet touché est l'optimum. La méthode énumérative (valeur de F à chaque sommet) permet de vérifier.",
    },
    {
      id: "q4",
      question:
        "ALTIS Sport fabrique des Bet (marge 260 €) et des Num (marge 200 €). Les contraintes atelier (6x + 5y ≤ 900) et MOD (6x + 3y ≤ 720) sont saturées à l'optimum. Quelle est la marge sur coûts variables maximale ?",
      choices: ["34 000 €", "36 500 €", "37 500 €", "39 000 €"],
      answers: [2],
      explanation:
        "On résout 6x + 5y = 900 et 6x + 3y = 720. Par soustraction : 2y = 180 → y = 90 ; puis 6x + 270 = 720 → x = 75. F = (75 × 260) + (90 × 200) = 19 500 + 18 000 = 37 500 €. Le programme optimal est 75 Bet et 90 Num.",
    },
    {
      id: "q5",
      question:
        "Trois produits passent par un atelier goulot : A (marge 100 €, 2 uo), B (marge 300 €, 4 uo), C (marge 360 €, 6 uo). Quel produit faut-il fabriquer en priorité ?",
      choices: [
        "C, car sa marge unitaire (360 €) est la plus élevée",
        "B, car sa marge par unité d'œuvre (75 €/uo) est la plus élevée",
        "A, car il consomme le moins d'unités d'œuvre",
        "Les trois à parts égales",
      ],
      answers: [1],
      explanation:
        "Méthode du facteur rare : on classe par marge PAR UNITÉ d'œuvre du goulot. A = 100/2 = 50 €/uo ; B = 300/4 = 75 €/uo ; C = 360/6 = 60 €/uo. On sature l'atelier en commençant par B, puis C, puis A — et non par la marge unitaire brute, qui désignerait C à tort.",
    },
    {
      id: "q6",
      question: "La méthode MRP (planification des besoins en composants) se caractérise par :",
      choices: [
        "Un pilotage par l'amont : la production est poussée par les prévisions de ventes, via les nomenclatures et les gammes",
        "Un pilotage par l'aval : la production est tirée par la demande réelle",
        "La suppression totale des stocks (« zéro stock »)",
        "L'ordonnancement des tâches d'un projet par un graphe",
      ],
      answers: [0],
      explanation:
        "Le MRP est une technique de pilotage par l'amont (flux poussés) : à partir des prévisions de ventes, elle utilise les nomenclatures, les gammes opératoires et les stocks pour calculer les besoins dépendants. Le pilotage par l'aval (flux tirés) correspond au juste-à-temps et au Kanban.",
    },
    {
      id: "q7",
      question: "Dans un graphe MPM, en cas de convergence de plusieurs chemins vers une tâche, la date au plus tôt retient :",
      choices: [
        "Le chemin le plus court",
        "La moyenne des chemins",
        "Le chemin passant par le moins de tâches",
        "Le chemin le plus long",
      ],
      answers: [3],
      explanation:
        "Date au plus tôt : calcul de gauche à droite, en retenant le chemin le PLUS LONG en cas de convergence (la tâche ne peut démarrer que lorsque toutes ses antérieures sont finies). À l'inverse, la date au plus tard (de droite à gauche) retient le chemin le plus court.",
    },
    {
      id: "q8",
      question:
        "Dans le projet du cours, la tâche J (durée 7) a une date au plus tôt de 12 et une date au plus tard de 15 ; sa suivante G démarre au plus tôt en 19. Quelles sont ses marges ?",
      choices: [
        "Marge totale = 0 ; marge libre = 3",
        "Marge totale = 3 ; marge libre = 0",
        "Marge totale = 3 ; marge libre = 3",
        "Marge totale = 0 ; marge libre = 0",
      ],
      answers: [1],
      explanation:
        "Marge totale = date au plus tard − date au plus tôt = 15 − 12 = 3 : J peut prendre 3 semaines de retard sans allonger le projet. Marge libre = date au plus tôt de la suivante − durée − date au plus tôt = 19 − 7 − 12 = 0 : tout retard décalerait le début au plus tôt de G. On vérifie bien ML ≤ MT.",
    },
    {
      id: "q9",
      question: "Les tâches du chemin critique d'un graphe MPM se reconnaissent au fait que :",
      choices: [
        "Elles ont les durées les plus longues du projet",
        "Elles n'ont aucune tâche antérieure",
        "Leur date au plus tôt est égale à leur date au plus tard (marges nulles)",
        "Elles se situent toutes en début de projet",
      ],
      answers: [2],
      explanation:
        "Le chemin critique est le chemin le plus long ; ses tâches ont une date au plus tôt égale à la date au plus tard, donc des marges nulles : aucun retard n'y est toléré. Dans l'application du cours, il s'agit de A – C – E – F – I, soit 6 + 6 + 14 + 5 + 7 = 38 semaines.",
    },
    {
      id: "q10",
      question: "Laquelle de ces méthodes est HORS programme du DCG (UE11) ?",
      choices: [
        "La programmation linéaire par la méthode graphique",
        "La méthode du facteur rare (goulot d'étranglement)",
        "L'ordonnancement par la méthode MPM",
        "La méthode du simplexe",
      ],
      answers: [3],
      explanation:
        "Le référentiel cible la programmation linéaire (méthode graphique et facteur rare) et l'ordonnancement MPM. En revanche, la méthode du simplexe — comme le diagramme de Gantt, le suivi des délais et des coûts et le juste-à-temps — n'est pas au programme : culture professionnelle seulement.",
    },
  ],
};
