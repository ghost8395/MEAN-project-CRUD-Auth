import { FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import { IProduct } from "../interface/product.inerface";
import ProductModel from "../model/product.model";

export async function getAllProducts() {
  return await ProductModel.find().exec();
}

export async function getAllProductsByCreatedBy(userId) {
  return await ProductModel.find({ createdBy: userId }).exec();
}

export async function findProductById(id: string) {
  return await ProductModel.findById(id).exec();
}

export async function findProducts(
  query: FilterQuery<IProduct>,
  options: QueryOptions = { lean: true }
): Promise<IProduct[] | null> {
  return await ProductModel.find(query, {}, options);
}

export async function createProduct(productData: Partial<IProduct>) {
  try {
    const result = await ProductModel.create(productData);
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}

export async function createProducts(productsData: Partial<IProduct>[]) {
  try {
    const result = await ProductModel.insertMany(productsData);
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}

export async function deleteProductById(id: string) {
  return await ProductModel.deleteOne({ _id: id });
}

export async function deleteProductsById(ids: string[]) {
  return await ProductModel.deleteMany({ _id: { $in: ids } });
}

export async function updateProductById(
  id: string,
  update: UpdateQuery<IProduct>,
  options: QueryOptions = { new: true }
) {
  try {
    const result = await ProductModel.findByIdAndUpdate(id, update, options);
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}

export async function updateProducts(
  products: UpdateQuery<IProduct>[],
  options: QueryOptions = { new: true }
) {
  try {
    const result = await ProductModel.bulkWrite(
      products.map((ele) => {
        return {
          replaceOne: {
            filter: { _id: ele._id },
            replacement: ele,
          },
        };
      }, options)
    );
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}
