import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const options = {
      threshold: 0.4,
      rootMargin: "-60px 0px -60px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          setActiveSection(currentId);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header className="main-header">
      <nav className="nav-container" role="navigation" aria-label="Main navigation">
        <div className="logo-container">
          <div className="logo" aria-label="BB Agromachines logo">
            <img
              src="/assests/images/480663294_2304682643240639_8301256714049241637_n-removebg-preview.png"
              alt="BB Agromachines logo"
            />
          </div>
          <div className="company-name">
            <span className="company-title">BB Agromachines</span>
            <span className="company-slogan">Innovating Agricultural Solutions</span>
          </div>
        </div>
        <button
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="nav-links"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
          <li>
            <a 
              href="#hero" 
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, '#hero')}
            >
              HOME
            </a>
          </li>
          <li>
            <a 
              href="#about-product" 
              className={activeSection === 'about-product' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, '#about-product')}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a 
              href="#product-info" 
              className={activeSection === 'product-info' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, '#product-info')}
            >
              PRODUCTS
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;