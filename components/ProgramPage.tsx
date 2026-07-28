import Link from "next/link";
import type { Program } from "@/lib/content/types";

export function ProgramPage({ program }: { program: Program }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-sm font-semibold text-indigo-600">
        {program.level} · {program.ue}
      </p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
        {program.title}
      </h1>
      <p className="mt-3 leading-relaxed text-slate-600">{program.description}</p>

      <div className="mt-10 space-y-3">
        {program.chapters.map((c) => (
          <Link
            key={c.slug}
            href={`/cours/${c.slug}`}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:border-indigo-300 hover:shadow-sm"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
              {c.number}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-slate-900 group-hover:text-indigo-700">
                {c.title}
              </span>
              <span className="mt-0.5 block text-sm text-slate-500">
                {c.description}
              </span>
              <span className="mt-1.5 block text-xs text-slate-400">
                ⏱ {c.durationMin} min · {c.flashcards.length} flashcards · quiz de {c.quiz.length}{" "}
                questions
              </span>
            </span>
            <span className="text-indigo-500">→</span>
          </Link>
        ))}

        {program.upcoming.map((c) => (
          <div
            key={c.number}
            className="flex items-center gap-4 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200 font-bold text-slate-400">
              {c.number}
            </span>
            <span className="flex-1">
              <span className="block font-medium text-slate-400">{c.title}</span>
            </span>
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-400">
              Bientôt
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
