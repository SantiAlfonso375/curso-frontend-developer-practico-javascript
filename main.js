let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let menuHamIcon = document.querySelector(".menu");
let menuMobile = document.querySelector(".mobile-menu");

//Funcion del profe
/* menuEmail.addEventListener("click", toggleDeskMenu);

function toggleDeskMenu() {
  desktopMenu.classList.toggle("inactive");
} */

//mi funcion mas corta
menuEmail.addEventListener("click", ()=>{
    desktopMenu.classList.toggle("inactive");
})
menuHamIcon .addEventListener("click", ()=>{
    menuMobile.classList.toggle("inactive");
})