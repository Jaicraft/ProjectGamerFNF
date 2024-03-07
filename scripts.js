// Smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dotted shapes with dynamic loading
const dotsContainer = document.querySelector('.dots-container');
const numDots = 50; 

function createDot() {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  // ... set randomized position, animation delay etc.
  return dot;
}

for (let i = 0; i < numDots; i++) {
  dotsContainer.appendChild(createDot());
}

// Loading indicator
const loadingIndicator = document.getElementById('loading-indicator');
// ...logic to show loading indicator when content is loading, then hide it
