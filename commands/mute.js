module.exports = {
  name:'mute',
  description: "Mutes the mentioned user for max. 14 days.(Mute role might have to be set up.\nExample: e!mute @user 2h)",
  usage: "<user> [time]",
  execute(message, args, prefix) {
    if(!message.member.hasPermission('MANAGE_ROLES')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
    const ms = require("ms");
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    var member = message.mentions.members.first();
    var input = message.content
    var userinput = input.substr(12)
    if(!message.mentions.users.size) {
      return message.reply('tag a user to mute')
    }
    let time = args[1]
    let muteRole = message.guild.roles.find("name", "Muted");
    userinput = userinput.substr(member.id.length)
    if(!muteRole) return message.reply('You need to to create a role called "Muted"')
    if(!time) return member.addRole(muteRole.id) && message.channel.send(`${member.user.tag} has been muted.`)
    member.addRole(muteRole.id)
    message.channel.send(`${member.user.tag} has been muted for ${ms(ms(time, {long: true}))}.`)
    setTimeout(function() {
      member.removeRole(muteRole.id);
      message.channel.send(`${member.user.tag} has been unmuted.`)
    }, ms(time))
  }
}
}
