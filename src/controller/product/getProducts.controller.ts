import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import { getAllProducts } from "../../services/product.services";

export const getProducts = asyncHandler(async (req: Request<object, object, any>, res: Response) => {
    const result = await getAllProducts();
    res.status(200).send(result);
});
