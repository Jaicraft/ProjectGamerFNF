// scripts.js

// Animate dotted shapes
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  const delay = (index + 1) * 1000; // Add a delay for each dot
  dot.style.animationDelay = `${delay}ms`;
});

// Toggle dark/light mode
let isDarkMode = true;

const toggleMode = () => {
  const body = document.querySelector('body');
  const homeBg = document.querySelector('#home');
  const welcomeBg = document.querySelector('#welcome');

  if (isDarkMode) {
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#333333';
    homeBg.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    welcomeBg.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  } else {
    body.style.backgroundColor = '#1c1c1c';
    body.style.color = '#ffffff';
    homeBg.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    welcomeBg.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  }

  isDarkMode = !isDarkMode;
};

// Add toggle mode button
const modeToggle = document.createElement('button');
modeToggle.textContent = 'Toggle Mode';
modeToggle.addEventListener('click', toggleMode);
document.body.appendChild(modeToggle);
