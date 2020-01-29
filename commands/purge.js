module.exports = {
  name: "purge",
  execute(message, args) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
    if(isNaN(args[0])) {
      message.channel.send('Please add valid numbers.')
    } else {
      message.channel.bulkDelete(args[0])
      message.channel.send(`Delted ${args[0]} messages.`)
    }
  }
}
}
