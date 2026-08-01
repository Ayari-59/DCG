import Link from "next/link";
import { programs, allChapters } from "@/lib/content";
import { familiesOf } from "@/lib/content/theme";
import { Reveal, Sheen } from "@/components/Reveal";
import { TargetMark } from "@/components/Logo";
import { Icone, type NomIcone } from "@/components/Icones";

const features: {
  icone: NomIcone;
  title: string;
  text: string;
  chip: string;
  hover: string;
}[] = [
  {
    icone: "cours",
    title: "Cours structurés",
    text: "Le programme officiel chapitre par chapitre, lu section par section — sans scroll interminable.",
    chip: "bg-violet-100 text-violet-700",
    hover: "hover:border-violet-300",
  },
  {
    icone: "methode",
    title: "Méthodologie",
    text: "Les démarches de l'épreuve, étape par étape, avec la compétence visée par chacune.",
    chip: "bg-emerald-100 text-emerald-700",
    hover: "hover:border-emerald-300",
  },
  {
    icone: "video",
    title: "Vidéos de cours",
    text: "Des vidéos courtes intégrées au chapitre, pour aborder la notion autrement.",
    chip: "bg-rose-100 text-rose-700",
    hover: "hover:border-rose-300",
  },
  {
    icone: "fiche",
    title: "Fiches de révision",
    text: "La synthèse et les notions clés sur une page, imprimable en un clic.",
    chip: "bg-orange-100 text-orange-700",
    hover: "hover:border-orange-300",
  },
  {
    icone: "cartes",
    title: "Flashcards",
    text: "Définitions et formules à ancrer, avec retour automatique des cartes à revoir.",
    chip: "bg-sky-100 text-sky-700",
    hover: "hover:border-sky-300",
  },
  {
    icone: "quiz",
    title: "Quiz corrigés",
    text: "Des QCM type examen, expliqués question par question.",
    chip: "bg-fuchsia-100 text-fuchsia-700",
    hover: "hover:border-fuchsia-300",
  },
];

/**
 * La chaîne YouTube de l'auteur. L'adresse d'abonnement ouvre la boîte de
 * confirmation directement, sans étape intermédiaire.
 */
const CHAINE = {
  nom: "Objectif-DCG",
  url: "https://www.youtube.com/@Objectif-DCG",
  abonnement: "https://www.youtube.com/@Objectif-DCG?sub_confirmation=1",
};

const programAccent = {
  DCG: {
    bar: "bg-brand",
    text: "text-orange-300",
    glowRing: "hover:border-orange-400/60",
  },
  DSCG: {
    bar: "bg-sky-500",
    text: "text-sky-300",
    glowRing: "hover:border-sky-400/60",
  },
} as const;

