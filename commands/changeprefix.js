const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
  name: "changeprefix",
  execute(message, args) {
    if(!message.member.hasPermission('ADMINISTRATOR')) {
      message.reply("Sorry, you don't have enough permissions.")
    }
    if(!args[0] || args[0 == "help"]) return message.reply("Do <prefix> changeprefix <desired prefix>")
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

    prefixes[message.guild.id] = {
      prefixes: args[0]
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
      if (err) console.log(err)
    })

    let sEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Prefix Set!")
    .setDescription(`Set to ${args[0]}`)

    message.channel.send(sEmbed)

  }
}
