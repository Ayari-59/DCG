import type { Metadata } from "next";
import Link from "next/link";
import { prisma, dbConfigured } from "@/lib/db";
import { allChapters } from "@/lib/content";
import { getTheme } from "@/lib/content/theme";
import { dateJour, dateCourte, numerosDeSections } from "@/lib/seances";

export const metadata: Metadata = {
  title: "Cahier de texte",
  description: "Le suivi des séances : ce qui a été traité en cours et le travail à faire.",
};

// Les séances changent en cours d'année : la page se régénère régulièrement
// plutôt que d'être figée à la construction du site.
export const revalidate = 60;

export default async function ClassePage({
  searchParams,
}: {
  searchParams: Promise<{ classe?: string }>;
}) {
  const { classe: classeFiltre } = await searchParams;

  if (!dbConfigured) {
    return (
      <Cadre>
        <p className="rounded-2xl border-2 border-dashed border-line px-6 py-10 text-center text-muted">
          Le cahier de texte n&apos;est pas encore activé.
        </p>
      </Cadre>
    );
  }

  const toutes = await prisma.seance.findMany({
    where: { publiee: true },
    orderBy: { date: "desc" },
  });

  const classes = [...new Set(toutes.map((s) => s.classe))];
  const seances = classeFiltre ? toutes.filter((s) => s.classe === classeFiltre) : toutes;

  const aujourdhui = new Date();
  aujourdhui.setHours(0, 0, 0, 0);
  const echeances = seances
    .filter((s) => s.pourLe && s.travail && s.pourLe >= aujourdhui)
    .sort((a, b) => a.pourLe!.getTime() - b.pourLe!.getTime());

  // Progression dans le programme : chapitres déjà traités en cours.
  const traites = new Set(seances.map((s) => s.chapitre));

  return (
    <Cadre>
      {classes.length > 1 && (
        <div className="mb-8 flex flex-wrap gap-2">
          <Filtre href="/classe" actif={!classeFiltre}>
            Toutes les classes
          </Filtre>
          {classes.map((c) => (
            <Filtre key={c} href={`/classe?classe=${encodeURIComponent(c)}`} actif={classeFiltre === c}>
              {c}
            </Filtre>
          ))}
        </div>
      )}

      {echeances.length > 0 && (
        <section className="elev-sm mb-10 rounded-3xl border-2 border-brand/40 bg-orange-50 p-6">
          <h2 className="text-xs font-black uppercase tracking-[0.15em] text-brand">
            À rendre prochainement
          </h2>
          <ul className="mt-4 space-y-3">
            {echeances.slice(0, 4).map((s) => (
              <li key={s.id} className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-bold text-ink">{dateCourte(s.pourLe!)}</span>
                <span className="text-muted">{s.travail}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-12">
        <h2 className="mb-4 font-serif text-2xl font-bold text-ink">Où en est la classe</h2>
        <div className="flex flex-wrap gap-1.5">
          {allChapters
            .filter((c) => c.level === "DCG")
            .map((c) => {
              const theme = getTheme(c.slug);
              const fait = traites.has(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={`/cours/${c.slug}`}
                  title={`${c.number}. ${c.title}${fait ? " — traité en cours" : ""}`}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold transition hover:scale-110 ${
                    fait ? `${theme.badge} text-white` : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {c.number}
                </Link>
              );
            })}
        </div>
        <p className="mt-3 text-sm text-muted">
          {traites.size} chapitre{traites.size > 1 ? "s" : ""} traité
          {traites.size > 1 ? "s" : ""} en cours — cliquez pour ouvrir.
        </p>
      </section>

      <h2 className="mb-4 font-serif text-2xl font-bold text-ink">Les séances</h2>
      {seances.length === 0 ? (
        <p className="rounded-2xl border-2 border-dashed border-line px-6 py-10 text-center text-muted">
          Aucune séance publiée pour l&apos;instant.
        </p>
      ) : (
        <ol className="space-y-4">
          {seances.map((s) => {
            const chapitre = allChapters.find((c) => c.slug === s.chapitre);
            const theme = getTheme(s.chapitre);
            const numeros = numerosDeSections(s.sections);
            return (
              <li
                key={s.id}
                className="elev-sm overflow-hidden rounded-3xl border-2 border-line bg-white"
              >
                <div className={`h-1.5 w-full ${theme.bar}`} />
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-muted">
                    {dateJour(s.date)}
                    {classes.length > 1 ? ` · ${s.classe}` : ""}
                  </p>

                  {chapitre ? (
                    <Link
                      href={`/cours/${chapitre.slug}`}
                      className={`mt-1.5 block font-serif text-xl font-bold text-ink transition hover:underline`}
                    >
                      {chapitre.number}. {chapitre.title}
                    </Link>
                  ) : (
                    <p className="mt-1.5 font-serif text-xl font-bold text-muted">
                      Chapitre introuvable
                    </p>
                  )}

                  {chapitre && numeros.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {numeros.map((n) => {
                        const section = chapitre.sections[n - 1];
                        if (!section) return null;
                        return (
                          <li key={n} className="flex gap-2 text-[15px] text-slate-700">
                            <span className={`font-bold ${theme.text}`}>{n}.</span>
                            {section.title}
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {s.travail && (
                    <p className="mt-4 rounded-xl bg-slate-50 px-4 py-3 text-[15px] text-slate-700">
                      <span className="font-bold text-ink">À faire</span>
                      {s.pourLe ? (
                        <span className="font-bold text-ink"> pour le {dateCourte(s.pourLe)}</span>
                      ) : null}{" "}
                      : {s.travail}
                    </p>
                  )}

                  {s.remarques && (
                    <p className="mt-3 text-[15px] italic text-muted">{s.remarques}</p>
                  )}

                  {chapitre && (
                    <div className="mt-5 flex flex-wrap gap-2 text-sm">
                      <Lien href={`/cours/${chapitre.slug}`}>Revoir la leçon</Lien>
                      {chapitre.flashcards.length > 0 && (
                        <Lien href={`/cours/${chapitre.slug}`}>
                          {chapitre.flashcards.length} flashcards
                        </Lien>
                      )}
                      {chapitre.quiz.length > 0 && (
                        <Lien href={`/cours/${chapitre.slug}`}>Quiz du chapitre</Lien>
                      )}
                      {chapitre.annales?.length ? (
                        <Lien href={`/cours/${chapitre.slug}`}>
                          {chapitre.annales.length} annales
                        </Lien>
                      ) : null}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </Cadre>
  );
}

function Cadre({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-12">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">Ma classe</p>
      <h1 className="mb-3 mt-2 font-serif text-5xl font-bold tracking-[-0.03em] text-ink">
        Cahier de texte
      </h1>
      <p className="mb-10 max-w-2xl text-[17px] leading-relaxed text-muted">
        Ce qui a été traité en cours, séance par séance, et le travail à faire — avec un lien direct
        vers les parties correspondantes du site.
      </p>
      {children}
    </div>
  );
}

function Filtre({
  href,
  actif,
  children,
}: {
  href: string;
  actif: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border-2 px-4 py-1.5 text-sm font-bold transition ${
        actif ? "border-brand bg-orange-50 text-brand" : "border-line bg-white text-muted hover:text-ink"
      }`}
    >
      {children}
    </Link>
  );
}

function Lien({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-full bg-slate-100 px-3.5 py-1.5 font-semibold text-slate-700 transition hover:bg-slate-200"
    >
      {children} →
    </Link>
  );
}
