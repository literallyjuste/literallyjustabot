module.exports = {
  name: "purge",
  execute(message, args) {
    if(!message.member.hasPermission('ADMINISTRATOR')) {
      message.reply("Sorry, you don't have enough permissions.")
    }
    if(isNaN(args[0])) {
      message.channel.send('Please enter valid numbers.')
    } else {
      message.channel.bulkDelete(args[0])
    }
  }
}
