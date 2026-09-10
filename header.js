const headerCSS = `
header {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 70px;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0 2rem;
    justify-content: space-between;
    box-sizing: border-box;
}

.divider {
    display: none;
    margin: 0 4px;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 12px;
    background: transparent;
}

.icon-btn {
    width: clamp(36px, 4vw, 44px);
    height: clamp(36px, 4vw, 44px);
    border-radius: 50%;
    background-color: #f4e3cf;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    flex-shrink: 0;
}

.icon-btn img {
    width: 55%;
    height: 55%;
    object-fit: contain;
    background: transparent;
}

.header-search-bar {
    display: none;
}

.search-mobile {
    display: flex;
}

@media (min-width: 1024px) {

    .header-search-bar {
        display: flex;
        align-items: center;
        background-color: #f4e3cf;
        border: none;
        border-radius: 50px;
        padding: 0 14px;
        height: 40px;
        width: clamp(120px, 16.6vw, 280px);
        box-sizing: border-box;
    }

    .search-icon {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        background: transparent;
    }

    .header-search-bar input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        padding-left: 10px;
        color: #222;
        font-size: 14px;
    }

    .divider {
        display: block;
    }

    .search-mobile {
        display: none;
    }
}
`;

// ---------- Add CSS to page ----------
const style = document.createElement("style");
style.textContent = headerCSS;
document.head.appendChild(style);


// ---------- HTML ----------
const headerHTML = `
<header>
    <a class="header-logo" href="/">
        <img src="logo.png" alt="Logo">
    </a>

    <div class="header-right">

        <form class="header-search-bar">
            <img src="stock/search_icon.png" alt="Searchbar" class="search-icon">
            <input type="search" placeholder="Search Products" id="">
        </form>

        <span class="divider">|</span>

        <a href="#" class="icon-btn search-mobile">
            <img src="stock/search_icon.png" alt="Search" draggable="false">
        </a>

        <a href="#" class="icon-btn wishlist">
            <img src="stock/heart.png" alt="Wishlist">
        </a>

        <a href="#" class="icon-btn profile">
            <img src="stock/user.png" alt="Profile">
        </a>

    </div>
</header>
`;
document.body.insertAdjacentHTML("afterbegin", headerHTML);
