import { config as envConfig } from "dotenv";

envConfig({
  path: ".env.dev",
});

const _ = (key: string) => process.env[key] || "";

const config = {
  app: {
    port: _("PORT"),
    allowedOrigin: _("ALLOWED_ORIGIN"),
    nodeEnv: _("NODE_ENV"),
  },
  apiKeys: {
    openAI: _("OPENAI_API_KEY"),
  },
};

export default config;
