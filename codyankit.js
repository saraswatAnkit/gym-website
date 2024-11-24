const navbar = document.querySelector(".navbar")
const cartItems = document.querySelector(".cart-items-container")
const searchForm = document.querySelector(".search-form")

document.getElementById('menu-btn').addEventListener('click',()=>{
    navbar.classList.toggle('active')
    cartItems.classList.remove('active')
    searchForm.classList.remove('active')
})

document.getElementById('cart-btn').addEventListener('click',()=>{
    navbar.classList.remove('active')
    cartItems.classList.toggle('active')
    searchForm.classList.remove('active')
})

document.getElementById('search-btn').addEventListener('click',()=>{
    navbar.classList.remove('active')
    cartItems.classList.remove('active')
    searchForm.classList.toggle('active')
})

document.getElementsByClassName('close')[0].addEventListener('click',()=>{
    cartItems.classList.remove('active')
})

window.onscroll = () => {
    navbar.classList.remove('active')
    cartItems.classList.remove('active')
    searchForm.classList.remove('active')
}

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-pic,.content h3',{origin: 'top'})
ScrollReveal().reveal('.image,.content p,.plan',{origin: 'bottom'})
ScrollReveal().reveal('.map',{origin: 'bottom'})
ScrollReveal().reveal('.box,form',{origin: 'right'})

// typed js

const typed1 = new Typed('.type-effect1', {
    strings: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores animi excepturi cupiditate voluptatem veritatis saepe omnis tempore mollitia aliquid. Ut?'],
    typeSpeed: 10,
    backSpeed: 20,
    loop: true
});
const typed2 = new Typed('.type-effect2', {
    strings: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores animi excepturi cupiditate voluptatem veritatis saepe omnis tempore mollitia aliquid. Ut?'],
    typeSpeed: 10,
    backSpeed: 20,
    loop: true
});
const typed3 = new Typed('.type-effect3', {
    strings: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores animi excepturi cupiditate voluptatem veritatis saepe omnis tempore mollitia aliquid. Ut?'],
    typeSpeed: 10,
    backSpeed: 20,
    loop: true
});

let products = null;
fetch('products.json')
.then(response => response.json())
.then (data => {
    products = data;
    addDataToHtml();
})

function addDataToHtml(){
    let listProductHtml = document.querySelector('.box-container')
    listProductHtml.innerHTML = "";

    if(products !== null){
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add("box");
            newProduct.innerHTML = 
            `<img src="${product.image}" alt="" />
          <h3>${product.name}</h3>
          <div class="price">Rs ${product.price} <span>  1600</span></div>
          <button onclick="addCart(${product.id})" class="btn product-btn">Add To Cart</button>`;
          listProductHtml.appendChild(newProduct)
        });
    }
}

let listCart = [];

function checkCart(){
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue){
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
function addCart($idProduct){
    let productCopy = JSON.parse(JSON.stringify(products));
    if(!listCart[$idProduct]){
        let dataProduct = productCopy.filter(
            product => product.id == $idProduct
        )[0];
        listCart[$idProduct] = dataProduct;
        listCart[$idProduct].quantity = 1;
    } else{
        listCart[$idProduct].quantity++;
    }

    let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listCart="+JSON.stringify(listCart)+"; "+timeSave+"; path=/;";
    addCartToHtml();
}
addCartToHtml();
function addCartToHtml(){
    let listCartHtml = document.getElementsByClassName('shopping-container')[0];
    listCartHtml.innerHTML = '';

    let totalHtml = document.querySelector('.totalQuantity')
    let totalQuantity = 0;

    if (listCart) {
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('cart-item');
                newCart.innerHTML = `<span class="fas fa-times"></span>
          <img src="${product.image}" alt="" />
          <div class="content">
            <h3>${product.name}</h3>
            <div class="price">1${product.price}/- Rs</div>
          </div>
          <div class="quantity">
            <button class="inc" onclick="changeQuantity(${product.id}, '-')">-</button>
            <span class="value">${product.quantity}</span>
            <button class="dec" onclick="changeQuantity(${product.id}, '+')">+</button>
          </div>`;
          listCartHtml.appendChild(newCart);
          totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    totalHtml.innerHTML = totalQuantity;
}
function changeQuantity($idProduct, $type){
    switch ($type){
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;
            if(listCart[$idProduct].quantity <= 0){
                delete listCart[$idProduct];
            }
            break;
        default:
            break;
    }
    let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listCart="+JSON.stringify(listCart)+"; "+timeSave+"; path=/;";

    addCartToHtml();
}