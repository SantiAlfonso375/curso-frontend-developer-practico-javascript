let menuEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

//Funcion del profe
/* menuEmail.addEventListener("click", toggleDeskMenu);

function toggleDeskMenu() {
  desktopMenu.classList.toggle("inactive");
} */

//mi funcion mas corta
menuEmail.addEventListener("click", ()=>{
    desktopMenu.classList.toggle("inactive");
})