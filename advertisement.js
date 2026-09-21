const adBannerCSS = `
.ad-banner {
    width: 100%;
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
    margin: 0;
    padding: 0;
    pointer-events: none;
    user-select: none;
}
`;

// ==========================================
// ADD CSS
// ==========================================

const style = document.createElement("style");
style.textContent = adBannerCSS;
document.head.appendChild(style);


// ==========================================
// AD IMAGES
// ==========================================

const adImages = [
    "dummyad1.jpg",
    "dummyad2.jpg",
    "dummyad3.jpeg",
    "dummyad4.jpeg"
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
// AD BANNER HTML
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
    header.insertAdjacentHTML("afterend", adBannerHTML);
} else {
    document.body.insertAdjacentHTML("afterbegin", adBannerHTML);
}


// ==========================================
// CAROUSEL FUNCTIONALITY
// ==========================================

const banner = document.querySelector(".ad-banner");
const track = document.querySelector(".ad-banner-track");

let currentSlide = 0;

let startX = 0;
let currentX = 0;
let isDragging = false;


// ==========================================
// CHANGE IMAGE
// ==========================================

function changeSlide(direction) {

    currentSlide += direction;

    // First image ke baad last image
    if (currentSlide < 0) {
        currentSlide = adImages.length - 1;
    }

    // Last image ke baad first image
    if (currentSlide >= adImages.length) {
        currentSlide = 0;
    }

    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;
}


// ==========================================
// TOUCH START
// ==========================================

banner.addEventListener("touchstart", function(event) {

    startX = event.touches[0].clientX;
    currentX = startX;
    isDragging = true;

}, { passive: true });


// ==========================================
// TOUCH MOVE
// ==========================================

banner.addEventListener("touchmove", function(event) {

    if (!isDragging) return;

    currentX = event.touches[0].clientX;

}, { passive: true });


// ==========================================
// TOUCH END
// ==========================================

banner.addEventListener("touchend", function() {

    if (!isDragging) return;

    const distance = currentX - startX;

    const swipeThreshold = 50;

    // Right swipe
    if (distance > swipeThreshold) {
        changeSlide(-1);
    }

    // Left swipe
    else if (distance < -swipeThreshold) {
        changeSlide(1);
    }

    isDragging = false;

});
