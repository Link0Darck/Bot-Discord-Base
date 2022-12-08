const { Client, Collection } = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
const client = new Client({
   intents: 32767
});

module.exports = client;

client.commands = new Collection()
client.aliases = new Collection();
client.slash = new Collection();
client.categories = fs.readdirSync("./commands/");

["command", "events", "slash", config.antiCrash ? "antiCrash" : null]
.filter(Boolean)
.forEach(handler => {
   require(`./handlers/${handler}`)(client);
})

client.login(config.token)