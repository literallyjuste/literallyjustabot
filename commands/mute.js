module.exports = {
  name:'mute',
  execute(message, args, taggedUser) {
    var userinput = input.substr(12)
    userinput = userinput.substr(taggedUser.id.length)
    if(!message.mentions.users.size) {
      return message.reply('tag a user to mute')
    }
    
  }
}
