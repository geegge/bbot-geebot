import * as bot from "bbot";

bot.global.text(/say Hello World/, b => {
  b.respond(`Hello World!`);
});

bot.start();
