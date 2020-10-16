const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
    try {
        const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: 'CHANNEL_DELETE'
        });
    
        const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    
        const { executor } = latestChannelDeleted;
        
        const embed = new MessageEmbed()
          .setAuthor("Channel deletion")
          .setColor("#dc143c")
          .setDescription(`**Action**: channel deleted\n**Deleted channel**: ${channel.name}`)
          .setTimestamp()
          .setFooter(executor.username, executor.displayAvatarURL());
    
        client.channels.cache.get("766674489052102696").send(embed);
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured with (channelDelete) event.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    }
}