const Discord = require('discord.js');
const swear = '\n swear: I may swear back! \n';
const gif = '\n gif <searchTerm>: I\'ll reply with a gif! \n';
const cookie = '\n cookie <user> : I\'ll give the user a cookie! \n';
const prefix = '\n prefix <characters> : I\'ll change the prefix! \n';
const help = '\n help: I\'ll display the help menu!';

module.exports = function(msg, args) {
  	msg.channel.send(new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('HentaiBot')
		.setAuthor('Jingayle#5454')
		.setDescription('>This bot is naughty!<')
		.addFields(
			{ name: 'Commands: ', value: swear + gif + cookie + prefix + help },
		)
		.setTimestamp()
		.setFooter('Was this helpful?')
	);
};
