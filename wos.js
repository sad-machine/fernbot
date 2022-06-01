import { client } from "tmi.js";

const repeat = async(go) => {
    while (go) {
        // wait 15 seconds
        await setTimeout(15000);
        client.say(channel, wordToRepeat);
    }
};

function word(message) {
    // updates Word To Repeat
    wordToRepeat = message.trim().substring(2).toUpperCase().split(' ');

    if (wordToRepeat == "S T O P")
        this.repeat(false);
    else
        client.say(channel, wordToRepeat);
}