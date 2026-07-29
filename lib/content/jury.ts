/**
 * Statistiques présentées par le jury du DCG, session 2026 (réunion du
 * 7 juillet 2026). Relevées dans le document de diffusion officiel.
 *
 * Ce fichier ne contient que des chiffres : l'analyse qui en est faite sur
 * le site est signalée comme telle et n'engage pas le jury.
 * Pour la session suivante, mettre à jour ce fichier — les pages s'ajustent.
 */

export const SESSION = 2026;
export const DATE_JURY = "7 juillet 2026";

export interface StatsUE {
  numero: number;
  intitulé: string;
  axe: string;
  /** Taux de réussite par session, de la plus ancienne à la plus récente. */
  taux: { annee: number; valeur: number }[];
  /** Moyenne de la session en cours, quand le jury la communique. */
  moyenne?: number;
}

export const SESSION_GLOBALE = {
  candidats: 25768,
  evolutionCandidats: 3.3,
  diplomes: 4235,
  diplomables: 10319,
  tauxReussite: 41.0,
  historique: [
    { annee: 2023, valeur: 40.5 },
    { annee: 2024, valeur: 36 },
    { annee: 2025, valeur: 43 },
    { annee: 2026, valeur: 41.0 },
  ],
};

const t = (v2022: number, v2023: number, v2024: number, v2025: number, v2026: number) => [
  { annee: 2022, valeur: v2022 },
  { annee: 2023, valeur: v2023 },
  { annee: 2024, valeur: v2024 },
  { annee: 2025, valeur: v2025 },
  { annee: 2026, valeur: v2026 },
];

export const UNITES: StatsUE[] = [
  { numero: 1, intitulé: "Fondamentaux du droit", axe: "Droit des affaires", taux: t(40.0, 36.1, 31.1, 40.7, 50.9), moyenne: 9.5 },
  { numero: 2, intitulé: "Droit des sociétés", axe: "Droit des affaires", taux: t(41.4, 31.6, 36.7, 50.9, 41.5), moyenne: 8.8 },
  { numero: 3, intitulé: "Droit social", axe: "Droit des affaires", taux: t(37.6, 42.4, 39.1, 44.3, 36.7), moyenne: 8.3 },
  { numero: 4, intitulé: "Droit fiscal", axe: "Droit des affaires", taux: t(39.7, 40.5, 35.4, 50.7, 37.0), moyenne: 8.5 },
  { numero: 5, intitulé: "Économie contemporaine", axe: "Analyse économique et managériale", taux: t(42.3, 36.6, 39.4, 38.1, 33.8), moyenne: 8.3 },
  { numero: 6, intitulé: "Finance d'entreprise", axe: "Gestion comptable et financière", taux: t(41.2, 37.4, 37.5, 49.3, 35.1), moyenne: 7.8 },
  { numero: 7, intitulé: "Management", axe: "Analyse économique et managériale", taux: t(43.0, 44.6, 42.7, 46.1, 40.6), moyenne: 8.7 },
  { numero: 8, intitulé: "Systèmes d'information de gestion", axe: "Communication et environnement numérique", taux: t(39.3, 46.7, 43.4, 44.4, 37.5), moyenne: 8.5 },
  { numero: 9, intitulé: "Comptabilité", axe: "Gestion comptable et financière", taux: t(49.7, 62.8, 66.1, 68.3, 64.9), moyenne: 11.3 },
  { numero: 10, intitulé: "Comptabilité approfondie", axe: "Gestion comptable et financière", taux: t(33.2, 32.7, 36.6, 32.8, 39.6), moyenne: 8.6 },
  { numero: 11, intitulé: "Contrôle de gestion", axe: "Gestion comptable et financière", taux: t(39.0, 44.6, 36.1, 55.7, 39.8), moyenne: 8.6 },
  { numero: 12, intitulé: "Anglais des affaires", axe: "Communication et environnement numérique", taux: t(47.3, 45.0, 60.7, 56.3, 53.8), moyenne: 10.4 },
  { numero: 13, intitulé: "Communication professionnelle", axe: "Communication et environnement numérique", taux: t(78.3, 75.1, 80.2, 80.0, 81.9), moyenne: 12.5 },
  { numero: 14, intitulé: "Unité facultative — langue vivante", axe: "Communication et environnement numérique", taux: t(73.6, 74.6, 76.8, 83.3, 61.9), moyenne: 10.9 },
];

export const UE11 = UNITES.find((u) => u.numero === 11)!;

/** Dernière valeur connue d'une unité. */
export const dernierTaux = (u: StatsUE) => u.taux[u.taux.length - 1].valeur;

/** Écart entre les deux dernières sessions, en points. */
export const variation = (u: StatsUE) =>
  Number((dernierTaux(u) - u.taux[u.taux.length - 2].valeur).toFixed(1));

/** Unités classées par ampleur de baisse sur la dernière session. */
export const classementBaisses = [...UNITES].sort((a, b) => variation(a) - variation(b));
