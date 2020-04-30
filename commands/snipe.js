const fs = require('fs');
const { RichEmbed } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
  name: 'snipe',
  description: "Displays last deleted message.",
  execute(message, args, deletedMessage, deletedMessageAuthor, deletedMessageAvatar, deletedMessageInfo, messageDelete) {
    //message.delete(1000);
    //console.log(message)
    console.log(deletedMessageInfo.attachments.first().url)
    let snipess = JSON.parse(fs.readFileSync("./deletionlog.json", "utf8"))
    if(!snipess[message.guild.id]) {
      snipess[message.guild.id] = {
        snipess: "There's nothing to snipe!"
      }}
    snipess[message.guild.id] = {
        snipess: deletedMessage
      }
    let snipes = snipess[message.guild.id].snipess
    /*fs.writeFile("./deletionlog.json", JSON.stringify(snipess), (err) => {
      if (err) console.log(err)
    })*/

    console.log(snipes)
    const deletedMessageEmbed = new Discord.RichEmbed()
      .setColor(800080)
      .setTitle(snipes)
      .attachFiles(['./deletedImage.png'])
      .setImage('attachment://deletedImage.png')
      .setTimestamp(new Date())
      .setThumbnail(deletedMessageAvatar)
    message.channel.send(deletedMessageEmbed)
  }
}
