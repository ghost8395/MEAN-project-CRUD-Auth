import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  findProducts,
  updateProducts as updateDBProducts,
} from "../../services/product.services";
import { updateProductsInput } from "../../validation/product.validation";
import { IUserMessage } from "../../middleware/authJWT.middleware";
import { getCategoriesByIds } from "../../services/category.services";
import { getVendorsByIds } from "../../services/vendor.services";
import BadRequestError from "../../error/badRequest.error";
import { ErrorCode } from "../../error/custom.error";

export const updateProducts = asyncHandler(
  async (
    req: IUserMessage<object, object, updateProductsInput>,
    res: Response
  ) => {
    const products = req.body;

    const dbProducts = await findProducts({
      _id: { $in: products.map((ele) => ele._id) },
    });

    if (dbProducts.length !== products.length) {
      throw new BadRequestError("Product Id Not found", ErrorCode.CONFLICT);
    }

    const categoryIds = [
      ...new Set(
        products.filter((ele) => ele.category).map((ele) => ele.category)
      ),
    ];
    const vendorIds = [
      ...new Set(products.filter((ele) => ele.vendor).map((ele) => ele.vendor)),
    ];
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

    const toBeUpdatedList = dbProducts.map((ele) => {
      return {
        ...ele,
        ...products.find((elem) => elem._id === ele._id.toString()),
      };
    });

    const results = await updateDBProducts(toBeUpdatedList);

    res.status(200).json({
      success: results.success,
      products: toBeUpdatedList,
      message: "Products created successfully",
    });
  }
);
