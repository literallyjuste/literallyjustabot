const fs = require('fs');
module.exports = {
name: 'servericon',
description: 'Get the server icon.',
usage: '',
execute(message, args) {
  if(!message.mentions.users.size) {
    message.channel.send({embed: {
      title: message.guild.name,
      author: `test`,
      image: {
        url: message.guild.iconURL,
      },

  }})}
}}
