module.exports = {
name: 'help',
execute(message, args) {
message.channel.send({embed: {
color: 0x800080,
timestamp: new Date(),
thumbnail: {
  url: "https://media.discordapp.net/attachments/632971263718981636/641012084506624043/iu.png",
},
fields: [{
  name: "Command List",
  value: "**snipe**\nDisplays the last deleted Message.\n**snipeedit**\nDisplays the last edited Message and its original Text.\n**e!help**\nDisplays this message.\n**e!info**\nDisplays information about the bot and Server.\n**e!ping**\nDisplays current ping of the bot to discord and its API.\n**e!sayas [mention] [input]**\nPretends to be the mentioned user (WIP?).\n**e!changeprefix <desired prefix>*** \nChanges this bots prefix.\n ",
},
],
}
})
}}
