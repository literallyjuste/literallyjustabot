module.exports = {
  name:'unban',
  execute(message, args, prefix) {
    if(!message.member.hasPermission('BAN_MEMBERS')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
      if(!message.content.startsWith(prefix)||message.author.bot) return
      var member = message.mentions.members.first();
      var input = message.content
      var userinput = input.substr(12)
      if(isNaN(args[0])) {
        message.channel.send('Please provide a user id.')
      } else {
      message.guild.unban(args[0])
      message.channel.send(`<@${args[0]}> has been unbanned from ${message.guild.name}.`)
      }
    }
  }
}
