import type { Request, Response } from "express";

import { asyncHandler } from "@/middlewares";
import { signInService, signUpService } from "@/services/auth.services";
import { sendSuccessDataResponse } from "@/utils";

export const signUp = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken, user } = await signUpService(
    email,
    password
  );

  sendSuccessDataResponse(res, "Usuario creado exitosamente", user, 201);
});

export const signIn = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const { accessToken, refreshToken, user } = await signInService(
    email,
    password
  );

  sendSuccessDataResponse(res, "Usuario autenticado exitosamente", user);
});
