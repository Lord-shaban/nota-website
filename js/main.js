// ===== Nota Website - Main JavaScript ===== //

// DOM Elements
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const backTop = document.getElementById('backTop');
const cursorGlow = document.getElementById('cursorGlow');
const screenshotsTrack = document.getElementById('screenshotsTrack');

// ===== Navbar Scroll Effect =====
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Add scrolled class
    if (currentScrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    // Back to top visibility
    if (currentScrollY > 500) {
        backTop.classList.add('visible');
    } else {
        backTop.classList.remove('visible');
    }
    
    lastScrollY = currentScrollY;
});

// ===== Mobile Menu Toggle =====
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Back to Top =====
backTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Cursor Glow Effect =====
if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// ===== Screenshots Horizontal Scroll with Mouse =====
if (screenshotsTrack) {
    let isDown = false;
    let startX;
    let scrollLeft;

    screenshotsTrack.addEventListener('mousedown', (e) => {
        isDown = true;
        screenshotsTrack.style.cursor = 'grabbing';
        startX = e.pageX - screenshotsTrack.offsetLeft;
        scrollLeft = screenshotsTrack.scrollLeft;
    });

    screenshotsTrack.addEventListener('mouseleave', () => {
        isDown = false;
        screenshotsTrack.style.cursor = 'grab';
    });

    screenshotsTrack.addEventListener('mouseup', () => {
        isDown = false;
        screenshotsTrack.style.cursor = 'grab';
    });

    screenshotsTrack.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotsTrack.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotsTrack.scrollLeft = scrollLeft - walk;
    });

    // Auto scroll to center on load
    setTimeout(() => {
        const activeItem = screenshotsTrack.querySelector('.active');
        if (activeItem) {
            const trackWidth = screenshotsTrack.offsetWidth;
            const itemLeft = activeItem.offsetLeft;
            const itemWidth = activeItem.offsetWidth;
            screenshotsTrack.scrollLeft = itemLeft - (trackWidth / 2) + (itemWidth / 2);
        }
    }, 100);

    // Update active state on scroll
    screenshotsTrack.addEventListener('scroll', () => {
        const items = screenshotsTrack.querySelectorAll('.screenshot-item');
        const trackCenter = screenshotsTrack.scrollLeft + (screenshotsTrack.offsetWidth / 2);
        
        let closestItem = null;
        let closestDistance = Infinity;
        
        items.forEach(item => {
            const itemCenter = item.offsetLeft + (item.offsetWidth / 2);
            const distance = Math.abs(trackCenter - itemCenter);
            
            if (distance < closestDistance) {
                closestDistance = distance;
                closestItem = item;
            }
        });
        
        items.forEach(item => item.classList.remove('active'));
        if (closestItem) closestItem.classList.add('active');
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.feature-card, .screenshot-item, .platform-icon, .download-btn').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
    animateOnScroll.observe(el);
});

// ===== Phone Tilt Effect =====
const phoneFrame = document.querySelector('.phone-frame');

if (phoneFrame && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        const rect = phoneFrame.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angleX = (e.clientY - centerY) / 30;
        const angleY = (centerX - e.clientX) / 30;
        
        phoneFrame.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    document.addEventListener('mouseleave', () => {
        phoneFrame.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

// ===== Download Button Animation =====
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.querySelector('.btn-arrow').style.transform = 'translateX(-5px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.querySelector('.btn-arrow').style.transform = 'translateX(0)';
    });
});

// ===== Typing Effect for Hero =====
const titleGradient = document.querySelector('.title-gradient');
if (titleGradient) {
    const text = titleGradient.textContent;
    titleGradient.textContent = '';
    titleGradient.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            titleGradient.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start after page load
    setTimeout(typeWriter, 500);
}

// ===== Parallax Effect for Hero Glow =====
const heroGlow = document.querySelector('.hero-glow');
if (heroGlow && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 20;
        const y = (e.clientY - window.innerHeight / 2) / 20;
        heroGlow.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// ===== Console Easter Egg =====
console.log('%c📝 Nota', 'font-size: 40px; font-weight: bold; background: linear-gradient(135deg, #7C3AED, #A855F7); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cAI-Powered Smart Notes App', 'font-size: 16px; color: #A3A3A3;');
console.log('%cBuilt with Flutter & Firebase', 'font-size: 14px; color: #7C3AED;');
console.log('%c⭐ Star us on GitHub: https://github.com/Lord-shaban/Nota', 'font-size: 12px; color: #22C55E;');

// ===== Service Worker Registration (for PWA future) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js');
    });
}

