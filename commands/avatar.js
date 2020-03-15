const fs = require('fs');
module.exports = {
name: 'avatar',
aliases: ['icon', 'pfp'],
description: 'Get the profile picture of a user (or yourself)',
usage: '<user>',
execute(message, args, prefix, commandName, client, taggedUser) {
  if(!message.content.startsWith(prefix)||message.author.bot) return;
  if(!taggedUser) {
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
