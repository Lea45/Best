// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/pricelist">Pricelist</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
