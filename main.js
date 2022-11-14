function main() {
    let username = promptForUsername();
    let message = getUserSpecificMessage(username);
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = message;
    console.log(`You are finally awake, ${username}`);
}

function getUserSpecificMessage(username) {
    if(username === "SidFj") {
        return "You just lost $500!";
    }
    let message = "Hello, " + username;
    return message;
}

function promptForUsername() {
    let username = prompt("Please enter your username") || 'Guest';
    return username;
}
document.addEventListener("DOMContentLoaded", function(event) {
    main();
});