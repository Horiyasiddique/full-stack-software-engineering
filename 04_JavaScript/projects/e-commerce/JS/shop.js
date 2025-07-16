document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.getElementById('products-container');
    const featuredProductsContainer = document.getElementById('featured-products');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const categorySelect = document.getElementById('category-select');
    
    let products = [];
    let filteredProducts = [];
    
    // Fetch products from API
    async function fetchProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            products = await response.json();
            filteredProducts = [...products];
            
            displayProducts(products);
            
            // Display featured products on home page
            if (featuredProductsContainer) {
                const featuredProducts = products.slice(0, 4); // Get first 4 products as featured
                displayFeaturedProducts(featuredProducts);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            showNotification('Failed to load products. Please try again later.', 'error');
        }
    }
    
    // Display products in shop page
    function displayProducts(productsToDisplay) {
        if (!productsContainer) return;
        
        productsContainer.innerHTML = '';
        
        if (productsToDisplay.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">No products found matching your criteria.</p>';
            return;
        }
        
        productsToDisplay.forEach(product => {
            const productCard = createProductCard(product);
            productsContainer.appendChild(productCard);
        });
    }
    
    // Display featured products on home page
    function displayFeaturedProducts(featuredProducts) {
        featuredProductsContainer.innerHTML = '';
        
        featuredProducts.forEach(product => {
            const productCard = createProductCard(product);
            featuredProductsContainer.appendChild(productCard);
        });
    }
    
    // Create product card HTML
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Check if product is in wishlist
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const isInWishlist = wishlist.some(item => item.id === product.id);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                    <button class="add-to-wishlist ${isInWishlist ? 'in-wishlist' : ''}" data-id="${product.id}">
                        ${isInWishlist ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>'}
                    </button>
                </div>
            </div>
        `;
        
        return productCard;
    }
    
    // Filter products based on search and category
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = categorySelect.value;
        
        filteredProducts = products.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchTerm) || 
                                 product.description.toLowerCase().includes(searchTerm);
            const matchesCategory = category === 'all' || product.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        displayProducts(filteredProducts);
    }
    
    // Add event listeners
    if (searchInput && searchBtn) {
        searchInput.addEventListener('input', filterProducts);
        searchBtn.addEventListener('click', filterProducts);
    }
    
    if (categorySelect) {
        categorySelect.addEventListener('change', filterProducts);
    }
    
    // Event delegation for add to cart and wishlist buttons
    document.addEventListener('click', function(e) {
        // Add to cart
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            addToCart(productId);
        }
        
        // Add to wishlist
        if (e.target.classList.contains('add-to-wishlist') || 
            e.target.classList.contains('fa-heart') || 
            e.target.closest('.add-to-wishlist')) {
            
            const button = e.target.classList.contains('add-to-wishlist') ? e.target : 
                          e.target.closest('.add-to-wishlist');
            const productId = parseInt(button.getAttribute('data-id'));
            toggleWishlist(productId, button);
        }
    });
    
    // Add product to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
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
    
    // Toggle product in wishlist
    function toggleWishlist(productId, button) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingIndex = wishlist.findIndex(item => item.id === productId);
        
        if (existingIndex >= 0) {
            // Remove from wishlist
            wishlist.splice(existingIndex, 1);
            button.innerHTML = '<i class="far fa-heart"></i>';
            button.classList.remove('in-wishlist');
            showNotification(`${product.title} removed from wishlist`);
        } else {
            // Add to wishlist
            wishlist.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            });
            button.innerHTML = '<i class="fas fa-heart"></i>';
            button.classList.add('in-wishlist');
            showNotification(`${product.title} added to wishlist`);
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistCount();
    }
    
    // Initialize
    fetchProducts();
});