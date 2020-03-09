const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./auth.json');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}


var ping;
var deletedMessage;
var deletedMessageAuthor;
var authorIcon;
var editedMessage;
var editedMessageAuthor;
var editedMessageAvatar;
var updatedMessage;
const hook = new Discord.WebhookClient('640663762122178560', '-9QzgVVZQ-k3Wg-QwgEKQjtxIWV1Y9l4RcRUJy_f2MwdMej6dJD6Ro1eiUkd8kT9Dqlx');
//const prefix = "e!"

client.once('ready', () => {
	console.log(`Ready! Currently in ${client.guilds.size} servers. Has ${client.users.size} users. Has access to ${client.channels.size} channels.`);
	client.user.setPresence({ game: { name: 'e!help', type: 2 } });
});

client.on("messageDelete", (messageDelete) => {
	deletedMessageAvatar = `${messageDelete.author.avatarURL}`;
	deletedMessageAuthor = `${messageDelete.author.id}`;
	deletedMessage = ` **Message sent by @${messageDelete.author.username}** \n  "${messageDelete.content}"`;
});


client.on('message', async  message => {
	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();
	console.log(message.content + "  |  ","Channel: #"+message.channel.name,"  | Server: " + message.guild.name)
	var taggedUser = message.mentions.users.first();
	if(message.content === 'snipeedit') {
		message.channel.send({embed: {
			color: 800080,
			title: editedMessage,
			timestamp: new Date(),
			thumbnail: {
				url: editedMessageAvatar,
			},
			footer: {
				text: `Author: ${editedMessageAuthor}`
			}
		}
	});
	}
/*	if(command === 'sayas') {
		message.delete(1000)
		var input = message.content;
		var userinput = input.substr(11)
		userinput = userinput.substr(taggedUser.id.length)
		if (!message.mentions.users.size) {
			 return message.reply('tag a user to impersonate')
		 }
		 if(taggedUser.id === "632963925419491373") {
			 hook.sendSlackMessage({
				 'username': 'literallyjustabot',
				 'icon_url': "https://cdn.discordapp.com/attachments/632971263718981636/640666397810098197/833863.png",
				 'text': userinput
			 })
		 } else {
		//console.log(taggedUser)
		hook.sendSlackMessage({
			'username': `${taggedUser.username}`,
			'icon_url': `${taggedUser.avatarURL}`,
			'text': userinput
		})}
	}*/
	if(command === 'sayas') {
		if(!message.content.startsWith(prefix)||message.author.bot) return;
		var input = message.content
		var userinput = input.substr(11)
		userinput = userinput.substr(taggedUser.id.length)
		if(!message.mentions.users.size) {
			return message.reply('tag a user to impersonate')
		}
		if(taggedUser.id === "632963925419491373") {
		message.delete(1000)
		message.channel.send({embed: {
		color: 0x32353E,
		title: userinput,
		author: {
			icon_url: "https://cdn.discordapp.com/attachments/632971263718981636/640666397810098197/833863.png",
			name: 'literallyjustabot'
		}
	}
});
} else {
	message.delete(1000)
	message.channel.send({embed: {
	color: 0x32353E,
	title: userinput,
	author: {
		icon_url: taggedUser.avatarURL,
		name: taggedUser.username,
	}
}
});
}
}
	if (message.content === prefix + "ping") {
		const m = await message.channel.send("Ping?")
		m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
	}
	if(message.content === prefix + 'invite') {
		message.channel.send({embed: {
    color: 0x800080,
		thumbnail: {
			url: "https://cdn.discordapp.com/attachments/632971263718981636/640666397810098197/833863.png",
		},
		fields: [{
			name: "Thank you for your interest in literallyjustabot!",
			value: "[Invite the bot!](https://discordapp.com/oauth2/authorize?client_id=632963925419491373&scope=bot)",
		},
	],
  }
});
	}
	if(message.content === prefix + 'info') {
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
	if(message.content === prefix + 'help') {
		message.channel.send({embed: {
    color: 0x800080,
    timestamp: new Date(),
		thumbnail: {
			url: "https://media.discordapp.net/attachments/632971263718981636/641012084506624043/iu.png",
		},
		fields: [{
			name: "Command List",
			value: "**snipe**\nDisplays the last deleted Message.\n**snipeedit**\nDisplays the last edited Message and its original Text.\n**e!help**\nDisplays this message.\n**e!info**\nDisplays information about the bot and Server.\n**e!ping**\nDisplays current ping of the bot to discord and its API.\n**e!sayas [mention] [input]**\nPretends to be the mentioned user (WIP?).",
		},
	],
  }
});
	}
	if(message.content === 'snipe') {
		message.channel.send({embed: {
    color: 800080,
    title: deletedMessage,
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

/*	if (message.content === 'test')
		message.channel.send('confirmed')
	if (message.content.includes("😀")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😬")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😁")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😂")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😃")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😄")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😅")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😆")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😇")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😉")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😊")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🙂")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🙃")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("☺")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😋")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😌")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😍")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😘")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😗")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😙")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😚")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😜")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😝")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😛")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🤑")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🤓")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😎")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🤗")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😏")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😶")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😐")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😑")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😒")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🙄")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🤔")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😳")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😞")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😟")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😠")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😡")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😔")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😕")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🙁")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("☹")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😣")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😖")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😫")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😩")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😤")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😮")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😱")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😨")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😰")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😯")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😦")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😧")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😢")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😥")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😪")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😓")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😭")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😵")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😲")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🤐")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😷")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🤒")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("🤕")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}
	if (message.content.includes("😴")) {
		message.delete(1000); //Supposed to delete message
		message.channel.send("fuck you, don't send emojis  ");
	}*/
client.on('messageUpdate', async (oldMessage, newMessage) => {
	console.log(`Message "${oldMessage}" edited to "${newMessage}" in ${newMessage.guild.name} | #${newMessage.channel.name}`)
	editedMessage = ` **Message edited by @${newMessage.author.username}** \n  "${oldMessage.content}" was edited to "${newMessage.content}"`;
	editedMessageAvatar = `${newMessage.author.avatarURL}`;
	editedMessageAuthor = `${newMessage.author.id}`;
	updatedMessage = newMessage;
	/*if (newMessage.content.includes("😀")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😬")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😁")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😂")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😃")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😄")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😅")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😆")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😇")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😉")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😊")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🙂")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🙃")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("☺")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😋")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😌")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😍")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😘")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😗")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😙")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😚")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😜")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😝")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😛")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🤑")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🤓")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😎")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🤗")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😏")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😶")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😐")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😑")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😒")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🙄")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🤔")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😳")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😞")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😟")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😠")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😡")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😔")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😕")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🙁")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("☹")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😣")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😖")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😫")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😩")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😤")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😮")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😱")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😨")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😰")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😯")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😦")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😧")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😢")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😥")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😪")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😓")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😭")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😵")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😲")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🤐")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😷")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🤒")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("🤕")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}
	if (newMessage.content.includes("😴")) {
		newMessage.delete(1000); //Supposed to delete message
		newMessage.channel.send("fuck you, don't send emojis  ");
	}*/
})
})
client.login(token);
