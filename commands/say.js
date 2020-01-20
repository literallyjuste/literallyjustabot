module.exports = {
name: 'say',
execute(message, args, prefix, taggedUser) {
if(!message.content.startsWith(prefix)||message.author.bot) return;
console.log(taggedUser)
var input = message.content
var userinput = input.substr(6)
message.delete(1000)
message.channel.send(userinput)
}
}
