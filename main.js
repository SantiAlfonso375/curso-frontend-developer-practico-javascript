let menuEmail = document.querySelector(".navbar-email");
let menuHamIcon = document.querySelector(".menu");
let menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let aside = document.querySelector(".product-detail");

//Funcion del profe
/* menuEmail.addEventListener("click", toggleDeskMenu);

function toggleDeskMenu() {
  desktopMenu.classList.toggle("inactive");
} */

//mi funcion mas corta
menuEmail.addEventListener("click", () => {
    const isAsideClosed = aside.classList.contains("inactive")
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
});
menuHamIcon.addEventListener("click", () => {
    const isAsideClosed = aside.classList.contains("inactive")
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
});

menuCarritoIcon.addEventListener("click", () => {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");
});
