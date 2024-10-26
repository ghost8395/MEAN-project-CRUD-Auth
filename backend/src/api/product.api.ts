import express from "express";
import { AuthJWT } from "../middleware/authJWT.middleware";
import validateSchema from "../middleware/valdiationSchema";
import {
  createProductsSchema,
  deleteProductsSchema,
  updateProductsSchema,
} from "../validation/product.validation";
import {
  createProducts,
  deleteProducts,
  getProducts,
  updateProducts,
} from "../controller/product/index.auth.controller";

const router = express.Router();

router.get("/", AuthJWT, getProducts);
router.post("/", validateSchema(createProductsSchema), AuthJWT, createProducts);
router.put("/", validateSchema(updateProductsSchema), AuthJWT, updateProducts);
router.delete("/", validateSchema(deleteProductsSchema), AuthJWT, deleteProducts);

export default router;
