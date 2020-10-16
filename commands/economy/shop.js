const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");
const { update } = require("../../models/user");

module.exports.run = async (client, message, args, settings, dbUser) => {
    try {
        const items = [];
        const shop = require("../../assets/shop/shop.json");
        const q = args.join(" ");
        const position = shop.map(e => e.name.toLowerCase()).indexOf(q.toLowerCase());
        const embedWow = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`📛 | This object doesn't exist, verify the speling.\`\`\`");

        if (q && position == -1) message.channel.send(embedWow);
        const embed = new MessageEmbed()
          .setTitle("Welcome in the shop")
          .setTimestamp()
          .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL());

        if (q && position !== -1) {
            try {
                const item = shop[position];
                const embedCod = new MessageEmbed()
                  .setDescription(`\`\`\`❔ | Do you wanna buy ${item.name} for ${item.prix}₹. (yes)\`\`\``);

                message.channel.send(embedCod);
                const filter = m => (message.author.id === m.author.id);
                const userEntry = await message.channel.awaitMessages(filter, {
                    max: 1, time: 5000, errors: ['time']
                });

                if (userEntry.first().content.toLowerCase() === 'yes') {
                    client.removeBalance(client, message.member, item.prix);
                    const embedMud = new MessageEmbed()
                      .setColor("#1DFF00")
                      .setDescription(`\`\`\`✅ | Purchase successful, your balance is now at ${dbUser.balance - item.prix}₹.\`\`\``);

                    message.channel.send(embedMud);
                };
            } catch (e) {
                const embedMod = new MessageEmbed()
                  .setColor("#FF0000")
                  .setDescription(`\`\`\`📛 | Purchase cancelled. Confirm the purchase during the 5secs delay with (yes)\`\`\``);

                message.channel.send(embedMod)
            };
        } else {
            shop.map(e => items.push(`${e.name} (${e.prix}₹)`));
            embed.setDescription(`Available objects: \n${items.map(item => `${item}`).join(', ')}`);
            message.channel.send(embed);
        };
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");
          
        message.channel.send(embedZyw);
        console.error(e);
    }
};

module.exports.help = MESSAGES.COMMANDS.ECONOMY.SHOP;