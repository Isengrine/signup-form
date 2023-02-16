function getRandomNum() {
    return Math.floor(Math.random() * 4);
}

function generatedImage() {
    switch (imageNum) {
        case 0:
            image = '<img src="./images/legend_image_1.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
        case 1:
            image = '<img src="./images/legend_image_2.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
        case 2:
            image = '<img src="./images/legend_image_3.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
        case 3:
            image = '<img src="./images/legend_image_4.svg" id="legend_img" alt="A placeholder profile picture">';
            break;
    }
    return image;
}

let imageNum = getRandomNum();
let image = "";

const legend = document.getElementById("legend");
const submitBtn = document.getElementById("submit_button");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm_password");
let passwordsMatch = document.getElementById("passwords_match");

window.addEventListener("load", () => {
    legend.innerHTML = generatedImage();
})

password.addEventListener("keyup", () => {
    if (password.value == confirmPassword.value) {
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
        passwordsMatch.innerText = "";
        submitBtn.removeAttribute("disabled");
    }
    else {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        passwordsMatch.innerText = "* Passwords do not match";
        submitBtn.setAttribute("disabled", "");
    }
})

confirmPassword.addEventListener("keyup", () => {
    if (confirmPassword.value == password.value) {
        password.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
        passwordsMatch.innerText = "";
        submitBtn.removeAttribute("disabled");
    }
    else {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        passwordsMatch.innerText = "* Passwords do not match";
        submitBtn.setAttribute("disabled", "");
    }
})