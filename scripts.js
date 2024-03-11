// scripts.js

// Function to create dotted shapes
function createDottedShapes() {
    const dotsContainer = document.querySelector('.dots-container');

    for (let i = 0; i < 50; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = `${Math.random() * window.innerWidth}px`;
        dot.style.animationDelay = `${Math.random() * 10}s`;
        dot.style.animationDuration = `${Math.random() * 5 + 5}s`;
        dotsContainer.appendChild(dot);
    }
}

// Function to handle smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    element.scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to handle navigation clicks
function handleNavClick(event) {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    smoothScroll(target);
}

// Add event listeners to navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', handleNavClick);
});

// Create dotted shapes
createDottedShapes();
