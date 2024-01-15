import OpenAI from "openai";
import { OPEN_AI_API_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true
});

// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();

export default openai;
