const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

//Funcion del profe
/* menuEmail.addEventListener("click", toggleDeskMenu);

function toggleDeskMenu() {
  desktopMenu.classList.toggle("inactive");
} */

/*  */

//mi funcion mas corta
menuEmail.addEventListener("click", () => {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    aside.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
});
menuHamIcon.addEventListener("click", () => {
  const isAsideClosed = aside.classList.contains("inactive");
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

const productList = []
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})


function renderProduct(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
    
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv  = document.createElement('div')
    const productPrice  = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName  = document.createElement('p')
    productName.innerText =  product.name
  
    productInfoDiv.appendChild(productPrice) 
    productInfoDiv.appendChild(productName) 
  
    const productInfoFiguere = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFiguere.appendChild(productImgCart) 
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFiguere)
    
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)
  }
}

renderProduct(productList)
