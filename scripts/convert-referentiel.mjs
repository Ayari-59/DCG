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
import { ouvrir, lirePageEnColonnes, nombreDeColonnes } from "./lib/pdf-colonnes.mjs";

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

/**
 * En-tête d'unité : « DCG – UE 11 CONTROLE DE GESTION ».
 *
 * Le motif n'est pas ancré en début de chaîne : sur la première page de
 * chaque annexe, l'en-tête de l'UE1 partage la ligne avec le titre du
 * document, et l'ancrage la faisait manquer — les deux annexes perdaient
 * ainsi leur première unité.
 */
const ENTETE = /(?:DCG|DSCG)\s*[–—-]?\s*UE\s*(\d+)\s+(.+?)(?:\s*Volume horaire.*)?$/i;
const VOLUME = /Volume horaire\s*:\s*(\d+)\s*heures?/i;
/** « Partie 1 – Appréhender le contexte juridique (35 heures) ». */
const PARTIE = /^Partie\s+(\d+)\s*[–—:-]\s*(.+?)(?:\s*\((\d+)\s*heures?\))?\s*$/i;
/**
 * Certaines unités numérotent leurs parties sans le mot « Partie » :
 * « 1. Appréhender les fondements de la science économique ». Le motif est
 * distinct de celui des sous-parties, qui portent deux niveaux (« 1.1 »).
 */
const PARTIE_NUE = /^(\d+)\.\s+([A-ZÀ-Ý].+?)(?:\s*\((\d+)\s*heures?\))?\s*$/;
/** « 1.1 Rechercher les règles applicables (15 heures) ». */
const SOUS_PARTIE = /^(\d+\.\d+)\s+(.+?)(?:\s*\((\d+)\s*heures?\))?\s*$/;
/**
 * Ligne d'en-tête du tableau : elle marque la fin de la prose. Le mot
 * « associés » passe à la ligne suivante dans certaines unités : le tester
 * faisait manquer le début du tableau, et tout le programme partait alors
 * dans la prose.
 */
const DEBUT_TABLEAU = /Connaissances et savoirs/i;

/** Découpe les unités d'enseignement d'après leurs pages d'en-tête. */
async function reperer(doc) {
  const reperes = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const { lignes } = await lirePageEnColonnes(doc, p);
    /*
     * La fenêtre couvre huit lignes : sur la première page de chaque
     * annexe, le numéro d'unité et son intitulé sont sur deux lignes
     * distinctes, précédés du titre du document.
     */
    const debut = lignes
      .slice(0, 8)
      .map((l) => l.cellules.join(" ").trim())
      .join(" ");
    const page = lignes.map((l) => l.cellules.join(" ")).join(" ");
    const m = debut.match(ENTETE);
    // Une page d'ouverture d'unité annonce toujours son volume horaire ou
    // ses objectifs : sans ce garde-fou, une simple mention « UE 3 » dans
    // la prose d'une autre unité passerait pour un nouveau chapitre.
    if (m && (VOLUME.test(page) || /Objectifs/i.test(page))) {
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

/**
 * Retire les puces d'une cellule et écarte celles qui n'en contiennent que.
 *
 * Word code ses puces de second niveau par la lettre « o », et chaque puce
 * arrive dans son propre fragment, à sa propre abscisse : sans nettoyage,
 * des cellules ressortaient en « o o o Cas spécifiques relatifs aux
 * immobilisations ».
 *
 * @returns {string} la cellule nettoyée, ou une chaîne vide si elle est vide de sens
 */
function nettoyerPuces(cellule) {
  const texte = (cellule ?? "").replace(/^(?:[-–—•·o]\s+)+/, "").trim();
  return texte.length > 1 && !/^[-–—•·o]$/.test(texte) ? texte : "";
}

/** Rassemble les lignes d'une unité : prose d'abord, tableau ensuite. */
async function lireUnite(doc, unite) {
  const prose = [];
  const parties = [];
  let dansTableau = false;
  let partie = null;
  let sousPartie = null;
  let colonnes = null;

  for (let p = unite.premierePage; p <= unite.dernierePage; p++) {
    // Le nombre de colonnes est recompté à chaque page ; à défaut
    // d'en-tête, la page hérite de la disposition de la précédente.
    colonnes = (await nombreDeColonnes(doc, p)) ?? colonnes;
    const { lignes } = await lirePageEnColonnes(doc, p, colonnes);

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

      // L'en-tête se répète en tête de chaque page : il ne se lit qu'une fois.
      if (/^(Compétences|professionnelles$|associés$|Connaissances et savoirs|Limites d(e|es) connaissances)/i.test(entier))
        continue;

      const gauche = cellules[0] ?? "";

      const mp = gauche.match(PARTIE) ?? gauche.match(PARTIE_NUE);
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
      const [c0, c1, c2] = [0, 1, 2].map((i) => nettoyerPuces(cellules[i]));
      if (c0) sousPartie.competences.push(c0);
      if (c1) sousPartie.savoirs.push(c1);
      if (c2) sousPartie.limites.push(c2);
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
      : precedent && /^[a-zà-öø-ÿœæ)»;]|^et\b|^ou\b/.test(ligne);
    if (suite) sortie[sortie.length - 1] = `${precedent} ${ligne}`.replace(/\s+/g, " ");
    else sortie.push(ligne);
  }
  return sortie;
}

/**
 * Découpe la colonne des limites en énoncés lisibles.
 *
 * La plupart des unités y mettent des puces à tiret, qui servent alors de
 * séparateur. D'autres — le droit fiscal notamment — écrivent des phrases
 * à la suite : sans découpage, la cellule ressort en un pavé de deux mille
 * signes que personne ne lit. On coupe alors à la fin des phrases.
 */
function decouperLimites(lignes) {
  const texte = lignes.join(" ").replace(/\s+/g, " ").trim();
  if (!texte) return [];

  const parTirets = texte
    .split(/\s(?:[-–—])\s*/)
    .map((t) => t.trim())
    .filter((t) => t.length > 3);
  if (parTirets.length > 1) return parTirets;

  return texte
    .split(/(?<=\.)\s+(?=[A-ZÀ-Ý])/)
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
      const { prose, parties } = await lireUnite(doc, repere);

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
