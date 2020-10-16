module.exports = async (client, messageReaction, user) => {
    try {
        const message = messageReaction.message;
        const member = message.guild.members.cache.get(user.id)
        const emoji = messageReaction.emoji.name;
        const channel = message.guild.channels.cache.find(c => c.id === '766674489052102696');

        if (member.user.bot) return;

        if (messageReaction.partial) {
            await messageReaction.fetch();
            return;
        };

        if (emoji === "🟥") message.delete();
    } catch (e) {
        const embedZyw = new MessageEmbed()
          .setColor("#FF0000")
          .setDescription("\`\`\`❌ | An undefined error occured.\`\`\`");

        client.channels.cache.get("766674489052102696").send(embedZyw);
        console.error(e);
    };
}