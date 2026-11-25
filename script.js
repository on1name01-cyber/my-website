// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Render Affiliate Products from products.js
function renderAffiliateProducts() {
  if (typeof affiliateProducts === 'undefined' || affiliateProducts.length === 0) return;

  const featuredContainer = document.getElementById('featuredProductContainer');
  const productGrid = document.getElementById('productGrid');

  // 1. First item in products.js becomes "Product of the Day"
  const featured = affiliateProducts[0];
  featuredContainer.innerHTML = `
    <img src="${featured.image}" alt="${featured.title}" id="featuredImg" />
    <div class="product-info">
      <span class="badge">Today's Highlight</span>
      <h3 id="featuredTitle">${featured.title}</h3>
      <div class="price-row">
        <span class="current-price">${featured.price}</span>
        ${featured.mrp ? `<span class="mrp-price">MRP ${featured.mrp}</span>` : ''}
        ${featured.discount ? `<span class="discount-tag">(${featured.discount})</span>` : ''}
      </div>
      <p id="featuredDesc">${featured.description}</p>
      <a href="${featured.link}" id="featuredLink" target="_blank" rel="noopener noreferrer" class="btn btn-sm">
        Buy Now ${featured.platform ? `on ${featured.platform}` : ''}
      </a>
    </div>
  `;

  // 2. Remaining items automatically populate "Previous Featured Products"
  const pastProducts = affiliateProducts.slice(1);
  productGrid.innerHTML = pastProducts.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" />
      <h4>${product.title}</h4>
      <div class="price-row small">
        <span class="current-price">${product.price}</span>
        ${product.mrp ? `<span class="mrp-price">${product.mrp}</span>` : ''}
        ${product.discount ? `<span class="discount-tag">${product.discount}</span>` : ''}
      </div>
      <p>${product.description}</p>
      <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="btn-outline">
        View Deal ${product.platform ? `on ${product.platform}` : ''}
      </a>
    </div>
  `).join('');
}

renderAffiliateProducts();