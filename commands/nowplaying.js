//taken from https://github.com/TannerGabriel/discord-bot/blob/master/commands/nowplaying.js
module.exports = {
	name: 'nowplaying',
	description: 'Get the song that is playing.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`Now playing: ${serverQueue.songs[0].title}`);
	},
};
