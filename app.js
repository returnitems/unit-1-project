const button = document.querySelector("#button");
const buzzer = document.querySelector("#buzzer");
const resetButton = document.querySelector("#reset");
const winCookie = document.createElement("p");

const reset = () => {
    winCookie.textContent = "";
}

const showCookie = () => {
    winCookie.textContent = "You won a cookie!!";
    document.querySelector("body").appendChild(winCookie);
}

resetButton.addEventListener("click", reset);
button.addEventListener("click", showCookie);