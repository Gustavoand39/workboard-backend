import { Router } from "express";

import { validateRequest } from "@/middlewares/validateRequest";
import { validateSignIn, validateSignUp } from "@/validations/auth.validations";
import { signIn, signOut, signUp } from "@/controllers/auth.controllers";

// ? Api path: /api/v1/auth
const router = Router();

router.post("/signup", validateSignUp, validateRequest, signUp);

router.post("/signin", validateSignIn, validateRequest, signIn);

router.post("/signout", signOut);

export default router;
