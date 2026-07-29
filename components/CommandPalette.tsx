"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { chercher, type EntreeRecherche } from "@/lib/content/search";

/**
 * Palette de recherche (Ctrl/⌘ + K). Le site compte 28 chapitres, 275
 * sections et 81 annales : sans elle, retrouver une notion précise oblige
 * à parcourir le programme à la main.
 */
export function CommandPalette() {
  const router = useRouter();
  const [ouverte, setOuverte] = useState(false);
  const [requete, setRequete] = useState("");
  const [actif, setActif] = useState(0);
  const listeRef = useRef<HTMLUListElement>(null);

  const resultats = useMemo(() => chercher(requete), [requete]);

  const fermer = useCallback(() => {
    setOuverte(false);
    setRequete("");
    setActif(0);
  }, []);

  const ouvrir = useCallback((entree: EntreeRecherche) => {
    fermer();
    router.push(entree.href);
  }, [fermer, router]);

  // Raccourci global.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOuverte((o) => !o);
      }
      if (e.key === "Escape") fermer();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fermer]);

  // La sélection suit les flèches et reste visible dans la liste.
  useEffect(() => {
    listeRef.current?.children[actif]?.scrollIntoView({ block: "nearest" });
  }, [actif]);

  if (!ouverte) return <Declencheur onOuvrir={() => setOuverte(true)} />;

  return (
    <>
      <Declencheur onOuvrir={() => setOuverte(true)} />
      <div
        className="fixed inset-0 z-50 flex items-start justify-center bg-navy-deep/50 px-4 pt-[10vh] backdrop-blur-sm"
        onClick={fermer}
        role="presentation"
      >
        <div
          className="elev-xl w-full max-w-xl overflow-hidden rounded-2xl border-2 border-line bg-white"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Rechercher dans le site"
        >
          <div className="flex items-center gap-3 border-b-2 border-line px-5">
            <span aria-hidden className="text-muted">
              ⌕
            </span>
            <input
              autoFocus
              value={requete}
              onChange={(e) => {
                setRequete(e.target.value);
                setActif(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActif((a) => Math.min(a + 1, resultats.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActif((a) => Math.max(a - 1, 0));
                } else if (e.key === "Enter" && resultats[actif]) {
                  e.preventDefault();
                  ouvrir(resultats[actif]);
                }
              }}
              placeholder="Chercher un chapitre, une notion, une annale…"
              className="w-full bg-transparent py-4 text-[17px] text-ink outline-none placeholder:text-slate-400"
            />
            <kbd className="hidden rounded border border-line px-1.5 py-0.5 text-[11px] font-semibold text-muted sm:block">
              Échap
            </kbd>
          </div>

          {requete && resultats.length === 0 && (
            <p className="px-5 py-8 text-center text-muted">Aucun résultat pour « {requete} ».</p>
          )}

          {!requete && (
            <p className="px-5 py-8 text-center text-sm text-muted">
              Tapez pour chercher parmi les chapitres, les sections et les annales.
            </p>
          )}

          {resultats.length > 0 && (
            <ul ref={listeRef} className="max-h-[52vh] overflow-y-auto py-2">
              {resultats.map((r, i) => (
                <li key={r.href + r.titre}>
                  <button
                    onMouseEnter={() => setActif(i)}
                    onClick={() => ouvrir(r)}
                    className={`flex w-full items-center gap-3 px-5 py-2.5 text-left transition ${
                      i === actif ? "bg-slate-100" : ""
                    }`}
                  >
                    <span className={`h-8 w-1 shrink-0 rounded-full ${r.bar}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold text-ink">{r.titre}</span>
                      <span className="block truncate text-xs text-muted">{r.contexte}</span>
                    </span>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-muted">
                      {r.categorie}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-4 border-t-2 border-line px-5 py-2.5 text-[11px] text-muted">
            <span>
              <kbd className="font-semibold">↑↓</kbd> naviguer
            </span>
            <span>
              <kbd className="font-semibold">↵</kbd> ouvrir
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function Declencheur({ onOuvrir }: { onOuvrir: () => void }) {
  return (
    <button
      onClick={onOuvrir}
      aria-label="Rechercher"
      className="flex items-center gap-2 rounded-lg border-2 border-line bg-white px-3 py-1.5 text-sm text-muted transition hover:border-brand hover:text-ink"
    >
      <span aria-hidden>⌕</span>
      <span className="hidden sm:inline">Rechercher</span>
      <kbd className="hidden rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold md:inline">
        ⌘K
      </kbd>
    </button>
  );
}
