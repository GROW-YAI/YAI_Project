import React from 'react';

const InnovatorProfile = () => {
  return (
    <section id="innovator-profile1">
      <h2 className="section-title">About the Innovator</h2>
      <div id="innovator-profile">
        <img
          src="/assests/images/WhatsApp Image 2025-02-27 at 19.49.40_1c8bd0d3.jpg"
          alt="Alien Seild - Machine Innovator"
          className="profile-img"
          loading="lazy"
        />
        <div className="profile-content">
          <h2>Meet Kwaku Bambobo</h2>
          <p>
            A purpose driven young entrepreneur hailing from Sunyani West,
            passionately committed to transforming agricultural processing. By
            developing accessible and innovative technology solutions, his aim
            is to enhance efficiency and productivity within the farming sector,
            ensuring that local farmers can thrive and improve their
            livelihoods.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovatorProfile;