import type { Metadata } from "next";
import Link from "next/link";
import { getChapter } from "@/lib/content";
import { getTheme } from "@/lib/content/theme";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "La réforme et sa méthodologie",
  description:
    "Ce que change le programme réformé du DCG et du DSCG : une évaluation du raisonnement plutôt que de la restitution, et la méthode que l'épreuve attend.",
};

/**
 * Le contenu de cette page n'est pas une interprétation personnelle : il
 * reprend ce que les manuels du site énoncent du référentiel rénové, et
 * renvoie aux chapitres qui l'illustrent.
 */

const mouvements = [
  {
    verbe: "Comprendre",
    sous: "à quelle situation la méthode répond",
    texte:
      "Avant tout calcul, savoir pourquoi l'outil existe et quelle question de gestion il tranche. Une méthode apprise sans son contexte ne se transpose pas à un énoncé nouveau.",
  },
  {
    verbe: "Calculer",
    sous: "la mécanique, sans erreur",
    texte:
      "La technique reste exigée et notée : tableaux de répartition, coûts d'inducteurs, écarts, seuils. Elle n'est plus une fin, mais elle demeure la condition d'accès à la suite.",
  },
  {
    verbe: "Interpréter",
    sous: "ce que le chiffre veut dire",
    texte:
      "Un résultat se commente : ce qu'il révèle de l'entreprise, ce qu'il implique pour la décision. C'est ici que se joue l'essentiel des points, et c'est ce que l'ancien réflexe de restitution néglige.",
  },
  {
    verbe: "Critiquer",
    sous: "les limites et les risques d'interprétation",
    texte:
      "Toute méthode doit être interrogée : ses apports, ses limites, les erreurs de lecture qu'elle autorise. Le référentiel rénové en fait un attendu explicite, pas un bonus.",
  },
];

const traits = [
  {
    titre: "L'information qualitative entre dans le programme",
    texte:
      "Le contrôleur ne délimite plus seulement des besoins en information chiffrée. Satisfaction, qualité, délai, climat social, impact environnemental : le référentiel demande d'articuler le quantitatif et le qualitatif.",
    chapitre: "dcg-ue11-cadre-metier-organisation",
  },
  {
    titre: "La durabilité n'est plus un chapitre à part",
    texte:
      "Performance globale, indicateurs extra-financiers, coût des externalités : la dimension environnementale et sociale irrigue le programme au lieu d'être reléguée en fin d'ouvrage.",
    chapitre: "dcg-ue11-performance-globale-durabilite",
  },
  {
    titre: "Le raisonnement sous incertitude est exigé",
    texte:
      "Les seuils et les marges ne s'analysent plus seulement en avenir certain : le programme demande de calculer et d'analyser les indicateurs de risque d'exploitation.",
    chapitre: "dcg-ue11-analyse-risque-loi-normale",
  },
  {
    titre: "Les compétences priment sur les savoirs",
    texte:
      "Chaque chapitre est rattaché à des compétences professionnelles au libellé officiel. La question n'est plus « connaissez-vous la méthode ABC ? » mais « savez-vous choisir et mettre en œuvre l'outil adapté à cette situation de gestion ? ».",
    chapitre: "dcg-ue11-methode-abc",
  },
];

const reflexes = [
  "Poser la formule, calculer, puis interpréter — ne jamais s'arrêter au chiffre.",
  "Conclure par les limites et le regard critique : c'est l'attendu majeur de la réforme.",
  "Rattacher chaque réponse à la situation de gestion de l'énoncé, pas au cours récité.",
  "Formuler des préconisations argumentées, avec leurs réserves.",
  "Soigner la rédaction : la synthèse structurée fait partie de ce qui est évalué.",
];

export default function ReformePage() {
  return (
    <div>
      <section className="grain relative overflow-hidden bg-navy-deep">
        <div className="relative mx-auto max-w-[860px] px-5 py-20 text-center sm:py-28">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white/80">
              Applicable à compter de la session 2027
            </p>
            <h1 className="font-serif text-[2.6rem] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[3.6rem]">
              Ce que change la réforme
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Le programme rénové déplace l&apos;évaluation : du calcul restitué vers le
              raisonnement conduit. Comprendre ce glissement change la façon de réviser — et de
              rédiger le jour de l&apos;épreuve.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[860px] px-5 py-20">
        <Reveal>
          <section>
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              La philosophie : quatre mouvements, pas un seul
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted">
              L&apos;ancien réflexe consistait à produire un tableau juste. Le programme réformé
              attend un enchaînement complet, et chaque chapitre du site est construit selon cette
              progression — c&apos;est visible jusque dans le titre de ses parties.
            </p>
            <ol className="mt-8 space-y-3">
              {mouvements.map((m, i) => (
                <li
                  key={m.verbe}
                  className="flex gap-5 rounded-2xl border-2 border-line bg-white p-6 elev-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand font-serif text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-bold text-ink">
                      {m.verbe}{" "}
                      <span className="font-sans text-sm font-semibold text-muted">— {m.sous}</span>
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{m.texte}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 rounded-2xl border-2 border-blue-200 bg-blue-50 px-5 py-4 text-[15px] leading-relaxed text-blue-950">
              Un candidat qui maîtrise la technique <em>et</em> sait lire ce qu&apos;elle produit
              répond au référentiel. Un candidat qui récite un modèle sans savoir interpréter un
              écart se trompe d&apos;épreuve.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="mt-20">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Quatre déplacements concrets
            </h2>
            <div className="mt-8 space-y-5">
              {traits.map((t) => {
                const ch = getChapter(t.chapitre);
                const theme = getTheme(t.chapitre);
                return (
                  <div key={t.titre} className={`border-l-4 pl-5 ${theme.border}`}>
                    <h3 className="font-serif text-lg font-bold text-ink">{t.titre}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">{t.texte}</p>
                    {ch && (
                      <Link
                        href={`/cours/${ch.slug}`}
                        className={`mt-2 inline-block text-sm font-bold underline-offset-2 hover:underline ${theme.text}`}
                      >
                        Voir le chapitre {ch.number} — {ch.title} →
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </Reveal>

        <Reforme />

        <Reveal>
          <section className="mt-20 rounded-3xl border-2 border-line bg-white p-8 elev-sm">
            <h2 className="font-serif text-3xl font-bold tracking-[-0.02em] text-ink">
              Les réflexes que l&apos;épreuve récompense
            </h2>
            <ul className="mt-6 space-y-3">
              {reflexes.map((r) => (
                <li key={r} className="flex gap-3 text-[16px] leading-relaxed text-slate-700">
                  <span className="mt-[0.6rem] h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-muted">
              Chaque chapitre décline ces réflexes dans son onglet{" "}
              <strong className="font-bold text-ink">Méthode</strong>, sous forme de démarches
              numérotées rattachées à la compétence qu&apos;elles servent.
            </p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}

/** Encart d'honnêteté : cette page reformule des sources, elle ne fait pas autorité. */
function Reforme() {
  return (
    <Reveal>
      <aside className="mt-20 rounded-2xl border-2 border-amber-200 bg-amber-50 px-6 py-5">
        <h2 className="text-xs font-black uppercase tracking-[0.15em] text-amber-800">
          Sur cette page
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-amber-900">
          Ce qui précède reformule ce que les manuels de ce site énoncent du référentiel rénové et
          des attendus de l&apos;épreuve. Ce n&apos;est ni un texte officiel ni un substitut au
          référentiel publié : en cas de doute, c&apos;est ce dernier qui fait foi.
        </p>
      </aside>
    </Reveal>
  );
}
