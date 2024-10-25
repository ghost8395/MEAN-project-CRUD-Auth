import { Request } from "express";
import jwt from "jsonwebtoken";

export const extractTokenfromHeader = (req: Request) => {
  const authHeader = req.headers.authorization || req.headers.Authorization as string;
  if (!authHeader?.startsWith("Bearer ")) {
      return false
  }
  return authHeader.split(" ")[1];
}

export function generateRandom6DigitString() {
  const random8DigitNumber = Math.floor(100000 + Math.random() * 900000);
  return String(random8DigitNumber);
}

export function signJwt(
    object: object,
    signKey: string,
    options?: jwt.SignOptions | undefined
) {
    return jwt.sign(object, signKey, {
        ...(options && options),
    });
}
