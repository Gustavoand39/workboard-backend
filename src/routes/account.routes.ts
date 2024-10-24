import { Router } from "express";

import { validateAuth } from "@/middlewares";
import { updateName } from "@/controllers/account.controllers";

// ? Api path: /api/v1/account
const router = Router();

router.patch("/:id", validateAuth, updateName);

export default router;
