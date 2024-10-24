import { Router } from "express";

import { validateAuth } from "@/middlewares";
import { deleteAccount, updateName } from "@/controllers/account.controllers";

// ? Api path: /api/v1/account
const router = Router();

router.use(validateAuth);

router.patch("/:id", updateName);

router.delete("/:id", deleteAccount);

export default router;
