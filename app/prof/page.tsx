import type { Metadata } from "next";
import Link from "next/link";
import { prisma, dbConfigured } from "@/lib/db";
import { adminConfigure, sessionOuverte } from "@/lib/auth";
import { allChapters } from "@/lib/content";
import { dateCourte, dateIso } from "@/lib/seances";
import { LoginForm } from "./LoginForm";
import { SeanceForm, type ChapitreOption } from "./SeanceForm";
import { enregistrerRessourcesReservees, seDeconnecter, supprimerSeance } from "./actions";
import { RESSOURCES_RESERVABLES, ressourcesReservees } from "@/lib/apprenant";

export const metadata: Metadata = { title: "Espace professeur", robots: { index: false } };
export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{ seance?: string; nouvelle?: string }>;
}

const chapitresOptions = (): ChapitreOption[] =>
  allChapters.map((c) => ({
    slug: c.slug,
    titre: c.title,
    niveau: `${c.level} ${c.ue}`,
    numero: c.number,
    sections: c.sections.map((s) => s.title),
  }));

export default async function ProfPage({ searchParams }: Props) {
  const { seance: seanceId, nouvelle } = await searchParams;

  if (!adminConfigure() || !dbConfigured) {
    return (
      <Cadre titre="Espace professeur">
        <p className="text-muted">
          L&apos;espace professeur n&apos;est pas configuré. Renseignez{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">DATABASE_URL</code>,{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">ADMIN_PASSWORD</code> et{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">ADMIN_SESSION_SECRET</code>{" "}
          dans <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">.env.local</code>{" "}
          (voir <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">.env.example</code>).
        </p>
      </Cadre>
    );
  }

  if (!(await sessionOuverte())) {
    return (
      <Cadre titre="Espace professeur">
        <LoginForm />
      </Cadre>
    );
  }

  const seances = await prisma.seance.findMany({ orderBy: { date: "desc" } });
  const classes = [...new Set(seances.map((s) => s.classe))];
  const reservees = await ressourcesReservees();

  // Formulaire de création ou d'édition
  if (nouvelle || seanceId) {
    const existante = seanceId ? seances.find((s) => s.id === seanceId) : undefined;
    return (
      <Cadre titre={existante ? "Modifier la séance" : "Nouvelle séance"}>
        <SeanceForm
          chapitres={chapitresOptions()}
          classesConnues={classes}
          initiale={{
            id: existante?.id,
            date: dateIso(existante?.date) || dateIso(new Date()),
            classe: existante?.classe ?? classes[0] ?? "",
            chapitre: existante?.chapitre ?? "",
            sections: existante?.sections ?? "",
            travail: existante?.travail ?? "",
            pourLe: dateIso(existante?.pourLe),
            remarques: existante?.remarques ?? "",
            publiee: existante?.publiee ?? true,
          }}
        />
      </Cadre>
    );
  }

  return (
    <Cadre titre="Cahier de texte">
      {/* ── Visibilité des ressources ─────────────────────────────── */}
      <section className="mb-10 rounded-2xl border border-line bg-white p-6 elev-sm">
        <h2 className="font-serif text-xl font-bold text-ink">
          Ressources réservées aux apprenants connectés
        </h2>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
          Ce qui est coché n&apos;est visible que pour les apprenants connectés à leur compte —
          le contenu réservé n&apos;est même pas envoyé au navigateur des autres visiteurs. La
          leçon, elle, reste toujours publique : c&apos;est la vitrine du site.
        </p>
        <form action={enregistrerRessourcesReservees} className="mt-5">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {RESSOURCES_RESERVABLES.map((r) => (
              <label key={r.id} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <input
                  type="checkbox"
                  name="ressource"
                  value={r.id}
                  defaultChecked={reservees.includes(r.id)}
                />
                {r.libelle}
              </label>
            ))}
          </div>
          <button className="mt-5 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Enregistrer la visibilité
          </button>
        </form>
      </section>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-muted">
          {seances.length} séance{seances.length > 1 ? "s" : ""}
          {classes.length > 1 ? ` · ${classes.length} classes` : ""}
        </p>
        <div className="flex gap-3">
          <Link
            href="/prof?nouvelle=1"
            className="lift rounded-xl bg-brand px-5 py-2.5 font-bold text-white elev-md hover:bg-orange-600"
          >
            + Nouvelle séance
          </Link>
          <form action={seDeconnecter}>
            <button className="rounded-xl border border-line bg-white px-5 py-2.5 font-bold text-muted transition hover:text-ink">
              Déconnexion
            </button>
          </form>
        </div>
      </div>

      {seances.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line px-6 py-10 text-center text-muted">
          Aucune séance pour l&apos;instant. Créez la première.
        </p>
      ) : (
        <ul className="space-y-3">
          {seances.map((s) => {
            const chapitre = allChapters.find((c) => c.slug === s.chapitre);
            return (
              <li
                key={s.id}
                className="elev-sm flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-white p-5"
              >
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-center gap-2 text-xs font-bold text-muted">
                    <span>{dateCourte(s.date)}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">{s.classe}</span>
                    {!s.publiee && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">
                        brouillon
                      </span>
                    )}
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-ink">
                    {chapitre ? chapitre.title : `⚠ chapitre inconnu (${s.chapitre})`}
                    {s.sections ? (
                      <span className="ml-2 text-sm font-semibold text-muted">
                        sections {s.sections}
                      </span>
                    ) : null}
                  </p>
                  {s.travail && (
                    <p className="mt-1 text-sm text-muted">
                      À faire : {s.travail}
                      {s.pourLe ? ` — pour le ${dateCourte(s.pourLe)}` : ""}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/prof?seance=${s.id}`}
                    className="rounded-lg border border-line px-4 py-2 text-sm font-bold text-muted transition hover:text-ink"
                  >
                    Modifier
                  </Link>
                  <form action={supprimerSeance}>
                    <input type="hidden" name="id" value={s.id} />
                    <button className="rounded-lg border border-rose-200 px-4 py-2 text-sm font-bold text-rose-700 transition hover:bg-rose-50">
                      Supprimer
                    </button>
                  </form>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Cadre>
  );
}

function Cadre({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-12">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand">Espace professeur</p>
      <h1 className="mb-8 mt-2 font-serif text-4xl font-bold tracking-[-0.03em] text-ink">
        {titre}
      </h1>
      {children}
    </div>
  );
}
