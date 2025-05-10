// Page Transition Functions
function showMainPage() {
    const landingPage = document.querySelector('.landing-page');
    const mainPage = document.querySelector('.main-page');
    const galleryPage = document.querySelector('.gallery-page');
    
    landingPage.classList.remove('active');
    galleryPage.classList.remove('active');
    setTimeout(() => {
        mainPage.classList.add('active');
    }, 500);
}

function showGalleryPage() {
    const mainPage = document.querySelector('.main-page');
    const galleryPage = document.querySelector('.gallery-page');
    
    mainPage.classList.remove('active');
    galleryPage.classList.remove('active');
    setTimeout(() => {
        galleryPage.classList.add('active');
    }, 500);
}

// Create Animated Elements
function createAnimatedElements() {
    const particleContainer = document.querySelector('.particle-container');
    const flowerContainer = document.querySelector('.flower-container');
    const heartContainer = document.querySelector('.heart-container');

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particleContainer.appendChild(particle);
    }

    // Create flowers
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        flower.style.animationDelay = Math.random() * 3 + 's';
        flowerContainer.appendChild(flower);
    }

    // Create hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDelay = Math.random() * 4 + 's';
        heartContainer.appendChild(heart);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Page transitions
    const landingPage = document.querySelector('.landing-page');
    landingPage.classList.add('active');
    
    // Create animated elements
    createAnimatedElements();
    
    // Add fade-in animation to the landing page content
    setTimeout(() => {
        const content = landingPage.querySelector('.content');
        content.style.opacity = '1';
    }, 200);

    // Add hover animations to photo placeholders
    const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
    photoPlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', () => {
            placeholder.style.transform = 'scale(1.05)';
        });
        
        placeholder.addEventListener('mouseleave', () => {
            placeholder.style.transform = 'scale(1)';
        });
    });

    // Add scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.message, .photo-placeholder');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});

// Add hover animations to photo placeholders
const photoPlaceholders = document.querySelectorAll('.photo-placeholder');
photoPlaceholders.forEach(placeholder => {
    placeholder.addEventListener('mouseenter', () => {
        placeholder.style.transform = 'scale(1.05)';
    });
    
    placeholder.addEventListener('mouseleave', () => {
        placeholder.style.transform = 'scale(1)';
    });
});

// Add scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.message, .photo-placeholder');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Initial scroll animation check
animateOnScroll();