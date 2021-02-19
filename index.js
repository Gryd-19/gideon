const Discord = require('discord.js');
const { default: axios } = require('axios');
const env = require('dotenv').config();

//client 
const client = new Discord.Client();
//client init
client.once('ready', () => {
    console.log('Ready!');
});
//client login
client.login(process.env.TOKEN);
//client respond by message
client.on('message', async message => {
    if (message.content[0] === '!') {
        let message_split = message.content.split(' ');
        if (message_split[0] == "!price") {
            const coin = message_split[1].toUpperCase();
            if (coin.length == 3) {
                let crypto_uri = "http://gryd.tech/crypto?coin=" + coin;
                try {
                    let crypto_value = await axios.get(crypto_uri)
                    message.channel.send("**" + coin + "**" + " is " + crypto_value.data.value);
                }
                catch (e) {
                    console.log(e);
                }

            }
        }
        if (message_split == "!play") {
            const song = message_split[1];
            if (song == "a") {

            }
        }
    }
});

