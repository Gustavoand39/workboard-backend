import bcrypt from "bcryptjs";

const SALT_ROUNDS = 10;

/**
 * Encripta la contraseña del usuario
 *
 * @param {string} password - Contraseña del usuario
 * @returns {Promise<string>} - Contraseña encriptada
 */
export const hashedPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Compara la contraseña del usuario con la contraseña encriptada
 *
 * @param {string} password - Contraseña del usuario
 * @param {string} hashedPassword - Contraseña encriptada
 * @returns {Promise<boolean>} - Si la contraseña es correcta
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
