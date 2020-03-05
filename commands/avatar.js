const fs = require('fs');
module.exports = {
name: 'avatar',
aliases: ['icon', 'pfp'],
description: 'Get the profile picture of a user (or yourself)',
usage: '<user>',
execute(message, args) {
  const taggedUser = message.mentions.users.first()
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
  let prefix = prefixes[message.guild.id].prefixes
  if(!message.content.startsWith(prefix)||message.author.bot) return;
  if(!message.mentions.users.size) {
    message.channel.send({embed: {
      title: message.author.username + "#" + message.author.discriminator,
      author: `test`,
      image: {
        url: message.author.avatarURL,
      },

  }})} else {
    message.channel.send({embed: {
      title: taggedUser.username + "#" + taggedUser.discriminator,
      image: {
        url: taggedUser.avatarURL,
      },
    }})
  }
}}
