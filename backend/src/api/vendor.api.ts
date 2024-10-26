import express from "express";
import { AuthJWT } from "../middleware/authJWT.middleware";
import { getVendors } from "../controller/vendor/getVendors.controller";

const router = express.Router();

router.get("/", AuthJWT, getVendors);

export default router;
