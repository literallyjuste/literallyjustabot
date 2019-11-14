module.exports = {
  name: 'snipeedit',
  execute(message, args, editedMessage, editedMessageAuthor, editedMessageAvatar) {
    message.delete(1000);
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
  },
}
