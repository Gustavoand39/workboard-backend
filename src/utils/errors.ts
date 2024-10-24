import { CustomError } from "@/classes/CustomError";

// Error para recursos no encontrados
export class NotFoundError extends CustomError {
  constructor(message: string = "Recurso no encontrado") {
    super(message, 404);
  }
}

// Error de autenticación
export class AuthenticationError extends CustomError {
  constructor(message: string = "Error de autenticación") {
    super(message, 401);
  }
}
