// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
    );
});

// Close menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product Data
const products = [
    {
        name: "Compact Corn Mill",
        specs: "5HP Motor | 50kg/hr",
        price: "₵3,499",
        features: ["Roofing sheet body", "Mobile unit", "Low maintenance"]
    },
    {
        name: "Commercial Mill",
        specs: "10HP Motor | 150kg/hr",
        price: "₵7,999",
        features: ["Industrial grade", "Auto-cleaning", "Safety features"]
    }
];

// Generate Product Cards
const productGrid = document.getElementById('product-grid');
products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.specs}</p>
        <p class="price">${product.price}</p>
        <ul>${product.features.map(f => `<li>${f}</li>`).join('')}</ul>
    `;
    productGrid.appendChild(card);
});

// Enhanced form validation with better feedback
document.querySelector('form').addEventListener('submit', function(e) {
    const phone = this.querySelector('input[type="tel"]');
    const phoneRegex = /^\+233\d{9}$/;
    
    if (!phoneRegex.test(phone.value)) {
        e.preventDefault();
        phone.setCustomValidity('Please enter a valid Ghanaian number starting with +233');
        phone.reportValidity();
    } else {
        phone.setCustomValidity('');
    }
});

// Active section tracking with Intersection Observer
const sections = document.querySelectorAll('section[id]');

const options = {
    threshold: 0.4,
    rootMargin: "-60px 0px -60px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            updateActiveLink(currentId);
        }
    });
}, options);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

function updateActiveLink(sectionId) {
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Initial check for active section on page load
function setInitialActive() {
    const scrollPosition = window.scrollY + 100;
    
    let currentSection = null;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    if (currentSection) {
        updateActiveLink(currentSection);
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', setInitialActive);
