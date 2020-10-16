const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
    if (message.author.bot) return;
    try {
        const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
            limit: 1,
            type: 'MESSAGE_DELETE'
        });

        const latestMessageDeleted = fetchGuildAuditLogs.entries.first();

        const { executor } = latestMessageDeleted;
    
        const embed = new MessageEmbed()
          .setAuthor("Message deletion")
          .setColor("#dc143c")
          .setDescription(`**Action**: message deleted\n**Deleted message**: ${message.content}\n**Deleted message author**: ${message.author}`)
          .setTimestamp()
          .setFooter(executor.username, executor.displayAvatarURL());

        client.channels.cache.get("766674489052102696").send(embed);
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured with (messageDelete) event.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    };
}