const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { update } = require("../../models/user");

module.exports.run = async (client, message, args, settings, dbUser, dbProfile) => {
    try {
        const user = message.guild.member(message.mentions.users.first());    
        if (args[0]) {
            const mentionnedUser = await client.getUser(user);
            const embedCod = new MessageEmbed()
              .setDescription(`\`\`\`❔ | ${user} have ${mentionnedUser.balance}₹.\`\`\``);

            message.channel.send(embedCod);
        } else {
            const embedMyc = new MessageEmbed()
              .setDescription(`\`\`\`❔ | You have ${dbUser.balance}₹.\`\`\``);

            message.channel.send(embedMyc);
        };
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");

        message.channel.send(embedZyw);
        console.error(e);
    };
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.USERBALANCE;

//if (!mentionnedUser) return client.createUser({
    //guildID: message.member.guild.id,
    //userID: message.member.id,
    //userName: message.member.name,
  //});