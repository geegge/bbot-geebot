// ESM syntax is supported.
export {};
import * as bot from "bbot";
import { asimovDirective } from "./rules/directives";
import path from "path";
import markovChainChat from "markov-chain-chat";

const trainingData =
  process.env.MARKOVCHAINCHAT_TRAINING_DATA || "../samples/chatlog_simple.txt";

const myMarkovChain = new markovChainChat(
  path.resolve(__dirname, trainingData)
);

console.log(
  "path.resolve(__dirname, trainingData): " +
    path.resolve(__dirname, trainingData)
);

asimovDirective();

// bot.global.text(/say hello to (.*)/i, b => {
//   b.respond("Hello " + b.match[1]);
// });

// bot.global.text(
//   {
//     contains: ["hello"]
//   },
//   b => b.respond("Hello 👋"),
//   {
//     id: "hello-bots"
//   }
// );

bot.global.text(
  /(.*)/,
  b => {
    const markovResponse = myMarkovChain.getMessage(b.match[1], 0.9);
    if (markovResponse) b.respond(markovResponse);
  },
  {
    id: "markov-response"
  }
);
