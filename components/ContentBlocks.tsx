import type { ContentBlock } from "@/lib/content/types";
import { renderInline } from "./inline";

const calloutStyles = {
  info: { box: "border-sky-300 bg-sky-50", label: "text-sky-700", title: "À savoir", icon: "💬" },
  warning: { box: "border-rose-300 bg-rose-50", label: "text-rose-700", title: "Attention", icon: "⚠️" },
  tip: { box: "border-emerald-300 bg-emerald-50", label: "text-emerald-700", title: "Méthode", icon: "🧭" },
} as const;

/**
 * Les manuels sources nomment leurs encadrés (DÉFINITION, POINT EXAMEN,
 * ERREURS FRÉQUENTES…). On donne à chaque type sa couleur et son icône :
 * le lecteur identifie la nature de l'encadré avant même de le lire.
 */
const CALLOUT_KINDS: { match: RegExp; box: string; label: string; icon: string }[] = [
  {
    match: /d[ée]finition|notion/i,
    box: "border-violet-300 bg-violet-50",
    label: "text-violet-700",
    icon: "📘",
  },
  {
    match: /examen|à retenir|a retenir|essentiel/i,
    box: "border-sky-300 bg-sky-50",
    label: "text-sky-700",
    icon: "🎯",
  },
  {
    match: /erreur|pi[èe]ge|attention|vigilance/i,
    box: "border-rose-300 bg-rose-50",
    label: "text-rose-700",
    icon: "⚠️",
  },
  {
    match: /m[ée]thode|d[ée]marche|savoir-faire|conseil/i,
    box: "border-emerald-300 bg-emerald-50",
    label: "text-emerald-700",
    icon: "🧭",
  },
  {
    match: /illustration|exemple|application|cas /i,
    box: "border-amber-300 bg-amber-50",
    label: "text-amber-700",
    icon: "💡",
  },
  {
    match: /comp[ée]tence|objectif/i,
    box: "border-fuchsia-300 bg-fuchsia-50",
    label: "text-fuchsia-700",
    icon: "🏅",
  },
];

export function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[17px] leading-[1.75] text-slate-700">{renderInline(block.text)}</p>
      );

    case "h3":
      return (
        <h3 className="mt-10 font-serif text-2xl font-bold tracking-tight text-[--ink]">
          {renderInline(block.text)}
        </h3>
      );

    case "h4":
      return (
        <h4 className="mt-7 text-[15px] font-black uppercase tracking-[0.12em] text-violet-600">
          {renderInline(block.text)}
        </h4>
      );

    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[17px] leading-[1.7] text-slate-700">
              <span className="mt-[0.65rem] h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[17px] leading-[1.7] text-slate-700">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-xs font-bold text-white">
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );

    case "formula":
      return (
        <div className="rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-violet-50/50 px-5 py-4">
          {block.label && (
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-500">
              {block.label}
            </div>
          )}
          <div className="font-medium text-indigo-950">{block.text}</div>
        </div>
      );

    case "table":
      return (
        <figure className="-mx-1">
          <div className="overflow-x-auto rounded-xl border border-[--line] bg-white shadow-sm">
            <table className="w-full min-w-[30rem] text-[15px]">
              <thead>
                <tr className="border-b-2 border-violet-200 bg-gradient-to-r from-violet-50 to-indigo-50 text-left">
                  {block.headers.map((h, i) => (
                    <th key={i} className="px-4 py-3 font-semibold text-[--ink]">
                      {renderInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-t border-[--line]/70 transition hover:bg-slate-50/60">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2.5 align-top leading-relaxed text-slate-700">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-2 px-1 text-xs text-[--muted]">{block.caption}</figcaption>
          )}
        </figure>
      );

    case "callout": {
      const fallback = calloutStyles[block.variant];
      const title = block.title ?? fallback.title;
      const kind = CALLOUT_KINDS.find((k) => k.match.test(title)) ?? fallback;
      return (
        <aside className={`rounded-xl border-2 px-5 py-4 ${kind.box}`}>
          <div
            className={`mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] ${kind.label}`}
          >
            <span className="text-sm">{kind.icon}</span>
            {title}
          </div>
          <div className="space-y-2">
            {block.text
              .split("\n")
              .filter(Boolean)
              .map((line, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-slate-700">
                  {renderInline(line)}
                </p>
              ))}
          </div>
        </aside>
      );
    }

    case "image":
      return (
        <figure className="my-2">
          <div className="overflow-hidden rounded-xl border-2 border-[--line] bg-white p-3 shadow-sm">
            {/* Figures issues des manuels : dimensions variables, rendu fluide. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt}
              width={block.width}
              height={block.height}
              loading="lazy"
              className="mx-auto h-auto w-full max-w-3xl"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm italic text-[--muted]">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "video":
      return (
        <figure>
          <div className="aspect-video overflow-hidden rounded-xl border border-[--line] bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}`}
              title={block.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <figcaption className="mt-2 text-xs text-[--muted]">{block.title}</figcaption>
        </figure>
      );
  }
}

/** Suite de blocs, avec l'espacement vertical standard des leçons. */
export function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => (
        <ContentBlockView key={i} block={b} />
      ))}
    </div>
  );
}
