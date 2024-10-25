import express from "express";
import validateSchema from "../middleware/valdiationSchema";
import {
  registerUserSchema,
  loginUserSchema,
} from "../validation/auth.validation";
import { registerUser, login } from "../controller/auth/index.auth.controller";

const router = express.Router();

router.post("/register", validateSchema(registerUserSchema), registerUser);
router.post("/login", validateSchema(loginUserSchema), login);

export default router;
