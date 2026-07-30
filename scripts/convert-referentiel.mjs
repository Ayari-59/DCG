/**
 * Conversion du programme officiel en contenu du site.
 *
 * Source : annexes 1 et 2 de l'arrêté du 4 août 2025, publiées au Bulletin
 * officiel de l'enseignement supérieur n°32 du 28 août 2025. Document
 * administratif officiel, librement réutilisable — à la différence des
 * cours d'organismes de formation.
 *
 * Chaque unité d'enseignement y est décrite par un en-tête en prose
 * (objectifs, structure, prérequis) puis par un tableau à trois colonnes :
 * compétences professionnelles, connaissances et savoirs associés, limites
 * du champ d'étude. Le tableau est découpé en parties et sous-parties
 * portant chacune son volume horaire indicatif.
 *
 *   node scripts/convert-referentiel.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { ouvrir, lirePageEnColonnes, bordsDeColonnes } from "./lib/pdf-colonnes.mjs";

const RACINE = process.cwd();
const SOURCE = path.join(RACINE, "sources", "Referentiel");
const SORTIE = path.join(RACINE, "lib", "content", "referentiel");

const ANNEXES = [
  {
    diplome: "DCG",
    fichier:
      "annexe-1-programme-des-unit-s-d-enseignement-du-dipl-me-de-comptabilit-et-de-gestion-dcg--37751.pdf",
  },
  {
    diplome: "DSCG",
    fichier:
      "annexe-2-programme-des-unit-s-d-enseignement-du-dipl-me-sup-rieur-de-comptabilit-et-de-gestion-dscg--37754.pdf",
  },
];

/** En-tête d'unité : « DCG – UE 11 CONTROLE DE GESTION ». */
const ENTETE = /^(?:DCG|DSCG)\s*[–—-]?\s*UE\s*(\d+)\s+(.+?)(?:\s*Volume horaire.*)?$/i;
const VOLUME = /Volume horaire\s*:\s*(\d+)\s*heures?/i;
/** « Partie 1 – Appréhender le contexte juridique (35 heures) ». */
const PARTIE = /^Partie\s+(\d+)\s*[–—:-]\s*(.+?)(?:\s*\((\d+)\s*heures?\))?\s*$/i;
/** « 1.1 Rechercher les règles applicables (15 heures) ». */
const SOUS_PARTIE = /^(\d+\.\d+)\s+(.+?)(?:\s*\((\d+)\s*heures?\))?\s*$/;
/** Ligne d'en-tête du tableau : elle marque la fin de la prose. */
const DEBUT_TABLEAU = /Connaissances et savoirs associ/i;

/** Découpe les unités d'enseignement d'après leurs pages d'en-tête. */
async function reperer(doc) {
  const reperes = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const { lignes } = await lirePageEnColonnes(doc, p);
    const debut = lignes
      .slice(0, 3)
      .map((l) => l.cellules.join(" ").trim())
      .join(" ");
    const m = debut.match(ENTETE);
    if (m) {
      const volume = debut.match(VOLUME);
      reperes.push({
        numero: Number(m[1]),
        intitule: m[2].replace(/\s+/g, " ").trim(),
        volumeHoraire: volume ? Number(volume[1]) : null,
        premierePage: p,
      });
    }
  }
  return reperes.map((r, i) => ({
    ...r,
    dernierePage: i + 1 < reperes.length ? reperes[i + 1].premierePage - 1 : doc.numPages,
  }));
}

/**
 * L'intitulé est en capitales dans le PDF. On le rend lisible sans toucher
 * aux sigles, qui doivent rester tels quels.
 */
