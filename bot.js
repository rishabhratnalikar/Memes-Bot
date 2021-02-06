const Discord = require("discord.js")
const client = new Discord.Client()


client.on('ready', () =>{
  
  console.log("!Meme bot is online")
 
})
client.on('message', msg=>{
  
  
if(message.content == "Share some memes"){
  msg.reply('https://tenor.com/view/hello-sexy-hi-hello-mr-bean-gif-13830351')
}

})
