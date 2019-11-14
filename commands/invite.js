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
			value: "[Invite the bot!](https://discordapp.com/oauth2/authorize?client_id=632963925419491373&scope=bot)",
		},
	],
  }
});
  }
}
