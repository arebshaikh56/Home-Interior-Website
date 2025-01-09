// Get all slides and navigation buttons
const slides = document.querySelectorAll('.hero-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlideIndex = 0;

// Show the first slide by default
slides[currentSlideIndex].style.display = 'block';

// Function to move to the next slide
function goToNextSlide() {
    slides[currentSlideIndex].style.display = 'none';  // Hide current slide
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;  // Move to the next slide, loop back to first slide if at the end
    slides[currentSlideIndex].style.display = 'block';  // Show next slide
}

// Function to move to the previous slide
function goToPreviousSlide() {
    slides[currentSlideIndex].style.display = 'none';  // Hide current slide
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;  // Move to the previous slide, loop back to last slide if at the beginning
    slides[currentSlideIndex].style.display = 'block';  // Show previous slide
}

// Attach event listeners to buttons
nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPreviousSlide);

//product of the week
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const slideWidth = slides[0].getBoundingClientRect().width; // Get updated slide width

    let currentIndex = 0;

    // Set the initial position of the slides
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // Move the track to show the target slides
    const moveToSlide = (track, currentIndex) => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Adjusted logic for navigation
    const maxIndex = slides.length - 4; // Only 4 images are visible at a time
    const isNextDisabled = () => currentIndex >= maxIndex;
    const isPrevDisabled = () => currentIndex <= 0;

    // Click Next
    nextButton.addEventListener('click', () => {
        if (!isNextDisabled()) {
            currentIndex++;
            moveToSlide(track, currentIndex);
        }
    });

    // Click Prev
    prevButton.addEventListener('click', () => {
        if (!isPrevDisabled()) {
            currentIndex--;
            moveToSlide(track, currentIndex);
        }
    });

    // Optional: Disable buttons when no further slides are available
    const updateButtonState = () => {
        nextButton.disabled = isNextDisabled();
        prevButton.disabled = isPrevDisabled();
    };

    // Initialize button state
    updateButtonState();

    // Update button state on clicks
    nextButton.addEventListener('click', updateButtonState);
    prevButton.addEventListener('click', updateButtonState);
});
