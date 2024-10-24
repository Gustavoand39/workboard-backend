import type { ValidationError } from "express-validator";

/**
 * Clase para manejar errores personalizados.
 *
 * @class CustomError
 * @extends {Error}
 * @public statusCode - Código de estado HTTP.
 * @public isOperational - Indica si el error es operacional.
 * @public errors - Errores de validación.
 *
 * @constructor
 * @param {string} message - Mensaje de error.
 * @param {number} statusCode - Código de estado HTTP.
 * @param {boolean} isOperational - Indica si el error es operacional.
 * @param {ValidationError[]} errors - Errores de validación.
 * @returns {CustomError}
 */
export class CustomError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public errors?: ValidationError[];

  constructor(
    message: string,
    statusCode: number,
    isOperational: boolean = true,
    errors?: ValidationError[]
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}
