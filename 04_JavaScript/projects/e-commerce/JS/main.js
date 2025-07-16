// Shared functions across all pages

// Update cart count in header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('.cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });
}

// Update wishlist count in header
function updateWishlistCount() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistCountElements = document.querySelectorAll('.wishlist-count');
    
    wishlistCountElements.forEach(element => {
        element.textContent = wishlist.length;
    });
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    
    notificationMessage.textContent = message;
    notification.classList.add('show');
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#28a745';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc3545';
    } else if (type === 'info') {
        notification.style.backgroundColor = '#17a2b8';
    }
    
    // Hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateWishlistCount();
});