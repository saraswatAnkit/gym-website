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