import type { Request, Response } from "express";

import { asyncHandler } from "@/middlewares";
import { signInService, signUpService } from "@/services/auth.services";
import { sendCookie, sendSuccessDataResponse, SEVEN_DAYS } from "@/utils";

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
