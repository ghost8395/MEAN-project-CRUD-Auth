import { QueryOptions } from "mongoose";
import CategoryModel from "../model/category.model";

export async function getAllCategories() {
  return await CategoryModel.find().exec();
}

export async function getCategoriesByIds(ids: string[], options: QueryOptions = { lean: true }) {
    return await CategoryModel.find({ _id: { $in: ids } }, options).exec();
}
