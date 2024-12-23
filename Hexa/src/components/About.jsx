import React from "react";
 // Ensure styles are in App.css

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your Trusted Place to Buy, Sell, and Rent Properties in India</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make the process of buying, selling, and renting properties in India easy and transparent for everyone. We aim to provide a seamless experience for property seekers and sellers by offering trusted listings and personalized services.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            We envision becoming India's leading real estate platform, known for its reliability, innovation, and customer-centric approach. Our goal is to simplify property transactions and provide the best opportunities for buyers and sellers.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We are committed to being honest and transparent in all our dealings.</li>
            <li><strong>Customer-Centric:</strong> Our customers' needs and satisfaction are our top priority.</li>
            <li><strong>Innovation:</strong> We embrace technology and innovation to provide the best solutions for property transactions.</li>
            <li><strong>Trust:</strong> We build long-term relationships based on trust and mutual respect.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
