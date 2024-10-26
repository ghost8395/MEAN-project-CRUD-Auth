import { Schema, model } from 'mongoose';
import { IUser } from '../interface/user.interface';

const userSchema = new Schema<IUser>({
  password: {
    type: String,
    select: false,
  },
  email: {
    type: String,
  },
}, { timestamps: true });

export default model<IUser>('User', userSchema);



