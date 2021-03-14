const Booru = require('booru')
const { Attachment } = require('discord.js');
module.exports = {
    name: 'booru',
    aliases: [],
    description: 'Get a random image from any of the booru image boards. You can add tags.',
    usage: '[query]',
    execute(message, args, prefix, client) {
        var query = args.join('+')
        var boorusites = 'konachan.com';
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
    }
}