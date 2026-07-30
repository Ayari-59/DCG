/**
 * Lecture d'un PDF en colonnes.
 *
 * Le programme officiel est un tableau à trois colonnes — compétences,
 * savoirs associés, limites du champ d'étude — et l'extraction à plat les
 * entrelace : on lit « Caractériser la règle de droit. Règle de droit et ses
 * caractères - Limiter l'étude à… », trois cellules différentes soudées en
 * une phrase.
 *
 * Les colonnes sont retrouvées par les blancs verticaux plutôt que par des
 * abscisses fixes : leur position change d'une unité d'enseignement à
 * l'autre (x = 20 / 180 / 380 pour l'UE1, 20 / 220 / 480 pour l'UE11).
 */

/** Écart vertical en deçà duquel deux fragments sont sur la même ligne. */
const MEME_LIGNE = 3;
/**
 * Largeur minimale d'une colonne. Le seuil est haut volontairement : les
 * tirets des listes à puces créent des bords gauches secondaires très
 * fréquents, qu'un seuil bas prend pour des colonnes.
 */
const COLONNE_MINIMUM = 110;
/** Marge de tolérance autour d'un bord de colonne, en points. */
const TOLERANCE_BORD = 8;

/**
 * Intitulés de l'en-tête du tableau du programme officiel, dans l'ordre
 * des colonnes. Toutes les unités n'en ont pas trois : le droit fiscal,
 * l'économie ou la finance s'arrêtent aux savoirs associés.
 */
const EN_TETES = [
  /^Compétences(\s+professionnelles)?$/i,
  // « associés » passe à la ligne suivante dans certaines unités, et le
  // troisième intitulé s'écrit tantôt « de », tantôt « des » connaissances.
  /^Connaissances et savoirs/i,
  /^Limites d(e|es) connaissances/i,
];

/**
 * Nombre de colonnes du tableau d'une page, compté sur son en-tête.
 *
 * L'en-tête est répété en tête de chaque page du programme. On ne s'en sert
 * que pour compter : son abscisse ne vaut pas bord de colonne, car il est
 * centré dans sa cellule quand le corps, lui, est aligné à gauche — s'y
 * fier renvoyait la colonne des limites dans celle des savoirs.
 *
 * Le compte, en revanche, est décisif : toutes les unités n'ont pas trois
 * colonnes, et en forcer une troisième là où il n'y en a que deux
 * dispersait le texte au hasard.
 *
 * @returns {number | null} 2, 3, ou null si la page ne porte pas d'en-tête
 */
export async function nombreDeColonnes(doc, numero) {
  const page = await doc.getPage(numero);
  const contenu = await page.getTextContent();

  let compte = 0;
  for (const motif of EN_TETES) {
    if (contenu.items.some((i) => motif.test(i.str.trim()))) compte++;
  }
  return compte >= 2 ? compte : null;
}

/**
 * Repère les bords gauches des colonnes d'une page.
 *
 * On ne cherche pas les blancs verticaux : dans ce document les colonnes ne
 * sont séparées que par cinq points, soit moins que certains espaces entre
 * deux mots d'une même ligne. Ce sont les bords gauches qui trahissent la
 * colonne — des dizaines de lignes commencent exactement à la même
 * abscisse, ce qui n'arrive jamais par hasard.
 */
function frontieres(fragments, largeurPage, nombreVoulu = null) {
  const comptes = new Map();
  for (const f of fragments) {
    const x = Math.round(f.x / 2) * 2;
    comptes.set(x, (comptes.get(x) || 0) + 1);
  }

  const bords = [];
  for (const [x] of [...comptes.entries()].sort((a, b) => b[1] - a[1])) {
    if (nombreVoulu && bords.length >= nombreVoulu) break;
    if (bords.every((b) => Math.abs(b - x) >= COLONNE_MINIMUM)) bords.push(x);
  }

  return [...bords.sort((a, b) => a - b), largeurPage];
}

/**
 * Rend le contenu d'une page regroupé en lignes, chaque ligne portant ses
 * cellules dans l'ordre des colonnes.
 *
 * @returns {{ y: number, cellules: string[], colonnes: number }[]}
 */
export async function lirePageEnColonnes(doc, numero, nombreColonnes = null) {
  const page = await doc.getPage(numero);
  const { width } = page.getViewport({ scale: 1 });
  const contenu = await page.getTextContent();

  const fragments = contenu.items
    .filter((i) => i.str.trim())
    .map((i) => ({
      texte: i.str,
      x: i.transform[4],
      y: i.transform[5],
      largeur: i.width ?? 0,
    }));

  if (!fragments.length) return { lignes: [], bornes: [] };

  const bornes = frontieres(fragments, width, nombreColonnes);
  /*
   * La tolérance absorbe les cellules dont la première ligne est très
   * légèrement en retrait du bord de colonne — c'est fréquent après une
   * puce — sans pour autant happer la colonne voisine.
   */
  const colonne = (x) => {
    for (let c = bornes.length - 2; c >= 0; c--) if (x >= bornes[c] - TOLERANCE_BORD) return c;
    return 0;
  };

  // Regroupement par ligne : le PDF descend, donc y décroît.
  const parLigne = new Map();
  for (const f of fragments) {
    const cle = [...parLigne.keys()].find((y) => Math.abs(y - f.y) <= MEME_LIGNE);
    const y = cle ?? f.y;
    if (!parLigne.has(y)) parLigne.set(y, []);
    parLigne.get(y).push(f);
  }

  const lignes = [...parLigne.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([y, frags]) => {
      /*
       * Les fragments sont recollés en tenant compte de leur écartement :
       * le PDF ne porte pas toujours l'espace qui sépare deux mots, et les
       * coller bord à bord donne « reportinget » ou « Définitionde ».
       */
      const cellules = Array.from({ length: bornes.length - 1 }, () => "");
      const finPrecedente = Array.from({ length: bornes.length - 1 }, () => null);
      for (const f of frags.sort((a, b) => a.x - b.x)) {
        const c = colonne(f.x);
        const fin = finPrecedente[c];
        const separer = fin !== null && f.x - fin > 0.6 && !/\s$/.test(cellules[c]) && !/^\s/.test(f.texte);
        cellules[c] += (separer ? " " : "") + f.texte;
        finPrecedente[c] = f.x + f.largeur;
      }
      return {
        y,
        cellules: cellules.map((c) => c.replace(/\s+/g, " ").trim()),
      };
    });

  return { lignes, bornes };
}

/** Ouvre un PDF et rend le document pdf.js. */
export async function ouvrir(chemin) {
  const fs = await import("node:fs");
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const data = new Uint8Array(fs.readFileSync(chemin));
  return pdfjs.getDocument({ data, useSystemFonts: true }).promise;
}

/**
 * Bords de colonnes calculés sur toute une plage de pages.
 *
 * Une seule page suffit rarement : les cellules ne commencent pas toutes à
 * la même ligne, et une page peut ne porter que deux des trois colonnes.
 * En cumulant les pages d'une unité d'enseignement, les trois bords
 * ressortent nettement.
 */
export async function bordsDeColonnes(doc, premiere, derniere) {
  const fragments = [];
  let largeur = 0;
  for (let p = premiere; p <= derniere; p++) {
    const page = await doc.getPage(p);
    largeur = page.getViewport({ scale: 1 }).width;
    const contenu = await page.getTextContent();
    for (const i of contenu.items) {
      if (i.str.trim()) fragments.push({ x: i.transform[4] });
    }
  }
  return frontieres(fragments, largeur);
}
