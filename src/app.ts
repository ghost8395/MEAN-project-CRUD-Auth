import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import api from "./api/index.api";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middleware/index.middleware";

config();


const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/", api);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware as any);

export default app;