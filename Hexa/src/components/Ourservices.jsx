import React from "react";
 // Ensure styles are in "
 import residential from "../assets/images/download.jpg"
 import commercial from "../assets/images/commercial.jpg"
 import hostel from "../assets/images/hostel.jpg"
 import plot from "../assets/images/plot.jpg"
 import share from "../assets/images/share.jpg"
import mate from "../assets/images/mate.jpg"
 



const Ourservices = () => {
  const services = [
    { img: residential, label: "Residential" },
    { img: commercial, label: "Commercial" },
    { img: hostel, label: "PG/Hostel" },
    { img: plot, label: "Plot/Land" },
    { img: share, label: "Shared Flats" },
    { img: mate, label: "Flatmates" },
  ];

  return (
    <div className="services-section">
      <h2>Our Excellent Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <img src={service.img} alt={service.label} className="service-image" />
            <p className="service-label">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;
