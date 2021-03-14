module.exports = {
  name: 'github',
  aliases: ['git', 'source'],
  description: 'Link to the bots source code.',
  execute(message) {
    message.channel.send('https://github.com/literallyjuste/literallyjustabot')
  }
}
