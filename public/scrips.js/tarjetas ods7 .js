const CardToggleModule = (function () {
    const init = function () {
        const section = document.querySelector('#proyectos-exitosos'); // Aseguramos que solo afecta a esta sección
        if (!section) return;

        const cardContainer = section.querySelector('#unique-card-container');
        if (!cardContainer) return;

        const cards = cardContainer.querySelectorAll('.unique-card');
        cards.forEach(function (card) {
            card.addEventListener('click', function () {
                this.classList.toggle('expanded');
            });
        });
    };

    return {
        init: init
    };
})();

document.addEventListener('DOMContentLoaded', function () {
    CardToggleModule.init(); // Inicializar el módulo solo cuando se cargue la página
});




 // segunda fila de las tarjetas


 
  // Modulo para controlar el comportamiento de las tarjetas
  const CardToggleModulea = (function () {
    const init = function () {
        const section = document.querySelector('#acciones-individuales'); // Aseguramos que solo afecta a esta sección
        if (!section) return;

        const cardContainer = section.querySelector('#unique-card-container');
        if (!cardContainer) return;

        const cards = cardContainer.querySelectorAll('.unique-card');
        cards.forEach(function (card) {
            card.addEventListener('click', function () {
                this.classList.toggle('expanded');
            });
        });
    };

    return {
        init: init
    };
})();

document.addEventListener('DOMContentLoaded', function () {
    CardToggleModulea.init(); // Inicializar el módulo solo cuando se cargue la página
});