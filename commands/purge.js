module.exports = {
  name: "purge",
  execute(message, args) {
    var countDeleted = args[0]
    if(!message.member.hasPermission('MANAGE_MESSAGES')) {
      message.reply("Sorry, you don't have enough permissions.")
    } else {
    if(isNaN(args[0])) {
      message.channel.send('Please add valid numbers.')
    } else {
      message.channel.bulkDelete(args[0]).then((countDeleted) => {
          message.channel.send(`${args[0]} messages deleted.`)
      })
      .catch(() => {
        message.reply('I don\'t have enough permissions for that.')
      })
    }
  }
}
}
