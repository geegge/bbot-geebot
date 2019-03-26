// ESM syntax is supported.
export {};
import * as bot from "bbot";

bot.global.text(/(hi|hello)/, b => b.respond("Hello 👋"), {
  id: "hello-bots"
});
