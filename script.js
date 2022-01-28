const body = document.querySelector("body"),
    sidebar = document.querySelector("sidebar"),
    toggle = document.querySelector(".toggle"),
    search = document.querySelector(".search-box"),
    modeSwitch = document.querySelector(".mode"),
    modeText = document.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark")
});