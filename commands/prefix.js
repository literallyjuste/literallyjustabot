module.exports =  {
  name: "prefix",
  description: "Tells you the bots current prefix for this server.",
  usage: '',
  cooldown: 5,
  execute(message) {
		message.channel.send("The current prefix is \"" + prefix + "\"")
  }
}
