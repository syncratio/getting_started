function _initStorage() {
    let users = [];
    let json = JSON.stringify(users);
    localStorage.setItem("users", json);
}

function getUsers(callback) {
    let json = localStorage.getItem("users");
    let users = [];
    try {
        users = JSON.parse(json);
        users = users.map(({ id, email }) => ({ id, email }));
    } catch (e) {
        console.log("Error parsing JSON");
    }
    setTimeout(() => {
        callback(users);
    }, 500);
}

function getUserInfo(id, callback) {
    let json = localStorage.getItem("users");
    let users = [];
    try {
        users = JSON.parse(json);
    } catch (e) {
        console.log("Error parsing JSON");
    }
    let user = users.find(user => user.id === id);
    setTimeout(() => {
        callback(user);
    }, 500);
}

function _validateUser(data) {
    console.log(data);  
    return data.firstName && data.lastName && data.email && data.password;
}

function createUser(formData, callback) {
    const json = localStorage.getItem("users");
    const data = Object.fromEntries(formData);

    let users = [];
    try {
        users = JSON.parse(json);
    } catch (e) {
        console.log("Error parsing JSON. Storage is not initialized.");
    }

    if (!_validateUser(data)) {
        setTimeout(() => {
            callback(false);
        }, 500);
        return;
    }

    data.id = users.length + 1;
    data.created = new Date();
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    setTimeout(() => {
        callback(true);
    }, 500);
}

document.addEventListener("DOMContentLoaded", function (event) {
    _initStorage();
});


