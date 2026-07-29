"use client";

import { useActionState } from "react";
import { seConnecter } from "./actions";

export function LoginForm() {
  const [erreur, action, enCours] = useActionState(seConnecter, null);

  return (
    <form action={action} className="mx-auto max-w-sm space-y-5">
      <div className="space-y-1.5">
        <label
          htmlFor="motDePasse"
          className="block text-xs font-black uppercase tracking-[0.12em] text-muted"
        >
          Mot de passe
        </label>
        <input
          id="motDePasse"
          name="motDePasse"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-brand"
        />
      </div>

      {erreur && (
        <p className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-800">
          {erreur}
        </p>
      )}

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
