"use client";

import type { Chapter } from "@/lib/content/types";
import { getFicheSections } from "@/lib/content/fiche";
import { getTheme } from "@/lib/content/theme";
import { Blocks } from "./ContentBlocks";
import { renderInline } from "./inline";

export function Fiche({ chapter }: { chapter: Chapter }) {
  const theme = getTheme(chapter.slug);
  const sections = getFicheSections(chapter);

  return (
    <div className="print-full">
      <div className={`no-print mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 ${theme.border} ${theme.soft}`}>
        <div>
          <h2 className="font-serif text-xl font-bold text-ink">Fiche de révision</h2>
          <p className="mt-0.5 text-sm text-muted">
            La synthèse du chapitre et les {chapter.flashcards.length} notions à mémoriser, sur une
            seule page.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className={`rounded-xl border-2 bg-white px-5 py-2.5 text-sm font-bold shadow-sm transition hover:brightness-95 ${theme.border} ${theme.text}`}
        >
          Imprimer / PDF
        </button>
      </div>

      <div className="hidden print:mb-6 print:block">
        <h1 className="font-serif text-2xl font-bold">
          {chapter.level} {chapter.ue} — Chapitre {chapter.number} · {chapter.title}
        </h1>
        <p className="text-sm text-slate-500">Fiche de révision</p>
      </div>

      {sections.length > 0 && (
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id}>
              <h3 className="mb-4 font-serif text-2xl font-bold tracking-tight text-ink">
                {section.title}
              </h3>
              <Blocks blocks={section.blocks} />
            </section>
          ))}
        </div>
      )}

      {chapter.flashcards.length > 0 && (
        <section className="mt-12">
          <h3 className="mb-4 font-serif text-2xl font-bold tracking-tight text-ink">
            Les notions à connaître
          </h3>
          <dl className="overflow-hidden rounded-xl border border-line bg-white shadow-sm">
            {chapter.flashcards.map((card, i) => (
              <div
                key={card.id}
                className={`grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-6 ${
                  i > 0 ? "border-t border-line/70" : ""
                }`}
              >
                <dt className="font-semibold text-ink">{renderInline(card.front)}</dt>
                <dd className="text-[15px] leading-relaxed text-slate-600">
                  {renderInline(card.back)}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {sections.length === 0 && chapter.flashcards.length === 0 && (
        <p className="text-muted">Aucune fiche de révision pour ce chapitre.</p>
      )}
    </div>
  );
}
