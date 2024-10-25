import { Request, Response } from "express";
import BadRequestError from "../../error/badRequest.error";
import bcrypt from 'bcryptjs';
import { createUser, findUserByEmail } from "../../services/user.services";
import { ErrorCode } from "../../error/custom.error";
import { registerUserInput } from "../../validation/auth.validation"
import asyncHandler from 'express-async-handler';

export const registerUser = asyncHandler(async (req: Request<object, object, registerUserInput>, res: Response) => {
    const { email, password } = req.body;
  
    // Check if user already exists
    const userExists = await findUserByEmail(email);
  
    if (userExists) {
      throw new BadRequestError('User with this email already exists', ErrorCode.BAD_REQUEST);
    }
  
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
  
    // Create the user
    await createUser({
      ...req.body,
      password: hashPassword,
    });
    res.status(201).json({ success: true, message: ' User created successfully' })
  })
