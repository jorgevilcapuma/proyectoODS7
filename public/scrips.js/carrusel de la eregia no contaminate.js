(function () {
    document.addEventListener('DOMContentLoaded', function () {
        let currentIndex = 0;
        const carouselContainer = document.querySelector('.mi-carrusel .carousel-group');
        const items = carouselContainer.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        if (!carouselContainer || totalItems === 0) return;

        function updateCarousel() {
            const offset = -currentIndex * (items[0].offsetWidth + 23); // Asegura el espacio entre elementos
            carouselContainer.style.transform = `translateX(${offset}px)`;
        }

        function nextSlide() {
            if (currentIndex < totalItems - 3) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }

        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalItems - 3;
            }
            updateCarousel();
        }

        const nextButton = document.querySelector('.mi-carrusel #next-btn');
        const prevButton = document.querySelector('.mi-carrusel #prev-btn');

        if (nextButton) nextButton.addEventListener('click', nextSlide);
        if (prevButton) prevButton.addEventListener('click', prevSlide);

        setInterval(nextSlide, 3000);
    });
})();