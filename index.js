const discord = require("discord.js")

const client = new Discord.client();

const prefix = "h!";

client.on("ready", mesage => {

    console.log("iam ready to go");

    

});

client.on("message", message => {

    if(mesage.content === `{prefix}ping`){

        mesaage.channel.send(`🏓 Pong - ${client.ws.ping}`)

    }

})

client.login("NzQ0NzgwNjg1MDI5NjcwOTYz.XzoNEA.aq3cVa1Hru5VU8Q-nzBx0kiw7Mk")
