module.exports = {
  name:'mute',
  description: "Mutes the mentioned user for max. 24.8 days.(Mute role might have to be set up.\nExample: e!mute @user 2h)",
  usage: "<user> [time]",
  execute(message, args, prefix, commands, client, taggedUser) {
    if(!message.member.hasPermission('MANAGE_ROLES')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
    const ms = require("ms");
    console.log(taggedUser)
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    var member = taggedUser
    var input = message.content
    console.log(member)
    var userinput = input.substr(12)
    if(!message.mentions.users.size && typeof taggedUser === null) {
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
