import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import { getAllCategories } from "../../services/category.services";

export const getCategories = asyncHandler(async (req: Request<object, object, any>, res: Response) => {
    const result = await getAllCategories();
    res.status(200).send(result);
});
