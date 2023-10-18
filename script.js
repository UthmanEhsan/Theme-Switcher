const themeswitcher = document.querySelector("#themeSwitcher");

navigator.geolocation.getCurrentPosition((position) => {
    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    let sunrise = new Date().sunset(position.coords.latitude, position.coords.longitude);
    if (isDay(sunset, sunrise)) {
        setThemeFun("theme-light")
    } else {
        setThemeFun("theme-dark")

    }
    function isDay(sunset, sunrise) {
        const nowHours = new Date().getHours()
        return nowHours >= sunrise.getHours() && nowHours < sunset.getHours()
    }

})

const defaultTheme = localStorage.getItem("theme") || "theme-light"

setThemeFun(defaultTheme)

themeswitcher.addEventListener("change", (e) => {
    setThemeFun(e.target.value);
})

function setThemeFun(theme) {
    theme = theme || "theme-light";

    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    themeswitcher.value = theme
}


// Responsive
const navbar = document.querySelector("nav")

var mobile_nav = document.querySelector(".mobile-navbar-btn")
function navToggle() {
    navbar.classList.toggle("active")
}

mobile_nav.addEventListener("click", () => navToggle())


