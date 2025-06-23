import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "gpt-4.1-nano",
  temperature: 0,
});

const response = await model.invoke("하늘이");

console.log(response.content);
