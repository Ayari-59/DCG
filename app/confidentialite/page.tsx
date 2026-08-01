import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Ce que le site enregistre — et surtout ce qu'il n'enregistre pas : les données du compte apprenant, leur usage, leur suppression.",
};

/**
 * Rédigée pour être lue par un étudiant, pas par un juriste : phrases
 * courtes, la liste exacte de ce qui est enregistré, et le bouton de
 * suppression à un clic. Elle engage le site : toute évolution de la
 * collecte doit se refléter ici.
 */
export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-16">
      <h1 className="font-serif text-4xl font-bold tracking-[-0.02em] text-ink">
        Politique de confidentialité
      </h1>

      <div className="mt-8 space-y-8 text-[16px] leading-relaxed text-slate-700">
        <section>
          <h2 className="font-serif text-xl font-bold text-ink">Sans compte : rien</h2>
          <p className="mt-2">
            Le site se consulte entièrement sans compte. Dans ce cas, aucune donnée personnelle
            n&apos;est collectée ni transmise : votre progression (scores de quiz, cartes
            acquises) est enregistrée uniquement dans votre navigateur, sur votre appareil. Le
            site n&apos;utilise pas de cookies de mesure d&apos;audience ni de traceurs
            publicitaires. Les vidéos sont servies par YouTube en mode « confidentialité
            avancée » (youtube-nocookie), qui ne dépose pas de cookie tant que la lecture
            n&apos;est pas lancée.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-ink">Avec un compte : trois choses</h2>
          <p className="mt-2">Le compte, facultatif, enregistre exactement :</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>votre prénom — pour vous saluer ;</li>
            <li>votre adresse e-mail — c&apos;est votre identifiant de connexion ;</li>
            <li>
              votre progression — meilleurs scores de quiz et cartes acquises, par chapitre.
            </li>
          </ul>
          <p className="mt-3">
            Votre mot de passe n&apos;est jamais stocké : seule une empreinte cryptographique
            (scrypt) l&apos;est, dont il ne peut pas être reconstitué. Ces données servent
            uniquement à faire fonctionner votre espace ; elles ne sont ni transmises, ni
            vendues, ni utilisées à d&apos;autres fins.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-ink">Où et combien de temps</h2>
          <p className="mt-2">
            Les données sont hébergées dans une base PostgreSQL fournie par Neon Inc., située
            dans l&apos;Union européenne (Francfort, Allemagne). Elles sont conservées tant que
            le compte existe, et supprimées avec lui. Les sessions de connexion expirent après
            90 jours.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-bold text-ink">Vos droits, en un clic</h2>
          <p className="mt-2">
            Depuis{" "}
            <Link href="/compte" className="font-semibold text-brand hover:underline">
              Mon espace
            </Link>
            , le bouton « Supprimer mon compte » efface immédiatement et définitivement le
            compte, les sessions et toute la progression. Il n&apos;y a rien à demander, rien à
            justifier. Pour toute autre question relative à vos données, l&apos;auteur du site —
            responsable du traitement — peut être contacté via la chaîne YouTube{" "}
            <a
              href="https://www.youtube.com/@Objectif-DCG"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              Objectif-DCG
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
