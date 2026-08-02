"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getChapter, allChapters, programs } from "@/lib/content";
import {
  applicationsParCompetences,
  cleCompetence,
  toutesLesCompetences,
} from "@/lib/content/competences";
import { motDePasseValide } from "@/lib/auth";
import {
  hacherMotDePasse,
  motDePasseCorrespond,
  CLE_RESSOURCES_RESERVEES,
  CLE_APPLICATIONS_CHOISIES,
  CLE_CHAPITRE_COMPETENCES,
  CLE_COMPETENCES_EXERCICES,
  CLE_MATIERES_MASQUEES,
  CLE_AGENDA_URL,
  RESSOURCES_RESERVABLES,
} from "@/lib/apprenant";
import {
  enseignantConnecte,
  estFondateur,
  fermerSessionEnseignant,
  ouvrirSessionEnseignant,
} from "@/lib/enseignant";

export type EtatProf = { erreur?: string; fait?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function exigerSession() {
  const enseignant = await enseignantConnecte();
  if (!enseignant) throw new Error("Session expirée");
  return enseignant;
}

async function exigerFondateur() {
  const enseignant = await exigerSession();
  if (!estFondateur(enseignant)) throw new Error("Réservé au fondateur");
  return enseignant;
}

// ── Comptes ──────────────────────────────────────────────────────────

/**
 * Création du compte fondateur — une seule fois, tant que la table est
 * vide. La clé d'activation est l'ADMIN_PASSWORD de l'environnement : ce
 * qui protégeait hier l'espace entier ne sert plus qu'à l'amorcer.
 */
export async function creerFondateur(_: EtatProf, form: FormData): Promise<EtatProf> {
  if ((await prisma.enseignant.count()) > 0) {
    return { erreur: "Le compte fondateur existe déjà." };
  }
  if (!motDePasseValide(String(form.get("cleActivation") ?? ""))) {
    return { erreur: "Clé d'activation incorrecte." };
  }

  const prenom = String(form.get("prenom") ?? "").trim();
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const motDePasse = String(form.get("motDePasse") ?? "");
  if (!prenom) return { erreur: "Le prénom est requis." };
  if (!EMAIL.test(email)) return { erreur: "L'adresse e-mail n'est pas valide." };
  if (motDePasse.length < 8)
    return { erreur: "Le mot de passe doit compter au moins 8 caractères." };

  const fondateur = await prisma.enseignant.create({
    data: { prenom, email, empreinte: hacherMotDePasse(motDePasse), role: "fondateur" },
  });
  await ouvrirSessionEnseignant(fondateur.id);
  redirect("/prof");
}

export async function seConnecter(_: EtatProf, form: FormData): Promise<EtatProf> {
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const motDePasse = String(form.get("motDePasse") ?? "");

  const enseignant = await prisma.enseignant.findUnique({ where: { email } });
  // Même réponse que le compte existe ou non : ne renseigne pas un curieux.
  if (!enseignant || !motDePasseCorrespond(motDePasse, enseignant.empreinte)) {
    return { erreur: "Adresse ou mot de passe incorrect." };
  }
  await ouvrirSessionEnseignant(enseignant.id);
  redirect("/prof");
}

export async function seDeconnecter() {
  await fermerSessionEnseignant();
  redirect("/prof");
}

/**
 * Invitation d'un collègue : le fondateur crée le compte avec un mot de
 * passe provisoire qu'il lui communique de vive voix — pas de service
 * d'e-mail à configurer. Le collègue le change depuis son espace.
 */
export async function inviterCollegue(_: EtatProf, form: FormData): Promise<EtatProf> {
  await exigerFondateur();

  const prenom = String(form.get("prenom") ?? "").trim();
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const motDePasse = String(form.get("motDePasse") ?? "");
  if (!prenom) return { erreur: "Le prénom est requis." };
  if (!EMAIL.test(email)) return { erreur: "L'adresse e-mail n'est pas valide." };
  if (motDePasse.length < 8)
    return { erreur: "Le mot de passe provisoire doit compter au moins 8 caractères." };
  if (await prisma.enseignant.findUnique({ where: { email } })) {
    return { erreur: "Un compte existe déjà avec cette adresse." };
  }

  await prisma.enseignant.create({
    data: { prenom, email, empreinte: hacherMotDePasse(motDePasse) },
  });
  revalidatePath("/prof");
  return { fait: `Compte créé pour ${prenom}. Communiquez-lui son mot de passe provisoire.` };
}

export async function retirerCollegue(form: FormData) {
  await exigerFondateur();
  const id = String(form.get("id") ?? "");
  const cible = id ? await prisma.enseignant.findUnique({ where: { id } }) : null;
  // Le fondateur ne peut pas être retiré — il n'y aurait plus personne
  // pour administrer. Les séances du collègue retiré survivent
  // (enseignantId passe à null) : le fondateur les récupère.
  if (cible && cible.role !== "fondateur") {
    await prisma.enseignant.delete({ where: { id } });
  }
  revalidatePath("/prof");
}

export async function changerMotDePasse(_: EtatProf, form: FormData): Promise<EtatProf> {
  const enseignant = await exigerSession();
  const actuel = String(form.get("actuel") ?? "");
  const nouveau = String(form.get("nouveau") ?? "");

  if (!motDePasseCorrespond(actuel, enseignant.empreinte)) {
    return { erreur: "Le mot de passe actuel est incorrect." };
  }
  if (nouveau.length < 8)
    return { erreur: "Le nouveau mot de passe doit compter au moins 8 caractères." };

  await prisma.enseignant.update({
    where: { id: enseignant.id },
    data: { empreinte: hacherMotDePasse(nouveau) },
  });
  return { fait: "Mot de passe changé." };
}

// ── Cahier de texte ──────────────────────────────────────────────────

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

/** Chacun ne touche qu'à ses séances ; le fondateur, à toutes. */
async function seanceModifiable(id: string, enseignant: { id: string; role: string }) {
  const seance = await prisma.seance.findUnique({ where: { id } });
  if (!seance) return null;
  if (enseignant.role !== "fondateur" && seance.enseignantId !== enseignant.id) return null;
  return seance;
}

export async function enregistrerSeance(form: FormData) {
  const enseignant = await exigerSession();

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
    lienVisio: texteOuNull(form.get("lienVisio")),
    publiee: form.get("publiee") === "on",
  };

  if (id) {
    if (!(await seanceModifiable(id, enseignant))) throw new Error("Séance introuvable");
    await prisma.seance.update({ where: { id }, data: donnees });
  } else {
    await prisma.seance.create({ data: { ...donnees, enseignantId: enseignant.id } });
  }

  revalidatePath("/classe");
  revalidatePath("/prof");
  redirect("/prof");
}

