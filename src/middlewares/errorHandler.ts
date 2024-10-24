import type { Request, Response, NextFunction } from "express";
import { CustomError } from "@/classes/CustomError";
import {
  sendErrorStatus,
  sendServerError,
  sendValidationError,
  ValidationError,
} from "@/utils";

export const errorHandler = (
  err: CustomError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error(err);

  if (err instanceof ValidationError) {
    sendValidationError(res, "Datos inválidos en la petición", err.errors!);
    return;
  }

  if (err instanceof CustomError) {
    sendErrorStatus(res, err.message, err.statusCode);
    return;
  }

  sendServerError(res);
};
