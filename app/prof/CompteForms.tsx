"use client";

import { useActionState } from "react";
import { changerMotDePasse, inviterCollegue, type EtatProf } from "./actions";

const CHAMP =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-brand";

function Messages({ etat }: { etat: EtatProf }) {
  if (etat.erreur)
    return (
      <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm text-rose-800">
        {etat.erreur}
      </p>
    );
  if (etat.fait)
    return (
      <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm text-emerald-800">
        {etat.fait}
      </p>
    );
  return null;
}

/** Le fondateur crée le compte d'un collègue, mot de passe provisoire compris. */
export function InvitationForm() {
  const [etat, action, enCours] = useActionState(inviterCollegue, {});

  return (
    <form action={action} className="mt-4 space-y-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <input name="prenom" placeholder="Prénom" required className={CHAMP} />
        <input name="email" type="email" placeholder="Adresse e-mail" required className={CHAMP} />
        <input
          name="motDePasse"
          type="text"
          placeholder="Mot de passe provisoire"
          minLength={8}
          required
          className={CHAMP}
        />
      </div>
      <Messages etat={etat} />
      <button
        disabled={enCours}
        className="rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep disabled:opacity-50"
      >
        {enCours ? "Création…" : "Inviter ce collègue"}
      </button>
    </form>
  );
}

export function MotDePasseForm() {
  const [etat, action, enCours] = useActionState(changerMotDePasse, {});

  return (
    <form action={action} className="mt-4 space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="actuel"
          type="password"
          placeholder="Mot de passe actuel"
          autoComplete="current-password"
          required
          className={CHAMP}
        />
        <input
          name="nouveau"
          type="password"
          placeholder="Nouveau (8 caractères min.)"
          autoComplete="new-password"
          minLength={8}
          required
          className={CHAMP}
        />
      </div>
      <Messages etat={etat} />
      <button
        disabled={enCours}
        className="rounded-xl border border-line bg-white px-5 py-2.5 text-sm font-bold text-muted transition hover:text-ink disabled:opacity-50"
      >
        {enCours ? "Changement…" : "Changer mon mot de passe"}
      </button>
    </form>
  );
}
