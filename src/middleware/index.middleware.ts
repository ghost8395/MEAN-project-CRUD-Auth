import { NextFunction, Request, Response } from 'express';
import { validateEnv } from '../config/env.config';
import errorHandlerMiddleware from './errorHandler.middleware';
import validateSchema from './valdiationSchema';

function notFoundMiddleware(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}

export { errorHandlerMiddleware, notFoundMiddleware, validateSchema };
