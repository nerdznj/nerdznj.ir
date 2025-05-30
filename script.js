const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu-items');
const nameElement = document.querySelector('#home h1 span');

// Typing effect for name
const nameText = 'امین تقی بیگلو';
let index = 0;

function typeName() {
  if (index < nameText.length) {
    nameElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  nameElement.textContent = '';
  typeName();
});

// Theme switching with localStorage
function updateTheme() {
  if (body.classList.contains('bg-[#0a0a0a]')) {
    body.classList.replace('bg-[#0a0a0a]', 'bg-[#f0f0f0]');
    body.classList.replace('text-white', 'text-[#0a0a0a]');
    document.querySelectorAll('.card').forEach(card => {
      card.classList.replace('bg-black', 'bg-white');
      card.classList.replace('bg-opacity-80', 'bg-opacity-90');
    });
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.replace('bg-[#f0f0f0]', 'bg-[#0a0a0a]');
    body.classList.replace('text-[#0a0a0a]', 'text-white');
    document.querySelectorAll('.card').forEach(card => {
      card.classList.replace('bg-white', 'bg-black');
      card.classList.replace('bg-opacity-90', 'bg-opacity-80');
    });
    localStorage.setItem('theme', 'dark');
  }
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  updateTheme();
}

themeToggle.addEventListener('click', updateTheme);

// Mobile menu toggle with animation
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('animate-slide-in');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('animate-slide-in');
  });
});

// Hover animation for social links
document.querySelectorAll('.social-links a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.2)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
  });
});

// Disable right-click
document.addEventListener('contextmenu', e => e.preventDefault());