export default function Home() {
  const totals = allChapters.reduce(
    (acc, c) => ({
      minutes: acc.minutes + c.durationMin,
      cards: acc.cards + c.flashcards.length,
      questions: acc.questions + c.quiz.length,
      figures:
        acc.figures +
        c.sections.flatMap((s) => s.blocks).filter((b) => b.type === "image")
          .length,
    }),
    { minutes: 0, cards: 0, questions: 0, figures: 0 },
  );

  const families = familiesOf(allChapters.map((c) => c.slug));

  /*
   * Les vidéos mises en avant sont piochées dans les chapitres, pas
   * déclarées à la main : la vitrine suit le contenu. Quatre suffisent —
   * régulièrement espacées le long du programme pour montrer l'étendue.
   */
  const toutesLesVideos = allChapters.flatMap((c) =>
    (c.videos ?? []).map((v) => ({ chapitre: c, video: v })),
  );
  const vitrine = [0, 1, 2, 3].map(
    (k) => toutesLesVideos[Math.round((k * (toutesLesVideos.length - 1)) / 3)],
  );

  return (
    <div>
      {/* ── Accroche ─────────────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-navy-deep">
        <div className="relative mx-auto max-w-[1100px] px-5 py-28 text-center sm:py-36">
          <Reveal>
            <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
              <TargetMark className="h-4 w-4" onDark compact />
              DCG UE11 · DSCG UE3
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mx-auto max-w-4xl font-serif text-[3rem] font-bold leading-[0.98] tracking-[-0.03em] text-white sm:text-[5rem]">
              Réussir le
              <br />
              <span className="text-brand">contrôle de gestion</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              L&apos;intégralité du programme, en quatre temps : comprendre le
              cours, appliquer la méthode, mémoriser l&apos;essentiel, se
              tester.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-11 flex flex-wrap justify-center gap-4">
              <Link
                href="/dcg"
                className="lift rounded-2xl bg-brand px-9 py-4 font-bold text-white elev-lg hover:bg-orange-600"
              >
                Commencer le DCG
              </Link>
              <Link
                href="/dscg"
                className="lift rounded-2xl border border-white/20 bg-white/5 px-9 py-4 font-bold text-white backdrop-blur-md hover:bg-white/10"
              >
                Voir le DSCG
              </Link>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-y-10 sm:grid-cols-4">
              {[
                { v: allChapters.length, l: "chapitres" },
                { v: `${Math.round(totals.minutes / 60)} h`, l: "de cours" },
                { v: totals.figures, l: "schémas" },
                { v: totals.cards + totals.questions, l: "cartes & questions" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-4xl font-bold tabular-nums text-white sm:text-5xl">
                    {s.v}
                  </dt>
                  <dd className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Familles ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-5 py-24">
        <Reveal>
          <h2 className="text-center font-serif text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
            Une couleur par famille
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-muted">
            Le contrôle de gestion s&apos;organise en grands blocs. Chacun garde
            sa teinte sur tout le site — sommaire, progression, boutons — pour
            vous situer d&apos;un coup d&apos;œil.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {families.map((f, i) => (
            <Reveal key={f.family} delay={i * 60}>
              <span className="lift elev-sm inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold text-ink">
                <Icone nom={f.icone} className={`h-4 w-4 ${f.text}`} />
                {f.family}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Fonctionnalités ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-5 pb-24">
        <Reveal>
          <h2 className="text-center font-serif text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
            Six façons de travailler un chapitre
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <Sheen
                className={`lift elev-sm h-full rounded-3xl border border-line bg-white p-7 ${f.hover}`}
              >
                <div
                  className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${f.chip}`}
                >
                  <Icone nom={f.icone} className="h-7 w-7" />
                </div>
                <h3 className="relative mt-5 font-serif text-xl font-bold text-ink">
                  {f.title}
                </h3>
                <p className="relative mt-2.5 text-[15px] leading-relaxed text-muted">
                  {f.text}
                </p>
              </Sheen>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La chaîne ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-5 pb-24">
        <Reveal>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-rose-700">
              <Icone nom="video" className="h-4 w-4" />
              La chaîne
            </p>
            <h2 className="mt-5 font-serif text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
              Le programme, aussi en vidéo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-muted">
              {toutesLesVideos.length} vidéos courtes, gratuites, déjà intégrées en tête de chaque
              chapitre — et rassemblées sur la chaîne {CHAINE.nom}.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vitrine.map(({ chapitre, video }, i) => (
            <Reveal key={video.youtubeId} delay={(i % 4) * 70}>
              <Link
                href={`/cours/${chapitre.slug}`}
                className="lift elev-sm group block h-full overflow-hidden rounded-2xl border border-line bg-white"
              >
                <span className="relative block aspect-video overflow-hidden bg-navy-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg`}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-deep/70 text-white backdrop-blur-sm transition group-hover:bg-brand">
                      <Icone nom="video" className="h-5 w-5" />
                    </span>
                  </span>
                </span>
                <span className="block p-4">
                  <span className="block font-serif text-[15px] font-bold leading-snug text-ink">
                    {video.title}
                  </span>
                  <span className="mt-1.5 block text-xs text-muted">
                    Chapitre {chapitre.number} · {chapitre.title}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CHAINE.abonnement}
              target="_blank"
              rel="noopener noreferrer"
              className="lift inline-flex items-center gap-2.5 rounded-2xl bg-brand px-8 py-3.5 font-bold text-white elev-md hover:bg-orange-600"
            >
              <Icone nom="video" className="h-5 w-5" />
              S&apos;abonner à la chaîne
            </a>
            <a
              href={CHAINE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-muted underline-offset-4 transition hover:text-ink hover:underline"
            >
              Voir toutes les vidéos
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Diplômes ─────────────────────────────────────────────────── */}
      <section className="grain relative overflow-hidden bg-navy-deep py-24">
        <div className="relative mx-auto max-w-[1100px] px-5">
          <Reveal>
            <h2 className="text-center font-serif text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
              Choisissez votre diplôme
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {programs.map((p, i) => {
              const a = programAccent[p.level];
              return (
                <Reveal key={p.ue} delay={i * 110}>
                  <Link
                    /*
                     * L'adresse ne se déduit pas du diplôme : deux unités
                     * portent le niveau « DCG ». Déduite ainsi, la carte de
                     * l'UE13 renvoyait vers le programme de l'UE11.
                     */
                    href={p.ue === "UE11" ? "/dcg" : p.ue === "UE3" ? "/dscg" : "/ue13"}
                    className={`lift group block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md ${a.glowRing}`}
                  >
                    <div className={`h-1.5 w-full ${a.bar}`} />
                    <div className="p-9">
                      <div className="flex items-baseline justify-between">
                        <h3 className="font-serif text-3xl font-bold text-white">
                          {p.level} <span className={a.text}>{p.ue}</span>
                        </h3>
                        <span className="text-sm font-semibold text-white/40">
                          {p.chapters.length} chapitres
                        </span>
                      </div>
                      <p className="mt-2 font-semibold text-white/80">
                        {p.title}
                      </p>
                      <p className="mt-4 text-[15px] leading-relaxed text-white/50">
                        {p.description}
                      </p>
                      <span
                        className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${a.text}`}
                      >
                        Accéder au programme
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
