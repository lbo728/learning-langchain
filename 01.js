import { OpenAI } from "@langchain/openai";

const model = new OpenAI({ model: "gpt-4o-mini" });

const response = await model.invoke("하늘이");
console.log(response);
