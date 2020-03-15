module.exports = {
  name: "purge",
  description: "Deletes desired amount of messages.",
  usage: "[number]",
  aliases: ['delete'],
  execute(message, args) {
    console.log(args[0])
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
