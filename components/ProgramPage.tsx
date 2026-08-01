import Link from "next/link";
import type { Chapter, Program } from "@/lib/content/types";
import { heuresDeTravail } from "@/lib/content";
import { getTheme } from "@/lib/content/theme";
import { Reveal } from "@/components/Reveal";
import { Icone } from "@/components/Icones";

export function ProgramPage({ program }: { program: Program }) {
  const totals = program.chapters.reduce(
    (acc, c) => ({
      minutes: acc.minutes + c.durationMin,
      cards: acc.cards + c.flashcards.length,
      questions: acc.questions + c.quiz.length,
      videos: acc.videos + (c.videos?.length ?? 0),
    }),
    { minutes: 0, cards: 0, questions: 0, videos: 0 },
  );

  const stats = [
    { value: program.chapters.length, label: "chapitres", color: "text-navy" },
    {
      value: `≈ ${heuresDeTravail(program.chapters)} h`,
      label: "de travail",
      color: "text-brand",
    },
    ...(totals.videos
      ? [{ value: totals.videos, label: "vidéos", color: "text-rose-600" }]
      : []),
    { value: totals.cards, label: "flashcards", color: "text-emerald-600" },
    { value: totals.questions, label: "questions", color: "text-sky-600" },
  ];

  // Regroupement par famille, dans l'ordre du programme.
  const groups: { family: string; chapters: Chapter[] }[] = [];
  for (const c of program.chapters) {
    const { family } = getTheme(c.slug);
    const last = groups.at(-1);
    if (last && last.family === family) last.chapters.push(c);
    else groups.push({ family, chapters: [c] });
  }

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-12">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">
        {program.level} · {program.ue}
      </p>
      <h1 className="mt-2 font-serif text-5xl font-bold tracking-[-0.03em] text-ink sm:text-6xl">
        {program.title}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
        {program.description}
      </p>

      <dl className="elev-md mt-8 flex flex-wrap gap-x-12 gap-y-5 rounded-3xl border border-line bg-white px-8 py-6">
        {stats.map((s) => (
          <div key={s.label}>
            <dt
              className={`font-serif text-3xl font-bold tabular-nums ${s.color}`}
            >
              {s.value}
            </dt>
            <dd className="text-xs font-semibold uppercase tracking-wide text-muted">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 space-y-12">
        {groups.map((group) => {
          const theme = getTheme(group.chapters[0].slug);
          return (
            <section key={group.family + group.chapters[0].slug}>
              <div className="mb-4 flex items-center gap-3">
                <Icone nom={theme.icone} className={`h-5 w-5 ${theme.text}`} />
                <h2 className={`font-serif text-xl font-bold ${theme.text}`}>
                  {group.family}
                </h2>
                <span
                  className={`h-1 flex-1 rounded-full ${theme.bar} opacity-30`}
                />
              </div>

              <div className="space-y-3">
                {group.chapters.map((c, i) => (
                  <Reveal key={c.slug} delay={Math.min(i, 4) * 70}>
                    <Link
                      href={`/cours/${c.slug}`}
                      className={`lift elev-sm sheen group flex items-start gap-5 rounded-3xl border border-line bg-white p-5 sm:p-6 ${theme.borderHover}`}
                    >
                      <span
                        className={`elev-md flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-serif text-2xl font-bold text-white ${theme.badge}`}
                      >
                        {c.number}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block font-serif text-xl font-bold leading-snug text-ink transition ${theme.textHover}`}
                        >
                          {c.title}
                        </span>
                        <span className="mt-1.5 block text-[15px] leading-relaxed text-muted">
                          {c.description}
                        </span>
                        <span className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                          <Pill className="bg-slate-100 text-slate-700">
                            <Icone nom="duree" className="h-3.5 w-3.5" />
                            {c.durationMin} min
                          </Pill>
                          {c.videos?.length ? (
                            <Pill className="bg-rose-100 text-rose-700">
                              <Icone nom="video" className="h-3.5 w-3.5" />
                              vidéo
                            </Pill>
                          ) : null}
                          <Pill className="bg-emerald-100 text-emerald-700">
                            <Icone nom="cartes" className="h-3.5 w-3.5" />
                            {c.flashcards.length}
                          </Pill>
                          <Pill className="bg-sky-100 text-sky-700">
                            <Icone nom="quiz" className="h-3.5 w-3.5" />
                            {c.quiz.length}
                          </Pill>
                        </span>
                      </span>
                      <span
                        className={`hidden shrink-0 self-center text-2xl transition-transform group-hover:translate-x-1 sm:block ${theme.text}`}
                      >
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}

        {program.upcoming.length > 0 && (
          <div className="space-y-3">
            {program.upcoming.map((c) => (
              <div
                key={c.number}
                className="flex items-center gap-5 rounded-2xl border border-dashed border-line px-5 py-5 sm:px-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 font-serif text-xl font-bold text-slate-400">
                  {c.number}
                </span>
                <span className="flex-1 font-medium text-slate-400">
                  {c.title}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-400">
                  Bientôt
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold ${className}`}
    >
      {children}
    </span>
  );
}
