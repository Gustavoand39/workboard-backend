import type { Response } from "express";
import type { ValidationError } from "express-validator";

type CookieOptions = {
  httpOnly?: boolean;
  maxAge?: number;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
  path?: string;
};

export const ONE_HOUR = 60 * 60 * 1000;
export const SEVEN_DAYS = ONE_HOUR * 24 * 7;

/**
 * Envia una respuesta con un mensaje de éxito.
 *
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {string} message - Mensaje de éxito.
 * @param {number} [status=200] - Código de estado HTTP.
 * @returns {void}
 * @example
 * sendSuccessStatus(res, "Usuario creado con éxito");
 */
export const sendSuccessStatus = (
  res: Response,
  message: string,
  status: number = 200
): void => {
  res.status(status).json({
    success: true,
    message,
  });
};

/**
 * Envia una respuesta con un mensaje de éxito y datos.
 *
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {string} message - Mensaje de éxito.
 * @param {T} data - Datos a enviar.
 * @param {number} [status=200] - Código de estado HTTP.
 * @returns {void}
 * @example
 * sendSuccessDataResponse(res, "Usuario encontrado", user);
 */
export const sendSuccessDataResponse = <T>(
  res: Response,
  message: string,
  data: T,
  status: number = 200
): void => {
  res.status(status).json({
    success: true,
    message,
    data,
  });
};

/**
 * Envia una cookie en la respuesta.
 *
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {string} name - Nombre de la cookie.
 * @param {string} value - Valor de la cookie.
 * @param {CookieOptions} options - Opciones de la cookie.
 * @returns {void}
 * @example
 * sendCookie(res, "accessToken", accessToken, {
 *   httpOnly: true,
 *   maxAge: 60 * 60 * 1000,
 *   secure: false,
 *   sameSite: "lax",
 *   path: "/",
 * });
 */
export const sendCookie = (
  res: Response,
  name: string,
  value: string,
  options?: CookieOptions
): void => {
  const defaultOptions: CookieOptions = {
    httpOnly: true,
    maxAge: ONE_HOUR,
    secure: false,
    sameSite: "lax",
    path: "/",
  };

  res.cookie(name, value, { ...defaultOptions, ...options });
};

/**
 * Envia una respuesta con un mensaje de error.
 *
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {string} message - Mensaje de error.
 * @param {number} [status=500] - Código de estado HTTP.
 * @returns {void}
 * @example
 * sendErrorStatus(res, "Error al crear el usuario");
 */
export const sendErrorStatus = (
  res: Response,
  message: string,
  status: number = 500
): void => {
  res.status(status).json({
    success: false,
    message,
  });
};

/**
 * Envia una respuesta con un mensaje de error de validación.
 *
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {string} message - Mensaje de error.
 * @param {ValidationError[]} errors - Errores de validación.
 * @param {number} [status=400] - Código de estado HTTP.
 * @returns {void}
 * @example
 * sendValidationError(res, "Datos inválidos en la petición", errors);
 */
export const sendValidationError = (
  res: Response,
  message: string,
  errors: ValidationError[],
  status: number = 400
): void => {
  res.status(status).json({
    success: false,
    message,
    errors,
  });
};

/**
 * Envia una respuesta con un mensaje de error interno del servidor.
 *
 * @param {Response} res - Objeto de respuesta de Express.
 * @param {string} message - Mensaje de error.
 * @param {number} [status=500] - Código de estado HTTP.
 * @returns {void}
 * @example
 * sendServerError(res);
 */
export const sendServerError = (
  res: Response,
  message: string = "Error interno del servidor",
  status: number = 500
): void => {
  res.status(status).json({
    success: false,
    message,
  });
};
