const client = require('../index');

client.on("interactionCreate", async(interaction) => {
    if (interaction.isCommand()) {
        await interaction.deferReply(({
            ephemeral: false
        })).catch(() => {});

        const cmd = client.slash.get(interaction.commandName);
        if (!cmd)
        return interaction.followUp({
            content: "An error has occurred"
        });
        const guild = client.guilds.cache.get(interaction.guildId)
        // The update takes about an hour
        // client.application.commands.set([]);
        // This update is immediate
        guild.commands.set([]);
        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options ?.forEach((x) => {
                    if (x.value)
                    args.push(x.value)
                })
            } else if (option.value)
                args.push(option.value)
        }

    interaction.member = interaction.guild.members.cache.get(interaction.user.id);
    cmd.run(client, interaction, guild, args);
}})