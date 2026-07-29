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
    badge: "bg-amber-500",
    text: "text-amber-600",
    textHover: "group-hover:text-amber-600",
    soft: "bg-amber-50",
    border: "border-amber-200",
    borderHover: "hover:border-amber-400",
    bar: "bg-amber-500",
    glow: "hover:shadow-amber-200/60",
    dot: "bg-amber-500",
  },
  analyse: {
    family: "Analyse & risque",
    emoji: "📉",
    badge: "bg-orange-600",
    text: "text-orange-700",
    textHover: "group-hover:text-orange-700",
    soft: "bg-orange-50",
    border: "border-orange-200",
    borderHover: "hover:border-orange-400",
    bar: "bg-orange-600",
    glow: "hover:shadow-orange-200/60",
    dot: "bg-orange-600",
  },
  couts: {
    family: "Calcul des coûts",
    emoji: "🧮",
    badge: "bg-blue-700",
    text: "text-blue-700",
    textHover: "group-hover:text-blue-700",
    soft: "bg-blue-50",
    border: "border-blue-200",
    borderHover: "hover:border-blue-400",
    bar: "bg-blue-700",
    glow: "hover:shadow-blue-200/60",
    dot: "bg-blue-700",
  },
  budget: {
    family: "Gestion budgétaire",
    emoji: "📊",
    badge: "bg-teal-600",
    text: "text-teal-700",
    textHover: "group-hover:text-teal-700",
    soft: "bg-teal-50",
    border: "border-teal-200",
    borderHover: "hover:border-teal-400",
    bar: "bg-teal-600",
    glow: "hover:shadow-teal-200/60",
    dot: "bg-teal-600",
  },
  controle: {
    family: "Contrôle & pilotage",
    emoji: "🎯",
    badge: "bg-sky-500",
    text: "text-sky-600",
    textHover: "group-hover:text-sky-600",
    soft: "bg-sky-50",
    border: "border-sky-200",
    borderHover: "hover:border-sky-400",
    bar: "bg-sky-500",
    glow: "hover:shadow-sky-200/60",
    dot: "bg-sky-500",
  },
  performance: {
    family: "Performance & durabilité",
    emoji: "🌱",
    badge: "bg-emerald-600",
    text: "text-emerald-700",
    textHover: "group-hover:text-emerald-700",
    soft: "bg-emerald-50",
    border: "border-emerald-200",
    borderHover: "hover:border-emerald-400",
    bar: "bg-emerald-600",
    glow: "hover:shadow-emerald-200/60",
    dot: "bg-emerald-600",
  },
  communication: {
    family: "Communication professionnelle",
    emoji: "🗣️",
    badge: "bg-rose-600",
    text: "text-rose-700",
    textHover: "group-hover:text-rose-700",
    soft: "bg-rose-50",
    border: "border-rose-200",
    borderHover: "hover:border-rose-400",
    bar: "bg-rose-600",
    glow: "hover:shadow-rose-200/60",
    dot: "bg-rose-600",
  },
  organisation: {
    family: "Organisation & transformation",
    emoji: "🔄",
    badge: "bg-slate-600",
    text: "text-slate-700",
    textHover: "group-hover:text-slate-700",
    soft: "bg-slate-50",
    border: "border-slate-300",
    borderHover: "hover:border-slate-400",
    bar: "bg-slate-600",
    glow: "hover:shadow-slate-200/60",
    dot: "bg-slate-600",
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
  "dcg-ue13-seance-zero": "communication",
  "dcg-ue13-decouvrir": "communication",
  "dcg-ue13-recherche-information": "communication",
  "dcg-ue13-recherche-de-stage": "communication",
  "dcg-ue13-analyser-situation": "communication",
  "dcg-ue13-rapport-de-stage": "communication",
  "dcg-ue13-soutenance": "communication",
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
