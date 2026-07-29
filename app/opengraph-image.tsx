import { ImageResponse } from "next/og";

/**
 * Image de partage : ce qui s'affiche quand un lien vers le site est collé
 * dans WhatsApp, sur LinkedIn ou dans un mail. Sans elle, les plateformes
 * fabriquent une vignette au hasard — souvent la première image trouvée,
 * c'est-à-dire un schéma de cours sorti de son contexte.
 *
 * Elle est dessinée à la volée plutôt que fournie en fichier : le signe et
 * les couleurs restent ceux du site, sans qu'il faille penser à la
 * réexporter à chaque retouche de la charte.
 */

export const alt = "Objectif-DCG.fr — Réussir le contrôle de gestion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY_DEEP = "#0e2244";
const ORANGE = "#f07e26";
const AMBRE = "#fbb040";

/** Le signe, en dur : le rendu de l'image n'a pas accès aux variables CSS. */
const SIGNE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <mask id="d" maskUnits="userSpaceOnUse">
    <rect width="120" height="120" fill="#fff"/>
    <path d="M6 104 C30 96 46 80 62 60 C78 40 90 28 108 18" fill="none" stroke="#000" stroke-width="21" stroke-linecap="round"/>
  </mask>
  <g mask="url(#d)">
    <circle cx="60" cy="60" r="40" fill="none" stroke="${ORANGE}" stroke-width="14"/>
    <circle cx="60" cy="60" r="23" fill="#ffffff"/>
  </g>
  <g fill="none" stroke="${AMBRE}" stroke-width="9" stroke-linecap="round">
    <path d="M12 99 C33 91 47 78 62 59 C74 44 86 33 99 25"/>
    <path d="M95.2 39.7 L104 20.7 L83.1 21.5" stroke-linejoin="miter"/>
  </g>
</svg>`;

const marque = `data:image/svg+xml;base64,${Buffer.from(SIGNE).toString("base64")}`;

const PROGRAMMES = ["DCG · UE11", "DCG · UE13", "DSCG · UE3"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: NAVY_DEEP,
          padding: "70px 76px 0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={marque} width={84} height={84} alt="" />
          <div style={{ display: "flex", fontSize: 42, fontWeight: 700, color: "#fff" }}>
            <span>Objectif</span>
            <span style={{ color: ORANGE }}>-DCG</span>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>.fr</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", paddingBottom: 26 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#fff" }}>
            Réussir le
          </div>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: ORANGE }}>
            contrôle de gestion
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 29,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Cours, méthodologie, fiches, flashcards et quiz corrigés.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 14, paddingBottom: 42 }}>
            {PROGRAMMES.map((p) => (
              <div
                key={p}
                style={{
                  display: "flex",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: 999,
                  padding: "10px 24px",
                  fontSize: 25,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {p}
              </div>
            ))}
          </div>
          {/* Le filet orange du pied de page, repris ici. */}
          <div style={{ display: "flex", height: 12, margin: "0 -76px", background: ORANGE }} />
        </div>
      </div>
    ),
    size
  );
}
