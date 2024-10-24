/**
 * Clase para manejar errores personalizados.
 *
 * @class CustomError
 * @extends {Error}
 * @public statusCode - Código de estado HTTP.
 * @public isOperational - Indica si el error es operacional.
 *
 * @constructor
 * @param {string} message - Mensaje de error.
 * @param {number} statusCode - Código de estado HTTP.
 * @param {boolean} isOperational - Indica si el error es operacional. Default: true.
 * @returns {CustomError}
 */
export class CustomError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(
    message: string,
    statusCode: number,
    isOperational: boolean = true,
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}