import config from "../config";
import OpenAI from "openai";

const openAIKey = config.api.keys.openAI;

const openAI = new OpenAI({
  apiKey: openAIKey,
});

export default openAI;
