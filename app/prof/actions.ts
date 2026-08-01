"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { fermerSession, motDePasseValide, ouvrirSession, sessionOuverte } from "@/lib/auth";
import { CLE_RESSOURCES_RESERVEES, RESSOURCES_RESERVABLES } from "@/lib/apprenant";

async function exigerSession() {
  if (!(await sessionOuverte())) throw new Error("Session expirée");
}

export async function seConnecter(_etat: string | null, form: FormData): Promise<string | null> {
  const saisi = String(form.get("motDePasse") ?? "");
  if (!motDePasseValide(saisi)) return "Mot de passe incorrect.";
  await ouvrirSession();
  redirect("/prof");
}

export async function seDeconnecter() {
  await fermerSession();
  redirect("/prof");
}

/** Une date de formulaire vide vaut « non renseignée ». */
function dateOuNull(valeur: FormDataEntryValue | null): Date | null {
  const s = String(valeur ?? "").trim();
  if (!s) return null;
  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}

function texteOuNull(valeur: FormDataEntryValue | null): string | null {
  const s = String(valeur ?? "").trim();
  return s || null;
}

export async function enregistrerSeance(form: FormData) {
  await exigerSession();

  const id = texteOuNull(form.get("id"));
  const date = dateOuNull(form.get("date"));
  const classe = texteOuNull(form.get("classe"));
  const chapitre = texteOuNull(form.get("chapitre"));

  if (!date || !classe || !chapitre) {
    throw new Error("La date, la classe et le chapitre sont obligatoires.");
  }

  const donnees = {
    date,
    classe,
    chapitre,
    sections: texteOuNull(form.get("sections")),
    travail: texteOuNull(form.get("travail")),
    pourLe: dateOuNull(form.get("pourLe")),
    remarques: texteOuNull(form.get("remarques")),
    publiee: form.get("publiee") === "on",
  };

  if (id) await prisma.seance.update({ where: { id }, data: donnees });
  else await prisma.seance.create({ data: donnees });

  revalidatePath("/classe");
  revalidatePath("/prof");
  redirect("/prof");
}

export async function supprimerSeance(form: FormData) {
  await exigerSession();
  const id = String(form.get("id") ?? "");
  if (id) await prisma.seance.delete({ where: { id } });
  revalidatePath("/classe");
  revalidatePath("/prof");
  redirect("/prof");
}

/**
 * Enregistre les types de ressources réservés aux apprenants connectés.
 * L'application est faite côté serveur au rendu des chapitres : ce qui est
 * réservé n'est pas envoyé au navigateur d'un visiteur non connecté.
 */
export async function enregistrerRessourcesReservees(form: FormData) {
  await exigerSession();
  const valides = new Set(RESSOURCES_RESERVABLES.map((r) => r.id));
  const ids = form
    .getAll("ressource")
    .map(String)
    .filter((id) => valides.has(id as (typeof RESSOURCES_RESERVABLES)[number]["id"]));
  const valeur = JSON.stringify(ids);
  await prisma.reglage.upsert({
    where: { cle: CLE_RESSOURCES_RESERVEES },
    create: { cle: CLE_RESSOURCES_RESERVEES, valeur },
    update: { valeur },
  });
  revalidatePath("/prof");
}
