const Discord = require('discord.js');
const axios = require("axios")
const cheerio = require("cheerio")

const run = async (client, message, args) => {
  //bu bölüm growapi nin açık kaynak kodlarından alınmıştır. https://npmjs.com/package/growapi
  const itemList = await axios.get("https://growtopia.fandom.com/api/v1/SearchSuggestions/List?query=" + message.content.split("/img ").join("").replace(" ", "%20")).then(res => res.data.items);

  if (itemList.length === 0) return message.channel.send("Belirttiin eşyayı bulamadım!");
  const itemName = itemList[0].title;
  const link = `https://growtopia.wikia.com/wiki/${itemName}`;
  const getData = await axios.get(link).then(res => res.data);
  const $ = cheerio.load(getData);
  const Sprite = $("div.card-header .growsprite > img").attr('src');
  if (!Sprite) return message.channel.send("Belirttiğin eşyanın fotoğrafını bulamadım!");
  //bu bölüm growapi nin açık kaynak kodlarından alınmıştır. https://npmjs.com/package/growapi
    message.channel.send(Sprite.replace("32", "128"))
};


 const conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["img"],
  permLevel: 0
};

const help = {
  name: "img",
  description: "Shows item image.",
  usage: "/img <item>"
};

module.exports = { help, conf, run }