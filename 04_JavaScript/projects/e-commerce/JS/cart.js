document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSummary = document.getElementById('cart-summary');
    const subtotalElement = document.getElementById('subtotal');
    const shippingElement = document.getElementById('shipping');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const orderConfirmationModal = document.getElementById('order-confirmation-modal');
    const closeModal = document.querySelector('.close-modal');
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Display cart items
    function displayCartItems() {
        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartItemsContainer.innerHTML = '';
            cartSummary.style.display = 'none';
            return;
        }
        
        emptyCartMessage.style.display = 'none';
        cartSummary.style.display = 'block';
        
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="decrease-quantity" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase-quantity" data-id="${item.id}">+</button>
                    </div>
                    <p class="cart-item-remove" data-id="${item.id}">Remove</p>
                </div>
                <div class="cart-item-total">
                    $${(item.price * item.quantity).toFixed(2)}
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        updateCartSummary();
    }
    
    // Update cart summary
    function updateCartSummary() {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 5.99; // Free shipping for orders over $50
        const total = subtotal + shipping;
        
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
    
    // Event delegation for quantity buttons and remove
    cartItemsContainer.addEventListener('click', function(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        
        if (e.target.classList.contains('decrease-quantity')) {
            updateQuantity(productId, -1);
        } else if (e.target.classList.contains('increase-quantity')) {
            updateQuantity(productId, 1);
        } else if (e.target.classList.contains('cart-item-remove')) {
            removeItem(productId);
        }
    });
    
    // Update item quantity
    function updateQuantity(productId, change) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        
        if (itemIndex >= 0) {
            cart[itemIndex].quantity += change;
            
            // Remove item if quantity is 0 or less
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
                showNotification('Item removed from cart');
            } else {
                showNotification('Cart updated');
            }
            
            saveCart();
        }
    }
    
    // Remove item from cart
    function removeItem(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        showNotification('Item removed from cart');
    }
    
    // Save cart to localStorage and update display
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }
    
    // Checkout
    checkoutBtn.addEventListener('click', function() {
        // Generate random order ID
        const orderId = 'SHOP-' + Math.floor(Math.random() * 1000000);
        document.getElementById('order-id').textContent = orderId;
        
        // Show confirmation modal
        orderConfirmationModal.classList.add('show');
        
        // Clear cart
        cart = [];
        saveCart();
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        orderConfirmationModal.classList.remove('show');
    });
    
    continueShoppingBtn.addEventListener('click', function() {
        orderConfirmationModal.classList.remove('show');
        window.location.href = 'shop.html';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === orderConfirmationModal) {
            orderConfirmationModal.classList.remove('show');
        }
    });
    
    // Initialize
    displayCartItems();
});