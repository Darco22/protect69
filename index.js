const Discord = require("discord.js")
const bot = new Discord.Client()
const cfg = require('./index.json');
const prefix = ("/");

bot.login(process.env.token)
