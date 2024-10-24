import type { Request } from "express";

/**
 * Obtiene una cookie de la solicitud.
 *
 * @param {Request} req - Request.
 * @param {string} cookieName - Nombre de la cookie.
 * @returns {string | null} Valor de la cookie o null.
 * 
 * @example
 * const token = getCookie(req, "accessToken");
 */
export const getCookie = (req: Request, cookieName: string): string | null => {
  const cookie = req.headers.cookie;
  if (!cookie) return null;

  const tokenMatch = cookie.match(new RegExp(`${cookieName}=([^;]*)`));
  return tokenMatch ? tokenMatch[1] : null;
};