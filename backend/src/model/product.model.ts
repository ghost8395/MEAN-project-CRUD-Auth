import { Schema, model } from 'mongoose';
import { IProduct } from '../interface/product.inerface';

const productSchema = new Schema<IProduct>({
    name: { 
        type: String,
    },
    discount: { 
        type: Number,
        min: [0, 'discount cannot be negative'],
        max: [100, 'discount cannot be morte than 100'],
        required: false
    },
    price: { 
        type: Number,
        min: [0, 'price cannot be negative'],
    },
    currency: { 
        type: String,
        minlength: 3,
        maxlength: 3
    },
    category: { 
        type: Schema.Types.ObjectId, 
        ref: 'Category', 
        required: [true, 'Category ID is required'], 
        index: true,
    },
    size: { 
        type: String,
    },
    vendor: { 
        type: Schema.Types.ObjectId, 
        ref: 'Vendor', 
        required: [true, 'Vendor ID is required'], 
        index: true,
    },
    createdBy: { 
        type: Schema.Types.ObjectId, 
        ref: 'Vendor', 
        required: [true, 'Vendor ID is required'], 
        index: true,
    },
}, { timestamps: true });

export default model<IProduct>('Product', productSchema);
