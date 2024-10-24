import { PrismaClient } from "@prisma/client";
import {
  hashedPassword,
  ConflictError,
  NotFoundError,
  comparePassword,
  generateAuthTokens,
} from "@/utils";

const prisma = new PrismaClient();

export const signUpService = async (email: string, password: string) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExists) throw new ConflictError("Ya existe un usuario con ese email");

  const hashPassword = await hashedPassword(password);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
    },
  });

  if (!user) throw new NotFoundError("No se pudo crear el usuario");

  const { password: _, ...userWithoutPassword } = user;

  const { accessToken, refreshToken } = generateAuthTokens(user.id, user.email);

  return {
    user: userWithoutPassword,
    accessToken,
    refreshToken,
  };
};

export const signInService = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) throw new NotFoundError("Usuario no encontrado");

  const isValidPassword = await comparePassword(password, user.password);
  if (!isValidPassword) throw new NotFoundError("Contraseña incorrecta");

  const { password: _, ...userWithoutPassword } = user;

  const { accessToken, refreshToken } = generateAuthTokens(user.id, user.email);

  return {
    user: userWithoutPassword,
    accessToken,
    refreshToken,
  };
};
