const menuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.navigation');


menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.querySelectorAll('.navigation > li').forEach(item => {
    const link = item.querySelector('a');
    const dropdown = item.querySelector('.dropdown');
    const arrow = item.querySelector('.arrow');

    if (dropdown) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');
            arrow.classList.toggle('rotate');
        });
    }
});

/* Slider på forside */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const showSlide = (index) => {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
};

document.querySelector(".slide-arrow.left").addEventListener("click", () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

document.querySelector(".slide-arrow.right").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});