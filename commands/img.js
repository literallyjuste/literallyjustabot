const PixabayAPI = require('node-pixabayclient');
const PixabayPhotos = new PixabayAPI({ apiUrl: "https://pixabay.com/api/" });
let config = require('../config.json')
module.exports = {
  name: 'img',
  description: "Gets an image from pixabay.",
  usage: "[search query]",
  aliases: ['image'],
  execute(message, args, prefix, commandName) {
    var params = {
      key: config.imgAPI,
      q: args.join(" "),
    };
  PixabayPhotos.query(params, function(errors, res, req, hit) {
      if (errors) {
        console.log('One or more errors were encountered:');
        console.log('- ' + errors.join('\n- '));
        return;
      }
      if(res.totalHits === 0){
        message.channel.send('Image not available in the Pixabay library.')
      }
      else {
        var rdmImg = res.hits[Math.floor(Math.random() * res.hits.length)]
        message.channel.send(`Image search query: ${args.join(" ")} \n` + rdmImg.largeImageURL)
      }
    });
  }
}
