const Discord = require('discord.js');
const api = require("growapi")

const run = async (client, message, args) => {
  api.itemInfo(message.content.split("/recipe ").join("").replace(" ", "%20")).then(item => {
    let ax = item.itemrecipe[2];
    console.log(ax)
    if(ax == "undefined") {
      ax = "** \n a"
    } else {
      ax = "** \n"+item.itemrecipe[2]
    }
    let embed = new Discord.MessageEmbed()
    .setAuthor("You can get this item by "+item.itemrecipe[0], item.itemimage)
    .setDescription("**"+item.itemrecipe[1]+ ax)
    .setImage(item.itemimage.replace("32", "128"))
    .setColor("RED")
    message.channel.send(embed)
    console.log(item.itemsplice)
  })
};

const conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["recipe"],
  permLevel: 0
};

const help = {
  name: "recipe",
  description: "Shows how to make item.",
  usage: "/recipe <item>"
};

module.exports = { help, conf, run }