const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("De rollen zijn:")
        .setDescription("Owner \n Co-owner \n head discord developer daniël \n Management \n Team management \n Super admin | HC \n Admin \n Moderator \n Proef moderator \n Head developer \n Skripter \n Developer \n Proef developer \n Teamleider brandweer \n Teamleider politie \n Teamleider ambulance \n Teamleider KMar \n HR | brandweer \n HR | politie \n HR | ambulance \n HR | KMar \n Brandweer \n Politie \n Ambulance \n KMar \n VIP \n DJ \n Burger")
        .setColor("#6dad3e")
        .setThumbnail("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setImage("https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setFooter("Bot maker: @Daniël#2939 - Owner Gelderland: @playfruitje#9860", "https://media.discordapp.net/attachments/719562600282849324/728612375590338630/Schermopname_58.png?width=845&height=475")
        .setTimestamp();
        
    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "rollen"
}

// burger
// DJ
// VIP
// ambulance
// brandweer
// politie
// KMAR
// HR | brandweer
// HR | ambulance
// HR | politie
// HR | KMAR
// Teamleider KMar
// Teamleider Ambulance
// Teamleider Politie
// Teamleider Brandweer
// proef developer
// developer
// skripter
// head developer
// proef mod
// mod
// admin
// super admin | HC
// Team Management
// Management
// head discord developer daniël
// Co-owner
// owner