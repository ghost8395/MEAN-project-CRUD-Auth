import { Schema, model } from 'mongoose';
import { IVendor } from '../interface/vendor.inerface';

const vendorSchema = new Schema<IVendor>({
    name: { 
        type: String,
    },
}, { timestamps: true });

export default model<IVendor>('Vendor', vendorSchema);
