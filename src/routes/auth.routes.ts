import { Router } from "express";

import { validateRequest } from "@/middlewares/validateRequest";
import { validateSignUp } from "@/validations/auth.validations";
import { signUp } from "@/controllers/auth.controllers";

// ? Api path: /api/v1/auth
const router = Router();

router.post("/signup", validateSignUp, validateRequest, signUp);

export default router;
