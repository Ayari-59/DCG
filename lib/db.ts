import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

/**
 * Depuis Prisma 7, le client reçoit sa connexion par un adaptateur plutôt
 * que par l'URL du schéma. On passe par le point d'entrée « pooler » de Neon,
 * indispensable en environnement serverless où chaque requête peut ouvrir
 * sa propre connexion.
 */

/**
 * L'intégration Neon de Vercel nomme sa variable STORAGE_URL ; en local et
 * ailleurs elle s'appelle DATABASE_URL. Le code accepte les deux plutôt
 * que d'exiger un renommage à chaque environnement.
 */
const urlBase = () => process.env.DATABASE_URL ?? process.env.STORAGE_URL;

/** La base n'est pas indispensable au site : les cours restent statiques. */
export const dbConfigured = Boolean(urlBase());

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function creerClient(): PrismaClient {
  const adapter = new PrismaPg({ connectionString: urlBase() });
  return new PrismaClient({ adapter });
}

/**
 * En développement, Next.js recharge les modules à chaque modification :
 * sans ce cache global, chaque rechargement ouvrirait une nouvelle réserve
 * de connexions et Neon finirait par les refuser.
 */
export const prisma: PrismaClient =
  globalForPrisma.prisma ?? (dbConfigured ? creerClient() : (undefined as unknown as PrismaClient));

if (process.env.NODE_ENV !== "production" && dbConfigured) globalForPrisma.prisma = prisma;
