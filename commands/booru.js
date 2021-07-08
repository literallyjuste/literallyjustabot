const Booru = require('booru')
const { Attachment } = require('discord.js');
const Discord = require('discord.js');
module.exports = {
    name: 'booru',
    aliases: [],
    description: 'Get a random image from any of the booru image boards. You can add tags.',
    usage: '(image board*) [query]',
    execute(message, args, prefix, client) {
        var query = args.join('+')
        var nsfwdefault = 'konachan.com'
        var sfwdefault = 'konachan.net';
        var boorusites = 'safebooru.org';

        if(message.channel.nsfw === true) {
            console.log('this channel is nsfw')
            Booru.search(nsfwdefault, [query], {limit:1, random:true})
                .then(posts => {
                    for (let post of posts)
                        message.channel.send(post.fileUrl)
                })
                .catch(err => {
                    if (err instanceof Booru.BooruError) {
                        message.channel.send('There has been an issue with booru(e.g. too many tags)')
                    } else {
                        message.channel.send('There has been an issue with your request.')
                    }
                })
        } else if (!message.channel.nsfw) {
        console.log('this channel is not nsfw')
        Booru.search(boorusites, [query], {limit: 1, random:true})
            .then(posts => {
                for (let post of posts)
                    message.channel.send(post.fileUrl)
                    //var attachment = new Attachment(post.fileUrl)
                    //message.channel.send(attachment)
            })
            .catch(err => {
                if (err instanceof Booru.BooruError) {
                    message.channel.send('There has been an issue with booru(e.g. too many tags)')
                } else {
                    message.channel.send('There has been an issue with your request.')
                }
            })
    }}
}