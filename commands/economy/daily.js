const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { update } = require("../../models/user");

module.exports.run = async (client, message, args, settings, dbUser) => {
    try {
        const dailyCD = 8.64e+7;
        if (!dbUser.balance) await client.updateUser(message.member, { balance: 0 });

        const lastDaily = await dbUser.daily;
        if (lastDaily !== null && dailyCD - (Date.now() - lastDaily) > 0) {
            const cdTime = dailyCD - (Date.now() - lastDaily);
            const embedWow = new MessageEmbed()
              .setColor("#FF0000")
              .setDescription(`\`\`\`📛 | ${Math.floor(cdTime / (1000*60*60) % 24)}hours, ${Math.floor(cdTime / (1000*60) % 60)}minutes and ${Math.floor(cdTime / (1000) % 60)}secondes left before you can collect your money again.\`\`\``);
          
            message.channel.send(embedWow);
        } else {
            client.addBalance(client, message.member, 1000);
            client.updateUser(message.member, { daily: Date.now() });
            const embed = new MessageEmbed()
              .setColor("#1DFF00")
              .setDescription(`\`\`\`✅ | You successfully collected 1000₹.\`\`\``);

            message.channel.send(embed);
        };
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");

        message.channel.send(embedZyw);
        console.error(e);
    };
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.DAILY;