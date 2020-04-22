var xml2js = require('xml2js')
var rp = require('request-promise')
const { Attachment } = require('discord.js');
module.exports = {
  name: "r34",
  description: "Get an image from rule34(only in nsfw channels)",
  usage: "[search query]",
  aliases: ['rule34'],
execute(message, args) {
  if(message.channel.nsfw !== true) {

  } else {
  var query = args.join('_')
  rp('https://rule34.xxx//index.php?page=dapi&s=post&q=index&tags=' + query)
    .then(function(html) {
      var parser = new xml2js.Parser();
      parser.parseStringPromise(html).then(function(result) {
        if(result.posts.$.count === '0') return message.channel.send('"If it exists, there is porn of it."\nThat must\'ve been a lie')
        var randomImage = result.posts.post[Math.floor(Math.random() * result.posts.post.length)].$.file_url
        var attachment = new Attachment(randomImage)
        message.channel.send(attachment)
      })
    })
    .catch(function(err){})

    }
  }
}
