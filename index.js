import { setTimeout } from "timers/promises";
require('dotenv').config();
const tmi = require('tmi.js'),
shoutout = require('shoutout.js'),
respond = require('shoutout.js'),
wos = require('wos.js')

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: TextTrackCue,
        identity: {
            process.env.TWITCH_BOT_USERNAME,
            process.env.TWITCH_OAUTH_TOKEN
        },
        channels: [process.env.TWITCH_CHANNEL_NAME]
    }
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

// on connect
client.on('connected', () => {
    // do nothing
});

// chat commands
const wordToRepeat = '';
client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(channel.game == "Words On Stream") {
        if (message.substring(1) == ";") {
            wos.word(message);
            wos.repeat(true);
        }
    }

    // respond to command
    respond.to(user, message);
});

// raid message
client.on('raided', (channel, username, viewers, tags) => {
    shoutout.to(username, );
});

// someone is hosting the channel
client.on("hosted", (channel, username, viewers, autohost) => {
    client.say(channel, `Thanks for the host, @${username}!`);
});