import { Request, Response } from "express";
import { loginUserInput } from "../../validation/auth.validation";
import ForbiddenError from "../../error/forbidden.error";
import bcrypt from "bcryptjs";
import { signJwt } from "../../utils/util";
import { findUserByEmail } from "../../services/user.services";
import { ErrorCode } from "../../error/custom.error";
import { validateEnv } from "../../config/env.config";
import asyncHandler from 'express-async-handler';

export const login = asyncHandler(async (
  req: Request<object, object, loginUserInput>,
  res: Response
) => {
  const { password, email } = req.body;

  // Find user by email
  const user = await findUserByEmail(email, { select: "+password", lean: true });
  if (!user)
    throw new ForbiddenError("User does not exist", ErrorCode.FORBIDDEN);

  const secretKey = validateEnv()?.jwtconfig.accessSecret;

  // Compare password
  const match = await bcrypt.compare(password, user.password);
  if (!match)
    throw new ForbiddenError("Invalid credentials", ErrorCode.FORBIDDEN);

  // Generate and store access token with adding userId among it
  const accessToken = signJwt({ userId: user._id }, secretKey as string, {
    expiresIn: "3d",
  });
  
  // Remove sensitive data from user object
  delete user.password;

  // Send response with user data and access token
  res.status(200).json({
    success: true,
    user: user,
    message: "Logged in successfully",
    accessToken,
  });
});
