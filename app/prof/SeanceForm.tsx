"use client";

import { useState } from "react";
import { enregistrerSeance } from "./actions";

export interface ChapitreOption {
  slug: string;
  titre: string;
  niveau: string;
  numero: number;
  sections: string[];
}

export interface SeanceInitiale {
  id?: string;
  date: string;
  classe: string;
  chapitre: string;
  sections: string;
  travail: string;
  pourLe: string;
  remarques: string;
  publiee: boolean;
}

const champ =
  "w-full rounded-xl border-2 border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-brand";
const label = "block text-xs font-black uppercase tracking-[0.12em] text-muted";

export function SeanceForm({
  chapitres,
  initiale,
  classesConnues,
}: {
  chapitres: ChapitreOption[];
  initiale: SeanceInitiale;
  classesConnues: string[];
}) {
  const [slug, setSlug] = useState(initiale.chapitre);
  const choisi = chapitres.find((c) => c.slug === slug);

  return (
    <form action={enregistrerSeance} className="space-y-6">
      {initiale.id && <input type="hidden" name="id" value={initiale.id} />}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={label} htmlFor="date">
            Date de la séance
          </label>
          <input id="date" name="date" type="date" defaultValue={initiale.date} required className={champ} />
        </div>
        <div className="space-y-1.5">
          <label className={label} htmlFor="classe">
            Classe
          </label>
          <input
            id="classe"
            name="classe"
            list="classes"
            defaultValue={initiale.classe}
            placeholder="DCG 2e année"
            required
            className={champ}
          />
          <datalist id="classes">
            {classesConnues.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={label} htmlFor="chapitre">
          Chapitre traité
        </label>
        <select
          id="chapitre"
          name="chapitre"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className={champ}
        >
          <option value="">— choisir —</option>
          {chapitres.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.niveau} · {c.numero}. {c.titre}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label className={label} htmlFor="sections">
          Sections traitées
        </label>
        <input
          id="sections"
          name="sections"
          defaultValue={initiale.sections}
          placeholder="1-3 ou 1,4,5"
          className={champ}
        />
        {choisi && (
          <ol className="mt-2 space-y-0.5 text-sm text-muted">
            {choisi.sections.map((titre, i) => (
              <li key={i}>
                <span className="font-semibold text-ink">{i + 1}.</span> {titre}
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="space-y-1.5">
          <label className={label} htmlFor="travail">
            Travail à faire
          </label>
          <input
            id="travail"
            name="travail"
            defaultValue={initiale.travail}
            placeholder="Annale PhytoDrink 2016"
            className={champ}
          />
        </div>
        <div className="space-y-1.5">
          <label className={label} htmlFor="pourLe">
            Pour le
          </label>
          <input id="pourLe" name="pourLe" type="date" defaultValue={initiale.pourLe} className={champ} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={label} htmlFor="remarques">
          Remarques
        </label>
        <textarea
          id="remarques"
          name="remarques"
          rows={3}
          defaultValue={initiale.remarques}
          className={champ}
        />
      </div>

      <label className="flex items-center gap-3 text-sm font-semibold text-ink">
        <input
          type="checkbox"
          name="publiee"
          defaultChecked={initiale.publiee}
          className="h-5 w-5 rounded border-2 border-line accent-[#f07e26]"
        />
        Visible par les étudiants
      </label>

      <div className="flex gap-3 border-t-2 border-line pt-6">
        <button
          type="submit"
          className="lift rounded-xl bg-brand px-6 py-3 font-bold text-white elev-md hover:bg-orange-600"
        >
          Enregistrer
        </button>
        <a
          href="/prof"
          className="rounded-xl border-2 border-line bg-white px-6 py-3 font-bold text-muted transition hover:text-ink"
        >
          Annuler
        </a>
      </div>
    </form>
  );
}
