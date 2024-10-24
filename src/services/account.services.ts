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

export const deleteAccountService = async (id: string) => {
  const userExists = await prisma.user.findUnique({
    where: { id },
  });

  if (!userExists) throw new NotFoundError("Usuario no encontrado");

  await prisma.user.delete({
    where: { id },
  });

  const { password, ...user } = userExists;

  return user;
};
