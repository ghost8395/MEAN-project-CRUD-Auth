// vendor.interface.ts
import { Document, ObjectId, Schema } from 'mongoose';

export interface IVendor extends Document {
    name: string;
}
