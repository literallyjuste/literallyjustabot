module.exports = {
name: 'sayas',
execute(message, args, prefix, taggedUser) {
if(!message.content.startsWith(prefix)||message.author.bot) return;
var input = message.content
var userinput = input.substr(11)
userinput = userinput.substr(taggedUser.id.length)
if(!message.mentions.users.size) {
  return message.reply('tag a user to impersonate')
}
if(taggedUser.id === "632963925419491373") {
message.delete(1000)
message.channel.send(userinput)
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
}}
}
