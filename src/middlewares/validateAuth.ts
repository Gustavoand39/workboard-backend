import type { NextFunction, Request, Response } from "express";

import { asyncHandler } from "@/middlewares/asyncHandler";
import { AuthenticationError, getCookie, verifyAccessToken } from "@/utils";
import type { UserPayload } from "@/types/Express";

/**
 * Valida la autenticación del usuario.
 * Si se valida correctamente, se agrega el usuario decodificado a la solicitud.
 *
 * @param {Request} req - Request.
 * @param {Response} _res - Response.
 * @param {NextFunction} next - Next function.
 * @returns {void}
 * @throws {AuthenticationError} Error de autenticación.
 */
export const validateAuth = asyncHandler(
  async (req: Request, _res: Response, next: NextFunction) => {
    const accessToken = getCookie(req, "accessToken");

    if (!accessToken)
      throw new AuthenticationError("Token de acceso no encontrado");

    const decoded = verifyAccessToken(accessToken) as UserPayload;

    if (!decoded) throw new AuthenticationError("Token de acceso inválido");

    req.decodedUser = decoded;
    next();
  }
);
