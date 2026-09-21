
// ==========================================
// ADVERTISEMENT BANNER
// ==========================================

(function () {

    // --------------------------------------
    // CSS
    // --------------------------------------

    const css = `
        .ad-banner {
            width: 100%;
            aspect-ratio: 2 / 1;
            display: block;
            position: relative;
            overflow: hidden;
            margin: 0;
            padding: 0;
            background-color: #f4e3cf;
            box-sizing: border-box;
            touch-action: pan-y;
            user-select: none;
        }

        .ad-banner-track {
            width: 100%;
            height: 100%;
            display: flex;
            transition: transform 0.35s ease;
        }

        .ad-banner-slide {
            width: 100%;
            height: 100%;
            min-width: 100%;
            flex-shrink: 0;
            position: relative;
        }

        .ad-banner-slide img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: center;
            margin: 0;
            padding: 0;
            background-color: transparent;
            pointer-events: none;
            user-select: none;
        }
    `;

    const style = document.createElement("style");
    style.id = "advertisement-banner-style";
    style.textContent = css;
    document.head.appendChild(style);


    // --------------------------------------
    // AD IMAGES
    // --------------------------------------

    const adImages = [
        "stock/dummyad1.jpg",
        "stock/dummyad2.jpg",
        "stock/dummyad3.jpeg",
        "stock/dummyad4.jpeg"
    ];


    // --------------------------------------
    // CREATE BANNER
    // --------------------------------------

    function createAdBanner() {

        // Agar already bana hua hai to dobara mat banao
        if (document.querySelector(".ad-banner")) {
            return;
        }


        // Slides
        let slides = "";

        adImages.forEach(function (image, index) {

            slides += `
                <div class="ad-banner-slide">
                    <img
                        src="${image}"
                        alt="Advertisement ${index + 1}"
                        draggable="false"
                    >
                </div>
            `;

        });


        // Banner
        const bannerHTML = `
            <section class="ad-banner">
                <div class="ad-banner-track">
                    ${slides}
                </div>
            </section>
        `;


        // Header ke baad banner
        const header = document.querySelector("header");

        if (header) {

            header.insertAdjacentHTML(
                "afterend",
                bannerHTML
            );

        } else {

            // Header na mile to body ke beginning mein
            document.body.insertAdjacentHTML(
                "afterbegin",
                bannerHTML
            );

        }


        // Start carousel
        startCarousel();
    }


    // --------------------------------------
    // CAROUSEL
    // --------------------------------------

    function startCarousel() {

        const banner = document.querySelector(".ad-banner");
        const track = document.querySelector(".ad-banner-track");

        if (!banner || !track) {
            console.error("Advertisement banner create nahi hua.");
            return;
        }


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
                "translateX(-" + (currentSlide * 100) + "%)";
        }


        // ----------------------------------
        // TOUCH SWIPE
        // ----------------------------------

        let startX = 0;
        let endX = 0;


        banner.addEventListener("touchstart", function (event) {

            startX = event.touches[0].clientX;

        }, { passive: true });


        banner.addEventListener("touchend", function (event) {

            endX = event.changedTouches[0].clientX;

            const distance = endX - startX;

            const threshold = 50;


            // Left → Right
            if (distance > threshold) {

                changeSlide(-1);

            }


            // Right → Left
            else if (distance < -threshold) {

                changeSlide(1);

            }

        }, { passive: true });

    }


    // --------------------------------------
    // START
    // --------------------------------------

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            createAdBanner
        );

    } else {

        createAdBanner();

    }

})();
