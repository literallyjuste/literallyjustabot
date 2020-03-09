module.exports =  {
  name: "prefix",
  description: "Tells you the bots current prefix for this server.",
  usage: '',
  execute(message, prefix) {
		message.channel.send("The current prefix is \"" + prefix + "\"")
  }
}
