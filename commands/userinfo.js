const fs = require('fs');
module.exports = {
  name: 'userinfo',
  execute(message, taggedUser, args) {
    var formatDate = function(date) {
      return new Intl.DateTimeFormat('de-DE').format(date)
    }
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
    let prefix = prefixes[message.guild.id].prefixes
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    if(!message.mentions.users.size) {
      message.channel.send({embed: {
      color: 0x35553E,
      thumbnail: {
        url: message.author.avatarURL,
      },
      title: "Userinfo",
      fields: [{
        name: "User ID:",
        value: ""+message.author.id+"",
      },
       {
        name: "Username with discriminator: ",
        value: ""+message.author.username+"#"+message.author.discriminator+"",
      },
      {
        name: "Nickname: ",
        value: ""+message.member.nickname+"",
      },
      {
        name: "Account created on ",
        value: ""+message.author.createdAt+"",
      },
       {
        name: "Joined at ",
        value: ""+formatDate(message.member.joinedTimestamp)+"",
      },
    ],
      }
    })
  } else {
        message.channel.send({embed: {
        color: 0x35553E,
        thumbnail: {
          url: taggedUser.avatarURL,
        },
        title: 'Userinfo',
        fields: [{
          name: "User ID:",
          value: ""+taggedUser.id+"",
        },
        {
          name: "Username with discriminator: ",
          value: ""+taggedUser.username+"#"+taggedUser.discriminator+"",
        },
        {
          name: "Nickname: ",
          value: ""+taggedUser.nickname+"",
        },
        {
          name: "Avatar URL: ",
          value: ""+taggedUser.avatarURL+"",
        },
        {
          name: "Account created on ",
          value: ""+taggedUser.createdAt+"",
        },
        {
          name: "Joined at ",
          value: ""+formatDate(taggedUser.joinedTimestamp)+"",
        },
      ],
        }
        });
  }}
}
