let slash = []
const { readdirSync } = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Slash Command Controller");
table.setHeading("Slash commands :", 'Loading Status :');
module.exports = (client) => {
    readdirSync("./SlashCommands/").forEach(dir => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter(file => file.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../SlashCommands/${dir}/${file}`);
            if (pull.name) {
                client.slash.set(pull.name, pull);
                slash.push(pull)
                table.addRow(file, "✅ Command Slash Loaded")
            } else {
                table.addRow(file, '❌ Command Slash Bugged')
                continue;
            }
        }
    })
    console.log(table.toString())
    client.on('ready', async () => {
        await client.application.commands.set(slash);
    })
}