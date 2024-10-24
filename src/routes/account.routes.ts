import { Router } from "express";

import { updateName } from "@/controllers/account.controllers";

// ? Api path: /api/v1/account
const router = Router();

router.patch("/:id", updateName);

export default router;