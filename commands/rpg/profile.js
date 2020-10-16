const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');
const { capitalize } = require('../../functions/string');

module.exports.run = async (client, message, args, settings, dbUser, dbProfile) => {
    try {
        if (!dbProfile) return message.reply("Tu dois d'abord utiliser la commande \`$setup\`");
        const classes = require("../../assets/rpg/classes.json");
        const position = classes.map(e => e.name.toLowerCase()).indexOf(dbProfile.class.toLowerCase());
        const classe = classes[position];

        const embedMyc = new MessageEmbed()
          .setAuthor(`${message.author.username} | ${dbProfile.class} level ${dbProfile.level}`, message.author.displayAvatarURL())
          .setDescription(`${dbProfile.description !== "" ? dbProfile.description : classe.description}`)
          .addField("Stats", `${Object.entries(dbProfile.stats).map(([key, value]) => `${capitalize(key)}: ${value}`).join(' | ')}`)
          .setThumbnail(classe.icon);

        message.channel.send(embedMyc);
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");
      
        message.channel.send(embedZyw);
        console.error(e);
    };
};

module.exports.help = MESSAGES.COMMANDS.RPG.PROFILE;