const email = document.querySelector('#email');
let defaultEmailState = true;

function displayEmail() {
    if (defaultEmailState) {
        email.textContent = '*(Email: jordan.liubenov62@gmail.com)*'
        defaultEmailState = false;
    } else {
        email.textContent = '';
        defaultEmailState = true;
    }
}

window.addEventListener("load", main);

function main() {
    openPassGen();
    openWeatherApp();
    openTimerApp();
}

function openPassGen() {
    let image = document.querySelector(".genIMG");
    image.addEventListener("click", () => {
        window.open("https://jordan-liubenov.github.io/Password-Generator/")
    });
}
function openWeatherApp() {
    let image = document.querySelector(".weatherIMG");
    image.addEventListener("click", () => {
        window.open("https://jordan-liubenov.github.io/Weather-App/")
    });
}
function openTimerApp() {
    let image = document.querySelector(".timerIMG");
    image.addEventListener("click", () => {
        window.open("https://jordan-liubenov.github.io/Focus-Timer/")
    });
}
