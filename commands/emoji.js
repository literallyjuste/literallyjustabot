const { Attachment } = require('discord.js');
module.exports = {
  name: "emoji",
  description: "Make an emoji bigger.",
  usage: '[emoji]',
  aliases: ['emojibigger', 'bigemoji'],
  execute(message, args, prefix, commandName, client, taggedUser) {
    var attachment
    var emojiID = args[0].slice(-19)
    emojiID = emojiID.slice(0, -1)
    if(!args[0]) return message.reply('please give me an emoji to make bigger')
    //let sEmbed = new Discord.RichEmbed()
    //.setColor("#FF9900")
    //.setImage('https://cdn.discordapp.com/emojis/' + emojiID + '.png')
    if(args[0].startsWith('<a:')) {
      attachment = new Attachment('https://cdn.discordapp.com/emojis/' + emojiID + '.gif')
    }
    if(args[0].startsWith('<:')) {
      attachment = new Attachment('https://cdn.discordapp.com/emojis/' + emojiID + '.png')
    }
    message.channel.send(attachment)
  }
}
