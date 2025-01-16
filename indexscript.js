document.addEventListener('DOMContentLoaded', (event) => {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }
    });

    // Add more interactivity as needed

    // Example: Change background color on button click
    const section = document.querySelector('section');
    section.addEventListener('click', () => {
        section.style.backgroundColor = section.style.backgroundColor === 'blue' ? 'green' : 'blue';
    });
});