import { Schema, model } from 'mongoose';
import { ICategory } from '../interface/category.inerface';

const categorySchema = new Schema<ICategory>({
    name: { 
        type: String,
    },
}, { timestamps: true });

export default model<ICategory>('Category', categorySchema);
