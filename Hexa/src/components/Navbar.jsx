import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBuyerDropdownOpen, setIsBuyerDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isAppDropdownOpen, setIsAppDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleBuyerDropdown = () => {
    setIsBuyerDropdownOpen(!isBuyerDropdownOpen);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  const toggleAppDropdown = () => {
    setIsAppDropdownOpen(!isAppDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">HexaHome</div>
      <button className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>

        {/* Buyer by City Dropdown */}
        <li className="dropdown">
          <a href="#" onClick={toggleBuyerDropdown}>Buyer by City</a>
          {isBuyerDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">City 1</a></li>
              <li><a href="#">City 2</a></li>
              <li><a href="#">City 3</a></li>
            </ul>
          )}
        </li>

        {/* Login Dropdown */}
        <li className="dropdown">
          <a href="#" onClick={toggleLoginDropdown}>Login</a>
          {isLoginDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Sign In</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          )}
        </li>

        {/* Download App Dropdown */}
        <li className="dropdown">
          <a href="#" onClick={toggleAppDropdown}>Download App</a>
          {isAppDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#">Android</a></li>
              <li><a href="#">iOS</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
