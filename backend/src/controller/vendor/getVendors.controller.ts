import { Request, Response } from "express";
import asyncHandler from 'express-async-handler';
import { getAllVendors } from "../../services/vendor.services";

export const getVendors = asyncHandler(async (req: Request<object, object, any>, res: Response) => {
    const result = await getAllVendors();
    res.status(200).send(result);
});
