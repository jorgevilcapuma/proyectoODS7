(function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Mostrar la imagen actual
    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) item.classList.add('active');
        });
    }

    // Cambiar a la siguiente imagen
    function showNextItem() {
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    }

    // Cambiar a la imagen anterior
    function showPrevItem() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    }

    // Configurar controles manuales
    nextButton.addEventListener('click', showNextItem);
    prevButton.addEventListener('click', showPrevItem);

    // Cambiar automáticamente cada 3 segundos
    setInterval(showNextItem, 3000);

    // Mostrar la primera imagen al cargar
    showItem(currentIndex);
})();