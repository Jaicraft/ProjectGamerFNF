// Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple script to animate dots
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.style.animationDelay = `${Math.random() * 5}s`;
    });
});

}

// Loading indicator
const loadingIndicator = document.getElementById('loading-indicator');
// ...logic to show loading indicator when content is loading, then hide it
