document.addEventListener("DOMContentLoaded", (event) => {
    let iconHamburger = document.getElementById("hamburger");
    iconHamburger.addEventListener("click", function () {
        cambiaHamburgerIcon();
        openMenu();
    });
});

function cambiaHamburgerIcon() {
    var element = document.getElementById("hamburger");
    element.classList.toggle("hamburger-to-close");
}

function openMenu() {
    var element = document.getElementById("menu");
    element.classList.toggle("menu--open");
}
