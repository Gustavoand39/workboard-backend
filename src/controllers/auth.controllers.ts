import type { Request, Response } from "express";

import { asyncHandler } from "@/middlewares";
import { signUpService } from "@/services/auth.services";
import { sendSuccessDataResponse } from "@/utils";

export const signUp = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await signUpService(email, password);

  sendSuccessDataResponse(res, "Usuario creado exitosamente", {
    user,
  })
})