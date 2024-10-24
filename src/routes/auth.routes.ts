import { Router } from "express";

import { signUp } from "@/controllers/auth.controllers";

// ? Api path: /api/v1/auth
const router = Router();

router.post("/signup", signUp);

export default router;