function casseNormale(titre) {
  const SIGLES = /^(DCG|DSCG|UE|RSE|IA|SI|PGI|ERP|BI|TVA|IS|IR|PCG)$/;
  return titre
    .toLowerCase()
    .split(/(\s+|[-'’])/)
    .map((mot, i) => {
      const brut = mot.toUpperCase();
      if (SIGLES.test(brut)) return brut;
      if (i === 0 || /^[-'’\s]/.test(mot)) return i === 0 ? mot.charAt(0).toUpperCase() + mot.slice(1) : mot;
      return mot;
    })
    .join("");
}

/** Rassemble les lignes d'une unité : prose d'abord, tableau ensuite. */
async function lireUnite(doc, unite, bords) {
  const prose = [];
  const parties = [];
  let dansTableau = false;
  let partie = null;
  let sousPartie = null;

  for (let p = unite.premierePage; p <= unite.dernierePage; p++) {
    const { lignes } = await lirePageEnColonnes(doc, p, bords);

    for (const { cellules } of lignes) {
      const entier = cellules.join(" ").replace(/\s+/g, " ").trim();
      if (!entier) continue;

      if (!dansTableau) {
        if (DEBUT_TABLEAU.test(entier)) {
          dansTableau = true;
          continue;
        }
        // L'en-tête et le volume horaire sont déjà relevés ailleurs.
        if (ENTETE.test(entier) || VOLUME.test(entier)) continue;
        prose.push(entier);
        continue;
      }

      const gauche = cellules[0] ?? "";

      const mp = gauche.match(PARTIE);
      if (mp) {
        partie = {
          numero: mp[1],
          titre: mp[2].replace(/\s+/g, " ").trim(),
          heures: mp[3] ? Number(mp[3]) : null,
          sousParties: [],
        };
        parties.push(partie);
        sousPartie = null;
        continue;
      }

      const ms = gauche.match(SOUS_PARTIE);
      if (ms && partie) {
        sousPartie = {
          numero: ms[1],
          titre: ms[2].replace(/\s+/g, " ").trim(),
          heures: ms[3] ? Number(ms[3]) : null,
          competences: [],
          savoirs: [],
          limites: [],
        };
        partie.sousParties.push(sousPartie);
        continue;
      }

      if (!sousPartie) continue;
      if (cellules[0]) sousPartie.competences.push(cellules[0]);
      if (cellules[1]) sousPartie.savoirs.push(cellules[1]);
      if (cellules[2]) sousPartie.limites.push(cellules[2]);
    }
  }

  return { prose, parties };
}

/**
 * Recolle les lignes d'une cellule coupée par la mise en page.
 *
 * Une compétence tient en une phrase et se termine par un point : les
 * lignes s'accumulent jusque-là. Un savoir associé est un groupe nominal
 * sans ponctuation finale : on ne recolle alors que ce qui commence
 * visiblement par une suite — minuscule, parenthèse fermante, conjonction.
 */
function recoller(lignes, { phrases }) {
  const sortie = [];
  for (const ligne of lignes) {
    const precedent = sortie[sortie.length - 1];
    const suite = phrases
      ? precedent && !/[.:!?]$/.test(precedent)
      : precedent && /^[a-zà-öø-ÿ)»]|^et\b|^ou\b/.test(ligne);
    if (suite) sortie[sortie.length - 1] = `${precedent} ${ligne}`.replace(/\s+/g, " ");
    else sortie.push(ligne);
  }
  return sortie;
}

/** Les limites sont puces à tiret ; le tiret sert de séparateur. */
function decouperLimites(lignes) {
  const texte = lignes.join(" ").replace(/\s+/g, " ");
  return texte
    .split(/\s*(?:^|\s)[-–—]\s*/)
    .map((t) => t.trim())
    .filter((t) => t.length > 3);
}

async function main() {
  fs.mkdirSync(SORTIE, { recursive: true });
  const unites = [];

  for (const annexe of ANNEXES) {
    const chemin = path.join(SOURCE, annexe.fichier);
    if (!fs.existsSync(chemin)) {
      console.error(`Annexe absente : ${annexe.fichier}`);
      continue;
    }

    const doc = await ouvrir(chemin);
    const reperes = await reperer(doc);
    console.log(`\n${annexe.diplome} — ${doc.numPages} pages, ${reperes.length} unités`);

    for (const repere of reperes) {
      // Les bords de colonnes sont propres à chaque unité.
      const bords = await bordsDeColonnes(doc, repere.premierePage, repere.dernierePage);
      const { prose, parties } = await lireUnite(doc, repere, bords);

      for (const partie of parties) {
        for (const sp of partie.sousParties) {
          sp.competences = recoller(sp.competences, { phrases: true });
          sp.savoirs = recoller(sp.savoirs, { phrases: false });
          sp.limites = decouperLimites(sp.limites);
        }
      }

      const nbSousParties = parties.reduce((n, p) => n + p.sousParties.length, 0);
      const nbSavoirs = parties.reduce(
        (n, p) => n + p.sousParties.reduce((m, s) => m + s.savoirs.length, 0),
        0
      );

      unites.push({
        diplome: annexe.diplome,
        code: `UE${repere.numero}`,
        numero: repere.numero,
        intitule: casseNormale(repere.intitule),
        volumeHoraire: repere.volumeHoraire,
        objectifs: prose,
        parties,
      });

      console.log(
        `  ${`UE${repere.numero}`.padEnd(5)} ${String(repere.volumeHoraire ?? "?").padStart(3)} h · ` +
          `${String(parties.length).padStart(2)} parties · ${String(nbSousParties).padStart(2)} sous-parties · ` +
          `${String(nbSavoirs).padStart(3)} savoirs   ${repere.intitule.slice(0, 42)}`
      );
    }
  }

  fs.writeFileSync(
    path.join(SORTIE, "unites.generated.json"),
    JSON.stringify(unites, null, 2)
  );
  console.log(`\n${unites.length} unités écrites dans lib/content/referentiel/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
