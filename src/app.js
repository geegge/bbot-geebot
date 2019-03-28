// ESM syntax is supported.
export {};
import * as bot from "bbot";
import { asimovDirective } from "./rules/directives";

asimovDirective();

bot.global.text(
  {
    contains: ["hi", "hello"]
  },
  b => b.respond("Hello 👋"),
  {
    id: "hello-bots"
  }
);
