window.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    let links = document.querySelectorAll(".menu__link:not(.menu__btn)");
    let btn = document.querySelector(".menu__btn");
    if (window.scrollY > 0) {
        header.classList.add("white");
        links.forEach(function(link) {
            link.style.color = "black";
        });
        btn.style.color = "white";
        btn.style.background = "#3f345f";
    } else {
        header.classList.remove("white");
        links.forEach(function(link) {
            link.style.color = "white";
        });
        btn.style.color = "#3f345f";
        btn.style.background = "#fff";
    }
});

const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prevBtn = slider.querySelector(".prev");
const nextBtn = slider.querySelector(".next");
let currentIndex = 0;

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        let slideIndex = (index + i) % slides.length;
        slides[slideIndex].style.display = "block";
        slides[slideIndex].style.order = i;
    }
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function zoomImage() {
    const image = this.querySelector(".slides__img");
    image.classList.toggle("enlarged");
}

showSlide(currentIndex);

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

slides.forEach((slide) => {
    slide.addEventListener("click", zoomImage);
});
