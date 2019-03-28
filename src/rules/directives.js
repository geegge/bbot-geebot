import * as bot from "bbot";

export const asimovDirective = () => {
  bot.global.direct(
    {
      contains: "are you a robot"
    },
    b => b.reply("Yes, I'm a robot. :robot:"),
    {
      id: "asimovDirective-direct",
      force: true
    }
  );
};
