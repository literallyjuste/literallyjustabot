const req = require('../bot.js')
module.exports = {
  name: 'info',
  execute(message, args, client) {
    message.channel.send({embed: {
    color: 0x8DEEEE,
		fields: [{
			name: "Current Server",
			value: "```md\n<Members:  "+message.guild.memberCount+">\n<ServerID: "+message.guild.id+">```",
		},
		{
			name: "Bot Information",
			value: "```md\n<Updated_On:  "+client.readyAt+">\n<Uptime:     "+client.uptime / 1000+"s>\n<Version:	0.2.0>```",
		},
	],
  }
});
  }
}
