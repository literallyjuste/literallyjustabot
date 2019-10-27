client.on('message', message => {
  console.log(message.content);
  if (message.content === 'test')
    message.channel.send('confirmed')
	if (message.content === '\:pensive\:')
		message.bulkDelete(1);
})
