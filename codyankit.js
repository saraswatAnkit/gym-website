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

