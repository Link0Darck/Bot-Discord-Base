const { MessageEmbed } = require('discord.js');

module.exports = {
    name : "ping",
    description : "Returns API ping",
    run : async (client, interaction, args) => {
        const msg = await interaction.followUp(`⏳Loading in progress ...⏳`)
        const timestamp = (interaction.editedTimestamp) ? interaction.editedTimestamp : interaction.createdTimestamp;
        const latency = `\`\`\`ini\n ${Math.floor(msg.createdTimestamp - timestamp)} ms \`\`\``;
        const apiLatency = `\`\`\`ini\n ${Math.round(interaction.client.ws.ping)} ms \`\`\``;
        msg.edit(`🏓 PING 🏓\nLatency : ` + latency + `\n API latency : ` + apiLatency)
    }
}