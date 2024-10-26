import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { deleteProductsById } from "../../services/product.services";
import { deleteProductsInput } from "../../validation/product.validation";
import { IUserMessage } from "../../middleware/authJWT.middleware";

export const deleteProducts = asyncHandler(
  async (
    req: IUserMessage<object, object, deleteProductsInput>,
    res: Response
  ) => {
    const result = await deleteProductsById(req.body.map((ele) => ele._id));
    res.status(200).send(result);
  }
);
