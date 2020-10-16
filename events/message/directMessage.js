const message = require("./message")
const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
    try {
        const user = message.author;
        if (user.bot) return;

        const embed = new MessageEmbed()
          .setAuthor(`${user.username} (${user.id})`)
          .setColor("#ffa500")
          .setDescription(`**Action**: ticket opened\n**Reason**: ${message.content}\n**User**: ${user}`)
          .setThumbnail(user.avatarURL())
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL());

        user.send("We've received your ticket, we'll anwser as soon as possible.");
        client.channels.cache.get("766674489052102696").send(embed);
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured with (directMessage) event.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    };
};
