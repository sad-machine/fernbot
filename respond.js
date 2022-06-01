// respond to command
function to(user, message) {
    // not a command
    if (message.charAt(0) != '!') return;

    // remove !
    command = message.substring(1);

    // !shoutout
    // !so
    if (command == "shoutout" || command == "so") shoutout.to(user.username);
};