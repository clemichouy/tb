const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

var prefix = config.prefix

client.login(config.token) ;

client.on('ready' , function(){
	  console.log('je suis connecté')
	  client.user.setActivity('prefix = tb. + help . look clemichou on youtube' , {type : 'WATCHING'})
});

client.on('message' ,function(message){
	 if(message.content.includes(prefix + 'off')){
		if (message.author.id !== "572465344443318285") {  message.channel.send("***__ :warning: vous n'avez pas la permission de faire ça :warning:__***")}
		message.channel.send('***__noon je suis hors-ligne :cry: ,  je reviendrai en forc... disconnected.__***')
		message.delete().then(client.destroy())
				
		} else if(message.content.startsWith(prefix + 'clear' | 'purge' | 'c' | 'p')) {
			
			if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("***__:warning: vous n'avez pas la premission de faire ça :warning:__***")
				let args = message.content.split(' ').slice(1);
				if(!args[0]) return message.channel.send("***__attention, r'ajoute un chifre apres la commande__***")
				message.delete()
				message.channel.bulkDelete(args[0]).then(() => {
					message.channel.send(`***__ :white_check_mark:  ${args[0]} message ont été suprimés :white_check_mark:  __***`)
				})
		}
});
