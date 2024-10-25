import { bootstrapExpress } from "./app";
import { logger } from '../config/logger.config';
import { validateEnv } from "../config/env.config";
import { connectToDB } from "../config/mongoose";
import { seedData } from "../config/seed.config";

export const bootstrap = async (app) => {
    validateEnv()
    await connectToDB();
    bootstrapExpress(app);
    await seedData()
    logger.info('Express app initiated.')
};