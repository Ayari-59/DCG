# Cahier de texte — mise en place du tableur

Le cahier de texte du site est alimenté par une feuille Google que tu remplis
normalement. Le site la relit tout seul, sans redéploiement.

## 1. Créer la feuille

Crée un nouveau classeur Google Sheets, puis :

- **Onglet 1**, nommé `Séances` — importe `cahier-de-texte-modele.csv`
  (*Fichier → Importer → Importer le fichier → Remplacer la feuille de calcul*).
  Les deux lignes d'exemple sont à supprimer une fois que tu as compris le format.
- **Onglet 2**, nommé `Chapitres` — importe `chapitres.csv`. Cet onglet ne se
  modifie pas à la main : il est régénéré depuis le site avec
  `npx tsx scripts/…` quand des chapitres sont ajoutés.

## 2. Poser la liste déroulante des chapitres

C'est l'étape qui empêche les liens de casser.

Sélectionne la colonne **Chapitre** de l'onglet `Séances`, puis
*Données → Validation des données → Ajouter une règle* :

- Critère : **Liste à partir d'une plage**
- Plage : `Chapitres!C2:C29`
- Coche **Refuser la saisie** pour interdire un chapitre inexistant

Tu choisis désormais le chapitre dans une liste au lieu de le taper.

## 3. Publier la feuille

*Fichier → Partager → Publier sur le web* :

- Contenu : l'onglet **Séances** uniquement
- Format : **Valeurs séparées par des virgules (.csv)**

Google fournit une adresse en `https://docs.google.com/spreadsheets/d/e/…/pub?…&output=csv`.
C'est la seule chose dont le site a besoin — aucune clé, aucun identifiant.

> ⚠️ Publier rend la feuille lisible par qui possède l'adresse. N'y mets aucune
> donnée personnelle d'élève, ni note, ni appréciation.

## Les colonnes

| Colonne | Obligatoire | Format | Remarque |
|---|---|---|---|
| `Date` | oui | `JJ/MM/AAAA` | date de la séance |
| `Classe` | oui | texte libre | permet de gérer plusieurs classes |
| `Chapitre` | oui | liste déroulante | doit venir de l'onglet `Chapitres` |
| `Sections` | non | `1-3` ou `1,4,5` | numéros affichés dans le sommaire du chapitre |
| `Travail à faire` | non | texte libre | |
| `Pour le` | non | `JJ/MM/AAAA` | échéance du travail |
| `Remarques` | non | texte libre | |
| `Publié` | non | `oui` / `non` | vide ou `oui` = visible ; `non` = brouillon |

Une ligne mal remplie est ignorée plutôt que de faire échouer la page. La page
de diagnostic du site indique lesquelles et pourquoi.
