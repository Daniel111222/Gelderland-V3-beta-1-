const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle("Info")
    .setColor("#32a852")
    .addFields(
        { name: "Dit is de bot van Gelderland V3 (beta)", value: "De bot is gemaakt door @Daniël#2939 en de owner van de server is @playfruitje#9860"},
        { name: "Dit is De officiële support server van de bot: Daniël bot", value: "[Klik Hier!](https://discord.gg/2E5fhn3)" },
    )
    .setThumbnail("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
    .setImage("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
    .setFooter("Bot maker: @Daniël#2939 - Owner Gelderland: @playfruitje#9860", "https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
    .setTimestamp();

return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "info"
}