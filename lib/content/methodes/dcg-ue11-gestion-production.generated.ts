// Généré par scripts/convert-methodes.mjs depuis les cahiers d'énoncés.
// Ne pas éditer à la main : re-générer depuis les Word sources.
import type { Methode } from "../types";

export const methodes: Methode[] = [
  {
    "id": "m1",
    "theme": "Programmation linéaire",
    "competences": [
      "Élaborer et résoudre une programmation de la production à l’aide de la programmation linéaire"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*Cette compétence peut être mise en oeuvre grâce à plusieurs outils : la voie graphique, l’outil du simplexe ou l’optimisation en référence au goulet d’étranglement. Concrètement, le simplexe, qui est la mise en oeuvre d’un algorithme d’optimisation et permet de résoudre tous les contextes, ne trouve sa pleine efficacité que sous la forme d’un programme informatique. Vous devez seulement être capable de poser le problème et d’interpréter les résultats d’un tableau issu d’un programme informatique. Dans la plupart des sujets, l’optimisation se résume à un programme à deux inconnues qu’une représentation graphique peut résoudre. Dès que le sujet comprend plus de deux inconnues et des contraintes en matière commerciale, et s’il n’est pas fait expressément référence à la méthode du simplexe, vous devez privilégier une résolution par la méthode des goulets d’étranglement.*"
      }
    ]
  },
  {
    "id": "m2",
    "theme": "Ordonnancement",
    "competences": [
      "Élaborer et résoudre une programmation de la production à l’aide de l’ordonnancement"
    ],
    "blocks": [
      {
        "type": "p",
        "text": "*Dans le cours, une proposition d’ordonnancement a été présentée sous la forme d’un graphe MPM. Nous présenterons ici une autre méthode, le diagramme de Gantt, souvent utilisée en gestion de projet. Cet outil permet de représenter l’état d’avancement des différentes tâches d’un projet, tant en durée prévisionnelle qu’en durée réelle. De nombreux logiciels libres permettent de construire ce type de représentation. Dans la plupart Ce diagramme permet de visualiser sur un seul schéma plusieurs informations : des sujets, le tableau – les différentes tâches à envisager ; descriptif des tâches – la date de début et la date de fin de chaque tâche ; vous est fourni. – la durée de chaque tâche ; – le chevauchement éventuel des tâches, ainsi que la durée de chevauchement ; – la date de début et la date de fin du projet dans son ensemble. Vous devez être capable de produire et d’interpréter un diagramme de Gantt.*"
      }
    ]
  }
];
