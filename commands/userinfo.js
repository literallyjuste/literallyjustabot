const fs = require('fs');
module.exports = {
  name: 'userinfo',
  description: "Displays information about a user.",
  usage: "<user>",
  execute(message, args, prefix, commands, client, taggedUser) {
    var authorNick = message.member.nickname;
/*    if (!message.mentions.users.size) {
      if(message.member.nickname === null) {
        authorNick = "No nickname on this server"
      } else {
        var taggedNick = taggedUser.nickname
        if (taggedUser.nickname === undefined) {
          taggedNick = "No nickname on this server"
        }
      }
    }*/
    var formatDate = function(date) {
      return new Intl.DateTimeFormat('en-US').format(date)
    }
    if(!message.content.startsWith(prefix)||message.author.bot) return;
    if(!message.mentions.users.size && typeof taggedUser === null) {
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
        name: "Avatar URL",
        value: "[Click Here!]("+message.author.avatarURL+")",
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
        var taggedNick = taggedUser.nickname
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
          value: ""+taggedUser.username+"",
        },
        {
          name: "Avatar URL",
          value: "[Click Here!]("+taggedUser.avatarURL+")",
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
