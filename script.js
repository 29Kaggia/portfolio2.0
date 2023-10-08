// script.js

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    header.addEventListener('click', function() {
        const colors = ['#333', '#007bff', '#e74c3c', '#9b59b6', '#2ecc71'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        header.style.backgroundColor = randomColor;
    });
});
