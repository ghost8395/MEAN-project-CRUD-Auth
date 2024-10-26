import { QueryOptions } from "mongoose";
import VendorModel from "../model/vendor.model";

export async function getAllVendors() {
    return await VendorModel.find().exec();
}

export async function getVendorsByIds(ids: string[], options: QueryOptions = { lean: true }) {
    return await VendorModel.find({ _id: { $in: ids } }, options).exec();
}
