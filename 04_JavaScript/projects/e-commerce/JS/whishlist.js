document.addEventListener('DOMContentLoaded', function() {
    const wishlistItemsContainer = document.getElementById('wishlist-items');
    const emptyWishlistMessage = document.getElementById('empty-wishlist-message');
    
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Display wishlist items
    function displayWishlistItems() {
        if (wishlist.length === 0) {
            emptyWishlistMessage.style.display = 'block';
            wishlistItemsContainer.innerHTML = '';
            return;
        }
        
        emptyWishlistMessage.style.display = 'none';
        wishlistItemsContainer.innerHTML = '';
        
        wishlist.forEach(item => {
            const wishlistItem = document.createElement('div');
            wishlistItem.className = 'wishlist-item';
            wishlistItem.innerHTML = `
                <div class="wishlist-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="wishlist-item-info">
                    <h4>${item.title}</h4>
                    <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="wishlist-item-actions">
                    <button class="add-to-cart-wishlist" data-id="${item.id}">Add to Cart</button>
                    <button class="remove-from-wishlist" data-id="${item.id}">Remove</button>
                </div>
            `;
            
            wishlistItemsContainer.appendChild(wishlistItem);
        });
    }
    
    // Event delegation for wishlist actions
    wishlistItemsContainer.addEventListener('click', function(e) {
        const productId = parseInt(e.target.getAttribute('data-id'));
        
        if (e.target.classList.contains('add-to-cart-wishlist')) {
            addToCartFromWishlist(productId);
        } else if (e.target.classList.contains('remove-from-wishlist')) {
            removeFromWishlist(productId);
        }
    });
    
    // Add to cart from wishlist
    function addToCartFromWishlist(productId) {
        const product = wishlist.find(item => item.id === productId);
        if (!product) return;
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification(`${product.title} added to cart`);
    }
    
    // Remove from wishlist
    function removeFromWishlist(productId) {
        const productIndex = wishlist.findIndex(item => item.id === productId);
        
        if (productIndex >= 0) {
            const productTitle = wishlist[productIndex].title;
            wishlist.splice(productIndex, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateWishlistCount();
            displayWishlistItems();
            showNotification(`${productTitle} removed from wishlist`);
            
            // Update heart icons in shop page
            const wishlistButtons = document.querySelectorAll(`.add-to-wishlist[data-id="${productId}"]`);
            wishlistButtons.forEach(button => {
                button.innerHTML = '<i class="far fa-heart"></i>';
                button.classList.remove('in-wishlist');
            });
        }
    }
    
    // Initialize
    displayWishlistItems();
});