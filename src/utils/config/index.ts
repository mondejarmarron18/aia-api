import { config as envConfig } from "dotenv";

envConfig({
  path: ".env.sample",
});

const _ = (key: string) => process.env[key] || "";

const config = {
  app: {
    port: _("PORT"),
    allowedOrigin: _("ALLOWED_ORIGIN"),
    nodeEnv: _("NODE_ENV"),
  },
  api: {
    rateLimit: _("API_REQUEST_LIMIT"),
    keys: {
      openAI: _("OPENAI_API_KEY"),
    },
  },
};

export default config;
