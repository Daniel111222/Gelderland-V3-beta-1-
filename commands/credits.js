const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Credits naar...")
        .setDescription("@playfruitje#9860 - Heeft de grootste gedeelte van de game gemaakt en is de owner. \n\n @Danië;#2939 - Heeft deze bot voor Gelderland in zijn eentje gemaakt. \n\n @head developer - Die veel hebben gewerkt aan de roblox game. \n\n @developer - Die hebben mee geholpen met de game \n\n @proef developer - Die wat kleine mooie gebouwen hebben gemaakt.")
        .setColor("#6dad3e")
        .setThumbnail("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setImage("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setFooter("Bot maker: @Daniël#2939 - Owner Gelderland: @playfruitje#9860", "https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setTimestamp();
        
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "credits"
}

// @playfruitje die de game het meest heeft gemaakt
// @head developer die ook best veel hebben gemaakt
// @developer die hebben geholpen
// @proef developer die wat kleine mooie gebouwen heeft ge maakt