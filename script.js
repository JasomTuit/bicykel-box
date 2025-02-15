// Hamburger menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
        hamburgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Fullscreen gallery
const galleryImages = document.querySelectorAll('.gallery-img');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenImg = document.getElementById('fullscreen-img');
const closeBtn = document.querySelector('.close-btn');

// Open image in fullscreen
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        fullscreenImg.src = img.src;
        fullscreenOverlay.classList.add('active');
    });
});

// Close fullscreen overlay
closeBtn.addEventListener('click', () => {
    fullscreenOverlay.classList.remove('active');
});

// Close by clicking outside the image
fullscreenOverlay.addEventListener('click', (e) => {
    if (e.target === fullscreenOverlay) {
        fullscreenOverlay.classList.remove('active');
    }
});