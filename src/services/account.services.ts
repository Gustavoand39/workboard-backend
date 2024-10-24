import { PrismaClient } from "@prisma/client";
import { NotFoundError } from "@/utils";

const prisma = new PrismaClient();

export const updateNameService = async (id: string, fullName: string) => {
  const userExists = await prisma.user.findUnique({
    where: { id },
  });

  if (!userExists) throw new NotFoundError("Usuario no encontrado");

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { fullName },
  });

  const { password, ...user } = updatedUser;

  return user;
};
