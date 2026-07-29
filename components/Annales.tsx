"use client";

import { useMemo, useState } from "react";
import type { Annale, Chapter } from "@/lib/content/types";
import { getTheme } from "@/lib/content/theme";
import { Blocks } from "./ContentBlocks";

/**
 * Un sujet d'annale fait plusieurs dizaines de blocs : toutes les cartes
 * restent repliées tant que l'étudiant n'en ouvre pas une.
 */
function AnnaleCard({ annale, chapterSlug }: { annale: Annale; chapterSlug: string }) {
  const theme = getTheme(chapterSlug);
  const [open, setOpen] = useState(false);

  return (
    <article className="elev-sm overflow-hidden rounded-2xl border border-line bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-slate-50/70"
      >
        <span
          className={`flex h-12 w-16 shrink-0 items-center justify-center rounded-xl font-serif text-lg font-bold text-white ${theme.badge}`}
        >
          {annale.year}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-serif text-lg font-bold text-ink">{annale.entreprise}</span>
          <span className="mt-0.5 block text-xs font-semibold text-muted">
            Session {annale.year}
            {annale.dossier ? ` · ${annale.dossier}` : ""}
          </span>
        </span>
        <span className={`shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <div className="border-t border-line px-5 py-6 sm:px-7">
          <Blocks blocks={annale.blocks} />
        </div>
      )}
    </article>
  );
}

export function Annales({ chapter }: { chapter: Chapter }) {
  const annales = chapter.annales ?? [];
  const theme = getTheme(chapter.slug);
  const [annee, setAnnee] = useState<number | "toutes">("toutes");

  const annees = useMemo(
    () => [...new Set(annales.map((a) => a.year))].sort((a, b) => b - a),
    [annales]
  );
  const visibles = annee === "toutes" ? annales : annales.filter((a) => a.year === annee);

  return (
    <div>
      <div className={`mb-6 rounded-2xl border px-5 py-4 ${theme.border} ${theme.soft}`}>
        <h2 className="font-serif text-xl font-bold text-ink">Annales</h2>
        <p className="mt-0.5 text-sm text-muted">
          {annales.length} sujet{annales.length > 1 ? "s" : ""} d&apos;examen des sessions{" "}
          {annees.at(-1)} à {annees[0]}, portant sur ce thème. Énoncés et annexes complets — les
          corrigés ne sont pas fournis.
        </p>
      </div>

      {annees.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            onClick={() => setAnnee("toutes")}
            className={`rounded-full border px-4 py-1.5 text-sm font-bold transition ${
              annee === "toutes"
                ? `${theme.border} ${theme.soft} ${theme.text}`
                : "border-line bg-white text-muted hover:text-ink"
            }`}
          >
            Toutes
          </button>
          {annees.map((y) => (
            <button
              key={y}
              onClick={() => setAnnee(y)}
              className={`rounded-full border px-4 py-1.5 text-sm font-bold tabular-nums transition ${
                annee === y
                  ? `${theme.border} ${theme.soft} ${theme.text}`
                  : "border-line bg-white text-muted hover:text-ink"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-3">
        {visibles.map((a) => (
          <AnnaleCard key={a.id} annale={a} chapterSlug={chapter.slug} />
        ))}
      </div>
    </div>
  );
}
