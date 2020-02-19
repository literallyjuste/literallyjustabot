module.exports = {
name: 'say',
execute(message, args, prefix) {
if(!message.content.startsWith(prefix)||message.author.bot) return;
var input = message.content
var userinput = input.substr(6)
if(message.content.startsWith(`${prefix}say ${prefix}`)) return message.channel.send('please don\'t exploit me :(((')
message.delete(1000)
message.channel.send(userinput)
}
}
