"use client";

import type { ChampReponse, Exercise } from "@/lib/content/types";
import { Icone } from "./Icones";

/**
 * Zone de réponse structurée d'un exercice : un bloc par consigne, et des
 * cellules précises pour les résultats chiffrés.
 *
 * Les consignes sont les paragraphes en gras de l'énoncé (« Calculer le
 * coût de revient… », « Intérêts et limites… ») — c'est ainsi que les
 * cahiers de l'auteur les écrivent. Une consigne calculatoire reçoit des
 * cellules intitulé + valeur, extensibles (« deux produits » = deux
 * lignes) ; une consigne rédactionnelle reçoit une zone de texte. Si
 * l'auteur a défini des champs exacts (exercise.champs), ils remplacent
 * la détection.
 */

export interface Resultat {
  intitule: string;
  valeur: string;
}

export interface ReponseConsigne {
  resultats?: Resultat[];
  detail?: string;
}

export type ReponsesExercice = Record<number, ReponseConsigne>;

interface Consigne {
  label: string;
  calculatoire: boolean;
  unite?: string;
}

/** Verbes et objets qui trahissent une consigne à résultat chiffré. */
const CALCULATOIRE =
  /calcul|détermin|chiffr|établ|coût|cout|montant|écart|seuil|taux|budget|résultat|marge|valoris|imput/i;

/** Métadonnées du cahier, pas des questions. */
const HORS_CONSIGNE = /^(compétences visées|méthode)/i;

export function consignesDe(exercise: Exercise): Consigne[] {
  if (exercise.champs?.length) {
    return exercise.champs.map((c: ChampReponse) => ({
      label: c.intitule,
      calculatoire: c.type === "nombre",
      unite: c.unite,
    }));
  }
  const detectees: Consigne[] = [];
  for (const bloc of exercise.statement) {
    if (bloc.type !== "p") continue;
    const gras = bloc.text.match(/^\*\*(.+?)\*\*/);
    if (!gras) continue;
    const label = gras[1].trim();
    if (HORS_CONSIGNE.test(label)) continue;
    detectees.push({ label, calculatoire: CALCULATOIRE.test(label) });
  }
  return detectees.length
    ? detectees
    : [{ label: "Votre réponse", calculatoire: false }];
}

/** Une réponse est engagée dès qu'une cellule ou un détail est rempli. */
export function aRepondu(reponses: ReponsesExercice): boolean {
  return Object.values(reponses).some(
    (r) =>
      r.detail?.trim() ||
      r.resultats?.some((x) => x.intitule.trim() || x.valeur.trim())
  );
}

const CELLULE =
  "rounded-lg border border-line bg-white px-3 py-2 text-[15px] text-ink outline-none transition focus:border-brand";

export function ReponseExercice({
  exercise,
  reponses,
  onChange,
}: {
  exercise: Exercise;
  reponses: ReponsesExercice;
  onChange: (suivantes: ReponsesExercice) => void;
}) {
  const consignes = consignesDe(exercise);

  const majConsigne = (i: number, patch: Partial<ReponseConsigne>) =>
    onChange({ ...reponses, [i]: { ...reponses[i], ...patch } });

  return (
    <div className="mt-8 space-y-6">
      {consignes.map((consigne, i) => {
        const reponse = reponses[i] ?? {};
        const resultats: Resultat[] =
          reponse.resultats?.length ? reponse.resultats : [{ intitule: "", valeur: "" }];

        return (
          <div key={i} className="rounded-xl border border-line bg-slate-50/60 p-4 sm:p-5">
            <p className="text-sm font-bold text-ink">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded bg-navy text-[11px] font-black text-white">
                {i + 1}
              </span>
              {consigne.label}
            </p>

            {consigne.calculatoire && (
              <div className="mt-3">
                <p className="mb-1.5 text-xs font-black uppercase tracking-[0.15em] text-muted">
                  Vos résultats
                </p>
                <div className="space-y-2">
                  {resultats.map((r, k) => (
                    <div key={k} className="flex flex-wrap items-center gap-2">
                      <input
                        value={r.intitule}
                        onChange={(e) => {
                          const suivants = resultats.map((x, j) =>
                            j === k ? { ...x, intitule: e.target.value } : x
                          );
                          majConsigne(i, { resultats: suivants });
                        }}
                        placeholder={consigne.unite ? consigne.label : "Intitulé (ex. Coût de revient 400 g)"}
                        className={`${CELLULE} min-w-0 flex-1`}
                      />
                      <div className="flex items-center gap-1.5">
                        <input
                          value={r.valeur}
                          onChange={(e) => {
                            const suivants = resultats.map((x, j) =>
                              j === k ? { ...x, valeur: e.target.value } : x
                            );
                            majConsigne(i, { resultats: suivants });
                          }}
                          inputMode="decimal"
                          placeholder="Valeur"
                          className={`${CELLULE} w-32 text-right tabular-nums`}
                        />
                        {consigne.unite && (
                          <span className="text-sm font-semibold text-muted">{consigne.unite}</span>
                        )}
                        {resultats.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              majConsigne(i, { resultats: resultats.filter((_, j) => j !== k) })
                            }
                            aria-label="Retirer ce résultat"
                            className="text-muted transition hover:text-rose-700"
                          >
                            <Icone nom="fermer" className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    majConsigne(i, { resultats: [...resultats, { intitule: "", valeur: "" }] })
                  }
                  className="mt-2 text-xs font-semibold text-brand underline-offset-2 hover:underline"
                >
                  + Ajouter un résultat
                </button>
              </div>
            )}

            <div className="mt-3">
              <p className="mb-1.5 text-xs font-black uppercase tracking-[0.15em] text-muted">
                {consigne.calculatoire ? "Détail du calcul" : "Votre réponse"}
              </p>
              <textarea
                value={reponse.detail ?? ""}
                onChange={(e) => majConsigne(i, { detail: e.target.value })}
                rows={consigne.calculatoire ? 3 : 5}
                placeholder={
                  consigne.calculatoire
                    ? "Posez votre démarche : formules, étapes, justifications…"
                    : "Rédigez votre réponse…"
                }
                className={`${CELLULE} w-full leading-relaxed`}
              />
            </div>
          </div>
        );
      })}
      <p className="text-xs text-muted">
        Vos réponses sont enregistrées automatiquement, sur cet appareil.
      </p>
    </div>
  );
}
