// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.feature-card, .auth-card, .tech-card, .platform-card, .screenshot-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// ===== Staggered Animation for Grid Items =====
const animateGridItems = (selector, delay = 100) => {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
        item.style.transitionDelay = `${index * delay}ms`;
    });
};

animateGridItems('.feature-card', 100);
animateGridItems('.auth-card', 50);
animateGridItems('.platform-card', 50);
animateGridItems('.tech-card', 100);

// ===== Screenshot Slider Auto-Center =====
const screenshotsSlider = document.querySelector('.screenshots-slider');

if (screenshotsSlider) {
    let isScrolling = false;
    
    screenshotsSlider.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                isScrolling = false;
            });
        }
        isScrolling = true;
    });
}

// ===== Hero Text Animation =====
const heroText = document.querySelector('.hero-text');
if (heroText) {
    setTimeout(() => {
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 100);
}

// ===== Phone Mockup Tilt Effect =====
const phoneMockup = document.querySelector('.phone-mockup');

if (phoneMockup) {
    phoneMockup.addEventListener('mousemove', (e) => {
        const rect = phoneMockup.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        phoneMockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    phoneMockup.addEventListener('mouseleave', () => {
        phoneMockup.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// ===== Add Loading State to Buttons =====
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    </style>
`);

// ===== Countup Animation for Stats =====
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// ===== Preload Images =====
const preloadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
};

// Run preload on DOM content loaded
document.addEventListener('DOMContentLoaded', preloadImages);

// ===== Console Easter Egg =====
console.log('%c📝 Nota', 'font-size: 32px; font-weight: bold; color: #6366f1;');
console.log('%cAI-Powered Smart Notes App', 'font-size: 14px; color: #a1a1aa;');
console.log('%cBuilt with ❤️ using Flutter & Firebase', 'font-size: 12px; color: #10b981;');
