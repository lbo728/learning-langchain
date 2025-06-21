import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

const model = new ChatOpenAI({
  model: "gpt-4.1-nano",
  temperature: 0,
});

const prompt = [new HumanMessage("프랑스의 수도는 어디인가요?")];

const response = await model.invoke(prompt);

console.log(response.content);
