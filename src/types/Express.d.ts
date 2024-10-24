import { Request } from "express";

export interface UserPayload {
  id: string;
  email: string;
}

declare module "express-serve-static-core" {
  interface Request {
    decodedUser?: UserPayload;
  }
}