/**
 * Nota Website - Premium JavaScript
 * Modern animations, smooth scrolling, and interactive elements
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavbar();
    initSmoothScroll();
    initCarousel();
    initAnimationsOnScroll();
    initParallaxEffects();
    initActiveNavLink();
});

/**
 * Navbar functionality
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class when scrolling down
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Screenshots carousel
 */
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!track) return;
    
    const items = track.querySelectorAll('.screenshot-item');
    let currentIndex = 2; // Start with the Dashboard (index 2)
    
    // Create dots
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (index === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    
    function updateCarousel() {
        // Update active class
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Scroll to center the active item
        const activeItem = items[currentIndex];
        if (activeItem) {
            const trackRect = track.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            const scrollLeft = track.scrollLeft + itemRect.left - trackRect.left - 
                              (trackRect.width / 2) + (itemRect.width / 2);
            
            track.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }
    
    // Button events
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Auto-scroll every 5 seconds
    let autoScrollInterval = setInterval(nextSlide, 5000);
    
    // Pause auto-scroll on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });
    
    track.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(nextSlide, 5000);
    });
    
    // Initial update
    updateCarousel();
}

/**
 * Animations on scroll (Intersection Observer)
 */
function initAnimationsOnScroll() {
    // Add animate-on-scroll class to elements
    const animatedElements = [
        '.feature-card',
        '.feature-main',
        '.category-card',
        '.step',
        '.screenshot-item',
        '.download-content',
        '.tech-item',
        '.auth-card',
        '.section-header'
    ];
    
    animatedElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.transitionDelay = `${index * 0.1}s`;
        });
    });
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Parallax effects for floating elements
 */
function initParallaxEffects() {
    const floatCards = document.querySelectorAll('.float-card');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (!heroVisual || floatCards.length === 0) return;
    
    heroVisual.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        
        floatCards.forEach((card, index) => {
            const speed = (index + 1) * 10;
            const xOffset = x * speed;
            const yOffset = y * speed;
            card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
    
    heroVisual.addEventListener('mouseleave', () => {
        floatCards.forEach(card => {
            card.style.transform = '';
        });
    });
}

/**
 * Active navigation link based on scroll position
 */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveLink() {
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPosition >= top && scrollPosition < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
}

/**
 * Typing effect for hero title (optional enhancement)
 */
function initTypingEffect() {
    const titleGradient = document.querySelector('.title-gradient');
    if (!titleGradient) return;
    
    const text = titleGradient.textContent;
    titleGradient.textContent = '';
    titleGradient.style.opacity = '1';
    
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            titleGradient.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

/**
 * Counter animation for stats
 */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        
        // Only animate numeric values
        if (!isNaN(target)) {
            const targetNum = parseInt(target);
            let current = 0;
            const increment = targetNum / 50;
            const duration = 1500;
            const stepTime = duration / 50;
            
            const updateCounter = () => {
                current += increment;
                if (current < targetNum) {
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, stepTime);
                } else {
                    counter.textContent = targetNum;
                }
            };
            
            updateCounter();
        }
    });
}

/**
 * Lazy load images
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

/**
 * Add ripple effect to buttons
 */
function addRippleEffect(element) {
    element.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            margin-left: -50px;
            margin-top: -50px;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// Add ripple to all buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .download-btn').forEach(addRippleEffect);

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * Performance optimization: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Console easter egg
 */
console.log(
    '%c🚀 Nota - AI Smart Notes',
    'font-size: 24px; font-weight: bold; color: #8b5cf6;'
);
console.log(
    '%cBuilt with ❤️ using Flutter, Firebase & Gemini AI',
    'font-size: 14px; color: #a78bfa;'
);
console.log(
    '%cCheck out the source code: https://github.com/Lord-shaban/Nota',
    'font-size: 12px; color: #71717a;'
);
