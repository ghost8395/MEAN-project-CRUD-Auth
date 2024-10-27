import express from "express";
import { AuthJWT } from "../middleware/authJWT.middleware";
import { getCharts } from "../controller/chart/getCharts.controller";

const router = express.Router();

router.get("/", AuthJWT, getCharts);

export default router;
