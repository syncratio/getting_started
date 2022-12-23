const signUp = document.querySelector(".sign-up-button");
const userForm = document.querySelector(".user-form");
const msg = document.querySelector(".msg");

userForm.addEventListener("submit", function(event) {
    event.preventDefault();
    signUp.setAttribute("disabled", true);
    signUp.innerHTML = "Loading...";
    msg.classList.add("hidden");
    const formData = new FormData(event.target);
    createUser(formData, (result) => {
        signUp.removeAttribute("disabled");
        signUp.innerHTML = "Sign Up";
        if (!result) {
            msg.classList.replace("success-msg", "error-msg");
            msg.classList.remove("hidden");
            msg.innerHTML = "User creation failed. Check if the form is filled correctly.";
        } else {
            msg.classList.add("error-msg", "success-msg");
            msg.classList.remove("hidden");
            msg.innerHTML = "User creation succeeded.";
        }
    });
})
