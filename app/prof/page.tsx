import type { Metadata } from "next";
import Link from "next/link";
import { prisma, dbConfigured } from "@/lib/db";
import { cleActivationConfiguree } from "@/lib/auth";
import {
  RESSOURCES_RESERVABLES,
  agendaUrl,
  applicationsChoisies,
  chapitreCompetences,
  competencesAttribuees,
  matieresMasquees,
  ressourcesReservees,
} from "@/lib/apprenant";
import {
  applicationsParCompetences,
  cleCompetence,
  competencesDe,
  competencesDuChapitre,
  toutesLesCompetences,
} from "@/lib/content/competences";
import { enseignantConnecte, estFondateur } from "@/lib/enseignant";
import { allChapters, programs } from "@/lib/content";
import { dateCourte, dateIso } from "@/lib/seances";
import { LoginForm, BootstrapForm } from "./LoginForm";
import { InvitationForm, MotDePasseForm } from "./CompteForms";
import { SeanceForm, type ChapitreOption } from "./SeanceForm";
import { AgendaForm } from "./AgendaForm";
import { AnnonceForm } from "./AnnonceForm";
import {
  enregistrerApplicationsChoisies,
  enregistrerChapitreCompetences,
  enregistrerCompetencesExercices,
  enregistrerMatieresVisibles,
  enregistrerRessourcesReservees,
  retirerCollegue,
  seDeconnecter,
  supprimerAnnonce,
  supprimerSeance,
} from "./actions";

export const metadata: Metadata = { title: "Espace professeur", robots: { index: false } };
export const dynamic = "force-dynamic";

interface Props {
  searchParams: Promise<{
    seance?: string;
    nouvelle?: string;
    annonce?: string;
    nouvelleAnnonce?: string;
  }>;
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
  const { seance: seanceId, nouvelle, annonce: annonceId, nouvelleAnnonce } = await searchParams;

