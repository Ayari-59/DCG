import { defineConfig } from "prisma/config";

// Avec un fichier de configuration, la CLI Prisma ne charge plus .env
// d'elle-même. On s'en charge ici (Node ≥ 20.6). En production, les
// variables viennent de l'hébergeur et le fichier n'existe pas.
try {
  process.loadEnvFile(".env");
} catch {
  // pas de .env : les variables sont déjà dans l'environnement, ou absentes
}

/**
 * Configuration des commandes Prisma (db push, studio, migrate).
 * Depuis Prisma 7, l'URL de connexion ne figure plus dans schema.prisma :
 * elle est lue ici pour la CLI, et passée au client via un adaptateur
 * (voir lib/db.ts).
 *
 * L'URL est lue sans `env()` : ce dernier lève une erreur quand la variable
 * est absente, ce qui empêcherait `prisma generate` — qui n'en a pas besoin —
 * de s'exécuter, notamment lors d'une installation propre.
 */
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Même tolérance que lib/db.ts : l'intégration Neon de Vercel nomme
    // sa variable STORAGE_URL.
    url: process.env.DATABASE_URL ?? process.env.STORAGE_URL ?? "",
  },
});
