document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelector('.product');
    products.forEach((product, index) => {
        setTimeout(() =>{
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';

        }, (index*200));

    });
});

// Funcionalidad del carrito
let cart = [];
        const cartIcon = document.getElementById('cart-icon');
        const cartElement = document.getElementById('cart');
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        const checkoutBtn = document.getElementById('checkout-btn');
        const closeCartBtn = document.getElementById('close-cart');
        const purchaseForm = document.getElementById('purchase-form');
        const overlay = document.getElementById('overlay');
        const buyForm = document.getElementById('buy-form');

        cartIcon.addEventListener('click', () => {
            cartElement.classList.toggle('open');
        });

        closeCartBtn.addEventListener('click', () => {
            cartElement.classList.remove('open');
        });

        function addToCart(name, price) {
            cart.push({ name, price });
            updateCart();
        }

        function updateCart() {
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.textContent = `${item.name} - $${item.price.toLocaleString()}`;
                cartItems.appendChild(itemElement);
                total += item.price;
            });
            cartTotal.textContent = `Total: $${total.toLocaleString()}`;
        }

        checkoutBtn.addEventListener('click', () => {
            alert('¡Gracias por tu compra! Total: $' + cart.reduce((sum, item) => sum + item.price, 0).toLocaleString());
            cart = [];
            updateCart();
            cartElement.classList.remove('open');
        });

        function openPurchaseForm(productName, productPrice) {
            document.getElementById('product-name').value = productName;
            document.getElementById('product-price').value = productPrice;
            purchaseForm.style.display = 'block';
            overlay.style.display = 'block';
        }

        buyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const productName = document.getElementById('product-name').value;
            const productPrice = parseFloat(document.getElementById('product-price').value);
            const quantity = parseInt(document.getElementById('quantity').value);
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;

            const total = productPrice * quantity;

            alert(`Compra realizada:
            Producto: ${productName}
            Cantidad: ${quantity}
            Nombre: ${name}
            Dirección: ${address}
            Total: $${total.toLocaleString()}`);

            purchaseForm.style.display = 'none';
            overlay.style.display = 'none';
            buyForm.reset();
        });

        overlay.addEventListener('click', function() {
            purchaseForm.style.display = 'none';
            overlay.style.display = 'none';
        });