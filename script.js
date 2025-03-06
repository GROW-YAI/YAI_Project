// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
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

// Active section tracking
const sections = document.querySelectorAll('section[id]');
// const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavLink() {
    const scrollPosition = window.scrollY + 100; // Offset for better detection

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
            
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', highlightNavLink);
// Run once on page load
highlightNavLink();
