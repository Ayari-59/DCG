import fs from "node:fs";
import path from "node:path";

/**
 * Portrait de l'auteur — partagé entre l'accroche de l'accueil et la carte
 * « L'auteur » de la page À propos.
 *
 * La photo est détectée à la construction : il suffit de déposer un fichier
 * nommé `mohamed-ayari` dans public/ pour qu'elle remplace les initiales,
 * sans toucher au code. Tant qu'elle est absente, on affiche le monogramme
 * plutôt qu'une image cassée.
 */
export function Portrait({ petit = false }: { petit?: boolean }) {
  // Le nom réel du fichier est relevé tel qu'il est écrit sur le disque :
  // Windows ignore la casse, mais le serveur qui sert le site, non.
  const fichier = fs
    .readdirSync(path.join(process.cwd(), "public"))
    .find((nom) => /^mohamed-ayari\.(jpe?g|png|webp)$/i.test(nom));

  const cadre = petit
    ? "h-12 w-12 ring-2"
    : "h-32 w-32 ring-4 sm:h-40 sm:w-40";

  return (
    <div className="relative shrink-0">
      <span
        aria-hidden
        className="absolute -inset-1.5 rounded-full bg-brand/30 blur-[2px]"
      />
      {fichier ? (
        /*
         * La photo est un plan large au format paysage. Un simple
         * `object-cover` remplirait la hauteur sans laisser de marge
         * verticale : le visage resterait bloqué en haut du cercle, le
         * pull en occupant la moitié basse. L'image est donc agrandie et
         * décalée à la main pour cadrer le visage.
         */
        <div className={`relative overflow-hidden rounded-full ring-brand ${cadre}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/${fichier}`}
            alt="Mohamed Ayari"
            width={1536}
            height={1024}
            className="absolute left-[-72%] top-[2%] w-[220%] max-w-none"
          />
        </div>
      ) : (
        <span
          aria-label="Mohamed Ayari"
          role="img"
          className={`relative flex items-center justify-center rounded-full bg-navy font-serif font-bold tracking-tight text-white ring-brand ${cadre} ${
            petit ? "text-base" : "text-4xl sm:text-5xl"
          }`}
        >
          MA
        </span>
      )}
    </div>
  );
}
