import express from "express";
const router = express.Router();
import auth from "./auth.api"
import product from "./product.api"
import category from "./category.api"
import vendor from "./vendor.api"

router.use("/auth", auth);
router.use("/product", product);
router.use("/category", category);
router.use("/vendor", vendor);

router.get("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
  });
});
export default router;