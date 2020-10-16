const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
    try {
        if (channel.type === 'dm') return;
        else {
            const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
                limit: 1,
                type: 'CHANNEL_CREATE'
            });
        
            const latestChannelCreated = fetchGuildAuditLogs.entries.first();
        
            const { executor } = latestChannelCreated;
            
            const embed = new MessageEmbed()
              .setAuthor("New channel creation")
              .setColor("#fd7aff")
              .setDescription(`**Action**: channel created\n**Created channel**: ${channel.name}`)
              .setTimestamp()
              .setFooter(executor.username, executor.displayAvatarURL());
        
            client.channels.cache.get("766674489052102696").send(embed); 
        };
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured with (channelCreate) event.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    };
};