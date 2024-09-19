const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let currentSlide = 0;
const totalSlides = slides.length;
const slideInterval = 5000; // Auto-slide interval (5 seconds)

// Function to reset slides
function resetSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
}

// Function to show the current slide
function showSlide() {
  resetSlides();
  slides[currentSlide].classList.add('active');
}

// Go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide();
}

// Go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide();
}

// Auto slide function
let autoSlide = setInterval(nextSlide, slideInterval);

// Add event listeners for the next and prev buttons
next.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prev.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Reset auto slide when manually clicked
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, slideInterval);
}
