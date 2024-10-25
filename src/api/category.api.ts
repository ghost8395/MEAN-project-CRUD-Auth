import express from "express";
import { AuthJWT } from "../middleware/authJWT.middleware";
import { getCategories } from "../controller/category/getCategories.controller";

const router = express.Router();

router.get("/", AuthJWT, getCategories);

export default router;
