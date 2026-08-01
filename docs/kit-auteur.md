# Kit auteur — publier votre UE sur Objectif-DCG.fr

Ce document décrit ce qu'un enseignant fournit pour que son unité
d'enseignement soit publiée sur le site. La chaîne de fabrication est
automatisée : si vos documents suivent ces conventions, votre UE entre
sur le site avec la même qualité que l'UE11 — cours en sections,
schémas, méthodologie, fiches imprimables, flashcards et quiz —, sans
que vous ayez à toucher au moindre outil technique.

## 1. Le manuel — un fichier Word par chapitre

C'est la matière première. Chaque chapitre est un `.docx` qui respecte :

- **Les styles de titres Word** (Titre 1, Titre 2, Titre 3) — pas de
  faux titres en gras. La hiérarchie des titres devient le sommaire du
  chapitre sur le site.
- **Les parties numérotées** en tête de section : « Partie 1 — … » ou le
  bandeau habituel du manuel (tableau à deux cellules : numéro, intitulé).
- **Les encadrés** : un tableau Word à une cellule, dont la première
  ligne est le libellé en capitales. Les libellés reconnus, chacun avec
  sa couleur sur le site :
  `DÉFINITION`, `POINT EXAMEN`, `À RETENIR`, `ERREURS FRÉQUENTES`,
  `MÉTHODE` (ou `DÉMARCHE`), `ILLUSTRATION` (ou `EXEMPLE`), `REMARQUE`,
  `COMPÉTENCE`.
- **Les figures** : collées dans le texte à leur place, avec leur légende
  en italique sur la ligne qui suit. Elles sont extraites et servies avec
  leurs dimensions.
- **Les tableaux** : des tableaux Word natifs, jamais des captures
  d'écran de tableaux.

À éviter : zones de texte flottantes, WordArt, contenu dans les
en-têtes/pieds de page (ils ne sont pas lus).

## 2. Le kit QCM — un fichier JSON par chapitre

Un dossier `_json/` contenant `ch01.json`, `ch02.json`, … dans l'ordre
des chapitres. Chaque fichier :

```json
{
  "chapter": 1,
  "title": "QCM — Chapitre 1 : Intitulé du chapitre",
  "questions": [
    {
      "type": "unique",
      "q": "Énoncé de la question ?",
      "options": ["Proposition A", "Proposition B", "Proposition C", "Proposition D"],
      "correct": [1],
      "explain": "Pourquoi B est la bonne réponse, en une ou deux phrases."
    }
  ]
}
```

- `type` : `"unique"` (une bonne réponse), `"multiple"` (plusieurs),
  `"vraifaux"` (laisser `options` vide : Vrai = indice 0, Faux = 1).
- `correct` : les indices des bonnes réponses, à partir de 0.
- `explain` : **obligatoire** — c'est elle que l'étudiant lit après avoir
  répondu, et c'est d'elle que naissent les flashcards du chapitre.
- Visez 24 à 26 questions par chapitre : le site en joue vingt,
  sélectionnées automatiquement en respectant vos proportions.

Si vous travaillez déjà vos QCM sous Wooclap ou MS Forms, gardez vos
fichiers : la conversion depuis ces formats se règle au cas par cas.

## 3. Les vidéos — facultatives, sur YouTube

Une vidéo courte par chapitre (5 à 10 minutes), déposée **publique** sur
la chaîne YouTube, avec un titre proche de celui du chapitre. Un lien
suffit ensuite pour la rattacher — elle s'affiche en tête de leçon.

Si la vidéo sort d'un outil de génération (NotebookLM ou autre) :
écoutez-la en entier avant publication, et cochez « contenu modifié ou
synthétique » dans YouTube Studio.

## 4. La livraison, et ce qui se passe ensuite

Remettez un dossier :

```
Mon-UE/
├── COURS/            un .docx par chapitre, numérotés
├── QCM/_json/        un .json par chapitre
└── VIDEOS.txt        un lien YouTube par ligne (facultatif)
```

La conversion produit le programme complet ; vous relisez le résultat en
ligne avant publication. Deux choses restent de votre main après
conversion : la **description** d'une phrase de chaque chapitre (elle
sert de résumé dans les listes), et les éventuelles **flashcards
éditoriales** que vous voudriez ajouter à celles tirées du QCM.

Votre compte enseignant vous donne accès au cahier de texte pour vos
classes ; votre nom apparaît sur votre UE. Bienvenue dans l'équipe.
