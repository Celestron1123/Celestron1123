// Mobile Menu Toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
const navbarLinks = document.querySelectorAll('.navbar-link');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Close menu when a link is clicked
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navbarMenu.classList.remove('active');
    }
});

// TODO: Remove this code later; it is just to create scrollable content for testing the navbar
const section = document.querySelector('#home');
const paragraph = document.querySelector('#home p');

for (let i = 0; i < 99; i++) {
    const newParagraph = paragraph.cloneNode(true);
    section.appendChild(newParagraph);
}