export async function supprimerSeance(form: FormData) {
  const enseignant = await exigerSession();
  const id = String(form.get("id") ?? "");
  if (id && (await seanceModifiable(id, enseignant))) {
    await prisma.seance.delete({ where: { id } });
  }
  revalidatePath("/classe");
  revalidatePath("/prof");
  redirect("/prof");
}

// ── Visibilité des ressources ────────────────────────────────────────

/**
 * Enregistre les types de ressources réservés aux apprenants connectés.
 * Décision d'établissement, pas de classe : réservée au fondateur.
 */
export async function enregistrerRessourcesReservees(form: FormData) {
  await exigerFondateur();
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

/** Lit un réglage-carte « clé → libellés », tolérant au JSON illisible. */
async function lireCarte(cle: string): Promise<Record<string, string[]>> {
  const reglage = await prisma.reglage.findUnique({ where: { cle } });
  if (!reglage) return {};
  try {
    const carte = JSON.parse(reglage.valeur) as Record<string, string[]>;
    return typeof carte === "object" && carte !== null ? carte : {};
  } catch {
    return {};
  }
}

async function ecrireCarte(cle: string, carte: Record<string, string[]>) {
  const valeur = JSON.stringify(carte);
  await prisma.reglage.upsert({
    where: { cle },
    create: { cle, valeur },
    update: { valeur },
  });
}

/**
 * Rattache un chapitre à ses compétences — le premier maillon de la
 * chaîne chapitre → compétences → applications. Un chapitre rattaché
 * publie les applications qui travaillent ses compétences, quel que soit
 * leur cahier d'origine ; tout décocher le ramène à son propre cahier.
 */
export async function enregistrerChapitreCompetences(form: FormData) {
  await exigerFondateur();
  const slug = String(form.get("chapitre") ?? "");
  if (!allChapters.some((c) => c.slug === slug)) return;

  const attributions = await lireCarte(CLE_COMPETENCES_EXERCICES);
  const connues = new Map(
    toutesLesCompetences(allChapters, attributions).map((c) => [c.cle, c.texte])
  );
  const cochees = [
    ...new Set(
      form
        .getAll("competence")
        .map((t) => connues.get(cleCompetence(String(t))))
        .filter((t): t is string => Boolean(t))
    ),
  ];

  const carte = await lireCarte(CLE_CHAPITRE_COMPETENCES);
  if (cochees.length) carte[slug] = cochees;
  else delete carte[slug];
  await ecrireCarte(CLE_CHAPITRE_COMPETENCES, carte);
  revalidatePath("/prof");
}

/**
 * Sélection des applications publiées pour un chapitre, décidée par le
 * fondateur — la surcharge fine de la chaîne par compétences : elle
 * s'applique au vivier que la chaîne produit, ou au cahier du chapitre
 * s'il n'est rattaché à aucune compétence. Tout coché — l'état normal —
 * s'enregistre comme une absence de réglage : la restriction est
 * l'exception, pas la règle.
 */
export async function enregistrerApplicationsChoisies(form: FormData) {
  await exigerFondateur();
  const slug = String(form.get("chapitre") ?? "");
  const chapitre = allChapters.find((c) => c.slug === slug);
  if (!chapitre) return;

  const chaines = await lireCarte(CLE_CHAPITRE_COMPETENCES);
  const attributions = await lireCarte(CLE_COMPETENCES_EXERCICES);
  const vivier = chaines[slug]?.length
    ? applicationsParCompetences(slug, chaines[slug], allChapters, attributions).exercises
    : chapitre.exercises ?? [];
  if (!vivier.length) return;

  const valides = new Set(vivier.map((e) => e.id));
  const cochees = form
    .getAll("exercice")
    .map(String)
    .filter((id) => valides.has(id));

  const carte = await lireCarte(CLE_APPLICATIONS_CHOISIES);
  if (cochees.length === vivier.length) delete carte[slug];
  else carte[slug] = cochees;
  await ecrireCarte(CLE_APPLICATIONS_CHOISIES, carte);
  revalidatePath("/prof");
}

/**
 * Rattache des compétences aux applications d'un chapitre que le cahier
 * ne couvre pas — pour tenir la règle de l'auteur : toute application
 * porte au moins une compétence. Les attributions s'ajoutent au cahier,
 * elles ne le remplacent jamais.
 */
export async function enregistrerCompetencesExercices(form: FormData) {
  await exigerFondateur();
  const slug = String(form.get("chapitre") ?? "");
  const chapitre = getChapter(slug);
  if (!chapitre?.exercises?.length) return;
  const valides = new Set(chapitre.exercises.map((e) => e.id));

  const reglage = await prisma.reglage.findUnique({ where: { cle: CLE_COMPETENCES_EXERCICES } });
  let carte: Record<string, string[]> = {};
  try {
    carte = reglage ? (JSON.parse(reglage.valeur) as Record<string, string[]>) : {};
  } catch {
    carte = {};
  }

  for (const id of form.getAll("exercices").map(String)) {
    if (!valides.has(id)) continue;
    const cochees = form.getAll(`comp-${id}`).map(String);
    const libres = String(form.get(`libre-${id}`) ?? "")
      .split(/[•;]/)
      .map((t) => t.trim())
      .filter((t) => t.length > 3);
    const toutes = [...new Set([...cochees, ...libres])].slice(0, 10);
    const cle = `${slug}:${id}`;
    if (toutes.length) carte[cle] = toutes;
    else delete carte[cle];
  }

  const valeur = JSON.stringify(carte);
  await prisma.reglage.upsert({
    where: { cle: CLE_COMPETENCES_EXERCICES },
    create: { cle: CLE_COMPETENCES_EXERCICES, valeur },
    update: { valeur },
  });
  revalidatePath("/prof");
}

// ── Matières visibles ───────────────────────────────────────────────

// ── Agenda externe ──────────────────────────────────────────────────

export async function enregistrerAgendaUrl(form: FormData) {
  await exigerSession();
  const url = String(form.get("url") ?? "").trim();
  if (url) {
    await prisma.reglage.upsert({
      where: { cle: CLE_AGENDA_URL },
      create: { cle: CLE_AGENDA_URL, valeur: url },
      update: { valeur: url },
    });
  } else {
    await prisma.reglage.deleteMany({ where: { cle: CLE_AGENDA_URL } });
  }
  revalidatePath("/prof");
  revalidatePath("/planning");
  revalidatePath("/classe");
}

// ── Annonces ────────────────────────────────────────────────────────

async function annonceModifiable(id: string, enseignant: { id: string; role: string }) {
  const annonce = await prisma.annonce.findUnique({ where: { id } });
  if (!annonce) return null;
  if (enseignant.role !== "fondateur" && annonce.enseignantId !== enseignant.id) return null;
  return annonce;
}

export async function enregistrerAnnonce(form: FormData) {
  const enseignant = await exigerSession();

  const id = texteOuNull(form.get("id"));
  const titre = String(form.get("titre") ?? "").trim();
  const contenu = String(form.get("contenu") ?? "").trim();
  const classe = texteOuNull(form.get("classe"));
  const publiee = form.get("publiee") === "on";
  const epinglee = form.get("epinglee") === "on";

  if (!titre || !contenu) throw new Error("Le titre et le contenu sont obligatoires.");

  const donnees = { titre, contenu, classe, publiee, epinglee };

  if (id) {
    if (!(await annonceModifiable(id, enseignant))) throw new Error("Annonce introuvable");
    await prisma.annonce.update({ where: { id }, data: donnees });
  } else {
    await prisma.annonce.create({ data: { ...donnees, enseignantId: enseignant.id } });
  }

  revalidatePath("/classe");
  revalidatePath("/prof");
  revalidatePath("/");
  redirect("/prof");
}

export async function supprimerAnnonce(form: FormData) {
  const enseignant = await exigerSession();
  const id = String(form.get("id") ?? "");
  if (id && (await annonceModifiable(id, enseignant))) {
    await prisma.annonce.delete({ where: { id } });
  }
  revalidatePath("/classe");
  revalidatePath("/prof");
  revalidatePath("/");
  redirect("/prof");
}

// ── Matières visibles ───────────────────────────────────────────────

export async function enregistrerMatieresVisibles(form: FormData) {
  await exigerSession();
  const toutesLesUe = programs.map((p) => p.ue);
  const visibles = form
    .getAll("matiere")
    .map(String)
    .filter((ue) => toutesLesUe.includes(ue));
  const masquees = toutesLesUe.filter((ue) => !visibles.includes(ue));
  const valeur = JSON.stringify(masquees);
  await prisma.reglage.upsert({
    where: { cle: CLE_MATIERES_MASQUEES },
    create: { cle: CLE_MATIERES_MASQUEES, valeur },
    update: { valeur },
  });
  revalidatePath("/", "layout");
  revalidatePath("/prof");
}
