module.exports = {
  name: 'snipe',
  execute(message, args, deletedMessage, deletedMessageAuthor, deletedMessageAvatar) {
    message.delete(1000);
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
}
