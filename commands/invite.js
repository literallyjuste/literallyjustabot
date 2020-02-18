module.exports = {
  name: 'invite',
  execute(message, args) {
    message.channel.send({embed: {
    color: 0x800080,
		thumbnail: {
			url: "https://cdn.discordapp.com/attachments/632971263718981636/640666397810098197/833863.png",
		},
		fields: [{
			name: "Thank you for your interest in literallyjustabot!",
			value: "[Invite the bot!](https://discordapp.com/api/oauth2/authorize?client_id=632963925419491373&permissions=271707190&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Foauth2%2Fauthorize%3Fclient_id%3D632963925419491373%26scope%3Dbot&scope=bot)",
		},
	],
  }
});
  }
}
