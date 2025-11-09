// Efecto al hacer scroll en el header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// SLIDER AUTOMÁTICO
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 6000); // Cambia cada 6 segundos

