import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user";

const router = Router();

router.use("/login", loginUser);
router.use("/register", registerUser);

export default router;