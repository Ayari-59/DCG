"use client";

import type { Chapter, ContentBlock } from "@/lib/content/types";
import { getTheme } from "@/lib/content/theme";
import { Blocks } from "./ContentBlocks";
import { renderInline } from "./inline";
import { Icone } from "./Icones";

/**
 * Encadrés « méthode » disséminés dans la leçon, regroupés ici. Le mot
 * « méthode » revenant souvent de façon incidente (« Trois méthodes, trois
 * conceptions »), on ne retient que les encadrés dont un segment du titre
 * annonce bien une démarche — et jamais une remarque ou un piège.
 */
const NOT_METHODE = /^\s*(remarque|erreurs?\s+fr[ée]quentes?)/i;
const IS_METHODE =
  /^\s*[^\p{L}]*\s*(la\s+)?(m[ée]thode|d[ée]marche|savoir-faire)\b/iu;

function isMethodeCallout(title: string | undefined): boolean {
  if (!title || NOT_METHODE.test(title)) return false;
  return title.split(/[—–]/).some((segment) => IS_METHODE.test(segment));
}

function courseMethodes(chapter: Chapter) {
  const out: {
    section: string;
    block: Extract<ContentBlock, { type: "callout" }>;
  }[] = [];
  for (const section of chapter.sections) {
    for (const block of section.blocks) {
      if (block.type === "callout" && isMethodeCallout(block.title)) {
        out.push({ section: section.title, block });
      }
    }
  }
  return out;
}

export function hasMethodologie(chapter: Chapter): boolean {
  return (
    Boolean(chapter.methodes?.length) || courseMethodes(chapter).length > 0
  );
}

export function Methodologie({ chapter }: { chapter: Chapter }) {
  const theme = getTheme(chapter.slug);
  const demarches = chapter.methodes ?? [];
  const rappels = courseMethodes(chapter);

  return (
    <div className="print-full">
      <div
        className={`no-print mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-4 ${theme.border} ${theme.soft}`}
      >
        <div>
          <h2 className="font-serif text-xl font-bold text-ink">
            Méthodologie
          </h2>
          <p className="mt-0.5 text-sm text-muted">
            Les démarches à appliquer le jour de l&apos;épreuve, étape par
            étape.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className={`rounded-xl border bg-white px-5 py-2.5 text-sm font-bold shadow-sm transition hover:brightness-95 ${theme.border} ${theme.text}`}
        >
          Imprimer / PDF
        </button>
      </div>

      {demarches.length > 0 && (
        <div className="space-y-6">
          {demarches.map((m, i) => (
            <article
              key={m.id}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm"
            >
              <header
                className={`flex items-start gap-4 border-b px-5 py-4 ${theme.border} ${theme.soft}`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-serif text-base font-bold text-white shadow-sm ${theme.badge}`}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg font-bold leading-snug text-ink">
                    {m.theme}
                  </h3>
                  {m.competences.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {m.competences.map((c, k) => (
                        <li
                          key={k}
                          className="flex items-center gap-1.5 rounded-full bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-600 shadow-sm"
                        >
                          <Icone nom="competence" className="h-3.5 w-3.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </header>
              <div className="px-5 py-5 sm:px-6">
                <Blocks blocks={m.blocks} />
              </div>
            </article>
          ))}
        </div>
      )}

      {rappels.length > 0 && (
        <section className={demarches.length ? "mt-12" : ""}>
          <h3 className="mb-4 font-serif text-2xl font-bold tracking-tight text-ink">
            Rappels de méthode du cours
          </h3>
          <div className="space-y-4">
            {rappels.map(({ section, block }, i) => (
              <div
                key={i}
                className="rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-4"
              >
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-emerald-700">
                  <span className="flex items-center gap-1.5">
                    <Icone nom="methode" className="h-4 w-4" />
                    {block.title}
                  </span>
                  <span className="font-medium normal-case tracking-normal text-emerald-600/80">
                    · {section}
                  </span>
                </div>
                <div className="space-y-2">
                  {block.text
                    .split("\n")
                    .filter(Boolean)
                    .map((line, k) => (
                      <p
                        key={k}
                        className="text-[15px] leading-relaxed text-slate-700"
                      >
                        {renderInline(line)}
                      </p>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
