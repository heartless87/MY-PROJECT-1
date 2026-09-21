// ==========================================
// 2:1 RESPONSIVE SWIPEABLE AD BANNER
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // CSS
    // ==========================================

    const adBannerCSS = `
        .ad-banner {
            width: 100%;
            height: auto;
            aspect-ratio: 2 / 1;
            overflow: hidden;
            position: relative;
            margin: 0 auto;
            padding: 0;
            box-sizing: border-box;
            background: #f4e3cf;
            touch-action: pan-y;
            user-select: none;
        }

        .ad-banner-track {
            width: 100%;
            height: 100%;
            display: flex;
            transition: transform 0.35s ease;
            will-change: transform;
        }

        .ad-banner-slide {
            width: 100%;
            height: 100%;
            min-width: 100%;
            flex-shrink: 0;
        }

        .ad-banner-slide img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
            pointer-events: none;
            user-select: none;
        }
    `;

    const style = document.createElement("style");
    style.textContent = adBannerCSS;
    document.head.appendChild(style);


    // ==========================================
    // AD IMAGES
    // ==========================================

    const adImages = [
        "stock/dummyad1.jpg",
        "stock/dummyad2.jpg",
        "stock/dummyad3.jpeg",
        "stock/dummyad4.jpeg"
    ];


    // ==========================================
    // CREATE SLIDES
    // ==========================================

    const slidesHTML = adImages.map((image, index) => `
        <div class="ad-banner-slide">
            <img
                src="${image}"
                alt="Advertisement ${index + 1}"
                draggable="false"
            >
        </div>
    `).join("");


    // ==========================================
    // CREATE BANNER
    // ==========================================

    const adBannerHTML = `
        <section class="ad-banner">
            <div class="ad-banner-track">
                ${slidesHTML}
            </div>
        </section>
    `;


    // ==========================================
    // INSERT AFTER HEADER
    // ==========================================

    const header = document.querySelector("header");

    if (header) {

        header.insertAdjacentHTML(
            "afterend",
            adBannerHTML
        );

    } else {

        document.body.insertAdjacentHTML(
            "afterbegin",
            adBannerHTML
        );

    }


    // ==========================================
    // GET ELEMENTS
    // ==========================================

    const banner = document.querySelector(".ad-banner");
    const track = document.querySelector(".ad-banner-track");


    // ==========================================
    // SLIDE SYSTEM
    // ==========================================

    let currentSlide = 0;

    function changeSlide(direction) {

        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = adImages.length - 1;
        }

        if (currentSlide >= adImages.length) {
            currentSlide = 0;
        }

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;
    }


    // ==========================================
    // TOUCH / SWIPE
    // ==========================================

    let startX = 0;
    let currentX = 0;

    banner.addEventListener("touchstart", function (event) {

        startX = event.touches[0].clientX;
        currentX = startX;

    }, { passive: true });


    banner.addEventListener("touchmove", function (event) {

        currentX = event.touches[0].clientX;

    }, { passive: true });


    banner.addEventListener("touchend", function () {

        const distance = currentX - startX;

        const swipeThreshold = 50;

        // Left → Right
        if (distance > swipeThreshold) {
            changeSlide(-1);
        }

        // Right → Left
        else if (distance < -swipeThreshold) {
            changeSlide(1);
        }

    });


});
