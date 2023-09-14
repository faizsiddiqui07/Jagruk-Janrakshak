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



document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById("menu").style.display="none";
    document.getElementById("cross").style.display="block";
    document.querySelector("body").classList.add("active")
})
document.getElementById("cross").addEventListener("click", ()=>{
    document.getElementById("cross").style.display="none";
    document.getElementById("menu").style.display="block";
    document.querySelector("body").classList.remove("active")
})
