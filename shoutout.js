const shoutoutArray = [
    "Go check out my cool friend $username at https://twitch.tv/$username!",
    "BIG shoutout to $username! Check out their stream at https://twitch.tv/$username",
    "$username is the best! Check out their channel at https://twitch.tv/$username"
];

// send random shoutout message
function to(username) {
    message = getRandomElement(shoutoutArray, username);
    client.say(channel, message);
}

function getRandomElement(randomArray, username) {
    return randomArray[_.random(randomArray.length-1)].replaceAll("$username", username);
}