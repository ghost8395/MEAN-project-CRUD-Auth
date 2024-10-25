import { FilterQuery, QueryOptions } from "mongoose";
import { IUser } from "../interface/user.interface";
import UserModel from "../model/user.model";

export async function findUserByEmail(
  email: string,
  options: QueryOptions = { lean: true }
) {
  return await UserModel.findOne({ email: email },{}, options);
}

export async function createUser(userData: Partial<IUser>) {
  try {
    const result = await UserModel.create(userData);
    console.log("result", result);
    return { data: result, success: true };
  } catch (error) {
    return { data: null, success: false, error };
  }
}
