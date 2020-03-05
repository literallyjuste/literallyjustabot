module.exports = {
  name:'ban',
  description: "Bans the mentioned user permanently.",
  usage: "<user>",
  execute(message, args, prefix, client) {
    if(!message.member.hasPermission('BAN_MEMBERS')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
      if(!message.content.startsWith(prefix)||message.author.bot) return;
      var member = message.mentions.members.first();
      var input = message.content
      var userinput = input.substr(12)
      if(!member.banable) return message.channel.send("Can't ban this user.")
      if(!message.mentions.users.size) {
        return message.reply('tag a user to ban')
      }
      member.ban().then((member) => {
          message.channel.send(`${member.user.tag} has been banned from ${message.guild.name}.`)
      })
      .catch(() => {
        message.reply('I don\'t have enough permissions for that.')
      })
    }
  }
}
