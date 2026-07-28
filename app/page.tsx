import Link from "next/link";
import { programs, allChapters } from "@/lib/content";

const features = [
  {
    icon: "📖",
    title: "Cours structurés",
    text: "Le programme officiel chapitre par chapitre : définitions encadrées, tableaux, exemples chiffrés et pièges d'examen signalés. On lit section par section, sans scroll interminable.",
  },
  {
    icon: "🎬",
    title: "Vidéos de cours",
    text: "Des vidéos courtes intégrées au chapitre pour aborder la notion autrement, avant ou après la lecture.",
  },
  {
    icon: "📝",
    title: "Fiches de révision",
    text: "La synthèse du chapitre et toutes les notions à mémoriser sur une page, imprimable en un clic pour réviser hors ligne.",
  },
  {
    icon: "✏️",
    title: "Applications corrigées",
    text: "Les cas du cahier d'exercices à faire en ligne, avec le corrigé détaillé que l'on n'affiche qu'une fois qu'on a cherché.",
  },
  {
    icon: "🃏",
    title: "Flashcards",
    text: "Définitions et formules à ancrer, avec suivi des cartes acquises et retour automatique de celles à revoir.",
  },
  {
    icon: "✅",
    title: "Quiz corrigés",
    text: "Des QCM type examen, corrigés et expliqués question par question, pour valider chaque chapitre.",
  },
];

export default function Home() {
  const totals = allChapters.reduce(
    (acc, c) => ({
      exercises: acc.exercises + (c.exercises?.length ?? 0),
      cards: acc.cards + c.flashcards.length,
      questions: acc.questions + c.quiz.length,
    }),
    { exercises: 0, cards: 0, questions: 0 }
  );

  return (
    <div>
      <section className="relative overflow-hidden border-b border-[--line]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,70,229,0.10),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-[1100px] px-5 py-20 text-center sm:py-28">
          <p className="mb-5 inline-block rounded-full border border-indigo-200/70 bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-indigo-700 shadow-sm">
            DCG UE11 · DSCG UE3
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-[2.75rem] font-bold leading-[1.08] tracking-tight text-[--ink] sm:text-6xl">
            Réussir le{" "}
            <span className="bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              contrôle de gestion
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[--muted]">
            Cours complets, vidéos, fiches de révision, applications corrigées, flashcards et quiz
            pour préparer l&apos;UE11 du DCG et l&apos;UE3 du DSCG. Comprendre, s&apos;entraîner,
            mémoriser.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/dcg"
              className="rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:brightness-110"
            >
              Commencer le DCG
            </Link>
            <Link
              href="/dscg"
              className="rounded-xl border border-[--line] bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              Voir le DSCG
            </Link>
          </div>

          <dl className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-12 gap-y-6">
            {[
              { v: allChapters.length, l: "chapitres" },
              { v: totals.exercises, l: "applications" },
              { v: totals.cards, l: "flashcards" },
              { v: totals.questions, l: "questions de quiz" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-3xl font-bold tabular-nums text-[--ink]">{s.v}</dt>
                <dd className="text-xs uppercase tracking-wide text-[--muted]">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-20">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[--ink]">
          Six façons de travailler chaque chapitre
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-[--line] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[--ink]">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[--muted]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 pb-24">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[--ink]">
          Choisissez votre diplôme
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <Link
              key={p.level}
              href={`/${p.level.toLowerCase()}`}
              className="group relative overflow-hidden rounded-2xl border border-[--line] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-100 to-violet-100 opacity-0 transition group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl font-bold text-[--ink]">
                    {p.level} <span className="text-indigo-600">{p.ue}</span>
                  </h3>
                  <span className="text-sm text-[--muted]">{p.chapters.length} chapitres</span>
                </div>
                <p className="mt-1.5 font-medium text-slate-700">{p.title}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-[--muted]">{p.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-indigo-600">
                  Accéder au programme →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
