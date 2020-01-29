module.exports = {
name: 'help',
execute(message, args, prefix) {
message.channel.send({embed: {
color: 0x800080,
timestamp: new Date(),
thumbnail: {
  url: "https://media.discordapp.net/attachments/632971263718981636/641012084506624043/iu.png",
},
fields: [{
  name: "Command List",
  value: "**snipe**\nDisplays the last deleted Message.\n**snipeedit**\nDisplays the last edited Message and its original Text.\n**"+prefix+"help**\nDisplays this message.\n**"+prefix+"info**\nDisplays information about the bot and Server.\n**"+prefix+"ping**\nDisplays current ping of the bot to discord and its API.\n**"+prefix+"purge (number)**\nDelete a certain amount of messages.\n**"+prefix+"sayas [user] [input]**\nPretends to be the mentioned user (WIP?).\n**"+prefix+"changeprefix [desired prefix]** \nChanges this bots prefix.\n**"+prefix+"mute [user] <time>**\n Mutes mentioned user for a given amount of time. You can type '2m' for 2 minutes and '10h' for 10 hours and so on. Leave blank to mute permanently.\n**"+prefix+"unmute [user]**\n Unmutes the mentioned user.\n**"+prefix+"userinfo [user]**\n Displays information about mentioned User. Leave blank for your own.\n**"+prefix+"say [message]**\n Make the bot say something.\n**"+prefix+"avatar [user]**\n Sends you the avatar of the mentioned user. Don't mention for your own.\n**"+prefix+"github**\n Link to the source code of this bot.\n **e!prefix**\n Shows your current prefix. ",
},
],
}
})
}}
