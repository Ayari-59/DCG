/**
 * Charte couleur du site : chaque grande famille du programme a sa teinte.
 * L'étudiant sait d'un coup d'œil dans quel bloc du référentiel il se trouve
 * (fondements, analyse, calcul des coûts, budgets, contrôle, performance).
 *
 * Les classes sont écrites en entier : Tailwind ne voit pas les noms de
 * classes construits dynamiquement.
 */

export interface Theme {
  /** Nom de la famille, affiché comme intertitre dans le programme. */
  family: string;
  emoji: string;
  /** Pastille numérotée du chapitre. */
  badge: string;
  /** Texte d'accent (surtitres, liens actifs). */
  text: string;
  /** Même teinte, appliquée au survol de la carte parente. */
  textHover: string;
  /** Fond très clair pour les encarts. */
  soft: string;
  border: string;
  borderHover: string;
  /** Barre de progression et soulignés. */
  bar: string;
  /** Ombre colorée au survol. */
  glow: string;
  /** Point du sommaire / puces. */
  dot: string;
}

const THEMES: Record<string, Theme> = {
  fondements: {
    family: "Fondements",
    emoji: "🧭",
    badge: "bg-gradient-to-br from-amber-400 to-orange-500",
    text: "text-orange-600",
    textHover: "group-hover:text-orange-600",
    soft: "bg-orange-50",
    border: "border-orange-200",
    borderHover: "hover:border-orange-400",
    bar: "bg-gradient-to-r from-amber-400 to-orange-500",
    glow: "hover:shadow-orange-200/60",
    dot: "bg-orange-400",
  },
  analyse: {
    family: "Analyse & risque",
    emoji: "📉",
    badge: "bg-gradient-to-br from-rose-400 to-pink-600",
    text: "text-rose-600",
    textHover: "group-hover:text-rose-600",
    soft: "bg-rose-50",
    border: "border-rose-200",
    borderHover: "hover:border-rose-400",
    bar: "bg-gradient-to-r from-rose-400 to-pink-600",
    glow: "hover:shadow-rose-200/60",
    dot: "bg-rose-400",
  },
  couts: {
    family: "Calcul des coûts",
    emoji: "🧮",
    badge: "bg-gradient-to-br from-violet-500 to-indigo-600",
    text: "text-violet-600",
    textHover: "group-hover:text-violet-600",
    soft: "bg-violet-50",
    border: "border-violet-200",
    borderHover: "hover:border-violet-400",
    bar: "bg-gradient-to-r from-violet-500 to-indigo-600",
    glow: "hover:shadow-violet-200/60",
    dot: "bg-violet-400",
  },
  budget: {
    family: "Gestion budgétaire",
    emoji: "📊",
    badge: "bg-gradient-to-br from-emerald-400 to-teal-600",
    text: "text-emerald-600",
    textHover: "group-hover:text-emerald-600",
    soft: "bg-emerald-50",
    border: "border-emerald-200",
    borderHover: "hover:border-emerald-400",
    bar: "bg-gradient-to-r from-emerald-400 to-teal-600",
    glow: "hover:shadow-emerald-200/60",
    dot: "bg-emerald-400",
  },
  controle: {
    family: "Contrôle & pilotage",
    emoji: "🎯",
    badge: "bg-gradient-to-br from-sky-400 to-blue-600",
    text: "text-sky-600",
    textHover: "group-hover:text-sky-600",
    soft: "bg-sky-50",
    border: "border-sky-200",
    borderHover: "hover:border-sky-400",
    bar: "bg-gradient-to-r from-sky-400 to-blue-600",
    glow: "hover:shadow-sky-200/60",
    dot: "bg-sky-400",
  },
  performance: {
    family: "Performance & durabilité",
    emoji: "🌱",
    badge: "bg-gradient-to-br from-lime-400 to-green-600",
    text: "text-green-600",
    textHover: "group-hover:text-green-600",
    soft: "bg-lime-50",
    border: "border-lime-200",
    borderHover: "hover:border-lime-400",
    bar: "bg-gradient-to-r from-lime-400 to-green-600",
    glow: "hover:shadow-lime-200/60",
    dot: "bg-lime-500",
  },
  organisation: {
    family: "Organisation & transformation",
    emoji: "🔄",
    badge: "bg-gradient-to-br from-fuchsia-400 to-purple-600",
    text: "text-fuchsia-600",
    textHover: "group-hover:text-fuchsia-600",
    soft: "bg-fuchsia-50",
    border: "border-fuchsia-200",
    borderHover: "hover:border-fuchsia-400",
    bar: "bg-gradient-to-r from-fuchsia-400 to-purple-600",
    glow: "hover:shadow-fuchsia-200/60",
    dot: "bg-fuchsia-400",
  },
};

/** Rattachement de chaque chapitre à sa famille. */
const FAMILY_BY_SLUG: Record<string, keyof typeof THEMES> = {
  // DCG UE11
  "dcg-ue11-cadre-metier-organisation": "fondements",
  "dcg-ue11-fondements-construction-couts": "fondements",
  "dcg-ue11-modele-volume-cout-profit": "analyse",
  "dcg-ue11-analyse-risque-loi-normale": "analyse",
  "dcg-ue11-methode-couts-complets": "couts",
  "dcg-ue11-methode-abc": "couts",
  "dcg-ue11-imputation-rationnelle": "couts",
  "dcg-ue11-methode-couts-partiels": "couts",
  "dcg-ue11-procedure-budgetaire": "budget",
  "dcg-ue11-budget-des-ventes": "budget",
  "dcg-ue11-gestion-approvisionnements": "budget",
  "dcg-ue11-gestion-production": "budget",
  "dcg-ue11-gestion-masse-salariale": "budget",
  "dcg-ue11-controle-budgetaire-ecarts": "controle",
  "dcg-ue11-tableaux-de-bord-reporting": "controle",
  // Les chapitres 16 à 19 forment le bloc final du manuel sur l'amélioration
  // et le pilotage de la performance — prix de cession interne compris.
  "dcg-ue11-gestion-qualite": "performance",
  "dcg-ue11-cout-cible": "performance",
  "dcg-ue11-prix-cession-interne": "performance",
  "dcg-ue11-performance-globale-durabilite": "performance",
  // DSCG UE3
  "dscg-ue3-pilotage-processus-production": "couts",
  "dscg-ue3-pilotage-projets": "organisation",
  "dscg-ue3-pilotage-fonctions-support": "organisation",
  "dscg-ue3-management-changement": "organisation",
  "dscg-ue3-management-risques": "analyse",
  "dscg-ue3-controle-gestion-sociale": "controle",
  "dscg-ue3-gestion-budgetaire": "budget",
  "dscg-ue3-durabilite-performance-globale": "performance",
  "dscg-ue3-annexe-reference": "fondements",
};

export function getTheme(slug: string): Theme {
  return THEMES[FAMILY_BY_SLUG[slug] ?? "couts"];
}

/** Toutes les familles présentes dans une liste de chapitres, dans l'ordre. */
export function familiesOf(slugs: string[]): Theme[] {
  const seen = new Set<string>();
  const out: Theme[] = [];
  for (const slug of slugs) {
    const t = getTheme(slug);
    if (!seen.has(t.family)) {
      seen.add(t.family);
      out.push(t);
    }
  }
  return out;
}
