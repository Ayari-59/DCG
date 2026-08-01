"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma, dbConfigured } from "@/lib/db";
import {
  apprenantConnecte,
  fermerSessionApprenant,
  hacherMotDePasse,
  motDePasseCorrespond,
  ouvrirSessionApprenant,
} from "@/lib/apprenant";
import { getChapter } from "@/lib/content";

/**
 * Actions du compte apprenant. Chacune revalide ou redirige elle-même :
 * les formulaires n'ont pas de logique, ils postent.
 */

export type EtatFormulaire = { erreur?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function inscrire(_: EtatFormulaire, donnees: FormData): Promise<EtatFormulaire> {
  if (!dbConfigured) return { erreur: "La base de données n'est pas configurée." };

  const prenom = String(donnees.get("prenom") ?? "").trim();
  const email = String(donnees.get("email") ?? "").trim().toLowerCase();
  const motDePasse = String(donnees.get("motDePasse") ?? "");
  const consentement = donnees.get("consentement") === "on";

  if (!prenom) return { erreur: "Le prénom est requis." };
  if (!EMAIL.test(email)) return { erreur: "L'adresse e-mail n'est pas valide." };
  if (motDePasse.length < 8)
    return { erreur: "Le mot de passe doit compter au moins 8 caractères." };
  if (!consentement)
    return { erreur: "L'inscription nécessite d'accepter la politique de confidentialité." };

  const existant = await prisma.apprenant.findUnique({ where: { email } });
  if (existant) return { erreur: "Un compte existe déjà avec cette adresse." };

  const apprenant = await prisma.apprenant.create({
    data: {
      prenom,
      email,
      empreinte: hacherMotDePasse(motDePasse),
      consentement: new Date(),
    },
  });

  await ouvrirSessionApprenant(apprenant.id);
  await importerDepuisFormulaire(apprenant.id, donnees);
  redirect("/compte");
}

export async function connecter(_: EtatFormulaire, donnees: FormData): Promise<EtatFormulaire> {
  if (!dbConfigured) return { erreur: "La base de données n'est pas configurée." };

  const email = String(donnees.get("email") ?? "").trim().toLowerCase();
  const motDePasse = String(donnees.get("motDePasse") ?? "");

  const apprenant = await prisma.apprenant.findUnique({ where: { email } });
  // Même réponse que le compte existe ou non : ne renseigne pas un curieux.
  if (!apprenant || !motDePasseCorrespond(motDePasse, apprenant.empreinte)) {
    return { erreur: "Adresse ou mot de passe incorrect." };
  }

  await ouvrirSessionApprenant(apprenant.id);
  await importerDepuisFormulaire(apprenant.id, donnees);
  redirect("/compte");
}

export async function deconnecter(): Promise<void> {
  await fermerSessionApprenant();
  redirect("/");
}

/**
 * Suppression du compte : l'apprenant efface lui-même toutes ses données
 * (compte, sessions et progression, par cascade). C'est l'exercice du
 * droit à l'effacement, sans avoir à écrire à personne.
 */
export async function supprimerCompte(): Promise<void> {
  const apprenant = await apprenantConnecte();
  if (apprenant) {
    await prisma.apprenant.delete({ where: { id: apprenant.id } });
  }
  await fermerSessionApprenant();
  redirect("/");
}

// ── Progression ──────────────────────────────────────────────────────

interface ProgressionEnvoyee {
  chapitre: string;
  quizScore?: number;
  quizTotal?: number;
  cartes?: string[];
  /** Auto-évaluation des applications : idExercice → statut. */
  applications?: Record<string, string>;
}

const STATUTS_APPLICATION = new Set(["reussi", "partiel", "a-revoir"]);

/** Une entrée est plausible si le chapitre existe et les valeurs sont saines. */
function assainir(p: ProgressionEnvoyee): ProgressionEnvoyee | null {
  const chapitre = getChapter(p.chapitre);
  if (!chapitre) return null;
  const cartes = Array.isArray(p.cartes)
    ? p.cartes.filter((c) => typeof c === "string").slice(0, 500)
    : undefined;
  const applications =
    p.applications && typeof p.applications === "object"
      ? Object.fromEntries(
          Object.entries(p.applications)
            .filter(([, v]) => STATUTS_APPLICATION.has(String(v)))
            .slice(0, 100)
        )
      : undefined;
  const score =
    typeof p.quizScore === "number" && typeof p.quizTotal === "number" &&
    p.quizScore >= 0 && p.quizTotal > 0 && p.quizScore <= p.quizTotal
      ? { quizScore: Math.floor(p.quizScore), quizTotal: Math.floor(p.quizTotal) }
      : {};
  return { chapitre: p.chapitre, ...score, cartes, applications };
}

/**
 * Enregistre la progression d'un chapitre. Fusion et non remplacement :
 * le meilleur score est conservé, les cartes acquises s'additionnent —
 * travailler sur son téléphone n'efface pas ce qui a été fait à la maison.
 */
export async function enregistrerProgression(entree: ProgressionEnvoyee): Promise<void> {
  const apprenant = await apprenantConnecte();
  if (!apprenant) return;
  await enregistrerPour(apprenant.id, entree);
  revalidatePath("/compte");
}

async function enregistrerPour(apprenantId: string, entree: ProgressionEnvoyee): Promise<void> {
  const propre = assainir(entree);
  if (!propre) return;

  const existante = await prisma.progression.findUnique({
    where: { apprenantId_chapitre: { apprenantId, chapitre: propre.chapitre } },
  });

  const cartesFusionnees = [
    ...new Set([...((existante?.cartes as string[] | null) ?? []), ...(propre.cartes ?? [])]),
  ];
  /*
   * Les statuts d'applications fusionnent clé par clé, dernier mot au plus
   * récent : contrairement au score, un statut peut légitimement reculer —
   * on croyait avoir réussi, le professeur a montré que non.
   */
  const applicationsFusionnees = {
    ...((existante?.applications as Record<string, string> | null) ?? {}),
    ...(propre.applications ?? {}),
  };
  const meilleurScore =
    propre.quizScore !== undefined &&
    (existante?.quizScore == null || propre.quizScore > existante.quizScore)
      ? { quizScore: propre.quizScore, quizTotal: propre.quizTotal }
      : {};

  await prisma.progression.upsert({
    where: { apprenantId_chapitre: { apprenantId, chapitre: propre.chapitre } },
    create: {
      apprenantId,
      chapitre: propre.chapitre,
      quizScore: propre.quizScore,
      quizTotal: propre.quizTotal,
      cartes: propre.cartes ?? [],
      applications: propre.applications ?? {},
    },
    update: { ...meilleurScore, cartes: cartesFusionnees, applications: applicationsFusionnees },
  });
}

/**
 * Import en une fois de la progression déjà accumulée dans le navigateur,
 * jointe au formulaire de connexion dans un champ caché : les semaines de
 * travail sans compte ne sont pas perdues.
 */
async function importerDepuisFormulaire(apprenantId: string, donnees: FormData): Promise<void> {
  try {
    const entrees = JSON.parse(String(donnees.get("progressionLocale") ?? "[]"));
    if (!Array.isArray(entrees)) return;
    for (const entree of entrees.slice(0, 60)) {
      await enregistrerPour(apprenantId, entree);
    }
  } catch {
    // progression illisible : la connexion n'échoue pas pour autant
  }
}
