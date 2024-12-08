let listCart = [];

function checkCart(){
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart'));
    if(cookieValue){
        listCart = JSON.parse(cookieValue.split('=')[1])
    }
} 
checkCart();
addCartToHtml();
function addCartToHtml(){
    let listCartHtml = document.querySelector('.returnCart .list')
    listCartHtml.innerHTML = '';
    let totalQuantityHtml = document.querySelector('.totalQuantity');
    let totalPriceHtml = document.querySelector('.totalPrice');

    let totalQuantity = 0;
    let totalPrice = 0;

    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newP = document.createElement('div')
                newP.classList.add('item');
                newP.innerHTML = 
                `<img src="${product.image}" alt="">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">Rs${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">Rs ${product.price * product.quantity}</div>`;
                    listCartHtml.appendChild(newP);
                    totalQuantity = totalQuantity + product.quantity;
                    totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHtml.innerText = totalQuantity;
    totalPriceHtml.innerText = 'Rs ' + totalPrice;
}

// Initialize Stripe with your Publishable Key
const stripe = Stripe('pk_test_51QOglRKBdJE7awlLijtyc1lEuI7KemmYvFAsHPqYKpdPoPBBNjwXjrgiCVrXx8mQPPKYK72vMiuuRJFFfSwVRKIg00fz4zmAER'); // Replace with your publishable key
const elements = stripe.elements();

// Create a Card Element
const card = elements.create('card', {
    style: {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a',
        },
    },
});

// Mount the Card Element to the container
card.mount('#card-element');

// Handle real-time validation errors
card.on('change', (event) => {
    const displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

