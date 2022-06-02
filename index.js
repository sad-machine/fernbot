import { setTimeout } from "timers/promises";
require('dotenv').config();
const tmi = require('tmi.js'),
// shoutout = require('shoutout.js'),
// respond = require('shoutout.js'),
// wos = require('wos.js')

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: TextTrackCue,
        identity: {
            username: process.env.TWITCH_BOT_USERNAME,
            password: process.env.TWITCH_OAUTH_TOKEN
        },
        channels: [process.env.TWITCH_CHANNEL_NAME]
    }
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

// on connect
client.on('connected', () => {
    // do nothing
    client.say(process.env.TWITCH_CHANNEL_NAME, "Reporting for duty o7");
});

// chat commands
const wordToRepeat = '';
client.on('message', (channel, user, message, self) => {
    if(self) return;

    if (message.substring(0,6) == "!define") {
        define(channel, message);
    }

    // if(channel.game == "Words On Stream") {
        // if (message.substring(1) == ";") {
        //     word(message);
        //     repeat(true);
        // }
    // }

    // respond to command
    //respond.to(user, message);
});

// raid message
// client.on('raided', (channel, username, viewers, tags) => {
//     shoutout.to(username, );
// });

// someone is hosting the channel
client.on("hosted", (channel, username, viewers, autohost) => {
    client.say(channel, `Thanks for the host, @${username}!`);
});

async function define(channel, message) {
    word = message.substring(7).trim();
    definition = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => data[0].meanings[0].definitions[0].definition);
    client.say(channel, definition);
}

// const repeat = async(go) => {
//     while (go) {
//         // wait 15 seconds
//         await setTimeout(15000);
//         client.say(channel, wordToRepeat);
//     }
// };

// function word(message) {
//     // updates Word To Repeat
//     wordToRepeat = message.trim().substring(2).toUpperCase().split(' ');

//     if (wordToRepeat == "S T O P")
//         this.repeat(false);
//     else
//         client.say(channel, wordToRepeat);
// }