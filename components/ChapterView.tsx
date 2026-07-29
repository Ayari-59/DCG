"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Chapter } from "@/lib/content/types";
import { hasFiche } from "@/lib/content/fiche";
import { getTheme } from "@/lib/content/theme";
import { Blocks } from "./ContentBlocks";
import { Quiz } from "./Quiz";
import { Flashcards } from "./Flashcards";
import { Fiche } from "./Fiche";
import { Methodologie, hasMethodologie } from "./Methodologie";
import { Annales } from "./Annales";
import { Exercises } from "./Exercises";

export interface VoisinChapitre {
  slug: string;
  numero: number;
  titre: string;
  badge: string;
}

type TabId = "lecon" | "methode" | "fiche" | "annales" | "applications" | "flashcards" | "quiz";

export function ChapterView({ chapter, suivant }: { chapter: Chapter; suivant?: VoisinChapitre }) {
  // L'état de navigation vit dans l'URL : une page est ainsi partageable,
  // survit au rechargement, et le cahier de texte peut pointer une section.
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const tab = (params.get("onglet") as TabId) || "lecon";
  const index = Math.max(0, (Number(params.get("section")) || 1) - 1);

  const theme = getTheme(chapter.slug);
  const sections = chapter.sections;
  const last = sections.length - 1;
  const section = sections[index];

  const tabs: { id: TabId; label: string; badge?: number }[] = [
    { id: "lecon", label: "Leçon", badge: sections.length },
    ...(hasMethodologie(chapter) ? [{ id: "methode" as const, label: "Méthode" }] : []),
    ...(hasFiche(chapter) ? [{ id: "fiche" as const, label: "Fiche" }] : []),
    ...(chapter.annales?.length
      ? [{ id: "annales" as const, label: "Annales", badge: chapter.annales.length }]
      : []),
    ...(chapter.exercises?.length
      ? [{ id: "applications" as const, label: "Applications", badge: chapter.exercises.length }]
      : []),
    { id: "flashcards", label: "Flashcards", badge: chapter.flashcards.length },
    { id: "quiz", label: "Quiz", badge: chapter.quiz.length },
  ];

  const naviguer = useCallback(
    (onglet: TabId, sectionIndex: number) => {
      const p = new URLSearchParams();
      if (onglet !== "lecon") p.set("onglet", onglet);
      if (onglet === "lecon" && sectionIndex > 0) p.set("section", String(sectionIndex + 1));
      const q = p.toString();
      router.replace(q ? pathname + "?" + q : pathname, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [router, pathname]
  );

  const goTo = useCallback(
    (i: number) => naviguer("lecon", Math.max(0, Math.min(last, i))),
    [naviguer, last]
  );

  const setTab = useCallback((t: TabId) => naviguer(t, 0), [naviguer]);

  // Navigation au clavier entre les sections de la leçon.
  useEffect(() => {
    if (tab !== "lecon") return;
    function onKey(e: KeyboardEvent) {
      const el = document.activeElement;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (e.key === "ArrowRight") goTo(index + 1);
      if (e.key === "ArrowLeft") goTo(index - 1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [tab, index, goTo]);

  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-8">
      <Link
        href={`/${chapter.level.toLowerCase()}`}
        className={`no-print text-sm font-semibold transition hover:underline ${theme.text}`}
      >
        ← {chapter.level} {chapter.ue}
      </Link>

      <header className="relative mt-4 max-w-4xl">
        <span
          aria-hidden
          className={`absolute -left-5 top-1 hidden h-[calc(100%-0.5rem)] w-1.5 rounded-full sm:block ${theme.bar}`}
        />
        <p
          className={`flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] ${theme.text}`}
        >
          <span className="text-sm">{theme.emoji}</span>
          {theme.family} · Chapitre {chapter.number}
        </p>
        <h1 className="mt-2 font-serif text-[2.4rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.4rem]">
          {chapter.title}
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">{chapter.description}</p>
      </header>

      <nav className="no-print mt-7 flex gap-1 overflow-x-auto border-b border-line">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-px shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition ${
              tab === t.id
                ? `border-current ${theme.text}`
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {t.label}
            {t.badge !== undefined && (
              <span className="ml-1.5 text-xs text-slate-400">{t.badge}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-8 lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12">
        <aside className="no-print mb-8 lg:mb-0">
          <div className="lg:sticky lg:top-24">
            {tab === "lecon" ? (
              <>
                <p className="mb-3 hidden text-xs font-semibold uppercase tracking-wider text-muted lg:block">
                  Sommaire
                </p>
                {/* Mobile : liste déroulante ; desktop : sommaire cliquable */}
                <select
                  value={index}
                  onChange={(e) => goTo(Number(e.target.value))}
                  className="w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink shadow-sm lg:hidden"
                >
                  {sections.map((s, i) => (
                    <option key={s.id} value={i}>
                      {i + 1}. {s.title}
                    </option>
                  ))}
                </select>
                <ol className="hidden max-h-[calc(100vh-12rem)] space-y-0.5 overflow-y-auto pr-2 lg:block">
                  {sections.map((s, i) => (
                    <li key={s.id}>
                      <button
                        onClick={() => goTo(i)}
                        className={`flex w-full gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] leading-snug transition ${
                          i === index
                            ? `bg-white font-semibold shadow-sm ${theme.text}`
                            : "text-muted hover:bg-white/70 hover:text-ink"
                        }`}
                      >
                        <span
                          className={`shrink-0 tabular-nums ${
                            i === index ? theme.text : "text-slate-400"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="line-clamp-3">{s.title}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </>
            ) : (
              <div className="hidden rounded-xl border border-line bg-white p-5 shadow-sm lg:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Ce chapitre
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <li>⏱ {chapter.durationMin} min de lecture</li>
                  <li>📖 {sections.length} sections</li>
                  {chapter.annales?.length ? <li>📜 {chapter.annales.length} annales</li> : null}
                  {chapter.exercises?.length ? <li>✏️ {chapter.exercises.length} applications</li> : null}
                  <li>🃏 {chapter.flashcards.length} flashcards</li>
                  <li>✅ {chapter.quiz.length} questions</li>
                </ul>
                <button
                  onClick={() => setTab("lecon")}
                  className={`mt-4 text-sm font-semibold underline-offset-2 hover:underline ${theme.text}`}
                >
                  Revenir à la leçon
                </button>
              </div>
            )}
          </div>
        </aside>

        <div className="min-w-0">
          {tab === "lecon" && section && (
            <article>
              <div className="no-print mb-6 flex items-center gap-4">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-slate-200/70">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${theme.bar}`}
                    style={{ width: `${((index + 1) / sections.length) * 100}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs tabular-nums text-muted">
                  {index + 1} / {sections.length}
                </span>
              </div>

              {index === 0 && chapter.videos && chapter.videos.length > 0 && (
                <div className={`mb-10 space-y-6 rounded-2xl border-2 p-5 ${theme.border} ${theme.soft}`}>
                  <h2 className={`text-xs font-black uppercase tracking-[0.18em] ${theme.text}`}>
                    🎬{" "}
                    {chapter.videos.length > 1 ? "Vidéos du chapitre" : "Vidéo du chapitre"}
                  </h2>
                  {chapter.videos.map((v) => (
                    <figure key={v.youtubeId}>
                      <div className="aspect-video overflow-hidden rounded-xl border border-white bg-black shadow-sm">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                          title={v.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <figcaption className="mt-2 text-sm text-muted">{v.title}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              <h2 className="mb-6 font-serif text-[1.75rem] font-bold leading-tight tracking-tight text-ink">
                <span className={`mr-3 inline-block h-7 w-1.5 translate-y-0.5 rounded-full align-middle ${theme.bar}`} />
                {section.title}
              </h2>
              <Blocks blocks={section.blocks} />

              <div className="no-print mt-12 flex items-center justify-between gap-4 border-t border-line pt-6">
                <button
                  onClick={() => goTo(index - 1)}
                  disabled={index === 0}
                  className="rounded-lg border border-line bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:invisible"
                >
                  ← Précédent
                </button>
                {index < last ? (
                  <button
                    onClick={() => goTo(index + 1)}
                    className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 ${theme.bar}`}
                  >
                    Suivant : {sections[index + 1].title.slice(0, 34)}
                    {sections[index + 1].title.length > 34 ? "…" : ""} →
                  </button>
                ) : (
                  <button
                    onClick={() => setTab("quiz")}
                    className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 ${theme.bar}`}
                  >
                    Passer au quiz →
                  </button>
                )}
              </div>

              {/* Fin de chapitre : on ne laisse jamais l'étudiant dans une impasse. */}
              {index === last && suivant && (
                <Link
                  href={`/cours/${suivant.slug}`}
                  className="lift elev-sm group mt-6 flex items-center gap-4 rounded-2xl border-2 border-line bg-white p-5"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-serif text-lg font-bold text-white ${suivant.badge}`}
                  >
                    {suivant.numero}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-black uppercase tracking-[0.15em] text-muted">
                      Chapitre suivant
                    </span>
                    <span className="mt-0.5 block font-serif text-lg font-bold text-ink">
                      {suivant.titre}
                    </span>
                  </span>
                  <span className="shrink-0 text-2xl text-muted transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              )}
            </article>
          )}

          {tab === "methode" && <Methodologie chapter={chapter} />}
          {tab === "fiche" && <Fiche chapter={chapter} />}
          {tab === "annales" && <Annales chapter={chapter} />}
          {tab === "applications" && chapter.exercises && (
            <Exercises exercises={chapter.exercises} />
          )}
          {tab === "flashcards" && (
            <div className="max-w-2xl">
              <Flashcards slug={chapter.slug} cards={chapter.flashcards} />
            </div>
          )}
          {tab === "quiz" && (
            <div className="max-w-2xl">
              <Quiz slug={chapter.slug} questions={chapter.quiz} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
