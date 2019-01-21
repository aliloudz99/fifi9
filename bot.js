const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("535466995475283978")
setInterval(function() {
channel.send(`notch111 notch111 notch111 notch111 notch111 notch111`);
}, 30)
})

client.login(process.env.BOT_TOKEN);