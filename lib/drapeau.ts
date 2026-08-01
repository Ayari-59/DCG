/**
 * Nom du cookie-drapeau « connecté », lisible par le navigateur.
 *
 * Défini seul dans ce module sans « server-only » : lib/apprenant.ts est
 * réservé au serveur, et les composants client qui n'ont besoin que du nom
 * du cookie ne doivent pas l'importer.
 */
export const COOKIE_DRAPEAU_CLIENT = "dcga_connecte";
