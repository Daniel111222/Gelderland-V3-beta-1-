const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("serverinfo")
        .setDescription("Info:")
        .setColor("#0099ff")
        .addFields(
            { name: "Bot naam", value: client.user.username },
            { name: "Je bent de server gejoined op", value: message.member.joinedAt },
            { name: "Totaal members", value: message.guild.memberCount },
            { name: "Aantal servers", value: client.guilds.cache.size }
        )
        .setThumbnail("https://media.discordapp.net/attachments/715220998512967730/728612683422629929/Schermopname_58.png?width=845&height=475%22")
        .setImage("https://media.discordapp.net/attachments/715220998512967730/728612683422629929/Schermopname_58.png?width=845&height=475%22")
        .setFooter("Bot maker: @Daniël#2939 - Owner Gelderland: @playfruitje#9860", "https://media.discordapp.net/attachments/715220998512967730/728612683422629929/Schermopname_58.png?width=845&height=475%22")
        .setTimestamp();
        
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "serverinfo"
}