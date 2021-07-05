const Discord = require('discord.js');

const run = async (client, message, args) => {
 let resim = "https://www.growtopiagame.com/worlds/"+ args[0] + ".png";
 console.log(resim)
 let embed = new Discord.MessageEmbed()
 .setTitle("Created by fozen")
 .setImage(resim)
 .setFooter("World: "+ args[0].toUpperCase())
 .setColor("GREEN")
 message.channel.send(embed);
};

const conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["render", "render", "render"],
  permLevel: 0
};

const help = {
  name: "render",
  description: "Sends rendered world.",
  usage: "/render <world>"
};

module.exports = { help, conf, run }