module.exports = {
  name:'kick',
  execute(message, args, prefix) {
    if(!message.member.hasPermission('KICK_MEMBERS')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
      if(!message.content.startsWith(prefix)||message.author.bot) return;
      var member = message.mentions.members.first();
      var input = message.content
      var userinput = input.substr(12)
      if(!message.mentions.users.size) {
        return message.reply('tag a user to kick')
      }
      member.kick().then((member) => {
          message.channel.send(`${member.user.tag} has been kicked from ${message.guild.name}.`)
      })
      .catch(() => {
        message.reply('I don\'t have enough permissions for that.')
      })
    }
  }
}
