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
    //command
    if (message.content[0] === '!') {
        let message_split = message.content.split(' ');
        //crypto
        if (message_split[0] == "!price") {
            const coin = message_split[1].toUpperCase();
            if (coin) {
                let crypto_uri = "http://gryd.tech/crypto?coin=" + coin;
                try {
                    let crypto_value = await axios.get(crypto_uri)
                    //console.log(crypto_value);
                    if(crypto_value.data.value!=null&&crypto_value.data.value!="error")
                        message.channel.send("```yaml\n"+ coin  + " is " + crypto_value.data.value+"```");
                    else
                        message.channel.send("```diff\n- ERROR -\n```");
                }
                catch (e) {
                    console.log(e);
                }

            }
        }
        //spotify
        if (message_split == "!play") {
            const song = message_split[1];
            if (song == "a") {

            }
        }
    }
});

