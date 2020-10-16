const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { update } = require("../../models/user");

module.exports.run = async (client, message, args, settings, dbUser, dbProfile) => {
    try {
        const getter = message.guild.member(message.mentions.users.first());
        const money = parseInt(args[1]);
        const embedWow = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription(`\`\`\`📛 | You don't have enough money to do that. (${dbUser.balance} < ${money})\`\`\``);

        if (dbUser.balance < money) return message.reply(embedWow);

        if (getter && (!isNaN(money))) {
            try {
            const embedCod = new MessageEmbed()
              .setDescription(`\`\`\`❔ | Do you wanna give ${money}₹ to ${getter}. (yes)\`\`\``);

            message.channel.send(embedCod);
            const filter = m => (message.author.id === m.author.id);
            const userEntry = await message.channel.awaitMessages(filter, {
                max: 1, time: 5000, errors: ['time']
        });
        if (userEntry.first().content.toLowerCase() === 'yes') {
            client.addBalance(client, getter, money);
            client.removeBalance(client, message.member, money);
            const embed = new MessageEmbed()
              .setColor("#1DFF00")
              .setDescription(`\`\`\`✅ | Payment successful, your balance is now at ${dbUser.balance - money}₹.\`\`\``);

            message.channel.send(embed)
        };
        } catch (e) {
            const embedMod = new MessageEmbed()
              .setColor("#FF0000")
              .setDescription(`\`\`\`📛 | Payment cancelled. Confirm the payment during the 5secs delay with (yes)\`\`\``);

            message.channel.send(embedMod)
        };
        } else {
            const embedPid = new MessageEmbed()
              .setColor("#FF0000")
              .setDescription(`\`\`\`📛 | Mention the user you wanna pay and the amount.\`\`\``);

            message.channel.send(embedPid);
        };
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");
          
        message.channel.send(embedZyw);
        console.error(e);
    };
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.PAY;