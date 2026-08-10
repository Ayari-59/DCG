"use client";

import { useState, useMemo } from "react";
import type { Notion } from "@/lib/content/types";

const CATS = [
  { label: "Notion clé", cls: "key" },
  { label: "Formule / Calcul", cls: "form" },
  { label: "Méthode", cls: "meth" },
  { label: "Outil", cls: "tool" },
  { label: "Définition", cls: "def" },
] as const;

type CatCls = (typeof CATS)[number]["cls"];

const CAT_CLS: Record<string, CatCls> = Object.fromEntries(CATS.map((c) => [c.label, c.cls]));

const BORDER_TOP: Record<CatCls, string> = {
  key: "border-t-navy",
  form: "border-t-brand",
  meth: "border-t-teal-700",
  tool: "border-t-violet-600",
  def: "border-t-slate-500",
};

const BADGE_BG: Record<CatCls, string> = {
  key: "bg-navy",
  form: "bg-brand",
  meth: "bg-teal-700",
  tool: "bg-violet-600",
  def: "bg-slate-500",
};

const CHIP_ON: Record<CatCls, string> = {
  key: "!bg-navy !text-white !border-navy",
  form: "!bg-brand !text-white !border-brand",
  meth: "!bg-teal-700 !text-white !border-teal-700",
  tool: "!bg-violet-600 !text-white !border-violet-600",
  def: "!bg-slate-500 !text-white !border-slate-500",
};

function norm(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

export function Notions({ fiches }: { fiches: Notion[] }) {
  const [recherche, setRecherche] = useState("");
  const [catFiltre, setCatFiltre] = useState("");

  const catsPresentes = useMemo(
    () => CATS.filter((c) => fiches.some((f) => f.cat === c.label)),
    [fiches],
  );

  const resultats = useMemo(() => {
    const terme = norm(recherche.trim());
    return fiches.filter((f) => {
      if (catFiltre && f.cat !== catFiltre) return false;
      if (terme) {
        const texte = norm(
          [f.titre, f.definition, f.retenir, f.piege, ...f.points, ...f.formules].join(" "),
        );
        if (!texte.includes(terme)) return false;
      }
      return true;
    });
  }, [fiches, recherche, catFiltre]);

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="Rechercher une notion…"
          className="min-w-[200px] flex-[1_1_280px] rounded-[10px] border-2 border-line px-3.5 py-2 text-[15px] text-ink outline-none transition placeholder:text-slate-400 focus:border-brand"
        />
        <span className="whitespace-nowrap text-[13px] font-semibold text-muted">
          {resultats.length} / {fiches.length}
        </span>
      </div>

      {catsPresentes.length > 1 && (
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            onClick={() => setCatFiltre("")}
            className={`rounded-full border-[1.5px] px-3.5 py-1.5 text-[13px] font-semibold transition ${
              !catFiltre
                ? "border-navy bg-navy text-white"
                : "border-line bg-white text-muted hover:border-slate-400"
            }`}
          >
            Toutes
          </button>
          {catsPresentes.map((c) => (
            <button
              key={c.label}
              onClick={() => setCatFiltre(catFiltre === c.label ? "" : c.label)}
              className={`rounded-full border-[1.5px] px-3.5 py-1.5 text-[13px] font-semibold transition ${
                catFiltre === c.label
                  ? CHIP_ON[c.cls]
                  : "border-line bg-white text-muted hover:border-slate-400"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      {resultats.length === 0 ? (
        <p className="py-10 text-center text-base text-muted">
          Aucune fiche ne correspond à ta recherche.
        </p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
          {resultats.map((f, i) => (
            <Card key={i} fiche={f} />
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ fiche: f }: { fiche: Notion }) {
  const cls = CAT_CLS[f.cat] ?? "def";

  return (
    <article
      className={`rounded-[14px] border border-line bg-white p-4 shadow-[0_1px_3px_rgba(16,32,60,0.05)] ${BORDER_TOP[cls]} border-t-[5px]`}
    >
      <div className="mb-2">
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-white ${BADGE_BG[cls]}`}
        >
          {f.cat}
        </span>
      </div>

      <h3 className="mb-1.5 font-serif text-lg font-bold leading-tight text-navy">{f.titre}</h3>
      <p className="mb-2 text-sm leading-relaxed text-ink">{f.definition}</p>

      {f.svg && (
        <div
          className="mx-auto mb-2 max-w-[340px] rounded-lg border border-line bg-[#fbfcfe]"
          dangerouslySetInnerHTML={{ __html: f.svg }}
        />
      )}

      {(f.points.length > 0 || f.formules.length > 0 || f.methode.length > 0 || f.piege) && (
        <details className="group">
          <summary className="cursor-pointer list-none py-0.5 text-[13px] font-semibold text-brand [&::-webkit-details-marker]:hidden">
            <span className="group-open:hidden">▸ </span>
            <span className="hidden group-open:inline">▾ </span>
            Détails
          </summary>

          {f.points.length > 0 && (
            <ul className="my-2 space-y-1 pl-5 text-[13.5px] leading-relaxed text-ink marker:text-brand">
              {f.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}

          {f.formules.length > 0 && (
            <div className="my-2 flex flex-col gap-1.5">
              {f.formules.map((fm, i) => (
                <code
                  key={i}
                  className="rounded-lg border border-[#fadfbb] bg-[#fff7ec] px-2.5 py-1.5 font-mono text-[13.5px] text-[#9a5a00]"
                >
                  {fm}
                </code>
              ))}
            </div>
          )}

          {f.methode.length > 0 && (
            <ol className="my-2 list-decimal space-y-1 pl-5 text-[13.5px] leading-relaxed text-ink">
              {f.methode.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ol>
          )}

          {f.piege && (
            <p className="mt-2 rounded-md border-l-[3px] border-l-[#e05252] bg-[#fdecec] px-2.5 py-1.5 text-[13px] text-[#7a2020]">
              <b>⚠ Piège :</b> {f.piege}
            </p>
          )}
        </details>
      )}

      {f.retenir && (
        <p className="mt-2.5 rounded-md border-l-[3px] border-l-teal-700 bg-[#eaf3ef] px-3 py-2 text-[13.5px] text-[#124f43]">
          <b>À retenir —</b> {f.retenir}
        </p>
      )}
    </article>
  );
}
