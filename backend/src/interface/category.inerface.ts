// category.interface.ts
import { Document, ObjectId, Schema } from 'mongoose';

export interface ICategory extends Document {
    name: string;
}
