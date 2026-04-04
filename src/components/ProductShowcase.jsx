import React from 'react';

const ProductShowcase = () => {
  return (
    <section id="product-showcase">
      <h2 className="section-title">Our Product</h2>
      <div className="product-showcase-content">
        <img
          src="/assests/images/image.png"
          alt="Alien Seild - Machine Innovator"
          className="product-img"
          loading="lazy"
        />
        <div className="profile-content">
          <h2>Our Milling Machine</h2>
          <p>
            Introducing the next-generation milling machine designed to
            revolutionize farming and community food processing! Built with
            locally sourced materials like roofing sheets, this compact yet
            powerful machine is engineered for speed, efficiency, and ease of
            use—outperforming traditional mills while taking up less space.
            Designed with farmers and communities in mind, our milling machine
            simplifies grain processing, reduces waste, and boosts productivity.
            Its innovative design ensures faster processing times with minimal
            effort, making milling more accessible and cost-effective.
            Experience the future of milling—locally crafted for maximum
            impact!.
          </p>

          <p>
            Designed with farmers and communities in mind, our milling machine
            simplifies grain processing, reduces waste, and boosts productivity.
            Its innovative design ensures faster processing times with minimal
            effort, making milling more accessible and cost-effective.
          </p>
          <p>
            Experience the future of milling—locally crafted for maximum
            impact!.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;