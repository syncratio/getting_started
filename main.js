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
    if(username === "syncratio") {
        return "You just lost your time!";
    }
    let message = "Hello, " + username;
    return message;
}

function promptForUsername() {
    let username = prompt("Please enter your username") || 'Guest';
    return username;
}

function todayWeCook() {
    document.getElementById("saul").src = "https://media.tenor.com/KEuepKkr80UAAAAd/breaking-bad-better-call-saul.gif";
}

document.addEventListener("DOMContentLoaded", function(event) {
    main();
});