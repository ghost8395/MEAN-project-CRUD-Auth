import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import UnAuthenticatedError from "../error/unauthenticated.error";
import ForbiddenError from "../error/forbidden.error";
import { ErrorCode } from "../error/custom.error";
import { validateEnv } from "../config/env.config";
import { extractTokenfromHeader } from "../utils/util";

export interface UserDataType {
  userId: string;
}
export interface IUserMessage<TParams = any, TQuery = any, TBody = any> extends Request<TParams, TQuery, TBody> {
  userData: UserDataType;
}
export const AuthJWT = (
  req: IUserMessage,
  res: Response,
  next: NextFunction
) => {
  try {
    const jwtconfig = validateEnv()?.jwtconfig
    const token = extractTokenfromHeader(req)
    if (!token) throw new UnAuthenticatedError("Provide token", ErrorCode.TOKEN_NOT_FOUND);
    jwt.verify(token, jwtconfig?.accessSecret, async (err, decoded) => {
      if (err) return next(new ForbiddenError("Token expires", ErrorCode?.TOKEN_EXPIRE));
      const decodeData = decoded as UserDataType;
      req.userData = {
        userId: decodeData?.userId,
      }
      next();
    });
  } catch (err) {
    throw new UnAuthenticatedError("Provide token", ErrorCode.TOKEN_NOT_FOUND);
  }
};
