import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-section">
          <h3>BB Agromachines</h3>
          <p>
            Innovating agricultural solutions for Ghana's farming communities
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about-product">About Us</a></li>
            <li><a href="#product-showcase">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>

          <div className="social-links">
            <a
              href="https://web.facebook.com/profile.php?id=61573359917829"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/bbagromachines/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/233533363423" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.tiktok.com/@bb_agromachines"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          <div className="contact-info">
            <div className="email-link">
              <a href="mailto:bbagromachines@gmail.com">
                <i className="fas fa-envelope"></i>
                bbagromachines@gmail.com
              </a>
            </div>
            <div className="phone-link">
              <a href="tel:+233533363423">
                <i className="fas fa-phone"></i>
                +233533363423
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 BB Agromachines. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;