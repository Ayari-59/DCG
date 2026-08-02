"use client";

import { enregistrerAnnonce } from "./actions";

export interface AnnonceInitiale {
  id?: string;
  titre: string;
  contenu: string;
  classe: string;
  publiee: boolean;
  epinglee: boolean;
}

const champ =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-brand";
const label = "block text-xs font-black uppercase tracking-[0.12em] text-muted";

export function AnnonceForm({
  initiale,
  classesConnues,
}: {
  initiale: AnnonceInitiale;
  classesConnues: string[];
}) {
  return (
    <form action={enregistrerAnnonce} className="space-y-5">
      {initiale.id && <input type="hidden" name="id" value={initiale.id} />}

      <div className="space-y-1.5">
        <label className={label} htmlFor="ann-titre">
          Titre
        </label>
        <input
          id="ann-titre"
          name="titre"
          defaultValue={initiale.titre}
          required
          placeholder="Contrôle la semaine prochaine"
          className={champ}
        />
      </div>

      <div className="space-y-1.5">
        <label className={label} htmlFor="ann-contenu">
          Contenu
        </label>
        <textarea
          id="ann-contenu"
          name="contenu"
          rows={4}
          required
          defaultValue={initiale.contenu}
          className={champ}
        />
      </div>

      <div className="space-y-1.5">
        <label className={label} htmlFor="ann-classe">
          Classe ciblée
        </label>
        <input
          id="ann-classe"
          name="classe"
          list="ann-classes"
          defaultValue={initiale.classe}
          placeholder="Toutes les classes (laisser vide)"
          className={champ}
        />
        <datalist id="ann-classes">
          {classesConnues.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>
        <p className="text-xs text-muted">
          Vide = annonce générale visible partout.
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-3 text-sm font-semibold text-ink">
          <input
            type="checkbox"
            name="publiee"
            defaultChecked={initiale.publiee}
            className="h-5 w-5 rounded border border-line accent-[#f07e26]"
          />
          Publiée
        </label>
        <label className="flex items-center gap-3 text-sm font-semibold text-ink">
          <input
            type="checkbox"
            name="epinglee"
            defaultChecked={initiale.epinglee}
            className="h-5 w-5 rounded border border-line accent-[#f07e26]"
          />
          Épinglée en tête
        </label>
      </div>

      <div className="flex gap-3 border-t border-line pt-5">
        <button
          type="submit"
          className="lift rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600"
        >
          Enregistrer
        </button>
        <a
          href="/prof"
          className="rounded-xl border border-line bg-white px-6 py-3 font-bold text-muted transition hover:text-ink"
        >
          Annuler
        </a>
      </div>
    </form>
  );
}
