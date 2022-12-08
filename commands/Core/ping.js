const { prefix } = require("../../config.json")

module.exports = {
    name: "ping",
    description: `Returns latency and ping API.\n \n Example : \n \`\`\`${prefix}ping\`\`\`\ `,
    aliases: ["ms"],
    emoji: "🚦",
    run: async (client, message, args) => {
        message.delete()
        const msg = await message.channel.send(`⏳Loading in progress ...⏳`)
        msg.delete()
        await message.channel.send(`**WebSocket** : \`${client.ws.ping}\` ms\n**BOT** : \`${Math.floor(msg.createdAt - message.createdAt)}\` ms`)
    }
}