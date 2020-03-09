//632971263718981632
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
let config = require('./config.json')
const ytdl = require('ytdl-core')
const queue = new Map();
client.commands = new Discord.Collection();
const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandsFiles) {
	const commands = require(`./commands/${file}`);
	client.commands.set(commands.name, commands);
}
const cooldowns = new Discord.Collection();
const Client = require('./client/client.js');
var ping;
var deletedMessage;
var deletedMessageAuthor;
var authorIcon;
var editedMessage;
var editedMessageAuthor;
var editedMessageAvatar;
var updatedMessage;
var deletedMessageInfo;
//var prefix = "e!"

client.once('ready', () => {
	console.log(`Ready! Currently in ${client.guilds.size} servers. Has ${client.users.size} users. Has access to ${client.channels.size} channels.`);
	client.user.setPresence({ game: { name: 'e!help', type: 2 } });
});

client.on('error', error => {
	 console.error('The websocket connection encountered an error:', error);
});

client.on("guildCreate", async guild => {
		console.log(guild.id)
		defaultChannel = ""
		guild.channels.forEach((channel) => {
			if(channel.type == "text" && defaultChannel == "") {
				if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
					defaultChannel = channel;
			}
			let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

			prefixes[guild.id] = {
				prefixes: 'e!'
			}

			fs.writeFile("prefixes.json", JSON.stringify(prefixes), (err) => {
				if (err) console.log(err)
			})
		}
	})
		defaultChannel.send('``` Thank you for inviting me!\n Please set up the "Muted" role for each channel or channel category so the mute commands can work!\n If you want a list of all the commands, use "e!help".\n The default prefix is "e!".```')
		console.log('Joined a new server: ' + guild.name);
		guild.createRole({
			name: 'Muted',
			color: 'GREY',
			permissions: ["READ_MESSAGES"]
		})
})

client.on("guildDelete", async guild => {
	console.log('Removed from a server: ' + guild.name);
})

client.on("messageDelete", (messageDelete) => {
	deletedMessageAvatar = `${messageDelete.author.avatarURL}`;
	deletedMessageAuthor = `${messageDelete.author.id}`;
	deletedMessage = ` **Message sent by @${messageDelete.author.username}** \n  "${messageDelete.content}"`;
	deletedMessageInfo = messageDelete;
});


client.on('message', async  message => {
	//var prefix = config.prefix;
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))

	console.log(message.content + "  |  ","Channel: #"+message.channel.name,"  | Server: " + message.guild.name)
	//var taggedUser = message.mentions.users.first();
	if(!prefixes[message.guild.id]) {
		prefixes[message.guild.id] = {
			prefixes: config.prefix
		}}
	let prefix = prefixes[message.guild.id].prefixes
	const args = message.content.slice(prefix.length).split(' ');
	const commands = args.shift().toLowerCase();
	if(message.content === 'snipeedit') {
		client.commands.get('snipeedit').execute(message, args, editedMessage, editedMessageAuthor, editedMessageAvatar)
	}
	if(message.content === 'snipe') {
		client.commands.get('snipe').execute(message, args, deletedMessage, deletedMessageAuthor, deletedMessageAvatar, deletedMessageInfo)
	}
	if(message.content === 'e!prefix') {
		client.commands.get('prefix').execute(message, prefix)
	}
	if(message.content.startsWith(prefix)){
		const commandName = client.commands.get(commands).name
		if(message.content === 'e!prefix') return;
	//console.log(message.client)
	console.log(prefix)

	try {
		client.commands.get(commands).execute(message, args, prefix, commands, client);
	} catch (error) {
		console.error(error)
	}
	//const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
	/*if(!cooldowns.has(commands.name)) {
		cooldowns.set(commands.name, new Discord.Collection())
	}
	//console.log(client.commands.get(commands).name)
	//const command = client.commands.get(commands)

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownTime = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownTime;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before using the '${command.name}' commands again.`);
		}
	}
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownTime);*/
}

client.on('messageUpdate', async (oldMessage, newMessage, messageUpdate) => {
	if(newMessage.author.bot) return;
	console.log(`Message "${oldMessage}" edited to "${newMessage}" in ${newMessage.guild.name} | #${newMessage.channel.name}`)
	editedMessage = ` **Message edited by @${newMessage.author.username}** \n  "${oldMessage.content}" was edited to "${newMessage.content}"`;
	editedMessageAvatar = newMessage.author.avatarURL;
	editedMessageAuthor = newMessage.author.id;
	updatedMessage = newMessage;
})
})
client.login(config.token);
