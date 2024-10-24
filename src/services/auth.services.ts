import { PrismaClient } from "@prisma/client";
import { hashedPassword, NotFoundError } from "@/utils";

const prisma = new PrismaClient();

export const signUpService = async (email: string, password: string) => {
  const hashPassword = await hashedPassword(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashPassword,
    },
  });

  if (!user) throw new NotFoundError("No se pudo crear el usuario");

  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
