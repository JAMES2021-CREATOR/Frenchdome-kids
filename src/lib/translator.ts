import { openai } from "./openai";

export async function translateToFrench(text: string) {
  const response = await openai.responses.create({
    model: "gpt-5",
    input: `Translate this English text into French:

${text}`,
  });

  return response.output_text;
}