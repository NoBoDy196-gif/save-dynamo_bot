const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { update } = require("../../models/user");

module.exports.run = async (client, message, args, settings, dbUser, dbProfile) => {
    try {
      const user = message.guild.member(message.mentions.users.first());
      if (!dbUser) {
          await client.createUser({
              guildID: member.guild.id,
              userID: member.id,
          });
      };
      const balanceToRemove = parseInt(args [1]);
      const embedWow = new MessageEmbed()
        .setColor("#FF0000")
        .setDescription("\`\`\`📛 | Enter a number.\`\`\`");

      if (isNaN(balanceToRemove)) return message.channel.send(embedWow);
      client.removeBalance(client, user, balanceToRemove);
      const embed = new MessageEmbed()
        .setColor("#1DFF00")
        .setDescription(`\`\`\`✅ | You successfully removed ${balanceToRemove}₹ to ${user}.\`\`\``);

      message.channel.send(embed);
    } catch (e) {
      const embedZyw = new MessageEmbed()
        .setColor("#FF0000")
        .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");
        
      message.channel.send(embedZyw);
      console.error(e);
    };
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.REMOVEBALANCE;