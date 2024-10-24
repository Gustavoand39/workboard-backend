import jwt, { type JwtPayload } from "jsonwebtoken";

const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

if (!JWT_ACCESS_SECRET || !JWT_REFRESH_SECRET) {
  throw new Error(
    "Las variables de entorno JWT_ACCESS_SECRET y JWT_REFRESH_SECRET son requeridas"
  );
}

/**
 * Genera tokens de autenticación.
 *
 * @param {string} userId - ID del usuario.
 * @param {string} email - Correo electrónico del usuario.
 * @returns {Object} Tokens de autenticación.
 */
export const generateAuthTokens = (userId: string, email: string): object => {
  const accessToken = jwt.sign({ userId, email }, JWT_ACCESS_SECRET!, {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign({ userId, email }, JWT_REFRESH_SECRET!, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

/**
 * Genera un token de acceso.
 *
 * @param {string} userId - ID del usuario.
 * @param {string} email - Correo electrónico del usuario.
 * @returns {string} Token de acceso.
 */
export const generateAccessToken = (userId: string, email: string): string => {
  return jwt.sign({ userId, email }, JWT_ACCESS_SECRET!, {
    expiresIn: "1h",
  });
};

/**
 * Verifica un token de acceso.
 *
 * @param {string} token - Token de acceso.
 * @returns {string|Object} Usuario decodificado.
 */
export const verifyAccessToken = (token: string): string | JwtPayload => {
  return jwt.verify(token, JWT_ACCESS_SECRET!);
};

/**
 * Verifica un token de refresco.
 *
 * @param {string} token - Token de refresco.
 * @returns {string|Object} Usuario decodificado.
 */
export const verifyRefreshToken = (token: string): string | JwtPayload => {
  return jwt.verify(token, JWT_REFRESH_SECRET!);
};
