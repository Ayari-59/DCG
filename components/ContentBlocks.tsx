import type { ContentBlock } from "@/lib/content/types";
import { renderInline } from "./inline";

const calloutStyles = {
  info: { box: "border-sky-200 bg-sky-50", label: "text-sky-700", title: "À savoir" },
  warning: { box: "border-amber-200 bg-amber-50", label: "text-amber-700", title: "Piège d'examen" },
  tip: { box: "border-emerald-200 bg-emerald-50", label: "text-emerald-700", title: "Méthode" },
} as const;

export function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return <p className="leading-relaxed text-slate-700">{renderInline(block.text)}</p>;

    case "h3":
      return <h3 className="mt-8 text-lg font-bold text-slate-900">{renderInline(block.text)}</h3>;

    case "h4":
      return (
        <h4 className="mt-6 font-semibold text-slate-800">{renderInline(block.text)}</h4>
      );

    case "ul":
      return (
        <ul className="space-y-2 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 leading-relaxed text-slate-700">
              <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "formula":
      return (
        <div className="rounded-lg border border-indigo-100 bg-indigo-50/60 px-4 py-3">
          {block.label && (
            <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-indigo-500">
              {block.label}
            </div>
          )}
          <div className="font-medium text-indigo-900">{block.text}</div>
        </div>
      );

    case "table": {
      return (
        <figure>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full min-w-[28rem] text-sm">
              <thead>
                <tr className="bg-slate-100 text-left">
                  {block.headers.map((h, i) => (
                    <th key={i} className="px-3 py-2 font-semibold text-slate-800">
                      {renderInline(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    {row.map((cell, j) => (
                      <td key={j} className="px-3 py-2 align-top text-slate-700">
                        {renderInline(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-1.5 text-xs text-slate-500">{block.caption}</figcaption>
          )}
        </figure>
      );
    }

    case "callout": {
      const s = calloutStyles[block.variant];
      return (
        <div className={`rounded-lg border px-4 py-3 ${s.box}`}>
          <div className={`mb-1 text-xs font-semibold uppercase tracking-wide ${s.label}`}>
            {block.title ?? s.title}
          </div>
          <div className="space-y-2">
            {block.text.split("\n").filter(Boolean).map((line, i) => (
              <p key={i} className="text-sm leading-relaxed text-slate-700">
                {renderInline(line)}
              </p>
            ))}
          </div>
        </div>
      );
    }

    case "video":
      return (
        <figure>
          <div className="aspect-video overflow-hidden rounded-lg border border-slate-200 bg-black">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${block.youtubeId}`}
              title={block.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <figcaption className="mt-1.5 text-xs text-slate-500">{block.title}</figcaption>
        </figure>
      );
  }
}
