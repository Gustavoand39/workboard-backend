import type { Request, Response } from "express";

import { asyncHandler } from "@/middlewares";
import { signInService, signUpService } from "@/services/auth.services";
import {
  AuthenticationError,
  generateAccessToken,
  getCookie,
  sendCookie,
  sendSuccessDataResponse,
  sendSuccessStatus,
  SEVEN_DAYS,
  verifyRefreshToken,
} from "@/utils";
import type { UserPayload } from "@/types/Express";

export const signUp = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken, user } = await signUpService(
    email,
    password
  );

  sendCookie(res, "accessToken", accessToken);
  sendCookie(res, "refreshToken", refreshToken, {
    maxAge: SEVEN_DAYS,
    path: "/api/v1/auth/refresh-token",
  });
  sendSuccessDataResponse(res, "Usuario creado exitosamente", user, 201);
});

export const signIn = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken, user } = await signInService(
    email,
    password
  );

  sendCookie(res, "accessToken", accessToken);
  sendCookie(res, "refreshToken", refreshToken, {
    maxAge: SEVEN_DAYS,
    path: "/api/v1/auth/refresh-token",
  });
  sendSuccessDataResponse(res, "Usuario autenticado exitosamente", user);
});

export const refreshToken = asyncHandler(
  async (req: Request, res: Response) => {
    const refreshToken = getCookie(req, "refreshToken");

    if (!refreshToken) {
      throw new AuthenticationError("No se encontró el token de refresco");
    }

    const decoded = verifyRefreshToken(refreshToken) as UserPayload;

    if (!decoded) throw new AuthenticationError("Token de refresco inválido");

    const accessToken = generateAccessToken(decoded.id, decoded.email);

    sendCookie(res, "accessToken", accessToken);
    sendSuccessStatus(res, "Token de acceso refrescado exitosamente");
  }
);

export const signOut = asyncHandler(async (_req: Request, res: Response) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  sendSuccessStatus(res, "Usuario deslogueado exitosamente");
});
