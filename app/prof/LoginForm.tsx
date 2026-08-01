"use client";

import { useActionState } from "react";
import { creerFondateur, seConnecter, type EtatProf } from "./actions";

const CHAMP =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-brand";

function Etiquette({ pour, children }: { pour: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={pour}
      className="block text-xs font-black uppercase tracking-[0.12em] text-muted"
    >
      {children}
    </label>
  );
}

function Messages({ etat }: { etat: EtatProf }) {
  if (etat.erreur)
    return (
      <p className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800">
        {etat.erreur}
      </p>
    );
  if (etat.fait)
    return (
      <p className="rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
        {etat.fait}
      </p>
    );
  return null;
}

export function LoginForm() {
  const [etat, action, enCours] = useActionState(seConnecter, {});

  return (
    <form action={action} className="mx-auto max-w-sm space-y-5">
      <div className="space-y-1.5">
        <Etiquette pour="email">Adresse e-mail</Etiquette>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          autoFocus
          required
          className={CHAMP}
        />
      </div>
      <div className="space-y-1.5">
        <Etiquette pour="motDePasse">Mot de passe</Etiquette>
        <input
          id="motDePasse"
          name="motDePasse"
          type="password"
          autoComplete="current-password"
          required
          className={CHAMP}
        />
      </div>

      <Messages etat={etat} />

      <button
        type="submit"
        disabled={enCours}
        className="lift w-full rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600 disabled:opacity-50"
      >
        {enCours ? "Vérification…" : "Se connecter"}
      </button>
    </form>
  );
}

/**
 * Amorçage : tant qu'aucun enseignant n'existe, ce formulaire crée le
 * compte fondateur. La clé d'activation est l'ADMIN_PASSWORD de
 * l'environnement — celui qui déploie le site est celui qui le fonde.
 */
export function BootstrapForm() {
  const [etat, action, enCours] = useActionState(creerFondateur, {});

  return (
    <form action={action} className="mx-auto max-w-sm space-y-5">
      <div className="space-y-1.5">
        <Etiquette pour="prenom">Prénom</Etiquette>
        <input id="prenom" name="prenom" autoComplete="given-name" required className={CHAMP} />
      </div>
      <div className="space-y-1.5">
        <Etiquette pour="email">Adresse e-mail</Etiquette>
        <input id="email" name="email" type="email" autoComplete="email" required className={CHAMP} />
      </div>
      <div className="space-y-1.5">
        <Etiquette pour="motDePasse">Mot de passe (8 caractères minimum)</Etiquette>
        <input
          id="motDePasse"
          name="motDePasse"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          className={CHAMP}
        />
      </div>
      <div className="space-y-1.5">
        <Etiquette pour="cleActivation">Clé d&apos;activation</Etiquette>
        <input
          id="cleActivation"
          name="cleActivation"
          type="password"
          required
          className={CHAMP}
        />
        <p className="text-xs leading-relaxed text-muted">
          C&apos;est le mot de passe administrateur défini dans les variables du site
          (ADMIN_PASSWORD).
        </p>
      </div>

      <Messages etat={etat} />

      <button
        type="submit"
        disabled={enCours}
        className="lift w-full rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600 disabled:opacity-50"
      >
        {enCours ? "Création…" : "Créer le compte fondateur"}
      </button>
    </form>
  );
}
