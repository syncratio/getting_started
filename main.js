function main() {
    let username = promptForUsername();
    let message = getUserSpecificMessage(username);
    const messageElement = document.getElementById("message");
    messageElement.innerHTML = message;
    console.log(`You are finally awake, ${username}`);
}

function getUserSpecificMessage(username) {
    if(username === "SidFj") {
        return "Greetings, creator.";
    }
    if(username === "syncratio") {
        return "You just loss your time!";
    }
    let message = "Welcome to my practice page, " + username + ".";
    return message;
}

function promptForUsername() {
    let username = prompt("Please enter your username:") || 'Guest';
    return username;
}

function todayWeCook() {
    document.getElementById("wise").src = "assets/images/pascal-debrunner-ssM9tkVKPow-unsplash1.jpg";
}

document.addEventListener("DOMContentLoaded", function(event) {
    main();
});