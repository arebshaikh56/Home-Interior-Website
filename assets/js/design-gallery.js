document.addEventListener('DOMContentLoaded', function () {
    const carouselTrack = document.querySelector('.carousel-track');
    const items = Array.from(carouselTrack.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const visibleItems = 3; // Number of visible items
    let itemWidth = items[0].getBoundingClientRect().width + 30; // Add the 30px for margin
    let currentIndex = 0;

    function updateCarouselPosition() {
        const offset = -currentIndex * itemWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = Math.min(currentIndex + visibleItems, items.length - visibleItems);
        updateCarouselPosition();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = Math.max(currentIndex - visibleItems, 0);
        updateCarouselPosition();
    });

    // Adjust carousel on window resize
    window.addEventListener('resize', () => {
        itemWidth = items[0].getBoundingClientRect().width + 30; // Recalculate item width with margin
        updateCarouselPosition();
    });
});
