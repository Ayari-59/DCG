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

/**
 * Repère les bords gauches des colonnes d'une page.
 *
 * On ne cherche pas les blancs verticaux : dans ce document les colonnes ne
 * sont séparées que par cinq points, soit moins que certains espaces entre
 * deux mots d'une même ligne. Ce sont les bords gauches qui trahissent la
 * colonne — des dizaines de lignes commencent exactement à la même
 * abscisse, ce qui n'arrive jamais par hasard.
 */
function frontieres(fragments, largeurPage) {
  const comptes = new Map();
  for (const f of fragments) {
    const x = Math.round(f.x / 2) * 2;
    comptes.set(x, (comptes.get(x) || 0) + 1);
  }

  const bords = [];
  for (const [x] of [...comptes.entries()].sort((a, b) => b[1] - a[1])) {
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
export async function lirePageEnColonnes(doc, numero, bordsImposes = null) {
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

  if (!fragments.length) return { lignes: [], bornes: bordsImposes ?? [] };

  const bornes = bordsImposes ?? frontieres(fragments, width);
  /*
   * On retient la colonne la plus proche, et non la dernière dont le bord
   * précède le fragment : d'une page à l'autre, une même colonne se décale
   * de quelques points, et un test par infériorité stricte renvoie alors
   * la cellule dans la colonne de gauche.
   */
  const colonne = (x) => {
    let meilleure = 0;
    for (let c = 1; c < bornes.length - 1; c++) {
      if (Math.abs(x - bornes[c]) < Math.abs(x - bornes[meilleure])) meilleure = c;
    }
    return meilleure;
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
