const fs = require('fs');
module.exports = {
  name: 'snipe',
  execute(message, args, deletedMessage, deletedMessageAuthor, deletedMessageAvatar, deletedMessageInfo) {
    //message.delete(1000);
    let snipess = JSON.parse(fs.readFileSync("./deletionlog.json", "utf8"))
    if(!snipess[message.guild.id]) {
      snipess[message.guild.id] = {
        snipess: "There's nothing to snipe!"
      }}
    snipess[message.guild.id] = {
        snipess: deletedMessage
      }
    let snipes = snipess[message.guild.id].snipess
    fs.writeFile("./deletionlog.json", JSON.stringify(snipess), (err) => {
      if (err) console.log(err)
    })

    console.log(snipes)
    message.channel.send({embed: {
    color: 800080,
    title: snipes,
    timestamp: new Date(),
    thumbnail: {
      url: deletedMessageAvatar,
    },
    footer: {
      text: `Author: ${deletedMessageAuthor}`
    }
  }
});
  }
}
