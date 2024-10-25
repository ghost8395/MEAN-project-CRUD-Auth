import express from "express";
const router = express.Router();
import auth from "./auth.api"

router.use("/auth", auth);

router.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});
export default router;