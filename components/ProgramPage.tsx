import Link from "next/link";
import type { Program } from "@/lib/content/types";

export function ProgramPage({ program }: { program: Program }) {
  const totals = program.chapters.reduce(
    (acc, c) => ({
      minutes: acc.minutes + c.durationMin,
      exercises: acc.exercises + (c.exercises?.length ?? 0),
      cards: acc.cards + c.flashcards.length,
      questions: acc.questions + c.quiz.length,
      videos: acc.videos + (c.videos?.length ?? 0),
    }),
    { minutes: 0, exercises: 0, cards: 0, questions: 0, videos: 0 }
  );

  const stats = [
    { value: program.chapters.length, label: "chapitres" },
    { value: `${Math.round(totals.minutes / 60)} h`, label: "de cours" },
    ...(totals.exercises ? [{ value: totals.exercises, label: "applications" }] : []),
    ...(totals.videos ? [{ value: totals.videos, label: "vidéos" }] : []),
    { value: totals.cards, label: "flashcards" },
    { value: totals.questions, label: "questions" },
  ];

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-12">
      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        {program.level} · {program.ue}
      </p>
      <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-[--ink] sm:text-5xl">
        {program.title}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[--muted]">
        {program.description}
      </p>

      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 rounded-2xl border border-[--line] bg-white px-6 py-5 shadow-sm">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="text-2xl font-bold tabular-nums text-[--ink]">{s.value}</dt>
            <dd className="text-xs uppercase tracking-wide text-[--muted]">{s.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 space-y-3">
        {program.chapters.map((c) => (
          <Link
            key={c.slug}
            href={`/cours/${c.slug}`}
            className="group flex items-start gap-5 rounded-2xl border border-[--line] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md sm:p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 font-serif text-lg font-bold text-white shadow-sm shadow-indigo-600/20">
              {c.number}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-serif text-xl font-bold leading-snug text-[--ink] transition group-hover:text-indigo-700">
                {c.title}
              </span>
              <span className="mt-1.5 block text-[15px] leading-relaxed text-[--muted]">
                {c.description}
              </span>
              <span className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <Pill>⏱ {c.durationMin} min</Pill>
                {c.videos?.length ? <Pill accent>🎬 vidéo</Pill> : null}
                {c.exercises?.length ? <Pill>✏️ {c.exercises.length} applications</Pill> : null}
                <Pill>🃏 {c.flashcards.length}</Pill>
                <Pill>✅ {c.quiz.length}</Pill>
              </span>
            </span>
            <span className="hidden shrink-0 self-center text-indigo-400 transition group-hover:translate-x-0.5 group-hover:text-indigo-600 sm:block">
              →
            </span>
          </Link>
        ))}

        {program.upcoming.map((c) => (
          <div
            key={c.number}
            className="flex items-center gap-5 rounded-2xl border border-dashed border-[--line] px-5 py-5 sm:px-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 font-serif text-lg font-bold text-slate-400">
              {c.number}
            </span>
            <span className="flex-1 font-medium text-slate-400">{c.title}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-400">
              Bientôt
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pill({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 font-medium ${
        accent ? "bg-indigo-50 text-indigo-700" : "bg-slate-100 text-slate-600"
      }`}
    >
      {children}
    </span>
  );
}
