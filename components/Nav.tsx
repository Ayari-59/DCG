"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CommandPalette } from "./CommandPalette";
import type { EntreeRecherche } from "@/lib/search-index";

/**
 * Navigation principale.
 *
 * Elle est organisée en trois zones plutôt qu'en une liste plate, pour deux
 * raisons. D'abord elle mélangeait des choses de nature différente — des
 * programmes, des pages éditoriales, un espace personnel — au même niveau.
 * Ensuite elle ne tenait déjà plus la largeur à sept entrées, et elle doit
 * pouvoir accueillir de nouvelles unités sans être réécrite.
 *
 * L'emplacement à droite est réservé à l'état de connexion : c'est là que
 * viendra le compte de l'étudiant si le site devient un espace
 * d'apprentissage complet.
 */

export interface LienProgramme {
  href: string;
  diplome: string;
  ue: string;
  titre: string;
  chapitres: number;
  heures: number;
  bar: string;
}

const RESSOURCES = [
  {
    href: "/reforme",
    titre: "La réforme",
    texte: "Ce que change le programme rénové et ce que l'épreuve attend.",
  },
  {
    href: "/rapport-jury",
    titre: "Rapport du jury",
    texte: "Les chiffres de la dernière session, lus pour l'UE11.",
  },
  {
    href: "/a-propos",
    titre: "À propos",
    texte: "D'où vient le contenu et pourquoi le site fonctionne ainsi.",
  },
];

export function Nav({
  programmes,
  indexRecherche,
}: {
  programmes: LienProgramme[];
  indexRecherche: EntreeRecherche[];
}) {
  const pathname = usePathname();
  const [ouvert, setOuvert] = useState<"programmes" | "ressources" | null>(null);
  const [drawer, setDrawer] = useState(false);
  const zone = useRef<HTMLDivElement>(null);

  // Un menu déroulant se ferme au clic extérieur, à Échap et au changement de page.
  useEffect(() => {
    setOuvert(null);
    setDrawer(false);
  }, [pathname]);

  useEffect(() => {
    function auClic(e: MouseEvent) {
      if (zone.current && !zone.current.contains(e.target as Node)) setOuvert(null);
    }
    function auClavier(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOuvert(null);
        setDrawer(false);
      }
    }
    document.addEventListener("mousedown", auClic);
    document.addEventListener("keydown", auClavier);
    return () => {
      document.removeEventListener("mousedown", auClic);
      document.removeEventListener("keydown", auClavier);
    };
  }, []);

  const actif = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const programmeActif =
    programmes.some((p) => actif(p.href)) || pathname.startsWith("/cours/");
  const ressourceActive = RESSOURCES.some((r) => actif(r.href));

  return (
    <div className="flex items-center gap-2" ref={zone}>
      {/* ── Bureau ──────────────────────────────────────────────── */}
      <nav className="hidden items-center gap-1 text-sm font-semibold text-muted lg:flex">
        <Declencheur
          libelle="Programmes"
          actif={programmeActif}
          ouvert={ouvert === "programmes"}
          onToggle={() => setOuvert((o) => (o === "programmes" ? null : "programmes"))}
        />
        <Declencheur
          libelle="Ressources"
          actif={ressourceActive}
          ouvert={ouvert === "ressources"}
          onToggle={() => setOuvert((o) => (o === "ressources" ? null : "ressources"))}
        />
        <Link
          href="/classe"
          className={`rounded-lg px-3 py-2 transition hover:bg-white hover:text-ink ${
            actif("/classe") ? "text-brand" : ""
          }`}
        >
          Ma classe
        </Link>
      </nav>

      {ouvert === "programmes" && (
        <Panneau>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.15em] text-muted">
            Programmes
          </p>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {programmes.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="flex gap-3 rounded-xl p-3 transition hover:bg-slate-50"
                >
                  <span className={`mt-0.5 h-9 w-1.5 shrink-0 rounded-full ${p.bar}`} />
                  <span className="min-w-0">
                    <span className="block text-xs font-black uppercase tracking-wide text-muted">
                      {p.diplome} · {p.ue}
                    </span>
                    <span className="block font-serif text-[15px] font-bold text-ink">
                      {p.titre}
                    </span>
                    <span className="block text-xs text-muted">
                      {p.chapitres} chapitres · {p.heures} h
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Panneau>
      )}

      {ouvert === "ressources" && (
        <Panneau>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.15em] text-muted">
            Ressources
          </p>
          <ul className="space-y-1">
            {RESSOURCES.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="block rounded-xl p-3 transition hover:bg-slate-50">
                  <span className="block font-serif text-[15px] font-bold text-ink">
                    {r.titre}
                  </span>
                  <span className="block text-xs text-muted">{r.texte}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Panneau>
      )}

      <CommandPalette index={indexRecherche} />

      {/* Emplacement du compte : aujourd'hui l'espace professeur. */}
      <Link
        href="/prof"
        className="hidden rounded-lg border-2 border-line px-3 py-1.5 text-sm font-semibold text-muted transition hover:border-brand hover:text-ink lg:block"
      >
        Espace prof
      </Link>

      {/* ── Mobile ──────────────────────────────────────────────── */}
      <button
        onClick={() => setDrawer((d) => !d)}
        aria-label="Ouvrir le menu"
        aria-expanded={drawer}
        className="rounded-lg border-2 border-line px-3 py-2 text-sm font-bold text-ink lg:hidden"
      >
        ☰
      </button>

      {drawer && (
        <div className="fixed inset-x-0 top-[57px] z-40 max-h-[calc(100vh-57px)] overflow-y-auto border-t-2 border-line bg-paper px-5 py-6 lg:hidden">
          <p className="text-xs font-black uppercase tracking-[0.15em] text-muted">Programmes</p>
          <ul className="mt-3 space-y-1.5">
            {programmes.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="flex items-center gap-3 rounded-xl border-2 border-line bg-white p-3"
                >
                  <span className={`h-8 w-1.5 shrink-0 rounded-full ${p.bar}`} />
                  <span>
                    <span className="block text-xs font-bold text-muted">
                      {p.diplome} · {p.ue}
                    </span>
                    <span className="block font-serif font-bold text-ink">{p.titre}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-muted">
            Ressources
          </p>
          <ul className="mt-3 space-y-1">
            {RESSOURCES.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="block rounded-xl px-3 py-2.5 font-semibold text-ink">
                  {r.titre}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-2 border-t-2 border-line pt-5">
            <Link href="/classe" className="rounded-xl px-3 py-2.5 font-semibold text-ink">
              Ma classe
            </Link>
            <Link href="/prof" className="rounded-xl px-3 py-2.5 font-semibold text-muted">
              Espace professeur
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Declencheur({
  libelle,
  actif,
  ouvert,
  onToggle,
}: {
  libelle: string;
  actif: boolean;
  ouvert: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={ouvert}
      aria-haspopup="true"
      className={`flex items-center gap-1.5 rounded-lg px-3 py-2 transition hover:bg-white hover:text-ink ${
        actif || ouvert ? "text-brand" : ""
      }`}
    >
      {libelle}
      <span className={`text-[10px] transition-transform ${ouvert ? "rotate-180" : ""}`} aria-hidden>
        ▾
      </span>
    </button>
  );
}

function Panneau({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 right-0 top-[57px] z-40 hidden px-5 lg:block">
      <div className="elev-xl mx-auto max-w-[1400px] rounded-2xl border-2 border-line bg-white p-5">
        {children}
      </div>
    </div>
  );
}
