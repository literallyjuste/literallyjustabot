const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content)
	if (message.content === 'test')
		message.channel.send('confirmed')
	if (message.content.includes("😬"||"😀"||"😁")){
	  	message.delete(1000); //Supposed to delete message
			message.channel.send("fuck you don't send emojis");
}});

client.login(auth.token);
