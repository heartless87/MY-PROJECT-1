const bottomnavHTML = `
<nav class="bottom-navbar" aria-level="Main Navigation">
        <a href="/" class="nav-item home-btn"><img src="stock/home.png" alt="Home" style=" filter: brightness(0) saturate(100%) invert(10%) sepia(48%) saturate(2700%) hue-rotate(245deg) brightness(75%) contrast(115%);">
            <span>Home</span></a>
        <a href="/" class="nav-item wishlist-btn"><img src="stock/heart.png" alt="Wishlist">
            <span>Wishlist</span></a>
        <div class="search-btn-background">
        <a href="/" class="nav-item search-btn"><img src="stock/search_icon.png" alt="Search">
            <span>Search</span></a>
        </div>
        <a href="/" class="nav-item cart-btn"><img src="stock/shopping-bag.png" alt="Cart">
            <span>Cart</span></a>
        <a href="profile.html" class="nav-item profile-btn"><img src="stock/user.png" alt="Profile">
            <span>Profile</span></a>
    </nav>
    `;
document.body.insertAdjacentHTML("afterbegin", headerHTML);
