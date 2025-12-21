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

// Skill Cards Interactive 3D Effect
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    const rotator = card.querySelector('.skill-card-rotator');
    const shine = card.querySelector('.skill-card-shine');

    card.addEventListener('mouseenter', () => {
        card.classList.add('active', 'interacting');
    });

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate position relative to card
        const xFromCenter = mouseX - cardCenterX;
        const yFromCenter = mouseY - cardCenterY;

        // Calculate distance from center (hypotenuse)
        const distance = Math.sqrt(xFromCenter ** 2 + yFromCenter ** 2);
        const maxDistance = Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2);
        const hyp = Math.min(distance / maxDistance, 1);

        // Normalize position (0-1)
        const normalizedX = (mouseX - rect.left) / rect.width;
        const normalizedY = (mouseY - rect.top) / rect.height;

        // Calculate mouse position percentage for shine
        const posx = normalizedX * 100;
        const posy = normalizedY * 100;
        const mx = normalizedX * 100;
        const my = normalizedY * 100;

        // Rotation limits
        const maxRotation = 15;
        const rotateX = -(yFromCenter / (rect.height / 2)) * maxRotation;
        const rotateY = (xFromCenter / (rect.width / 2)) * maxRotation;

        // Apply transforms
        card.style.setProperty('--rx', `${rotateY}deg`);
        card.style.setProperty('--ry', `${rotateX}deg`);
        card.style.setProperty('--posx', `${posx}%`);
        card.style.setProperty('--posy', `${posy}%`);
        card.style.setProperty('--mx', `${mx}%`);
        card.style.setProperty('--my', `${my}%`);
        card.style.setProperty('--hyp', hyp);

        // Update shine gradient position
        shine.style.backgroundPosition =
            `0% ${posy}%, ${posx}% ${posy}%, ${posx}% ${posy}%`;
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active', 'interacting');

        // Reset transforms with smooth transition
        rotator.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)';

        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
        card.style.setProperty('--posx', '50%');
        card.style.setProperty('--posy', '50%');
        card.style.setProperty('--mx', '50%');
        card.style.setProperty('--my', '50%');
        card.style.setProperty('--hyp', '0');

        setTimeout(() => {
            rotator.style.transition = '';
        }, 600);
    });
});