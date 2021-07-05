const Discord = require('discord.js');
const fetch = require("node-fetch");

const run = async (client, message, args) => {
    let url = "https://www.growtopiagame.com/detail"
      fetch(url).then(a => a.json()).then(b => {
        let embed = new Discord.MessageEmbed()
        .setTitle("Created by fozen")
        .setImage(b.world_day_images.full_size)
        .setColor("GREEN")
        .setFooter("World: "+ b.world_day_images.full_size.replace("https://www.growtopiagame.com/worlds/", "").replace(".png", "").toUpperCase())
        message.channel.send(embed)
      })
};

const conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wotd"],
  permLevel: 0
};

const help = {
  name: "wotd",
  description: "Sends wotd world.",
  usage: "/wotd"
};

module.exports = { help, conf, run }