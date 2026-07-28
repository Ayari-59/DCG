import type { ContentBlock } from "@/lib/content/types";
import { renderInline } from "./inline";

const calloutStyles = {
  info: { box: "border-sky-200/80 bg-sky-50/70", label: "text-sky-700", title: "À savoir" },
  warning: { box: "border-amber-200/80 bg-amber-50/70", label: "text-amber-700", title: "Attention" },
  tip: { box: "border-emerald-200/80 bg-emerald-50/70", label: "text-emerald-700", title: "Méthode" },
} as const;

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
        <h4 className="mt-7 text-[15px] font-semibold uppercase tracking-wide text-indigo-700">
          {renderInline(block.text)}
        </h4>
      );

    case "ul":
      return (
        <ul className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[17px] leading-[1.7] text-slate-700">
              <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
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
                <tr className="border-b border-[--line] bg-slate-50/80 text-left">
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
      const s = calloutStyles[block.variant];
      return (
        <aside className={`rounded-xl border px-5 py-4 ${s.box}`}>
          <div className={`mb-1.5 text-xs font-semibold uppercase tracking-wider ${s.label}`}>
            {block.title ?? s.title}
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
