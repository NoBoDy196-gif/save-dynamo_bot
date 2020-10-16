const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args, settings, dbUser, dbProfile) => {
    try {
        if (dbProfile) return message.reply("tu ne peux pas taper plusieurs fois cette commande.");

        const classes = require("../../assets/rpg/classes.json");
        const q = args.join(" ");
        const position = classes.map(e => e.name.toLowerCase()).indexOf(q.toLowerCase());
        if (q && position == -1) return message.reply("cette classe n'existe pas.");
    
        if (q && position !== -1) {
            try {
                const classe = classes[position];
                message.channel.send(`Voulez-vous vraiment choisir \`${classe.name}\` ? (oui)`);
                const filter = m => (message.author.id === m.author.id);
                const userEntry = await message.channel.awaitMessages(filter, {
                    max: 1, time: 5000, errors: ['time']
                });
      
                if (userEntry.first().content.toLowerCase() === 'oui') {
                message.channel.send(`Votre profil a été créé, vous êtes maintenant un \`${classe.name}\``);
                await client.createProfile({
                    guildID: message.member.guild.id,
                    profileID: message.member.id,
                    class: classe.name,
                    stats: classe.stats
                });
                };
            } catch (e) {
                message.channel.send("Choisissez la classe plus vite.")
            };
        } else {
            message.channel.send(`Veuillez choisir votre classe (syntax: \`<setup> <class_name>\`) Les classes disponibles: ${classes.map(e => `\`${e.name}\``).join(", ")}`);
            };
    } catch (e) {
            const embedZyw = new MessageEmbed()
              .setColor("#FF0000")
              .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");

            message.channel.send(embedZyw);
            console.error(e);
    };
};

module.exports.help = MESSAGES.COMMANDS.RPG.SETUP;