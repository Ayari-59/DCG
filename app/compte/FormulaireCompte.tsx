"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { connecter, inscrire } from "./actions";

/**
 * Connexion et inscription sur un même écran : deux onglets, un seul
 * champ de plus à l'inscription. Après connexion, la progression déjà
 * accumulée dans ce navigateur est envoyée au compte — le travail fait
 * sans compte n'est pas perdu.
 */

interface EntreeLocale {
  chapitre: string;
  quizScore?: number;
  quizTotal?: number;
  cartes?: string[];
}

/**
 * Lit la progression locale à envoyer au compte après connexion. Le quiz
 * n'enregistre en local que le meilleur score : le total est celui du
 * format standardisé, vingt questions par chapitre.
 */
function progressionLocale(): EntreeLocale[] {
  const parChapitre = new Map<string, EntreeLocale>();
  for (let i = 0; i < localStorage.length; i++) {
    const cle = localStorage.key(i)!;
    const [, type, chapitre] = cle.match(/^dcga:(quiz|cards):(.+)$/) ?? [];
    if (!type || !chapitre) continue;
    const entree = parChapitre.get(chapitre) ?? { chapitre };
    try {
      const valeur = localStorage.getItem(cle)!;
      if (type === "quiz") {
        entree.quizScore = Number(valeur);
        entree.quizTotal = 20;
      } else {
        entree.cartes = JSON.parse(valeur) as string[];
      }
      parChapitre.set(chapitre, entree);
    } catch {
      // entrée illisible : on l'ignore
    }
  }
  return [...parChapitre.values()];
}

const CHAMP =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand";

export function FormulaireCompte() {
  const [mode, setMode] = useState<"connexion" | "inscription">("connexion");

  const [etatConnexion, actionConnexion, connexionEnCours] = useActionState(connecter, {});
  const [etatInscription, actionInscription, inscriptionEnCours] = useActionState(inscrire, {});

  const etat = mode === "connexion" ? etatConnexion : etatInscription;
  const enCours = mode === "connexion" ? connexionEnCours : inscriptionEnCours;

  /*
   * La progression locale est jointe au formulaire via un champ caché,
   * lue au moment de l'envoi : le serveur l'importe une fois la session
   * ouverte, dans la même action.
   */
  const [progression] = useState(() =>
    typeof window === "undefined" ? "[]" : JSON.stringify(progressionLocale())
  );

  return (
    <div className="mx-auto max-w-md">
      <div className="mb-6 grid grid-cols-2 rounded-xl border border-line bg-white p-1 text-sm font-bold">
        {(
          [
            ["connexion", "Se connecter"],
            ["inscription", "Créer un compte"],
          ] as const
        ).map(([id, libelle]) => (
          <button
            key={id}
            onClick={() => setMode(id)}
            className={`rounded-lg px-4 py-2.5 transition ${
              mode === id ? "bg-navy text-white" : "text-muted hover:text-ink"
            }`}
          >
            {libelle}
          </button>
        ))}
      </div>

      <form
        action={mode === "connexion" ? actionConnexion : actionInscription}
        className="space-y-4 rounded-2xl border border-line bg-white p-6 elev-sm"
      >
        <input type="hidden" name="progressionLocale" value={progression} />

        {mode === "inscription" && (
          <label className="block">
            <span className="mb-1.5 block text-sm font-semibold text-ink">Prénom</span>
            <input name="prenom" required autoComplete="given-name" className={CHAMP} />
          </label>
        )}

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Adresse e-mail</span>
          <input name="email" type="email" required autoComplete="email" className={CHAMP} />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink">Mot de passe</span>
          <input
            name="motDePasse"
            type="password"
            required
            minLength={mode === "inscription" ? 8 : undefined}
            autoComplete={mode === "inscription" ? "new-password" : "current-password"}
            className={CHAMP}
          />
          {mode === "inscription" && (
            <span className="mt-1 block text-xs text-muted">Au moins 8 caractères.</span>
          )}
        </label>

        {mode === "inscription" && (
          <label className="flex items-start gap-2.5 text-sm text-slate-600">
            <input type="checkbox" name="consentement" required className="mt-1" />
            <span>
              J&apos;accepte que mon prénom, mon adresse e-mail et ma progression soient
              enregistrés pour faire fonctionner mon compte, comme décrit dans la{" "}
              <Link href="/confidentialite" className="font-semibold text-brand hover:underline">
                politique de confidentialité
              </Link>
              .
            </span>
          </label>
        )}

        {etat.erreur && (
          <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm text-rose-800">
            {etat.erreur}
          </p>
        )}

        <button
          type="submit"
          disabled={enCours}
          className="w-full rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md transition hover:bg-orange-600 disabled:opacity-50"
        >
          {enCours
            ? "Un instant…"
            : mode === "connexion"
              ? "Se connecter"
              : "Créer mon compte"}
        </button>
      </form>

      <p className="mt-5 text-center text-sm leading-relaxed text-muted">
        Le compte est facultatif : tout le site se consulte sans. Il sauvegarde votre progression
        d&apos;un appareil à l&apos;autre, et donne accès aux ressources réservées.
      </p>
    </div>
  );
}
