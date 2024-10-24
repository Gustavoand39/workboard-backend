import type { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { ValidationError } from "@/utils/errors";

export const validateRequest = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new ValidationError(
      "Datos inválidos en la petición",
      errors.array()
    );
    return next(error);
  }

  next();
};
