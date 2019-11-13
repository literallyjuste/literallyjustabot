//632971263718981632
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
let config = require('./config.json')
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
//var prefix = "e!"

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
	//let prefix = config.prefix;
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
	let prefix = prefixes[message.guild.id].prefixes
	console.log(message.content + "  |  ","Channel: #"+message.channel.name,"  | Server: " + message.guild.name)
	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();
	var taggedUser = message.mentions.users.first();
	if(!prefixes[message.guild.id]) {
		prefixes[message.guild.id] = {
			prefixes: config.prefix
		}}
	if(message.content === 'snipeedit') {
		client.commands.get('snipeedit').execute(message, args, editedMessage, editedMessageAuthor, editedMessageAvatar)
	}
	if(command === 'sayas') {
		client.commands.get('sayas').execute(message, args, prefix, taggedUser)
}
	if (message.content === prefix +  "ping") {
		const m = await message.channel.send("Ping?")
		m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}
	if(message.content === prefix + 'invite') {
		client.commands.get('invite').execute(message, args)
	}
	if(message.content ===  'e!info') {
		client.commands.get('info').execute(message, args, client)
	}
	if(message.content === prefix + 'help') {
		client.commands.get('help').execute(message, args)
	}
	if(message.content === 'snipe') {
		client.commands.get('snipe').execute(message, args, deletedMessage, deletedMessageAuthor, deletedMessageAvatar)
	}
	if(command === 'changeprefix') {
		client.commands.get('changeprefix').execute(message, args)
		}
	console.log(prefix)

client.on('messageUpdate', async (oldMessage, newMessage) => {
	console.log(`Message "${oldMessage}" edited to "${newMessage}" in ${newMessage.guild.name} | #${newMessage.channel.name}`)
	editedMessage = ` **Message edited by @${newMessage.author.username}** \n  "${oldMessage.content}" was edited to "${newMessage.content}"`;
	editedMessageAvatar = newMessage.author.avatarURL;
	editedMessageAuthor = newMessage.author.id;
	updatedMessage = newMessage;
})
})
client.login(config.token);