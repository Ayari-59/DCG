import type { Metadata } from "next";
import Link from "next/link";
import {
  DATE_JURY,
  SESSION,
  SESSION_GLOBALE,
  UE11,
  UNITES,
  classementBaisses,
  dernierTaux,
  variation,
} from "@/lib/content/jury";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: `Rapport du jury ${SESSION}`,
  description: `Les chiffres de la session ${SESSION} du DCG et ce qu'ils disent de l'UE11 Contrôle de gestion, unité qui subit la plus forte baisse de réussite.`,
};

const nb = (v: number) => v.toLocaleString("fr-FR");
const pc = (v: number) => `${v.toString().replace(".", ",")} %`;

export default function RapportJuryPage() {
  const baisse = variation(UE11);
  const laPlusForteBaisse = classementBaisses[0].numero === UE11.numero;
  const maxTaux = Math.max(...UE11.taux.map((x) => x.valeur));

  return (
    <div>
      <section className="grain relative overflow-hidden bg-navy-deep">
        <div className="relative mx-auto max-w-[860px] px-5 py-20 text-center sm:py-24">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white/80">
              Jury du {DATE_JURY}
            </p>
            <h1 className="font-serif text-[2.6rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.4rem]">
              Le rapport du jury {SESSION}, lu pour l&apos;UE11
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Les chiffres de la session, ce qu&apos;ils disent du contrôle de gestion, et ce
              qu&apos;il faut en retenir pour préparer la suivante.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[860px] px-5 py-20">
        {/* ── Le fait marquant ──────────────────────────────────────── */}
        <Reveal>
          <section className="rounded-3xl border-2 border-brand bg-orange-50 p-8">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-brand">
              Le fait marquant
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              L&apos;UE11 perd {Math.abs(baisse).toString().replace(".", ",")} points en un an
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-slate-700">
              Le taux de réussite du contrôle de gestion passe de{" "}
              <strong className="font-bold">{pc(UE11.taux[3].valeur)}</strong> en {UE11.taux[3].annee} à{" "}
              <strong className="font-bold">{pc(dernierTaux(UE11))}</strong> en {SESSION}, et la
              moyenne recule de 9,9 à {UE11.moyenne?.toString().replace(".", ",")}.
              {laPlusForteBaisse
                ? " C'est la plus forte baisse enregistrée par une unité du DCG cette session."
                : ""}
            </p>
          </section>
        </Reveal>

        {/* ── Cinq ans de résultats ─────────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              L&apos;UE11 sur cinq sessions
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Vu sur la durée, le tableau est moins brutal : {SESSION} ne marque pas un effondrement
              mais un retour dans la fourchette habituelle. C&apos;est {UE11.taux[3].annee} qui
              faisait exception.
            </p>
            <ul className="mt-8 space-y-3">
              {UE11.taux.map((x) => (
                <li key={x.annee} className="flex items-center gap-4">
                  <span className="w-12 shrink-0 text-sm font-bold tabular-nums text-muted">
                    {x.annee}
                  </span>
                  <span className="h-8 flex-1 overflow-hidden rounded-lg bg-slate-100">
                    <span
                      className={`flex h-full items-center justify-end rounded-lg px-3 text-xs font-bold text-white ${
                        x.annee === SESSION ? "bg-brand" : "bg-blue-700"
                      }`}
                      style={{ width: `${(x.valeur / maxTaux) * 100}%` }}
                    >
                      {pc(x.valeur)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        {/* ── Interprétation ────────────────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Ce qu&apos;on peut en tirer
            </h2>
            <div className="mt-6 space-y-5">
              <Point titre="Une moyenne à 8,6 : l'UE11 se joue à quelques points">
                La moitié des candidats se situe sous {UE11.moyenne?.toString().replace(".", ",")}.
                Entre l&apos;échec et l&apos;admission, l&apos;écart tient souvent à une question
                d&apos;interprétation laissée de côté ou à une conclusion non rédigée — rarement à
                une méthode entièrement ignorée.
              </Point>
              <Point titre="Ne pas se fier à la session précédente">
                Un taux exceptionnel une année ne dit rien de la suivante. Sur cinq sessions,
                l&apos;UE11 oscille entre {pc(Math.min(...UE11.taux.map((x) => x.valeur)))} et{" "}
                {pc(maxTaux)} : c&apos;est une unité au niveau d&apos;exigence variable, qu&apos;il
                faut préparer pour son scénario le plus difficile.
              </Point>
              <Point titre="Le contraste avec la comptabilité est instructif">
                Dans le même axe, l&apos;UE9 Comptabilité atteint{" "}
                {pc(dernierTaux(UNITES.find((u) => u.numero === 9)!))} de réussite. La différence ne
                tient pas à la difficulté technique mais à la nature de l&apos;attendu : en
                comptabilité, un traitement juste suffit ; en contrôle de gestion, il faut encore
                dire ce que le chiffre signifie.
              </Point>
              <Point titre="Une baisse générale, pas un durcissement isolé">
                Onze des quatorze unités reculent cette session, et le taux de réussite au diplôme
                passe de {pc(43)} à {pc(SESSION_GLOBALE.tauxReussite)}. L&apos;UE11 subit la plus
                forte baisse, mais s&apos;inscrit dans un mouvement d&apos;ensemble.
              </Point>
            </div>
            <p className="mt-6 rounded-2xl border-2 border-amber-200 bg-amber-50 px-5 py-4 text-[15px] leading-relaxed text-amber-900">
              <strong className="font-bold">À distinguer :</strong> les chiffres ci-dessus sont ceux
              communiqués par le jury. Les commentaires qui les accompagnent sont les nôtres — le
              document de diffusion présente des statistiques, sans analyse des copies.
            </p>
          </section>
        </Reveal>

        {/* ── La session en chiffres ────────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              La session {SESSION} en chiffres
            </h2>
            <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 rounded-3xl border-2 border-line bg-white px-8 py-7 elev-sm sm:grid-cols-4">
              {[
                { v: nb(SESSION_GLOBALE.candidats), l: "candidats" },
                { v: `+${SESSION_GLOBALE.evolutionCandidats.toString().replace(".", ",")} %`, l: "d'inscrits en un an" },
                { v: nb(SESSION_GLOBALE.diplomes), l: "diplômés" },
                { v: pc(SESSION_GLOBALE.tauxReussite), l: "de réussite au diplôme" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-serif text-3xl font-bold tabular-nums text-navy">{s.v}</dt>
                  <dd className="text-xs font-semibold uppercase tracking-wide text-muted">{s.l}</dd>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>

        {/* ── Toutes les unités ─────────────────────────────────────── */}
        <Reveal>
          <section className="mt-16">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Toutes les unités, session {SESSION}
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border-2 border-line bg-white elev-sm">
              <table className="w-full min-w-[34rem] text-[15px]">
                <thead>
                  <tr className="border-b-2 border-line bg-slate-50 text-left">
                    <th className="px-4 py-3 font-bold text-ink">Unité</th>
                    <th className="px-4 py-3 text-right font-bold text-ink">Réussite</th>
                    <th className="px-4 py-3 text-right font-bold text-ink">Moyenne</th>
                    <th className="px-4 py-3 text-right font-bold text-ink">Un an</th>
                  </tr>
                </thead>
                <tbody>
                  {UNITES.map((u) => {
                    const d = variation(u);
                    const cible = u.numero === 11;
                    return (
                      <tr
                        key={u.numero}
                        className={`border-t border-line/70 ${cible ? "bg-orange-50 font-semibold" : ""}`}
                      >
                        <td className="px-4 py-2.5 text-slate-700">
                          <span className={cible ? "text-brand" : "text-muted"}>UE{u.numero}</span>{" "}
                          {u.intitulé}
                        </td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-slate-700">
                          {pc(dernierTaux(u))}
                        </td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-slate-700">
                          {u.moyenne?.toString().replace(".", ",") ?? "—"}
                        </td>
                        <td
                          className={`px-4 py-2.5 text-right tabular-nums ${
                            d < 0 ? "text-rose-700" : "text-emerald-700"
                          }`}
                        >
                          {d > 0 ? "+" : ""}
                          {d.toString().replace(".", ",")}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted">
              Source : document de diffusion du jury DCG, réunion du {DATE_JURY}. La colonne
              « un an » exprime l&apos;écart en points avec la session précédente.
            </p>
          </section>
        </Reveal>

        {/* ── Conséquences pratiques ────────────────────────────────── */}
        <Reveal>
          <section className="mt-16 rounded-3xl border-2 border-line bg-white p-8 elev-sm">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Ce que ça change à la préparation
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              Ces chiffres confortent le parti pris du site : le calcul ne suffit pas. Deux onglets
              existent précisément pour la partie qui fait la différence.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/reforme"
                className="lift rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600"
              >
                La philosophie du programme →
              </Link>
              <Link
                href="/dcg"
                className="lift rounded-xl border-2 border-line bg-white px-6 py-3 font-bold text-navy"
              >
                Les chapitres de l&apos;UE11 →
              </Link>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

function Point({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-line pl-5">
      <h3 className="font-serif text-lg font-bold text-ink">{titre}</h3>
      <p className="mt-1 text-[15px] leading-relaxed text-muted">{children}</p>
    </div>
  );
}
