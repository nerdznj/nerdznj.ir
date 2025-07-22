// Global variables
let isLoading = true;
let currentTheme = 'dark';

document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    showLoadingScreen();
    
    setTimeout(() => {
        initializeTheme();
        initializeNavigation();
        initializeTypingEffect();
        initializeScrollEffects();
        initializeAnimations();
        initializeContactForm();
        initializeBackgroundEffect();
        hideLoadingScreen();
    }, 1500);
}

// Loading Screen Functions
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.display = 'flex';
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            isLoading = false;
        }, 500);
    }
}

// Typing Effect
function initializeTypingEffect() {
    const nameElement = document.getElementById('typing-name');
    if (!nameElement) return;
    
    const nameText = 'امین تقی بیگلو';
    let charIndex = 0;
    
    nameElement.textContent = '';
    
    function typeChar() {
        if (charIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, 150);
        }
    }
    
    setTimeout(typeChar, 1000);
}

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    currentTheme = savedTheme;
    
    updateThemeUI();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('#theme-toggle i');
    
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        body.classList.remove('light-theme');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }
    
    localStorage.setItem('theme', currentTheme);
    updateThemeUI();
}

function updateThemeUI() {
    const body = document.body;
    const themeIcon = document.querySelector('#theme-toggle i');
    
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        if (themeIcon) themeIcon.className = 'fas fa-sun';
    } else {
        body.classList.remove('light-theme');
        if (themeIcon) themeIcon.className = 'fas fa-moon';
    }
}

// Navigation Functions
function initializeNavigation() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuToggle.querySelector('i');
            
            if (mobileMenu.classList.contains('hidden')) {
                icon.className = 'fas fa-bars';
            } else {
                icon.className = 'fas fa-times';
            }
        });
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                        const icon = menuToggle.querySelector('i');
                        icon.className = 'fas fa-bars';
                    }
                }
            }
        });
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.pointerEvents = 'auto';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.pointerEvents = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Background Animation Effect
function initializeBackgroundEffect() {
    const background = document.querySelector('.background-animation');
    if (!background) return;
    
    const characters = ['#', '$', '%', '&', '*', '+', '=', '?', '@', '^', '~', '0', '1'];
    
    function createFallingChar() {
        const char = document.createElement('span');
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        
        char.textContent = randomChar;
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDuration = (Math.random() * 10 + 10) + 's';
        char.style.animationDelay = Math.random() * 5 + 's';
        char.style.fontSize = (Math.random() * 20 + 14) + 'px';
        char.style.opacity = Math.random() * 0.8 + 0.2;
        
        background.appendChild(char);
        
        setTimeout(() => {
            if (char.parentNode) {
                char.parentNode.removeChild(char);
            }
        }, 20000);
    }
    
    for (let i = 0; i < 50; i++) {
        setTimeout(createFallingChar, i * 200);
    }
    
    setInterval(createFallingChar, 800);
}

// Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.skill-category, .project-card, .stat-card, .about-card, .contact-card');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitButton = e.target.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin ml-2"></i>در حال ارسال...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                e.target.reset();
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                showNotification('پیام شما با موفقیت ارسال شد!');
            }, 2000);
        });
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-cyber-green text-black p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `<i class="fas fa-check-circle ml-2"></i>${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Notes Filtering (for notes page)
function initializeNotesFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noteCards = document.querySelectorAll('.note-card');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter cards
            noteCards.forEach(card => {
                const cardCategories = card.dataset.category;
                
                if (category === 'all' || cardCategories.includes(category)) {
                    card.classList.remove('filtered-out');
                    card.classList.add('filtered-in');
                    card.style.display = 'block';
                } else {
                    card.classList.add('filtered-out');
                    card.classList.remove('filtered-in');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Newsletter Subscription
function initializeNewsletter() {
    const newsletterForm = document.querySelector('form[action="#"]');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const emailInput = e.target.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                showNotification('با موفقیت در خبرنامه عضو شدید!');
                emailInput.value = '';
            }
        });
    }
}

// Initialize notes page features
if (window.location.pathname.includes('notes.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        initializeNotesFiltering();
        initializeNewsletter();
    });
}

// Prevent right-click context menu
document.addEventListener('contextmenu', e => {
    if (!window.location.hostname.includes('localhost')) {
        e.preventDefault();
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`🎯 Page loaded in ${loadTime}ms`);
    });
}

// Console message
console.log(`
🚀 Welcome to Nerdznj.ir
💻 Developed by Amin Taghi Beigloo  
🔗 GitHub: https://github.com/nerdznj
📧 Contact: contact@nerdznj.ir

Website features:
✨ Modern responsive design
🎨 Custom animations & effects  
🔒 Cybersecurity focused content
📱 Mobile-first approach
⚡ Optimized performance
`);
