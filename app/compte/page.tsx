import type { Metadata } from "next";
import Link from "next/link";
import { apprenantConnecte } from "@/lib/apprenant";
import { prisma } from "@/lib/db";
import { programs } from "@/lib/content";
import { getTheme } from "@/lib/content/theme";
import { progressionDuChapitre, progressionGlobale } from "@/lib/progression";
import { Icone } from "@/components/Icones";
import { deconnecter, supprimerCompte } from "./actions";
import { FormulaireCompte } from "./FormulaireCompte";

export const metadata: Metadata = {
  title: "Mon espace",
  description:
    "Progression par chapitre, scores de quiz et cartes acquises — le compte, facultatif, la sauvegarde d'un appareil à l'autre.",
};

/** La page dépend du cookie de session : elle ne peut pas être figée. */
export const dynamic = "force-dynamic";

export default async function ComptePage() {
  const apprenant = await apprenantConnecte();

  if (!apprenant) {
    return (
      <div className="mx-auto max-w-[860px] px-5 py-16">
        <h1 className="text-center font-serif text-4xl font-bold tracking-[-0.02em] text-ink">
          Mon espace
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-muted">
          Retrouvez votre progression sur tous vos appareils et accédez aux ressources réservées.
        </p>
        <div className="mt-10">
          <FormulaireCompte />
        </div>
      </div>
    );
  }

  const rows = await prisma.progression.findMany({
    where: { apprenantId: apprenant.id },
  });
  const parChapitre = new Map(rows.map((p) => [p.chapitre, p]));

  const ues = programs.map((prog) => {
    const lignes = prog.chapters.map((c) => {
      const p = parChapitre.get(c.slug);
      const sectionsLues = (p?.sectionsLues as string[] | null) ?? [];
      const cartes = (p?.cartes as string[] | null) ?? [];
      const applications = (p?.applications as Record<string, string> | null) ?? {};
      const progression = progressionDuChapitre(c, {
        sectionsLues,
        quizScore: p?.quizScore,
        quizTotal: p?.quizTotal,
        cartes,
        applications,
      });
      return {
        chapitre: c,
        theme: getTheme(c.slug),
        quiz: p?.quizScore != null ? `${p.quizScore}/${p.quizTotal}` : null,
        quizPct:
          p?.quizScore != null && p.quizTotal
            ? Math.round((100 * p.quizScore) / p.quizTotal)
            : null,
        cartes: cartes.length,
        cartesTotal: c.flashcards.length,
        applis: Object.keys(applications).length,
        applisTotal: c.exercises?.length ?? 0,
        sectionsLues: sectionsLues.length,
        sectionsTotal: c.sections.length,
        progression,
        commence: Boolean(p),
      };
    });
    const pctGlobal = Math.round(progressionGlobale(lignes.map((l) => l.progression)) * 100);
    return { prog, lignes, pctGlobal };
  });

  const toutesLignes = ues.flatMap((u) => u.lignes);
  const commences = toutesLignes.filter((l) => l.commence).length;
  const cartesAcquises = toutesLignes.reduce((n, l) => n + l.cartes, 0);
  const quizJoues = toutesLignes.filter((l) => l.quiz).length;
  const applicationsTravaillees = toutesLignes.reduce((n, l) => n + l.applis, 0);

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">Mon espace</p>
          <h1 className="mt-2 font-serif text-4xl font-bold tracking-[-0.02em] text-ink">
            Bonjour {apprenant.prenom}
          </h1>
        </div>
        <form action={deconnecter}>
          <button className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-muted transition hover:border-brand hover:text-ink">
            Se déconnecter
          </button>
        </form>
      </div>

      <dl className="chiffres mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-line bg-white px-6 py-5 elev-sm sm:max-w-2xl sm:grid-cols-4">
        {[
          { v: commences, l: "chapitres commencés" },
          { v: quizJoues, l: "quiz joués" },
          { v: cartesAcquises, l: "cartes acquises" },
          { v: applicationsTravaillees, l: "applications travaillées" },
        ].map((s) => (
          <div key={s.l}>
            <dt className="font-serif text-3xl font-bold text-navy">{s.v}</dt>
            <dd className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-muted">
              {s.l}
            </dd>
          </div>
        ))}
      </dl>

      {ues.map(({ prog, lignes, pctGlobal }) => (
        <section key={prog.ue} className="mt-10">
          <div className="mb-4 flex items-center gap-4">
            <h2 className="font-serif text-xl font-bold text-ink">
              {prog.ue} — {prog.title}
            </h2>
            <span className="ml-auto shrink-0 text-sm font-bold tabular-nums text-brand">
              {pctGlobal} %
            </span>
          </div>
          <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-200/70">
            <div
              className="h-full rounded-full bg-brand transition-all duration-500"
              style={{ width: `${pctGlobal}%` }}
            />
          </div>
          <div className="space-y-2.5">
            {lignes.map(
              ({
                chapitre,
                theme,
                quiz,
                quizPct,
                cartes,
                cartesTotal,
                applis,
                applisTotal,
                sectionsLues,
                sectionsTotal,
                progression,
                commence,
              }) => {
                const pct = Math.round(progression.global * 100);
                return (
                  <Link
                    key={chapitre.slug}
                    href={`/cours/${chapitre.slug}`}
                    className={`group flex items-center gap-4 rounded-xl border border-line bg-white px-4 py-3 transition hover:border-brand/50 ${
                      commence ? "" : "opacity-60"
                    }`}
                  >
                    <span className={`h-9 w-1.5 shrink-0 rounded-full ${theme.bar}`} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[15px] font-semibold text-ink">
                        {chapitre.number}. {chapitre.title}
                      </span>
                      <span className="mt-1.5 flex items-center gap-2">
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200/70">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${theme.bar}`}
                            style={{ width: `${pct}%` }}
                          />
                        </span>
                        <span className="shrink-0 text-xs font-semibold tabular-nums text-muted">
                          {pct} %
                        </span>
                      </span>
                    </span>
                    <span className="hidden shrink-0 items-center gap-4 text-sm tabular-nums sm:flex">
                      <span
                        className={`flex items-center gap-1 ${
                          sectionsLues > 0 ? "text-muted" : "text-slate-300"
                        }`}
                        title="Sections lues"
                      >
                        <Icone nom="sections" className="h-3.5 w-3.5" />
                        {sectionsLues}/{sectionsTotal}
                      </span>
                      <span
                        className={`flex items-center gap-1 ${
                          quizPct == null
                            ? "text-slate-300"
                            : quizPct >= 80
                              ? "text-emerald-700"
                              : "text-muted"
                        }`}
                        title="Quiz"
                      >
                        <Icone nom="quiz" className="h-3.5 w-3.5" />
                        {quiz ?? "—"}
                      </span>
                      <span
                        className={`flex items-center gap-1 ${cartes ? "text-muted" : "text-slate-300"}`}
                        title="Flashcards"
                      >
                        <Icone nom="cartes" className="h-3.5 w-3.5" />
                        {cartes}/{cartesTotal}
                      </span>
                      {applisTotal > 0 && (
                        <span
                          className={`flex items-center gap-1 ${applis ? "text-muted" : "text-slate-300"}`}
                          title="Applications"
                        >
                          <Icone nom="application" className="h-3.5 w-3.5" />
                          {applis}/{applisTotal}
                        </span>
                      )}
                    </span>
                  </Link>
                );
              },
            )}
          </div>
        </section>
      ))}

      {/* ── Données ─────────────────────────────────────────────────── */}
      <section className="mt-14 rounded-2xl border border-line bg-white p-6">
        <h2 className="font-serif text-xl font-bold text-ink">Mes données</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Le compte n&apos;enregistre que votre prénom, votre adresse e-mail et votre progression
          — voir la{" "}
          <Link href="/confidentialite" className="font-semibold text-brand hover:underline">
            politique de confidentialité
          </Link>
          . Le supprimer efface tout, immédiatement et sans confirmation par e-mail.
        </p>
        <form action={supprimerCompte} className="mt-4">
          <button className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-800 transition hover:bg-rose-100">
            Supprimer mon compte et toutes mes données
          </button>
        </form>
      </section>
    </div>
  );
}
