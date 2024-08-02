import express from "express";
import cors from "cors";
import config from "../utils/config";
import helmet from "helmet";
import morgan from "morgan";
import apiRequestLimit from "./apiRequestLimit";

const middlewares = express();

const origin = config.app.allowedOrigin;
const nodeEnv = config.app.nodeEnv;

middlewares.use(apiRequestLimit);
middlewares.use(
  cors({
    origin,
  })
);
middlewares.use(express.json());
middlewares.use(helmet());
middlewares.use(morgan(nodeEnv === "development" ? "dev" : "combined"));

export default middlewares;
