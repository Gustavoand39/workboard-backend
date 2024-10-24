import type { Request, Response, NextFunction } from "express";
import { CustomError } from "@/classes/CustomError";

export const errorHandler = (
  err: CustomError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error(err);

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    success: false,
    message: "Error interno del servidor.",
  });
};
