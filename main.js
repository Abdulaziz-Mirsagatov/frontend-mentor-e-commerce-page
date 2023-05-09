// mobile-slider
const prevButton = document.querySelector(".mobile-slider-section .prev-btn");
const nextButton = document.querySelector(".mobile-slider-section .next-btn");
const slides = document.querySelectorAll(".mobile-slider-section .product-img");

let currentSlide = 0;

nextButton.addEventListener("click", () => {
    if (currentSlide+1 < slides.length){
        slides[currentSlide].style.marginLeft = "-100%";
        currentSlide += 1;
        
        prevButton.style.display = "block";
        if (currentSlide == slides.length-1) nextButton.style.display = "none";
    }
})
prevButton.addEventListener("click", () => {
    if (currentSlide > 0){
        slides[currentSlide-1].style.marginLeft = "0";
        currentSlide -= 1;

        nextButton.style.display = "block";
        if (currentSlide == 0) prevButton.style.display = "none";
    }
})

// desktop-slider
const thumbnailImgList = document.querySelectorAll(".desktop-slider-section .thumbnail-img");
const mainImg = document.querySelector(".desktop-slider-section .product-img.active");

thumbnailImgList.forEach(img => img.addEventListener("click", (e) => {
    let { src } = e.target;
    src = src.replace("-thumbnail", "");
    mainImg.src = src;
    document.querySelector(".desktop-slider-section .container .active").classList.remove("active");
    e.target.classList.add("active");
    mainImg.classList.remove("fade-in");
    // triggers reflow
    void mainImg.offsetWidth;
    mainImg.classList.add("fade-in");
}));

// cart-icon hover effect and click action
const cartIcon = document.querySelector(".header .cart-icon");
const cart = document.querySelector(".header .cart");
cartIcon.addEventListener("mouseover", () => {
    cartIcon.querySelector("path").style.fill = "var(--dark-text-color)";
})
cartIcon.addEventListener("mouseout", () => {
    cartIcon.querySelector("path").style.fill = "var(--main-text-color)";
})
cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show-cart");
})

// add to cart
const plusButton = document.querySelector(".info-section .button-container .container .plus-icon");
const minusButton = document.querySelector(".info-section .button-container .container .minus-icon");
const addToCartButton = document.querySelector(".add-to-cart-btn");
let amountTag = document.querySelector(".info-section .button-container .container .item-amount");

plusButton.addEventListener("click", () => { 
    amountTag.innerHTML = String(Number(amountTag.innerHTML) + 1);
});
minusButton.addEventListener("click", () => {
    if (Number(amountTag.innerHTML) > 0){
        amountTag.innerHTML = String(Number(amountTag.innerHTML) - 1);
    }
});
addToCartButton.addEventListener("click", () => amountTag.innerHTML = "0");

// mobile menu
const menuButton = document.querySelector(".menu-btn");
const menuCloseButton = document.querySelector(".menu-close-btn");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
    navbar.style.left = "0";
    overlay.style.display = "block";
});
menuCloseButton.addEventListener("click", () => {
    navbar.style.left = "-100%";
    overlay.style.display = "none";
})

// lightbox
const lightboxCloseButton = document.querySelector(".lightbox-close-btn");
const lightbox = document.querySelector(".lightbox");
const activeImg = document.querySelector(".desktop-slider-section .product-img.active");
const lightboxThumbnailImgList = document.querySelectorAll(".lightbox .thumbnail-container img");
const lightboxPrevButton = document.querySelector(".lightbox-prev-btn");
const lightboxNextButton = document.querySelector(".lightbox-next-btn");
const lightboxMainImg = document.querySelector(".lightbox .img-container img")

activeImg.addEventListener("click", () => {
    lightbox.style.display = "flex";
    overlay.style.display = "block";
});
lightboxCloseButton.addEventListener("click", () => {
    lightbox.style.display = "none";
    overlay.style.display = "none";
});

let i = 0;
lightboxNextButton.addEventListener("click", () => {
    if (i+1 < lightboxThumbnailImgList.length) i += 1;
    else i = 0;
    let { src } = lightboxThumbnailImgList[i];
    src = src.replace("-thumbnail", "");
    lightboxMainImg.src = src;
    document.querySelector(".lightbox .thumbnail-container img.active").classList.remove("active");
    lightboxThumbnailImgList[i].classList.add("active"); 
});
lightboxPrevButton.addEventListener("click", () => {
    if (i > 0) i -= 1;
    else i = lightboxThumbnailImgList.length - 1;
    let { src } = lightboxThumbnailImgList[i];
    src = src.replace("-thumbnail", "");
    lightboxMainImg.src = src;
    document.querySelector(".lightbox .thumbnail-container img.active").classList.remove("active");
    lightboxThumbnailImgList[i].classList.add("active");
});

lightboxThumbnailImgList.forEach(img => img.addEventListener("click", (e) => {
    let { src } = e.target;
    src = src.replace("-thumbnail", "");
    lightboxMainImg.src = src;
    document.querySelector(".lightbox .thumbnail-container img.active").classList.remove("active");
    e.target.classList.add("active");

    for (let j = 0; j < lightboxThumbnailImgList.length; j++)
        if (lightboxThumbnailImgList[j].src == e.target.src)
            i = j;
}));