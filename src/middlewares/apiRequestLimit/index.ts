import rateLimit, { Options } from "express-rate-limit";
import config from "../../utils/config";

const time = 24 * 60 * 60 * 1000; // 24 hours
const limit = config.api.rateLimit; // requests per <time>

const rateLimitConfig: Partial<Options> = {
  windowMs: time,
  max: /^\d+$/.test(limit) ? parseInt(limit) : 5, // 5 requests per <time> by default if limit is not defined or not a number
};

export default rateLimit(rateLimitConfig);
