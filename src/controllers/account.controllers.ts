import type { Request, Response } from "express";

import { asyncHandler } from "@/middlewares";
import { updateNameService } from "@/services/account.services";
import { sendSuccessDataResponse } from "@/utils";

export const updateName = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName } = req.body;

  const user = await updateNameService(id, fullName);

  sendSuccessDataResponse(res, "Nombre actualizado correctamente", user);
});
