import Link from "next/link";
import { programs, allChapters } from "@/lib/content";
import { familiesOf } from "@/lib/content/theme";

const features = [
  {
    icon: "📖",
    title: "Cours structurés",
    text: "Le programme officiel chapitre par chapitre, lu section par section — sans scroll interminable.",
    ring: "hover:border-violet-400 hover:shadow-violet-200/60",
    chip: "bg-violet-100 text-violet-700",
  },
  {
    icon: "🎬",
    title: "Vidéos de cours",
    text: "Des vidéos courtes intégrées au chapitre, pour aborder la notion autrement.",
    ring: "hover:border-rose-400 hover:shadow-rose-200/60",
    chip: "bg-rose-100 text-rose-700",
  },
  {
    icon: "📝",
    title: "Fiches de révision",
    text: "La synthèse et les notions clés sur une page, imprimable en un clic.",
    ring: "hover:border-orange-400 hover:shadow-orange-200/60",
    chip: "bg-orange-100 text-orange-700",
  },
  {
    icon: "🃏",
    title: "Flashcards",
    text: "Définitions et formules à ancrer, avec retour automatique des cartes à revoir.",
    ring: "hover:border-emerald-400 hover:shadow-emerald-200/60",
    chip: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: "✅",
    title: "Quiz corrigés",
    text: "Des QCM type examen, expliqués question par question.",
    ring: "hover:border-sky-400 hover:shadow-sky-200/60",
    chip: "bg-sky-100 text-sky-700",
  },
  {
    icon: "🎯",
    title: "Repères visuels",
    text: "Chaque famille du programme a sa couleur : vous savez toujours où vous êtes.",
    ring: "hover:border-fuchsia-400 hover:shadow-fuchsia-200/60",
    chip: "bg-fuchsia-100 text-fuchsia-700",
  },
];

const programAccent = {
  DCG: {
    bar: "bg-gradient-to-r from-violet-500 to-indigo-600",
    text: "text-violet-600",
    border: "hover:border-violet-400",
    glow: "hover:shadow-violet-200/60",
    blob: "from-violet-100 to-indigo-100",
  },
  DSCG: {
    bar: "bg-gradient-to-r from-emerald-400 to-teal-600",
    text: "text-emerald-600",
    border: "hover:border-emerald-400",
    glow: "hover:shadow-emerald-200/60",
    blob: "from-emerald-100 to-teal-100",
  },
} as const;

export default function Home() {
  const totals = allChapters.reduce(
    (acc, c) => ({
      minutes: acc.minutes + c.durationMin,
      cards: acc.cards + c.flashcards.length,
      questions: acc.questions + c.quiz.length,
    }),
    { minutes: 0, cards: 0, questions: 0 }
  );

  const families = familiesOf(allChapters.map((c) => c.slug));

  return (
    <div>
      <section className="relative overflow-hidden border-b-2 border-[--line]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_55%_at_15%_0%,rgba(249,115,22,0.16),transparent_65%),radial-gradient(45%_55%_at_50%_0%,rgba(139,92,246,0.20),transparent_65%),radial-gradient(45%_55%_at_85%_10%,rgba(16,185,129,0.16),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-[1100px] px-5 py-20 text-center sm:py-28">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-violet-200 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-[0.15em] text-violet-700 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-br from-violet-500 to-indigo-600" />
            DCG UE11 · DSCG UE3
          </p>
          <h1 className="mx-auto max-w-3xl font-serif text-[2.75rem] font-bold leading-[1.05] tracking-tight text-[--ink] sm:text-[4rem]">
            Réussir le{" "}
            <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-emerald-500 bg-clip-text text-transparent">
              contrôle de gestion
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[--muted]">
            Cours complets, vidéos, fiches de révision, flashcards et quiz corrigés pour préparer
            l&apos;UE11 du DCG et l&apos;UE3 du DSCG. Comprendre, s&apos;entraîner, mémoriser.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/dcg"
              className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-bold text-white shadow-lg shadow-violet-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/40"
            >
              Commencer le DCG
            </Link>
            <Link
              href="/dscg"
              className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 font-bold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40"
            >
              Voir le DSCG
            </Link>
          </div>

          <dl className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-12 gap-y-6">
            {[
              { v: allChapters.length, l: "chapitres", c: "text-violet-600" },
              { v: `${Math.round(totals.minutes / 60)} h`, l: "de cours", c: "text-orange-600" },
              { v: totals.cards, l: "flashcards", c: "text-emerald-600" },
              { v: totals.questions, l: "questions de quiz", c: "text-sky-600" },
            ].map((s) => (
              <div key={s.l}>
                <dt className={`font-serif text-4xl font-bold tabular-nums ${s.c}`}>{s.v}</dt>
                <dd className="text-xs font-semibold uppercase tracking-wide text-[--muted]">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-20">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[--ink] sm:text-4xl">
          Une couleur par famille du programme
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[17px] leading-relaxed text-[--muted]">
          Le contrôle de gestion s&apos;organise en grands blocs. Chacun a sa teinte sur tout le
          site — dans le sommaire, la barre de progression, les boutons — pour vous situer d&apos;un
          coup d&apos;œil.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {families.map((f) => (
            <span
              key={f.family}
              className={`inline-flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 text-sm font-bold shadow-sm ${f.border} ${f.text}`}
            >
              <span className={`h-3 w-3 rounded-full ${f.bar}`} />
              {f.emoji} {f.family}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 pb-20">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[--ink] sm:text-4xl">
          Cinq façons de travailler chaque chapitre
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl border-2 border-[--line] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${f.ring}`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${f.chip}`}
              >
                {f.icon}
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold text-[--ink]">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[--muted]">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 pb-24">
        <h2 className="text-center font-serif text-3xl font-bold tracking-tight text-[--ink] sm:text-4xl">
          Choisissez votre diplôme
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((p) => {
            const a = programAccent[p.level];
            return (
              <Link
                key={p.level}
                href={`/${p.level.toLowerCase()}`}
                className={`group relative overflow-hidden rounded-2xl border-2 border-[--line] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${a.border} ${a.glow}`}
              >
                <div className={`h-2 w-full ${a.bar}`} />
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-16 -top-10 h-40 w-40 rounded-full bg-gradient-to-br opacity-0 transition group-hover:opacity-100 ${a.blob}`}
                />
                <div className="relative p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl font-bold text-[--ink]">
                      {p.level} <span className={a.text}>{p.ue}</span>
                    </h3>
                    <span className="text-sm font-semibold text-[--muted]">
                      {p.chapters.length} chapitres
                    </span>
                  </div>
                  <p className="mt-1.5 font-semibold text-slate-700">{p.title}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-[--muted]">{p.description}</p>
                  <span className={`mt-5 inline-block text-sm font-bold ${a.text}`}>
                    Accéder au programme →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
