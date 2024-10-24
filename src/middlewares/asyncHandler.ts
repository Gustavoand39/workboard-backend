import type { Request, Response, NextFunction } from "express";

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

/**
 * Envuelve un controlador asíncrono para manejar errores.
 *
 * @param {AsyncHandler} fn - Controlador asíncrono.
 * @returns {Function} Middleware.
 * 
 * @example
 * app.get("/users", asyncHandler(async (req, res) => {
 *  const users = await User.find();
 * res.json(users);
 * }));
 */
export const asyncHandler =
  (fn: AsyncHandler): Function => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      next(error);
    });
  };
