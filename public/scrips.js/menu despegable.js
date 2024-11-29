document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

function setActive(element) {
    document.querySelectorAll('nav a, #mobile-menu a').forEach(function (link) {
        link.classList.remove('active');
    });
    element.classList.add('active');
}