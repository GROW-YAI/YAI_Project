import React from 'react';

const AboutProduct = () => {
  return (
    <section id="about-product">
      <div className="about-content">
        <h2 className="section-title">Our Innovation</h2>
        <div className="three-col-grid">
          <div className="product-card">
            <h3>Cost Effective</h3>
            <p>60% cheaper than commercial alternatives</p>
          </div>
          <div className="product-card">
            <h3>Local Materials</h3>
            <p>Built with roofing sheets and recycled components</p>
          </div>
          <div className="product-card">
            <h3>Community Focus</h3>
            <p>Designed with farmers and communities in mind</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;