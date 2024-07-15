import { Request, Response } from "express";
import openAI from "../../utils/openAI";
import { ChatCompletionMessageParam } from "openai/src/resources/chat/completions.js";

const assisstantController = {
  default: async (req: Request, res: Response) => {
    const greeting =
      "Hi, there!\nThis is the Assisstant API!\nTo interact with me, use the following endpoints.";
    const endpoints = [
      {
        method: "POST",
        path: "/assisstant/ask",
        description: "Ask a question, or with an image url",
        body: {
          text: "string",
          imageUrls: "string[]",
        },
      },
    ];

    res.send({
      greeting,
      endpoints,
    });
  },

  ask: async (req: Request, res: Response) => {
    try {
      const { text, imageUrls } = req.body;

      if (!text) {
        throw new Error("Text is required");
      }

      const images = !imageUrls?.length
        ? []
        : imageUrls.map((imageUrl: string) => ({
            type: "image_url",
            image_url: {
              url: imageUrl,
            },
          }));

      const messages: ChatCompletionMessageParam[] = [
        {
          role: "user",
          content: [
            {
              type: "text",
              text,
            },
            ...images,
          ],
        },
      ];

      const { choices } = await openAI.chat.completions.create({
        model: "gpt-4o",
        messages,
      });

      res.send(choices[0].message.content);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      }

      res.send(error);
    }
  },
};

export default assisstantController;
