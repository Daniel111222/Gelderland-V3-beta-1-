const discord = require("discord.js");
const fs = require("fs");
const botConfig = require("../botconfig.json")
module.exports.run = async (bot, message, args) => {
    const warns = JSON.parse(fs.readFileSync("./moderation.json", "utf8"));

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, jij kan dit niet doen!");

    var kickUser = message.guild.member(message.mentions.users.first());
    if (!kickUser) return message.channel.send("Ik kan geen gebruiker vinden!");

    if (!warns[kickUser.id]) warns[kickUser.id] = {
        warns: 0,
        mutes: 0,
        kicks: 0,
        bans: 0
    };
    var reason = args.join(" ").slice(22);
    if (!reason) return message.channel.send("Ik kan geen reden vinden!")

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je mag deze speler niet kicken!");

    warns[kickUser.id].kicks++
    fs.writeFile("./moderation.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var banEmbed2 = new discord.MessageEmbed()
        .setTitle(`Je bent gekicked uit ${message.guild.name}!`)
        .setColor("#ee0000")
        .addField("Door:", message.author.tag)
        .addField("Reden:", reason);

    kickUser.send(banEmbed2).then(function () {
        message.guild.member(kickUser).kick(reason);
        return message.channel.send("Deze gebruiker is succesvol gekicked en heeft hier bericht van gekregen!");
    }).catch(function () {
        message.guild.member(kickUser).kick(reason);
        return message.channel.send("Deze gebruiker is succesvol gekicked, maar heeft hier GEEN bericht van gekregen!");
    });

    let logChannel = message.guild.channels.cache.get(botConfig.logChannel);
    if (logChannel) {
        var banEmbed = new discord.MessageEmbed()
            .setTitle(`LOG: kick`)
            .setColor("#ee0000")
            .addField("Speler:", kickUser.user.tag)
            .addField("Door:", message.author.tag)
            .addField("Aantal Kicks: ", warns[kickUser.id].kicks)
            .addField("Reden:", reason);

            logChannel.send(banEmbed)
    }

}

module.exports.help = {
    name: "kick"
}