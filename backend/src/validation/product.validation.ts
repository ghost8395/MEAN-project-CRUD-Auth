import { object, string, TypeOf, array, number } from "zod";
export const createProductsSchema = object({
    body: array(object({
        name: string({ required_error: "Should have name" }).min(1, { message: 'name should have at least 1 character' }).max(20, { message: 'First name should have at most 20 characters' }),
        currency: string({ required_error: "Should have currency" }).min(3, { message: 'min 3 letter should be there' }).max(3, { message: 'max 3 letter should be there' }),
        size: string({ required_error: "Should have size" }),
        discount: number({ required_error: "Should have discount" }).min(0).max(100),
        price: number({ required_error: "Should have price" }).min(0),
        category: string({ required_error: "Should have category" }),
        vendor: string({ required_error: "Should have vendor" }),
    })).min(1)
});

export const updateProductsSchema = object({
    body: array(object({
        _id: string({ required_error: "Should have _id" }),
        name: string({ required_error: "Should have name" }).min(1, { message: 'name should have at least 1 character' }).max(20, { message: 'First name should have at most 20 characters' }).optional(),
        currency: string({ required_error: "Should have currency" }).min(3, { message: 'min 3 letter should be there' }).max(3, { message: 'max 3 letter should be there' }).optional(),
        size: string({ required_error: "Should have size" }).optional(),
        discount: number({ required_error: "Should have discount" }).min(0).max(100).optional(),
        price: number({ required_error: "Should have price" }).min(0).optional(),
        category: string({ required_error: "Should have category" }).optional(),
        vendor: string({ required_error: "Should have vendor" }).optional(),
    })).min(1)
});

export const deleteProductsSchema = object({
    body: array(object({
        _id: string({ required_error: "Should have _id" }),
    })).min(1)
});

export type createProductsInput = TypeOf<typeof createProductsSchema>["body"];
export type updateProductsInput = TypeOf<typeof updateProductsSchema>["body"];
export type deleteProductsInput = TypeOf<typeof deleteProductsSchema>["body"];
