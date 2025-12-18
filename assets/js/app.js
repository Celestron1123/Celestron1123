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

// Parallax Tilt Effect
const profileTilt = document.getElementById('profileTilt');
const profileLayerBg = document.querySelector('.profile-layer-bg');
const profileLayerFg = document.querySelector('.profile-layer-fg');
const MAX_ROTATION = 7; // degrees

profileTilt.addEventListener('mousemove', (e) => {
    const rect = profileTilt.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation angles
    const rotateY = (mouseX / (rect.width / 2)) * MAX_ROTATION;
    const rotateX = -(mouseY / (rect.height / 2)) * MAX_ROTATION;

    // Background moves slower (multiply by 0.6)
    const bgRotateX = rotateX * 0.6;
    const bgRotateY = rotateY * 0.6;

    profileTilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    profileLayerBg.style.transform = `translateZ(-25px) scale(1.05) rotateX(${bgRotateX}deg) rotateY(${bgRotateY}deg)`;
    profileLayerFg.style.transform = `translateZ(25px)`;

    profileTilt.classList.remove('reset');
});

profileTilt.addEventListener('mouseleave', () => {
    profileTilt.style.transform = 'rotateX(0) rotateY(0)';
    profileLayerBg.style.transform = 'translateZ(-25px) scale(1.05) rotateX(0) rotateY(0)';
    profileLayerFg.style.transform = 'translateZ(25px)';
    profileTilt.classList.add('reset');
});