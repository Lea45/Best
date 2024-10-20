import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa"; // Importing FontAwesome icon
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state
  };

  return (
    <nav className="navbar">
      {/* Left side: Coffee Icon and Text (only for mobile view) */}
      <div className="brand-container">
        <FaCoffee className="coffee-icon" />
        <span className="brand-text">Best</span>
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
