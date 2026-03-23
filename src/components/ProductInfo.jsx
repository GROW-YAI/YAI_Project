import React from 'react';

const ProductInfo = () => {
  return (
    <section id="product-info">
      <h2 className="section-title">Our Machines</h2>
      <div className="product-info-grid">
        <div className="machine-card">
          <div className="machine-image">
            <img
              src="/assests/images/image.png"
              alt="Compact Mill"
              className="product-img"
            />
          </div>
          <div className="machine-details">
            <h3>Compact Mill</h3>
            <div className="specs-list">
              <div className="spec-item">
                <i className="fas fa-cog"></i>
                <span>5HP Motor</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-tachometer-alt"></i>
                <span>50kg/hr Capacity</span>
              </div>
            </div>
            <ul className="feature-list">
              <li>
                <i className="fas fa-check"></i> Roofing sheet body construction
              </li>
              <li><i className="fas fa-check"></i> Mobile and portable design</li>
              <li><i className="fas fa-check"></i> Low maintenance requirements</li>
              <li><i className="fas fa-check"></i> Ideal for small communities</li>
            </ul>
            <a href="#contact" className="learn-more-btn">
              <span>Learn More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="machine-card">
          <div className="machine-image">
            <img
              src="/assests/images/image.png"
              alt="Commercial Mill"
              className="product-img"
            />
          </div>
          <div className="machine-details">
            <h3>Compact 2 Mill</h3>
            <div className="specs-list">
              <div className="spec-item">
                <i className="fas fa-cog"></i>
                <span>10HP Motor</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-tachometer-alt"></i>
                <span>150kg/hr Capacity</span>
              </div>
            </div>
            <ul className="feature-list">
              <li>
                <i className="fas fa-check"></i> Industrial grade construction
              </li>
              <li><i className="fas fa-check"></i> Enhanced safety features</li>
              <li><i className="fas fa-check"></i> Easy to clean</li>
              <li>
                <i className="fas fa-check"></i> Perfect for large Communities
              </li>
            </ul>
            <a href="#contact" className="learn-more-btn">
              <span>Learn More</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;