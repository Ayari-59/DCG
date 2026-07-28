# Objectif-DCG.fr

*Cap sur l'expertise comptable.*

Site d'enseignement du **contrôle de gestion** pour le DCG (UE11) et le DSCG (UE3) :
cours, vidéos, méthodologie, fiches de révision, flashcards et quiz corrigés.

28 chapitres publiés — 19 pour l'UE11 du DCG, 9 pour l'UE3 du DSCG.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (34 pages statiques)
```

## Comment le contenu est fabriqué

Le contenu **n'est pas écrit à la main** : il est converti depuis les manuels Word
de l'auteur, qui restent hors du dépôt (dossier `sources/`, ignoré par git).

| Script | Rôle | Sortie |
|---|---|---|
| `scripts/convert-docx.mjs` | Un chapitre Word → leçon (sections, tableaux, encadrés, figures) | `lib/content/chapters/<slug>.generated.ts` + `public/figures/<slug>/` |
| `scripts/convert-methodes.mjs` | Encadrés « Compétences visées » + « Méthode » des cahiers d'énoncés | `lib/content/methodes/` |
| `scripts/convert-exercises.mjs` | Cahiers d'énoncés appariés aux cahiers de corrigés | `lib/content/exercises/` |

Exemple :

```bash
node scripts/convert-docx.mjs "sources/.../CHAPITRE_05....docx" \
  --slug dcg-ue11-methode-couts-complets --level DCG --ue UE11 --number 5 \
  --title "La méthode des coûts complets"
```

### Fichiers générés et fichiers édités à la main

Pour chaque chapitre il existe **deux** fichiers :

- `<slug>.generated.ts` — la leçon. Régénérée depuis le Word, **ne pas éditer**.
- `<slug>.ts` — le wrapper : description, flashcards, quiz, vidéos.
  **C'est celui qu'on édite** ; il survit à toutes les regénérations.

## Structure

```
app/                     pages (accueil, /dcg, /dscg, /cours/[slug])
components/              ChapterView, Methodologie, Fiche, Quiz, Flashcards…
lib/content/
  types.ts               types des blocs de contenu
  index.ts               registre des programmes et des chapitres
  theme.ts               charte couleur : une teinte par famille du programme
  chapters/ methodes/ exercises/
public/figures/<slug>/   figures extraites des manuels
```

## Points à connaître

- **Progression stockée dans le navigateur** (localStorage) : pas de compte utilisateur.
- **Les applications sont générées mais non publiées.** Pour les réafficher, rattacher
  `exercisesBySlug` aux chapitres dans `lib/content/index.ts` (voir le commentaire sur place).
- **Charte couleur** : les classes Tailwind sont écrites en entier dans `theme.ts` —
  ne jamais construire un nom de classe à l'exécution, Tailwind ne le verrait pas.
- **Flashcards et quiz** ont été rédigés à partir des cours et demandent une relecture
  pédagogique avant toute mise en ligne publique.
