const button = document.querySelector("#button");
const buzzer = document.querySelector("#buzzer");
const resetButton = document.querySelector("#reset");
const winCookie = document.createElement("p");
const moreCookies = document.createElement("p");

let cookieCount = 0;

const reset = () => {
    winCookie.textContent = "";
    cookieCount = 0;
    moreCookies.style.display = "none";
}

const showCookie = () => {
    winCookie.textContent = "You won a cookie!!";
    document.querySelector("body").appendChild(winCookie);
    winCookie.style.display = "flex";
    
    cookieCount += 1;

    if (cookieCount > 1) {
        moreCookies.textContent = "You now have " + cookieCount + " cookies!";
        document.querySelector("body").appendChild(moreCookies);
        moreCookies.style.display = "flex";
    }
}

resetButton.addEventListener("click", reset);
button.addEventListener("click", showCookie);