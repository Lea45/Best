import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a cozy café serving premium coffee, refreshing sodas, and a
            selection of alcoholic beverages. Located at the heart of the city,
            we offer a warm and inviting space to relax.
          </p>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <ul>
            <li>Monday - Friday: 7:00 AM - 10:00 PM</li>
            <li>Saturday: 8:00 AM - 11:00 PM</li>
            <li>Sunday: 8:00 AM - 8:00 PM</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Address: Avenue des Champs-Élysées, Paris</p>
          <p>Phone: +33(0)15672385</p>
          <p>Email: champs.honey@gmail.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copy">
        &copy; 2024 Lea Varžić. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
