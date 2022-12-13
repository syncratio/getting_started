const signUp = document.querySelector(".sign-up-button");
const userForm = document.querySelector(".user-form");

userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    createUser(formData, function(result) {
        console.log(result);
    });
})

signUp.addEventListener("click", function(event) { 
    console.log("clicked");
    console.log(event);
})


