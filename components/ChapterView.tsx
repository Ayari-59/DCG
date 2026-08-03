"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Chapter } from "@/lib/content/types";
import { hasFiche } from "@/lib/content/fiche";
import { getTheme } from "@/lib/content/theme";
import { titreSection } from "@/lib/content/sections";
import { Blocks } from "./ContentBlocks";
import { Quiz } from "./Quiz";
import { Flashcards } from "./Flashcards";
import { Fiche } from "./Fiche";
import { Methodologie, hasMethodologie } from "./Methodologie";
import { Annales } from "./Annales";
import { Exercises } from "./Exercises";
import { Icone } from "./Icones";
import { synchroniser } from "./sync";

/** Onglets pouvant être réservés aux apprenants connectés. */
export type OngletVerrouille =
  | "methode"
  | "fiche"
  | "annales"
  | "applications"
  | "flashcards"
  | "quiz";

export interface VoisinChapitre {
  slug: string;
  numero: number;
  titre: string;
  badge: string;
}

type TabId =
  | "lecon"
  | "methode"
  | "fiche"
  | "annales"
  | "applications"
  | "flashcards"
  | "quiz";

export function ChapterView({
  chapter,
  suivant,
  verrouilles = [],
  competencesAttribuees = {},
}: {
  chapter: Chapter;
  suivant?: VoisinChapitre;
  /** Ressources réservées : le contenu n'a pas été envoyé, l'onglet reste
      visible avec un cadenas et invite à se connecter. */
  verrouilles?: OngletVerrouille[];
  /** Compétences rattachées par le fondateur, par identifiant d'exercice. */
  competencesAttribuees?: Record<string, string[]>;
}) {
  // L'état de navigation vit dans l'URL : une page est ainsi partageable,
  // survit au rechargement, et le cahier de texte peut pointer une section.
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const ongletDemande = (params.get("onglet") as TabId) || "lecon";
  const index = Math.max(0, (Number(params.get("section")) || 1) - 1);

  const theme = getTheme(chapter.slug);
  const sections = chapter.sections;
  const last = sections.length - 1;
  const section = sections[index];

  const verrou = (id: OngletVerrouille) => verrouilles.includes(id);
  const tabs: { id: TabId; label: string; badge?: number; verrouille?: boolean }[] = [
    { id: "lecon", label: "Leçon", badge: sections.length },
    ...(verrou("methode")
      ? [{ id: "methode" as const, label: "Méthode", verrouille: true }]
      : hasMethodologie(chapter)
        ? [{ id: "methode" as const, label: "Méthode" }]
        : []),
    ...(verrou("fiche")
      ? [{ id: "fiche" as const, label: "Fiche", verrouille: true }]
      : hasFiche(chapter)
        ? [{ id: "fiche" as const, label: "Fiche" }]
        : []),
    ...(verrou("annales")
      ? [{ id: "annales" as const, label: "Annales", verrouille: true }]
      : chapter.annales?.length
        ? [
            {
              id: "annales" as const,
              label: "Annales",
              badge: chapter.annales.length,
            },
          ]
        : []),
    ...(verrou("applications")
      ? [{ id: "applications" as const, label: "Applications", verrouille: true }]
      : chapter.exercises?.length
        ? [
            {
              id: "applications" as const,
              label: "Applications",
              badge: chapter.exercises.length,
            },
          ]
        : []),
    // Un onglet vide n'a rien à proposer : il reste masqué tant que le
    // chapitre n'a pas de cartes ni de questions.
    ...(verrou("flashcards")
      ? [{ id: "flashcards" as const, label: "Flashcards", verrouille: true }]
      : chapter.flashcards.length
        ? [
            {
              id: "flashcards" as const,
              label: "Flashcards",
              badge: chapter.flashcards.length,
            },
          ]
        : []),
    ...(verrou("quiz")
      ? [{ id: "quiz" as const, label: "Quiz", verrouille: true }]
      : chapter.quiz.length
        ? [{ id: "quiz" as const, label: "Quiz", badge: chapter.quiz.length }]
        : []),
  ];
  // Un onglet absent de ce chapitre ne doit pas produire une page vide.
  const tab: TabId = tabs.some((t) => t.id === ongletDemande)
    ? ongletDemande
    : "lecon";
  const ongletVerrouille = tabs.find((t) => t.id === tab)?.verrouille === true;

  const naviguer = useCallback(
    (onglet: TabId, sectionIndex: number) => {
      const p = new URLSearchParams();
      if (onglet !== "lecon") p.set("onglet", onglet);
      if (onglet === "lecon" && sectionIndex > 0)
        p.set("section", String(sectionIndex + 1));
      const q = p.toString();
      router.replace(q ? pathname + "?" + q : pathname, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [router, pathname],
  );

  const goTo = useCallback(
    (i: number) => naviguer("lecon", Math.max(0, Math.min(last, i))),
    [naviguer, last],
  );

  const setTab = useCallback((t: TabId) => naviguer(t, 0), [naviguer]);

  // ── Progression locale ──────────────────────────────────────────
  const [pctLocal, setPctLocal] = useState<number | null>(null);
  const totaux = useMemo(
    () => ({
      sections: chapter.sections.length,
      quiz: chapter.quiz.length,
      cartes: chapter.flashcards.length,
      applis: chapter.exercises?.length ?? 0,
    }),
    [chapter],
  );
  useEffect(() => {
    function lire() {
      const sl = JSON.parse(localStorage.getItem(`dcga:sections:${chapter.slug}`) ?? "[]").length;
      const qs = localStorage.getItem(`dcga:quiz:${chapter.slug}`);
      const ca = JSON.parse(localStorage.getItem(`dcga:cards:${chapter.slug}`) ?? "[]").length;
      const ap = Object.keys(
        JSON.parse(localStorage.getItem(`dcga:applis:${chapter.slug}`) ?? "{}"),
      ).length;
      const pLecon = totaux.sections > 0 ? sl / totaux.sections : 0;
      const pQuiz = totaux.quiz > 0 && qs ? Number(qs) / totaux.quiz : 0;
      const pCartes = totaux.cartes > 0 ? ca / totaux.cartes : 0;
      const pApplis = totaux.applis > 0 ? ap / totaux.applis : 0;
      const w = { lecon: 0.4, quiz: 0.25, cartes: 0.2, applis: 0.15 };
      const sw =
        (totaux.sections > 0 ? w.lecon : 0) +
        (totaux.quiz > 0 ? w.quiz : 0) +
        (totaux.cartes > 0 ? w.cartes : 0) +
        (totaux.applis > 0 ? w.applis : 0);
      const pct =
        sw > 0
          ? Math.round(
              ((w.lecon * pLecon + w.quiz * pQuiz + w.cartes * pCartes + w.applis * pApplis) / sw) *
                100,
            )
          : 0;
      setPctLocal(Math.min(100, pct));
    }
    lire();
    window.addEventListener("storage", lire);
    const timer = setInterval(lire, 5000);
    return () => {
      window.removeEventListener("storage", lire);
      clearInterval(timer);
    };
  }, [chapter.slug, totaux]);

  // Marquer la section comme lue après 5 secondes de consultation.
  useEffect(() => {
    if (tab !== "lecon" || !section) return;
    const cle = `dcga:sections:${chapter.slug}`;
    const timer = setTimeout(() => {
      const lues: string[] = JSON.parse(localStorage.getItem(cle) ?? "[]");
      if (!lues.includes(section.id)) {
        const maj = [...lues, section.id];
        localStorage.setItem(cle, JSON.stringify(maj));
        synchroniser({ chapitre: chapter.slug, sectionsLues: maj });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [tab, section, chapter.slug]);

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
          <Icone nom={theme.icone} className="h-4 w-4" />
          {theme.family} · Chapitre {chapter.number}
        </p>
        <h1 className="mt-2 font-serif text-[2.4rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.4rem]">
          {chapter.title}
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-muted">
          {chapter.description}
        </p>
      </header>

      <nav className="no-print mt-7 flex gap-1 overflow-x-auto border-b border-line">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`-mb-px shrink-0 border-b px-4 py-3 text-sm font-medium transition ${
              tab === t.id
                ? `border-current ${theme.text}`
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {t.label}
            {t.verrouille && (
              <Icone nom="verrou" className="ml-1.5 inline-block h-3.5 w-3.5 align-[-2px] text-slate-400" />
            )}
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
                      {titreSection(s.title).numero
                        ? `${titreSection(s.title).numero}. ${titreSection(s.title).libelle}`
                        : titreSection(s.title).libelle}
                    </option>
                  ))}
                </select>
                <ol className="hidden max-h-[calc(100vh-12rem)] space-y-0.5 overflow-y-auto pr-2 lg:block">
                  {sections.map((s, i) => {
                    // Le numéro affiché est celui de la partie dans le manuel,
                    // pas le rang dans la liste : l'introduction et les annexes
                    // n'en portent aucun, et la numérotation reste celle du cours.
                    const { numero, libelle } = titreSection(s.title);
                    return (
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
                            className={`w-4 shrink-0 text-right tabular-nums ${
                              i === index ? theme.text : "text-slate-400"
                            }`}
                            aria-hidden={!numero}
                          >
                            {numero ?? "·"}
                          </span>
                          <span className="line-clamp-3">{libelle}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
                {pctLocal != null && pctLocal > 0 && (
                  <div className="mt-4 hidden items-center gap-2 lg:flex">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200/70">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${theme.bar}`}
                        style={{ width: `${pctLocal}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold tabular-nums text-muted">
                      {pctLocal} %
                    </span>
                  </div>
                )}
              </>
            ) : (
              <div className="hidden rounded-xl border border-line bg-white p-5 shadow-sm lg:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Ce chapitre
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <Icone nom="duree" className="h-4 w-4 text-muted" />
                    {chapter.durationMin} min de lecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Icone nom="sections" className="h-4 w-4 text-muted" />
                    {sections.length} sections
                  </li>
                  {chapter.annales?.length ? (
                    <li className="flex items-center gap-2">
                      <Icone nom="annales" className="h-4 w-4 text-muted" />
                      {chapter.annales.length} annales
                    </li>
                  ) : null}
                  {chapter.exercises?.length ? (
                    <li className="flex items-center gap-2">
                      <Icone nom="application" className="h-4 w-4 text-muted" />
                      {chapter.exercises.length} applications
                    </li>
                  ) : null}
                  <li className="flex items-center gap-2">
                    <Icone nom="cartes" className="h-4 w-4 text-muted" />
                    {chapter.flashcards.length} flashcards
                  </li>
                  <li className="flex items-center gap-2">
                    <Icone nom="quiz" className="h-4 w-4 text-muted" />
                    {chapter.quiz.length} questions
                  </li>
                </ul>
                {pctLocal != null && pctLocal > 0 && (
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Progression
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200/70">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${theme.bar}`}
                          style={{ width: `${pctLocal}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold tabular-nums text-muted">
                        {pctLocal} %
                      </span>
                    </div>
                  </div>
                )}
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
                    style={{
                      width: `${((index + 1) / sections.length) * 100}%`,
                    }}
                  />
                </div>
                <span className="shrink-0 text-xs tabular-nums text-muted">
                  {index + 1} / {sections.length}
                </span>
              </div>

              {index === 0 && chapter.videos && chapter.videos.length > 0 && (
                <div
                  className={`mb-10 space-y-6 rounded-2xl border p-5 ${theme.border} ${theme.soft}`}
                >
                  <h2
                    className={`text-xs font-black uppercase tracking-[0.18em] ${theme.text}`}
                  >
                    <Icone nom="video" className="h-4 w-4" />
                    {chapter.videos.length > 1
                      ? "Vidéos du chapitre"
                      : "Vidéo du chapitre"}
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
                      <figcaption className="mt-2 text-sm text-muted">
                        {v.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              <h2 className="mb-6 font-serif text-[1.75rem] font-bold leading-tight tracking-tight text-ink">
                <span
                  className={`mr-3 inline-block h-7 w-1.5 translate-y-0.5 rounded-full align-middle ${theme.bar}`}
                />
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
                ) : chapter.quiz.length ? (
                  <button
                    onClick={() => setTab("quiz")}
                    className={`rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110 ${theme.bar}`}
                  >
                    Passer au quiz →
                  </button>
                ) : null}
              </div>

              {/* Fin de chapitre : on ne laisse jamais l'étudiant dans une impasse. */}
              {index === last && suivant && (
                <Link
                  href={`/cours/${suivant.slug}`}
                  className="lift elev-sm group mt-6 flex items-center gap-4 rounded-2xl border border-line bg-white p-5"
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

          {ongletVerrouille && (
            <div className="mx-auto max-w-md rounded-2xl border border-line bg-white p-8 text-center elev-sm">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white">
                <Icone nom="verrou" className="h-7 w-7" />
              </span>
              <h2 className="mt-5 font-serif text-2xl font-bold text-ink">Ressource réservée</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                Cette ressource est réservée aux apprenants connectés. Le compte est gratuit et
                sauvegarde en plus votre progression d&apos;un appareil à l&apos;autre.
              </p>
              <Link
                href="/compte"
                className="lift mt-6 inline-block rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600"
              >
                Se connecter ou créer un compte
              </Link>
            </div>
          )}

          {!ongletVerrouille && tab === "methode" && <Methodologie chapter={chapter} />}
          {!ongletVerrouille && tab === "fiche" && <Fiche chapter={chapter} />}
          {tab === "annales" && !ongletVerrouille && <Annales chapter={chapter} />}
          {tab === "applications" && !ongletVerrouille && chapter.exercises && (
            <Exercises
              slug={chapter.slug}
              exercises={chapter.exercises}
              attributions={competencesAttribuees}
            />
          )}
          {tab === "flashcards" && !ongletVerrouille && (
            <div className="max-w-2xl">
              <Flashcards slug={chapter.slug} cards={chapter.flashcards} />
            </div>
          )}
          {tab === "quiz" && !ongletVerrouille && (
            <div className="max-w-2xl">
              <Quiz slug={chapter.slug} questions={chapter.quiz} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
