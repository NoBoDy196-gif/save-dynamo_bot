const { MessageEmbed } = require("discord.js");

module.exports = async (client, member) => {
    try {
        const settings = await client.getGuild(member.guild);
        let msg = settings.welcomeMessage;

        if (msg.includes("{{user}}")) msg = msg.replace("{{user}}", member);

        const embed = new MessageEmbed()
          .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
          .setColor("#35f092")
          .setFooter("A user joined.")
          .setTimestamp();

        client.channels.cache.get("766674489052102696").send(msg);
        client.channels.cache.get("766674489052102696").send(embed);
    
        await client.createUser({
          guildID: member.guild.id,
          userID: member.id
        });
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured with (guildMemberAdd) event.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    };
};