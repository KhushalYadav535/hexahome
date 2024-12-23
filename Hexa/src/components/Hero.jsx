import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Ghar Aapka...</h1>
        <p>
          KHOJ HAMARI! <br />
          Trusted place to buy, sell, or rent properties in India.
        </p>

        {/* Options Container */}
        <div className="options-container">
          <button>Buy</button>
          <button>Plot/Lands</button>
          <button>Rent</button>
          <button>PG/Hostel</button>
          <button>Projects</button>
          <button>Commercial</button>
        </div>

        {/* Search Container */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search properties, locations, or projects"
          />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
