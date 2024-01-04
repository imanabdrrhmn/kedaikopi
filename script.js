document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menuContainer');

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            menuContainer.style.display = (menuContainer.style.display === 'none' || menuContainer.style.display === '') ? 'block' : 'none';
        });
    });
});