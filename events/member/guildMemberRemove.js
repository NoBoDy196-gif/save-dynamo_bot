const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
    try {
        const embed = new MessageEmbed()
          .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
          .setColor("#dc143c")
          .setFooter("A user left")
          .setTimestamp();      

        client.channels.cache.get("766674489052102696").send(embed);
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured with (guildMemberRemove) event.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    };
}