  if (!dbConfigured) {
    return (
      <Cadre titre="Espace professeur">
        <p className="text-muted">
          L&apos;espace professeur n&apos;est pas configuré : renseignez{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">DATABASE_URL</code> dans
          l&apos;environnement.
        </p>
      </Cadre>
    );
  }

  const enseignant = await enseignantConnecte();

  // ── Amorçage puis connexion ─────────────────────────────────────────
  if (!enseignant) {
    const comptes = await prisma.enseignant.count();
    if (comptes === 0) {
      if (!cleActivationConfiguree()) {
        return (
          <Cadre titre="Espace professeur">
            <p className="text-muted">
              Aucun compte enseignant n&apos;existe et la clé d&apos;activation{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">ADMIN_PASSWORD</code>{" "}
              n&apos;est pas définie dans l&apos;environnement : impossible d&apos;amorcer.
            </p>
          </Cadre>
        );
      }
      return (
        <Cadre titre="Créer le compte fondateur">
          <p className="mx-auto mb-8 max-w-sm text-center text-sm leading-relaxed text-muted">
            Aucun compte enseignant n&apos;existe encore. Le premier compte est celui du
            fondateur : il pourra ensuite inviter ses collègues.
          </p>
          <BootstrapForm />
        </Cadre>
      );
    }
    return (
      <Cadre titre="Espace professeur">
        <LoginForm />
      </Cadre>
    );
  }

  const fondateur = estFondateur(enseignant);
  const seances = await prisma.seance.findMany({
    where: fondateur ? {} : { enseignantId: enseignant.id },
    orderBy: { date: "desc" },
    include: { enseignant: { select: { prenom: true } } },
  });
  const classes = [...new Set(seances.map((s) => s.classe))];

  // ── Formulaire de création ou d'édition de séance ──────────────────
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
            lienVisio: existante?.lienVisio ?? "",
            publiee: existante?.publiee ?? true,
          }}
        />
      </Cadre>
    );
  }

  // ── Formulaire de création ou d'édition d'annonce ────────────────
  if (nouvelleAnnonce || annonceId) {
    const annonces = await prisma.annonce.findMany({
      where: fondateur ? {} : { enseignantId: enseignant.id },
    });
    const existante = annonceId ? annonces.find((a) => a.id === annonceId) : undefined;
    return (
      <Cadre titre={existante ? "Modifier l'annonce" : "Nouvelle annonce"}>
        <AnnonceForm
          classesConnues={classes}
          initiale={{
            id: existante?.id,
            titre: existante?.titre ?? "",
            contenu: existante?.contenu ?? "",
            classe: existante?.classe ?? "",
            publiee: existante?.publiee ?? true,
            epinglee: existante?.epinglee ?? false,
          }}
        />
      </Cadre>
    );
  }

  const masquees = await matieresMasquees();
  const urlAgenda = await agendaUrl();
  const annonces = await prisma.annonce.findMany({
    where: fondateur ? {} : { enseignantId: enseignant.id },
    orderBy: [{ epinglee: "desc" }, { createdAt: "desc" }],
    include: { enseignant: { select: { prenom: true } } },
  });
  const reservees = fondateur ? await ressourcesReservees() : [];
  const choixApplications = fondateur ? await applicationsChoisies() : {};
  const attributions = fondateur ? await competencesAttribuees() : {};
  const chaines = fondateur ? await chapitreCompetences() : {};
  /* La banque : toutes les compétences que les applications du site
   * travaillent, cahiers et attributions confondus. */
  const banque = fondateur ? toutesLesCompetences(allChapters, attributions) : [];
  const chapitresAvecApplications = fondateur
    ? allChapters.filter((c) => c.exercises?.length)
    : [];
  /* Vivier d'applications d'un chapitre : ce que la chaîne par
   * compétences produit s'il est rattaché, son cahier sinon. */
  const vivierDe = (c: (typeof allChapters)[number]) =>
    chaines[c.slug]?.length
      ? applicationsParCompetences(c.slug, chaines[c.slug], allChapters, attributions).exercises
      : c.exercises ?? [];
  const equipe = fondateur
    ? await prisma.enseignant.findMany({ orderBy: [{ role: "desc" }, { createdAt: "asc" }] })
    : [];

  return (
    <Cadre titre="Cahier de texte">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-muted">
          Bonjour <strong className="font-semibold text-ink">{enseignant.prenom}</strong>
          <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wide">
            {enseignant.role}
          </span>
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
                    {fondateur && s.enseignant && (
                      <span className="rounded-full bg-sky-100 px-2 py-0.5 text-sky-800">
                        {s.enseignant.prenom}
                      </span>
                    )}
                    {s.lienVisio && (
                      <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-indigo-800">
                        visio
                      </span>
                    )}
                    {!s.publiee && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-800">
                        brouillon
                      </span>
                    )}
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold text-ink">
                    {chapitre ? chapitre.title : `Chapitre inconnu (${s.chapitre})`}
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

      {/* ── Équipe (fondateur) ──────────────────────────────────────── */}
      {fondateur && (
        <details className="group mt-12 rounded-2xl border border-line bg-white elev-sm">
          <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
            Équipe enseignante
          </summary>
          <div className="border-t border-line px-6 pb-6 pt-4">
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
            Chaque collègue a son compte et gère ses propres classes dans le cahier de texte.
            Créez son compte avec un mot de passe provisoire, communiquez-le-lui : il le
            changera depuis son espace.
          </p>
          <ul className="mt-4 space-y-2">
            {equipe.map((e) => (
              <li
                key={e.id}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-line px-4 py-2.5"
              >
                <span className="min-w-0 flex-1">
                  <span className="font-semibold text-ink">{e.prenom}</span>
                  <span className="ml-2 text-sm text-muted">{e.email}</span>
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-muted">
                  {e.role}
                </span>
                {e.role !== "fondateur" && (
                  <form action={retirerCollegue}>
                    <input type="hidden" name="id" value={e.id} />
                    <button className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-bold text-rose-700 transition hover:bg-rose-50">
                      Retirer
                    </button>
                  </form>
                )}
              </li>
            ))}
          </ul>
          <InvitationForm />
          </div>
        </details>
      )}

      {/* ── Matières visibles ─────────────────────────────────────── */}
      <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
        <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
          Matières publiées sur le site
        </summary>
        <div className="border-t border-line px-6 pb-6 pt-4">
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
          Décochez une matière pour la masquer du site : ses cours, quiz et chapitres
          disparaîtront de la navigation et des pages publiques. Le contenu reste intact
          dans le dépôt — il suffit de recocher pour le republier.
        </p>
        <form action={enregistrerMatieresVisibles} className="mt-5">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {programs.map((p) => (
              <label
                key={p.ue}
                className="flex items-center gap-2 text-sm font-semibold text-ink"
              >
                <input
                  type="checkbox"
                  name="matiere"
                  value={p.ue}
                  defaultChecked={!masquees.includes(p.ue)}
                />
                {p.level} {p.ue} — {p.title}
              </label>
            ))}
          </div>
          <button className="mt-5 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
            Enregistrer
          </button>
        </form>
        </div>
      </details>

      {/* ── Visibilité des ressources (fondateur) ───────────────────── */}
      {fondateur && (
        <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
          <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
            Ressources réservées aux apprenants connectés
          </summary>
          <div className="border-t border-line px-6 pb-6 pt-4">
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
            Ce qui est coché n&apos;est visible que pour les apprenants connectés à leur compte —
            le contenu réservé n&apos;est même pas envoyé au navigateur des autres visiteurs. La
            leçon, elle, reste toujours publique : c&apos;est la vitrine du site.
          </p>
          <form action={enregistrerRessourcesReservees} className="mt-5">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {RESSOURCES_RESERVABLES.map((r) => (
                <label
                  key={r.id}
                  className="flex items-center gap-2 text-sm font-semibold text-ink"
                >
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
          </div>
        </details>
      )}

      {/* ── Compétences par chapitre : la chaîne ────────────────────── */}
      {fondateur && banque.length > 0 && (
        <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
          <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
            Compétences par chapitre
          </summary>
          <div className="border-t border-line px-6 pb-6 pt-4">
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
            Rattachez chaque chapitre à ses compétences : il publiera alors les applications qui
            les travaillent, y compris celles venues d&apos;autres cahiers. Un chapitre sans
            rattachement garde les applications de son propre cahier, comme aujourd&apos;hui.
            Tout décocher retire le rattachement.
          </p>
          <div className="mt-4 space-y-2">
            {allChapters.map((c) => {
              const rattachees = chaines[c.slug];
              const propres = new Set(
                competencesDuChapitre(
                  c.exercises ?? [],
                  Object.fromEntries(
                    Object.entries(attributions)
                      .filter(([cle]) => cle.startsWith(c.slug + ":"))
                      .map(([cle, comps]) => [cle.slice(c.slug.length + 1), comps])
                  ),
                  c.slug,
                ).map((comp) => comp.cle)
              );
              const cochee = (cle: string) =>
                rattachees ? rattachees.some((t) => cleCompetence(t) === cle) : propres.has(cle);
              return (
                <details key={c.slug} className="rounded-xl border border-line">
                  <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50">
                    {c.number}. {c.title}
                    {rattachees?.length ? (
                      <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800">
                        {rattachees.length} compétence{rattachees.length > 1 ? "s" : ""} ·{" "}
                        {vivierDe(c).length} application{vivierDe(c).length > 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-muted">
                        cahier · {(c.exercises ?? []).length} application
                        {(c.exercises ?? []).length > 1 ? "s" : ""}
                      </span>
                    )}
                  </summary>
                  <form
                    action={enregistrerChapitreCompetences}
                    className="border-t border-line px-4 py-4"
                  >
                    <input type="hidden" name="chapitre" value={c.slug} />
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                      {banque.map((comp) => (
                        <label
                          key={comp.cle}
                          className="flex items-start gap-1.5 text-sm text-slate-700"
                        >
                          <input
                            type="checkbox"
                            name="competence"
                            value={comp.texte}
                            defaultChecked={cochee(comp.cle)}
                            className="mt-1"
                          />
                          {comp.texte}
                          <span className="text-xs text-muted">{comp.applications}</span>
                        </label>
                      ))}
                    </div>
                    <button className="mt-4 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
                      Enregistrer ce chapitre
                    </button>
                  </form>
                </details>
              );
            })}
          </div>
          </div>
        </details>
      )}

      {/* ── Applications publiées, chapitre par chapitre ────────────── */}
      {fondateur && chapitresAvecApplications.length > 0 && (
        <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
          <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
            Applications par chapitre
          </summary>
          <div className="border-t border-line px-6 pb-6 pt-4">
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
            La retouche fine, après la chaîne par compétences : vous décidez des applications
            publiées sur chaque chapitre parmi son vivier — décochez celles à retirer, puis
            enregistrez le chapitre. Tout coché est l&apos;état normal — la restriction est
            l&apos;exception.
          </p>
          <div className="mt-4 space-y-2">
            {allChapters.map((c) => {
              const exercices = vivierDe(c);
              if (!exercices.length) return null;
              const cochees = new Set(choixApplications[c.slug] ?? exercices.map((e) => e.id));
              return (
                <details key={c.slug} className="rounded-xl border border-line">
                  <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50">
                    {c.number}. {c.title}
                    <span className="ml-2 text-xs font-bold text-muted">
                      {cochees.size}/{exercices.length} publiée{cochees.size > 1 ? "s" : ""}
                    </span>
                  </summary>
                  <form
                    action={enregistrerApplicationsChoisies}
                    className="border-t border-line px-4 py-4"
                  >
                    <input type="hidden" name="chapitre" value={c.slug} />
                    <ul className="space-y-2">
                      {exercices.map((e) => (
                        <li key={e.id}>
                          <label className="flex items-start gap-2.5 text-sm text-slate-700">
                            <input
                              type="checkbox"
                              name="exercice"
                              value={e.id}
                              defaultChecked={cochees.has(e.id)}
                              className="mt-0.5"
                            />
                            <span>
                              <span className="font-semibold text-ink">{e.title}</span>
                              <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-muted">
                                {e.label}
                              </span>
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-4 rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
                      Enregistrer ce chapitre
                    </button>
                  </form>
                </details>
              );
            })}
          </div>
          </div>
        </details>
      )}

      {/* ── Compétences des applications ────────────────────────────── */}
      {fondateur && chapitresAvecApplications.length > 0 && (
        <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
          <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
            Compétences des applications
          </summary>
          <div className="border-t border-line px-6 pb-6 pt-4">
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
            Règle du site : toute application porte au moins une compétence. La plupart la
            tiennent par leur bloc « Compétences visées » du cahier ; celles listées ici en sont
            dépourvues — cochez une compétence du chapitre ou saisissez-en une nouvelle.
          </p>
          <div className="mt-4 space-y-2">
            {chapitresAvecApplications.map((c) => {
              const exercices = c.exercises ?? [];
              const attribueesDe = (id: string) => attributions[`${c.slug}:${id}`] ?? [];
              const sansCompetence = exercices.filter(
                (e) => competencesDe(e, attribueesDe(e.id), c.slug).length === 0
              );
              if (sansCompetence.length === 0) return null;
              const banque = competencesDuChapitre(exercices, {}, c.slug);
              return (
                <details key={c.slug} className="rounded-xl border border-line">
                  <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-ink transition hover:bg-slate-50">
                    {c.number}. {c.title}
                    <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
                      {sansCompetence.length} sans compétence
                    </span>
                  </summary>
                  <form
                    action={enregistrerCompetencesExercices}
                    className="space-y-5 border-t border-line px-4 py-4"
                  >
                    <input type="hidden" name="chapitre" value={c.slug} />
                    {sansCompetence.map((e) => (
                      <div key={e.id}>
                        <input type="hidden" name="exercices" value={e.id} />
                        <p className="text-sm font-semibold text-ink">
                          {e.title}
                          <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-xs font-medium text-muted">
                            {e.label}
                          </span>
                        </p>
                        {banque.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
                            {banque.map((comp) => (
                              <label
                                key={comp.cle}
                                className="flex items-start gap-1.5 text-sm text-slate-700"
                              >
                                <input
                                  type="checkbox"
                                  name={`comp-${e.id}`}
                                  value={comp.texte}
                                  className="mt-1"
                                />
                                {comp.texte}
                              </label>
                            ))}
                          </div>
                        )}
                        <input
                          name={`libre-${e.id}`}
                          placeholder="Ou une nouvelle compétence…"
                          className="mt-2 w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-brand"
                        />
                      </div>
                    ))}
                    <button className="rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
                      Enregistrer ce chapitre
                    </button>
                  </form>
                </details>
              );
            })}
            {chapitresAvecApplications.every((c) =>
              (c.exercises ?? []).every(
                (e) => competencesDe(e, attributions[`${c.slug}:${e.id}`] ?? [], c.slug).length > 0
              )
            ) && (
              <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                Toutes les applications sont rattachées à au moins une compétence.
              </p>
            )}
          </div>
          </div>
        </details>
      )}

      {/* ── Annonces ─────────────────────────────────────────────────── */}
      <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
        <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
          Annonces
        </summary>
        <div className="border-t border-line px-6 pb-6 pt-4">
        <div className="mb-4 flex justify-end">
          <Link
            href="/prof?nouvelleAnnonce=1"
            className="rounded-xl bg-brand px-5 py-2 text-sm font-bold text-white transition hover:bg-orange-600"
          >
            + Nouvelle annonce
          </Link>
        </div>
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
          Les annonces apparaissent sur la page classe et sur la page d&apos;accueil.
          Ciblez une classe ou laissez vide pour une annonce générale.
        </p>
        {annonces.length === 0 ? (
          <p className="mt-4 rounded-xl border border-dashed border-line px-4 py-6 text-center text-sm text-muted">
            Aucune annonce pour l&apos;instant.
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {annonces.map((a) => (
              <li
                key={a.id}
                className="flex flex-wrap items-center gap-3 rounded-xl border border-line px-4 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-bold text-ink">{a.titre}</span>
                    {a.classe && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-muted">
                        {a.classe}
                      </span>
                    )}
                    {a.epinglee && (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-800">
                        épinglée
                      </span>
                    )}
                    {!a.publiee && (
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-muted">
                        brouillon
                      </span>
                    )}
                    {fondateur && a.enseignant && (
                      <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-bold text-sky-800">
                        {a.enseignant.prenom}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-sm text-muted line-clamp-1">{a.contenu}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/prof?annonce=${a.id}`}
                    className="rounded-lg border border-line px-3 py-1.5 text-xs font-bold text-muted transition hover:text-ink"
                  >
                    Modifier
                  </Link>
                  <form action={supprimerAnnonce}>
                    <input type="hidden" name="id" value={a.id} />
                    <button className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-bold text-rose-700 transition hover:bg-rose-50">
                      Supprimer
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
        </div>
      </details>

      {/* ── Emploi du temps ──────────────────────────────────────────── */}
      <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
        <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
          Emploi du temps
        </summary>
        <div className="border-t border-line px-6 pb-6 pt-4">
        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
          Collez l&apos;URL d&apos;intégration de votre agenda pour le publier sur{" "}
          <Link href="/planning" className="font-semibold text-brand underline-offset-2 hover:underline">
            /planning
          </Link>.
        </p>
        <AgendaForm urlActuelle={urlAgenda ?? ""} />
        </div>
      </details>

      {/* ── Mon compte ──────────────────────────────────────────────── */}
      <details className="group mt-6 rounded-2xl border border-line bg-white elev-sm">
        <summary className="cursor-pointer list-none px-6 py-4 font-serif text-xl font-bold text-ink transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
          Mon compte
        </summary>
        <div className="border-t border-line px-6 pb-6 pt-4">
        <MotDePasseForm />
        </div>
      </details>
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
