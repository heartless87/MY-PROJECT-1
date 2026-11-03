const bottomnavCSS = `
        .bottom-navbar{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            min-height: 60px;
            height: clamp(60px, 8vh, 80px);
            background-color: #f7f7f7;
            z-index: 9999;
            box-sizing: border-box;
        }
        .nav-item{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: rgb(34, 204, 99);
            height: 100%;
            background: transparent;
        }
        .nav-item img{
            width: clamp(20px, 5vw, 28px);
            height: clamp(20px, 5vw, 28px);
            filter: contrast(70%);
            opacity: 0.7;
            object-fit: contain;
            margin-top: 4px;
            background: transparent;
        }
        a[class^="nav-item home-btn"] span {
            font-family: Arial, sans-serif;
            font-weight: 600;
            font-size: clamp(10px, 2vw, 12px);
            margin-top: 2px;
            color: #0f044c;
            filter: none;
            opacity: none;
            background: none;
        }
        .nav-item span{
            font-family: Arial, sans-serif;
            font-weight: 600;
            font-size: clamp(10px, 2vw, 12px);
            margin-top: 2px;
            color: #000000;
            filter: contrast(70%);
            opacity: 0.7;
            background: none;
        }
        .search-btn span {
            color: #ffffff;
            background: transparent;
        }
        .search-btn-background{
            opacity: 0.8;
            background-color: #0f044c;
            border-radius: 50%;
            width: clamp(24px, 6vw, 34px);
            height: clamp(24px, 6vw, 34px);
            padding: 20px;
            margin-bottom: 26px;
        }
        .search-btn img{
            width: clamp(24px, 6vw, 34px);
            height: clamp(24px, 6vw, 34px);
            filter: invert(1); 
        }
        @media (min-width: 1024px) {
            .bottom-navbar { display: none; }
        }
        `;
const style = document.createElement("style");
style.textContent = bottomnavCSS;
document.head.appendChild(style);

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
document.body.insertAdjacentHTML("afterbegin", bottomnavHTML);
