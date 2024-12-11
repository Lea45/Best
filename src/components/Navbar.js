import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left side: Coffee Icon and Text (only for mobile view) */}
      <div className="brand-container">
        <FaCoffee className="coffee-icon" />
        <span className="brand-text">Honey</span>
      </div>

      {/* Right side: Hamburger Menu */}
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        &#9776;
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/pricelist" onClick={() => setMenuOpen(false)}>
            Pricelist
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
