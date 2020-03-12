module.exports = {
  name:'unmute',
  description: "Unmutes a user.",
  usage: "<user>",
  execute(message, args, prefix, commands, client, taggedUser) {
    if(!message.member.hasPermission('MANAGE_ROLES')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    var member = message.mentions.members.first();
    let muteRole = message.guild.roles.find("name", "Muted");
    if(!message.mentions.users.size && typeof taggedUser === null) {
      return message.reply('tag a user to unmute')
    }
    member.removeRole(muteRole.id)
    message.channel.send(`${member.user.tag} has been unmuted.`)
    }
  }
}
