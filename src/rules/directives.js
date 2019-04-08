import * as bot from "bbot";
import * as packageJson from "../../package.json";

export const asimovDirective = () => {
  bot.global.direct(
    {
      contains: "are you a robot"
    },
    b => b.reply("Yes, I'm a robot. :robot:"),
    {
      id: "asimovDirective-direct-robot",
      force: true
    }
  );

  bot.global.direct(
    {
      contains: "identify"
    },
    b => b.reply("GeeBot, Version " + packageJson.version),
    {
      id: "asimovDirective-direct-identify",
      force: true
    }
  );
};
