module.exports =  {
  name: "ping",
  usage: "",
  description: "Displays latency for the bot and the API",
  async execute(message, client) {
    const m = await message.channel.send("Ping?")
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
}
