"use client";

import { enregistrerAgendaUrl } from "./actions";

const champ =
  "w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-brand";
const label = "block text-xs font-black uppercase tracking-[0.12em] text-muted";

export function AgendaForm({ urlActuelle }: { urlActuelle: string }) {
  return (
    <form action={enregistrerAgendaUrl} className="mt-5 space-y-4">
      <div className="space-y-1.5">
        <label className={label} htmlFor="agenda-url">
          URL d&apos;intégration de l&apos;agenda
        </label>
        <input
          id="agenda-url"
          name="url"
          type="url"
          defaultValue={urlActuelle}
          placeholder="https://calendar.google.com/calendar/embed?src=…"
          className={champ}
        />
        <p className="text-xs text-muted">
          Collez l&apos;URL d&apos;intégration de votre agenda Google Calendar, Outlook ou autre.
          Laissez vide pour retirer l&apos;agenda du site.
        </p>
      </div>
      <button className="rounded-xl bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-navy-deep">
        Enregistrer
      </button>
    </form>
  );
}
