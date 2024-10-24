import jwt from "jsonwebtoken";

const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = process.env;

if (!JWT_ACCESS_SECRET || !JWT_REFRESH_SECRET) {
  throw new Error(
    "Las variables de entorno JWT_ACCESS_SECRET y JWT_REFRESH_SECRET son requeridas"
  );
}

export const generateAuthTokens = (userId: string, email: string) => {
  const accessToken = jwt.sign({ userId, email }, JWT_ACCESS_SECRET!, {
    expiresIn: "1h",
  });

  const refreshToken = jwt.sign({ userId, email }, JWT_REFRESH_SECRET!, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, JWT_ACCESS_SECRET!);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, JWT_REFRESH_SECRET!);
};
