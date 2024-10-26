// product.interface.ts
import { Document, ObjectId, Schema } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    price: number;
    currency: string,
    discount: number;
    category: Schema.Types.ObjectId | string,
    size:string,
    vendor: Schema.Types.ObjectId | string;
    createdBy: Schema.Types.ObjectId | string;
}
