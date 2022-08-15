const { EmbedBuilder } = require('discord.js')
module.exports = {
    name: "help",
    description: "It helps you to get information about bot and commands.",
    permissions: "0x0000000000000800",
    options: [],
    showHelp: false,
    run: async (client, interaction) => {

        const commands = client.commands.filter(x => x.showHelp !== false);

        const embed = new EmbedBuilder()
            .setColor('007fff')
            .setTitle('V14 Music COMMANDS')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("It's time to listen to music on your discord server with a completely free and advanced interface. Music bot that supports playing music on many platforms that will make your server feel special. Join Support Server For Showing Support : https://discord.com/invite/D6SFg5XHYu")
            .addFields([
                { name: `Bot Commands`, value: commands.map(x => `\`/${x.name}\``).join(' | ') }
            ])
            .setTimestamp()
            .setFooter({ text: `*Made By Team Zero*` })
        interaction.reply({ embeds: [embed] }).catch(e => { })
    },
};

