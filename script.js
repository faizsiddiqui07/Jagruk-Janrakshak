var swiper = new Swiper(".our-partner", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '991': {
            slidesPerView: 4,
            spaceBetween: 10,
    },
        '767': {
            slidesPerView: 3,
            spaceBetween: 10,
    },
    '600': {
        slidesPerView: 2,
        spaceBetween: 10,
},
        '320': {
            slidesPerView: 1,
            spaceBetween: 8,
    },
}
});