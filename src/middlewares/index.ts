import express from "express";
import cors from "cors";
import config from "../utils/config";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

const middlewares = express();

const origin = config.app.allowedOrigin;
const nodeEnv = config.app.nodeEnv;

middlewares.use(
  cors({
    origin,
  })
);
middlewares.use(express.json());
middlewares.use(helmet());
middlewares.use(morgan(nodeEnv === "development" ? "dev" : "combined"));

export default middlewares;
