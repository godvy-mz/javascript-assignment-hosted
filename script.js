// ==========================================
// STORE DATA 
// ==========================================
const storeData = {
    categories: [
        { id: 1, name: "Computer & Laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=150" },
        { id: 2, name: "SmartPhone", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150" },
        { id: 3, name: "Headphones", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150" },
        { id: 4, name: "Accessories", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=150" },
        { id: 5, name: "Camera & Photo", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=150" },
        { id: 6, name: "TV & Homes", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=150" },
        { id: 7, name: "Smart Watches", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150" },
        { id: 8, name: "Gaming Consoles", img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=150" },
        { id: 9, name: "Drones & Tech", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=150" }
    ],
    
    // The Large Featured Item
    // The Large Featured Item
    featuredProduct: { 
        id: 101, 
        name: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version", 
        sku: "XB-S512", brand: "Microsoft", availability: "In Stock", category: "Gaming", 
        ratingScore: "4.8 Star Rating", reviewsCount: "(52,677 User feedback)", 
        price: 442.12, oldPrice: 865.99, discountPercent: "32% OFF", 
        img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=500&q=80", 
        desc: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals, and responsiveness.",
        tags: [ { text: "32% OFF", class: "badge-yellow" }, { text: "HOT", class: "badge-red" } ]
    },

    // The 8 Small Grid Items
    gridProducts: [
        { 
            id: 2, name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear", 
            sku: "BS-EAR9", brand: "Bose", availability: "Sold Out", category: "Audio", 
            ratingScore: "4.7 Star Rating", reviewsCount: "(18,419 User feedback)", 
            price: 2300.00, oldPrice: null, discountPercent: null, 
            img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300", 
            desc: "True wireless Bluetooth earbuds designed to produce clear, powerful sound.",
            tags: [ { text: "SOLD OUT", class: "badge-gray" } ]
        },
        { 
            id: 3, name: "Simple Mobile 4G LTE Prepaid Smartphone", 
            sku: "SM-4G22", brand: "Simple Mobile", availability: "In Stock", category: "Smartphones", 
            price: 220.00, oldPrice: null, discountPercent: null, 
            img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=300", tags: [] 
        },
        { 
            id: 4, name: "4K UHD LED Smart TV with Chromecast Built-in", 
            sku: "TV-4K150", brand: "Sony", availability: "In Stock", category: "TV & Homes", 
            price: 150.00, oldPrice: 865.00, discountPercent: "19% OFF", 
            img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=300", 
            tags: [ { text: "19% OFF", class: "badge-yellow" } ]
        },
        { 
            id: 5, name: "Sony DSCHX8 High Zoom Point & Shoot Camera", 
            sku: "SN-CAM8", brand: "Sony", availability: "In Stock", category: "Camera & Photo", 
            price: 1200.00, oldPrice: null, discountPercent: null, 
            img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300", tags: [] 
        },
        { 
            id: 6, name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", 
            sku: "DL-OPT", brand: "Dell", availability: "In Stock", category: "Computers", 
            price: 299.00, oldPrice: null, discountPercent: null, 
            img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=300", tags: [] 
        },
        { 
            id: 7, name: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM", 
            sku: "PW-11", brand: "EcoWash", availability: "In Stock", category: "Appliances", 
            price: 70.00, oldPrice: 865.99, discountPercent: null, 
            img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=300", tags: [] 
        },
        { 
            id: 8, name: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower", 
            sku: "CB-2100", brand: "Auto", availability: "In Stock", category: "Auto", 
            price: 160.00, oldPrice: null, discountPercent: null, 
            img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=300", 
            tags: [ { text: "HOT", class: "badge-red" } ] 
        },
        { 
            id: 9, name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black", 
            sku: "JBL-FL4", brand: "JBL", availability: "In Stock", category: "Audio", 
            price: 250.00, oldPrice: 360.00, discountPercent: "32% OFF", 
            img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=300", 
            tags: [ { text: "32% OFF", class: "badge-yellow" } ] 
        }
    ],

    // 4-Column Widget Data
    widgetColumns: [
        {
            title: "FLASH SALE TODAY",
            items: [
                { id: 201, name: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...", price: 1500, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=150" },
                { id: 202, name: "Simple Mobile 4G LTE Prepaid Smartphone", price: 1500, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150" },
                { id: 203, name: "4K UHD LED Smart TV with Chromecast Built-in", price: 1500, img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=150" }
            ]
        },
        {
            title: "BEST SELLERS",
            items: [
                { id: 204, name: "Samsung Electronics Samsung Galaxy S21 5G", price: 1500, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=150" },
                { id: 205, name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone", price: 1500, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150" },
                { id: 206, name: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: 1500, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=150" }
            ]
        },
        {
            title: "TOP RATED",
            items: [
                { id: 207, name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...", price: 1500, img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=150" },
                { id: 208, name: "Sony DSCHX8 High Zoom Point & Shoot Camera", price: 1500, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=150" },
                { id: 209, name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 1500, img: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=150" }
            ]
        },
        {
            title: "NEW ARRIVAL",
            items: [
                { id: 210, name: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...", price: 1500, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150" },
                { id: 211, name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...", price: 1500, img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=150" },
                { id: 212, name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...", price: 1500, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=150" }
            ]
        }
    ]
};

// ==========================================
// APPLICATION LOGIC
// ==========================================
// Load cart data from localStorage so it persists across pages
let cart = JSON.parse(localStorage.getItem('clicon_cart')) || []; 
let currentModalProductId = null;

function init() {
    renderProducts();
    renderCategories();
    renderFourColumns();
    updateCartUI();
    startTimer();
    renderCartTable(); // Safe to run; checks internally if table exists
    renderSearchResults(); 
}

function generateBadgesHTML(tags) {
    if (!tags || tags.length === 0) return '';
    return `<div class="badge-stack">` + 
           tags.map(tag => `<span class="badge ${tag.class}">${tag.text}</span>`).join('') +
           `</div>`;
}

// 1. Inject Deals Layout
// 1. Inject Deals Layout
// 1. Inject Deals Layout
// 1. Inject Deals Layout
function renderProducts() {
    const featContainer = document.getElementById('featured-product');
    if (!featContainer) return; // Exit if not on the home page

    const feat = storeData.featuredProduct;
    const featHTML = `
        <div style="position: relative; width: 100%; height: 260px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; overflow: hidden; background: #f9f9f9; border-radius: 6px;">
            <div style="position: absolute; top: 12px; left: 12px; display: flex; flex-direction: column; gap: 5px; z-index: 5;">
                ${generateBadgesHTML(feat.tags)}
            </div>
            <img src="${feat.img}" alt="${feat.name}" class="feat-img" style="max-height: 100%; max-width: 100%; object-fit: contain;">
        </div>
        <div class="feat-rating">★★★★★ <span>${feat.reviewsCount}</span></div>
        <div class="feat-title">${feat.name}</div>
        <div>
            ${feat.oldPrice ? `<span class="feat-old-price">$${feat.oldPrice.toLocaleString(undefined, {minimumFractionDigits:2})}</span>` : ''}
            <span class="feat-price">$${feat.price.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
        </div>
        <div class="feat-desc">${feat.desc}</div>
        
        <div class="feat-actions">
            <button class="btn-icon-sq">
                <img src="assets/heart-modal.svg" alt="Wishlist" style="width: 20px;">
            </button>
            <button class="btn-feat-cart" onclick="addToCart(${feat.id}, 1)">
                ADD TO CART 
                <img src="assets/cart.svg" alt="Cart" style="width: 18px; margin-left: 8px; filter: brightness(0) invert(1);">
            </button>
            <button class="btn-icon-sq" onclick="openModal(${feat.id})">
                <img src="assets/view-modal.svg" alt="Quick View" style="width: 20px;">
            </button>
        </div>
    `;
    featContainer.innerHTML = featHTML;

    const gridContainer = document.getElementById('regular-products');
    if (!gridContainer) return;

    const gridHTML = storeData.gridProducts.map(p => `
        <div class="deal-card">
            ${generateBadgesHTML(p.tags)}
            
            <div class="deal-img-wrapper">
                <img src="${p.img}" alt="${p.name}" class="deal-img">
                <div class="deal-hover-actions">
                    <button class="hover-btn-circ active">
                        <img src="assets/heart-modal.svg" alt="Wishlist">
                    </button>
                    <button class="hover-btn-circ" onclick="addToCart(${p.id}, 1); event.stopPropagation();">
                        <img src="assets/cart-modal.svg" alt="Add to Cart">
                    </button>
                    <button class="hover-btn-circ" onclick="openModal(${p.id}); event.stopPropagation();">
                        <img src="assets/view-modal.svg" alt="Quick View">
                    </button>
                </div>
            </div>

            <div>
                <div class="deal-title">${p.name}</div>
                <div>
                    ${p.oldPrice ? `<span class="feat-old-price" style="font-size:12px; text-decoration:line-through; color:var(--text-gray); margin-right:6px;">$${p.oldPrice.toLocaleString(undefined, {minimumFractionDigits:2})}</span>` : ''}
                    <span class="deal-price">$${p.price.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
                </div>
            </div>
        </div>
    `).join('');
    gridContainer.innerHTML = gridHTML;
}
// 2. Inject Categories
function renderCategories() {
    const carousel = document.getElementById('category-carousel');
    if(!carousel) return;
    carousel.innerHTML = storeData.categories.map(cat => `
        <div class="category-item" style="min-width: 180px; border: 1px solid var(--border-color); border-radius: 4px; padding: 20px; text-align: center; background: var(--white); cursor: pointer;">
            <img src="${cat.img}" alt="${cat.name}" style="width: 100px; height: 100px; object-fit: contain; margin-bottom: 15px;">
            <br><span style="font-size: 14px; font-weight: 600; color: var(--text-dark);">${cat.name}</span>
        </div>
    `).join('');
}

// 3. Inject 4-Column Widgets
function renderFourColumns() {
    const container = document.getElementById('four-column-mount');
    if(!container) return;
    container.innerHTML = storeData.widgetColumns.map(col => `
        <div class="widget-column">
            <h4>${col.title}</h4>
            ${col.items.map(p => `
                <div class="widget-card" onclick="openModal(${p.id})">
                    <img src="${p.img}" alt="${p.name}">
                    <div class="widget-card-info">
                        <div class="widget-card-title">${p.name}</div>
                        <div class="widget-card-price">$${p.price.toLocaleString(undefined, {minimumFractionDigits:2})}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');
}

function scrollCarousel(amount) {
    const carousel = document.getElementById('category-carousel');
    if(carousel) {
        carousel.scrollLeft += amount;
    }
}

function getProductById(id) {
    if (storeData.featuredProduct.id === id) return storeData.featuredProduct;
    let found = storeData.gridProducts.find(p => p.id === id);
    if (found) return found;

    for (let col of storeData.widgetColumns) {
        found = col.items.find(p => p.id === id);
        if (found) return found;
    }
    return null;
}

// --- Modal Logic ---
function openModal(productId) {
    const product = getProductById(productId);
    if (!product) return;
    currentModalProductId = productId;
    
    const modalImg = document.getElementById('modal-img');
    if (modalImg) modalImg.src = product.img;

    const modalTitle = document.getElementById('modal-title');
    if (modalTitle) modalTitle.textContent = product.name;

    const modalDesc = document.getElementById('modal-desc');
    if (modalDesc) modalDesc.textContent = product.desc || "High quality product built for modern needs.";

    const ratingScore = document.getElementById('modal-rating-score');
    if (ratingScore) ratingScore.textContent = product.ratingScore || "4.7 Star Rating";

    const reviewsCount = document.getElementById('modal-reviews-count');
    if (reviewsCount) reviewsCount.textContent = product.reviewsCount || "(120 User feedback)";

    const modalSku = document.getElementById('modal-sku');
    if (modalSku) modalSku.textContent = product.sku || `SKU-${product.id}`;

    const modalBrand = document.getElementById('modal-brand');
    if (modalBrand) modalBrand.textContent = product.brand || "Clicon";

    const modalCategory = document.getElementById('modal-category');
    if (modalCategory) modalCategory.textContent = product.category || "Electronics";
    
    const availEl = document.getElementById('modal-availability');
    if (availEl) {
        availEl.textContent = product.availability || "In Stock";
        availEl.style.color = product.availability === "Sold Out" ? "#77878F" : "#2DB224";
    }

    const modalPrice = document.getElementById('modal-price');
    if (modalPrice) modalPrice.textContent = `$${product.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    
    const oldPriceEl = document.getElementById('modal-old-price');
    if(oldPriceEl) {
        if(product.oldPrice) {
            oldPriceEl.textContent = `$${product.oldPrice.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
            oldPriceEl.style.display = 'inline';
        } else {
            oldPriceEl.style.display = 'none';
        }
    }

    const discountEl = document.getElementById('modal-discount-pill');
    if(discountEl) {
        if(product.discountPercent) {
            discountEl.textContent = product.discountPercent;
            discountEl.style.display = 'inline';
        } else {
            discountEl.style.display = 'none';
        }
    }

    const modalQty = document.getElementById('modal-qty');
    if (modalQty) modalQty.value = 1;

    const productModal = document.getElementById('product-modal');
    if (productModal) productModal.style.display = 'flex';
}

function closeModal() {
    const productModal = document.getElementById('product-modal');
    if (productModal) productModal.style.display = 'none';
    currentModalProductId = null;
}

function updateModalQty(change) {
    const input = document.getElementById('modal-qty');
    if (!input) return;
    let val = parseInt(input.value) + change;
    if (val < 1) val = 1;
    input.value = val;
}

function addModalItemToCart() {
    const qtyInput = document.getElementById('modal-qty');
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    addToCart(currentModalProductId, qty);
    closeModal();
}

function buyNow() {
    const qtyInput = document.getElementById('modal-qty');
    const qty = qtyInput ? parseInt(qtyInput.value) : 1;
    addToCart(currentModalProductId, qty);
    closeModal();
    window.location.href = 'cart.html';
}

// --- Cart Logic ---
function saveCart() {
    localStorage.setItem('clicon_cart', JSON.stringify(cart));
}

function addToCart(productId, quantity) {
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }
    saveCart();
    updateCartUI();
}

function updateCartQty(productId, change) {
    const item = cart.find(i => i.productId === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) item.quantity = 1;
        saveCart();
        updateCartUI();
        renderCartTable();
    }
}

function removeCartItem(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    updateCartUI();
    renderCartTable();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('nav-cart-count');
    if(cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function renderCartTable() {
    const tbody = document.getElementById('cart-table-body');
    if(!tbody) return; // Exit if not on the cart page
    
    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 40px;">Your cart is empty.</td></tr>';
        updateCartTotals(0);
        return;
    }

    let subtotal = 0;
    const cartHTML = cart.map(item => {
        const product = getProductById(item.productId);
        if (!product) return ''; 
        
        const price = product.price || 0; 
        const itemTotal = price * item.quantity;
        subtotal += itemTotal;
        
        return `
            <tr>
                <td>
                    <div class="cart-product-info">
                        <button class="btn-remove" onclick="removeCartItem(${product.id})">⊗</button>
                        <img src="${product.img}" alt="${product.name}">
                        <span style="font-size:14px; max-width:250px;">${product.name}</span>
                    </div>
                </td>
                <td style="font-weight:500;">$${price.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                <td>
                    <div class="qty-selector" style="width: 120px;">
                        <button class="qty-btn" onclick="updateCartQty(${product.id}, -1)">−</button>
                        <input type="number" class="qty-input" value="${item.quantity}" readonly>
                        <button class="qty-btn" onclick="updateCartQty(${product.id}, 1)">+</button>
                    </div>
                </td>
                <td style="font-weight:bold;">$${itemTotal.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
            </tr>
        `;
    }).join('');

    tbody.innerHTML = cartHTML;
    updateCartTotals(subtotal);
}

function updateCartTotals(subtotal) {
    const discount = subtotal > 500 ? 24 : 0; 
    const taxRate = 0.1; 
    const tax = (subtotal - discount) * taxRate;
    const total = subtotal - discount + tax;

    const subtotalEl = document.getElementById('summary-subtotal');
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

    const discountEl = document.getElementById('summary-discount');
    if (discountEl) discountEl.textContent = `-$${discount.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

    const taxEl = document.getElementById('summary-tax');
    if (taxEl) taxEl.textContent = `$${tax.toLocaleString(undefined, {minimumFractionDigits: 2})}`;

    const totalEl = document.getElementById('summary-total');
    if (totalEl) totalEl.textContent = `$${total.toLocaleString(undefined, {minimumFractionDigits: 2})} USD`;
}

// --- Flash Sale Timer ---
function startTimer() {
    const timerElement = document.getElementById('flash-sale-timer');
    if (!timerElement) return;

    let totalSeconds = (16 * 24 * 60 * 60) + (21 * 60 * 60) + (57 * 60) + 23;

    setInterval(() => {
        if (totalSeconds <= 0) return;
        totalSeconds--;

        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        timerElement.textContent = `${days}d : ${formattedHours}h : ${formattedMinutes}m : ${formattedSeconds}s`;
    }, 1000); 
}

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// --- Search Functionality ---
function renderSearchResults() {
    const container = document.getElementById('search-results-container');
    if (!container) return; // Exit if not on search.html

    const urlParams = new URLSearchParams(window.location.search);
    const query = (urlParams.get('q') || '').toLowerCase().trim();

    const titleEl = document.getElementById('search-results-title');
    if (titleEl) {
        titleEl.textContent = query ? `Search Results for "${query}"` : "All Products";
    }

    // Gather all products from storeData (featured, grid, and widgets)
    let allProducts = [storeData.featuredProduct, ...storeData.gridProducts];
    storeData.widgetColumns.forEach(col => {
        allProducts = allProducts.concat(col.items);
    });

    // Remove duplicates based on ID
    const uniqueProducts = Array.from(new Map(allProducts.map(p => [p.id, p])).values());

    // Filter by query match on name, brand, or category
    const filtered = uniqueProducts.filter(p => {
        const nameMatch = p.name && p.name.toLowerCase().includes(query);
        const brandMatch = p.brand && p.brand.toLowerCase().includes(query);
        const catMatch = p.category && p.category.toLowerCase().includes(query);
        return nameMatch || brandMatch || catMatch;
    });

    if (filtered.length === 0) {
        container.style.display = 'block';
        container.innerHTML = `<div style="grid-column: span 4; text-align: center; padding: 50px; color: var(--text-gray);">No products found matching "${query}".</div>`;
        return;
    }

    container.style.display = 'grid';
    container.innerHTML = filtered.map(p => `
        <div class="deal-card" style="border: 1px solid var(--border-color); border-radius: 4px; padding: 15px; background: var(--white); display: flex; flex-direction: column; justify-content: space-between; position: relative;">
            <div class="deal-img-wrapper">
                <img src="${p.img}" alt="${p.name}" class="deal-img">
                <div class="deal-hover-actions">
                    <button class="hover-btn-circ active">
                        <img src="assets/heart-modal.svg" alt="Wishlist">
                    </button>
                    <button class="hover-btn-circ" onclick="addToCart(${p.id}, 1); event.stopPropagation();">
                        <img src="assets/cart-modal.svg" alt="Add to Cart">
                    </button>
                    <button class="hover-btn-circ" onclick="openModal(${p.id}); event.stopPropagation();">
                        <img src="assets/view-modal.svg" alt="Quick View">
                    </button>
                </div>
            </div>
            <div>
                <div class="deal-title">${p.name}</div>
                <div>
                    ${p.oldPrice ? `<span class="feat-old-price" style="font-size:12px; text-decoration:line-through; color:var(--text-gray); margin-right:6px;">$${p.oldPrice.toLocaleString(undefined, {minimumFractionDigits:2})}</span>` : ''}
                    <span class="deal-price">$${p.price.toLocaleString(undefined, {minimumFractionDigits:2})}</span>
                </div>
            </div>
        </div>
    `).join('');
}


// Boot application
init();