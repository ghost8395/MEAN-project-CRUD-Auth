import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { createProducts as createDBProducts } from "../../services/product.services";
import { createProductsInput } from "../../validation/product.validation";
import { IUserMessage } from "../../middleware/authJWT.middleware";
import { getCategoriesByIds } from "../../services/category.services";
import { getVendorsByIds } from "../../services/vendor.services";
import BadRequestError from "../../error/badRequest.error";
import { ErrorCode } from "../../error/custom.error";

export const createProducts = asyncHandler(
  async (
    req: IUserMessage<object, object, createProductsInput>,
    res: Response
  ) => {
    const products = req.body;
    const categoryIds = [...new Set(products.map((ele) => ele.category))];
    const vendorIds = [...new Set(products.map((ele) => ele.vendor))];
    const [categories, vendors] = await Promise.all([
      getCategoriesByIds(categoryIds),
      getVendorsByIds(vendorIds),
    ]);

    if (categoryIds.length !== categories.length) {
      throw new BadRequestError("Category Id Not found", ErrorCode.CONFLICT);
    }
    if (vendorIds.length !== vendors.length) {
      throw new BadRequestError("Category Id Not found", ErrorCode.CONFLICT);
    }

    const results = await createDBProducts(
      products.map((ele) => {
        return { ...ele, createdBy: req.userData.userId };
      })
    );

    // Send response with user data and access token
    res.status(200).json({
      success: true,
      products: results?.data,
      message: "Products created successfully",
    });
  }
);
