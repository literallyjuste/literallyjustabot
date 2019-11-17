const req = require('../bot.js')
module.exports = {
  name: 'info',
  execute(message, args, client) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    var seconds = Math.round(totalSeconds % 60);
    let uptimee = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    message.channel.send({embed: {
    color: 0x8DEEEE,
		fields: [{
			name: "**Current Server**",
			value: "```md\n<Members:  "+message.guild.memberCount+">\n<ServerID: "+message.guild.id+">```",
		},
		{
			name: "**Bot Information**",
			value: "```md\n<Updated_On:  "+client.readyAt+">\n<Uptime:     "+uptimee+">\n<Version:	0.4.0>```",
		},
	],
  }
});
  }
}
