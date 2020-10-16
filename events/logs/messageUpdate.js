const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, oldMessage, newMessage) => {
    if (message.author.bot) return;
    try {
        const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
            limit: 1,
            type: 'MESSAGE_UPDATE'
        });
    
        const embed = new MessageEmbed()
          .setAuthor("Message update")
          .setColor("#dc143c")
          .setDescription(`**Action**: message updated \n**Updated message before**: ${oldMessage.content} \nn**Updated message after**: ${newMessage.content}`)
          .setTimestamp()
          .setFooter(oldMessage.author.username, oldMessage.author.displayAvatarURL());

        client.channels.cache.get("766674489052102696").send(embed); 
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured with (messageUpdate) event.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    };
}