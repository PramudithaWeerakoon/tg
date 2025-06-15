import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-logo-section">
        <img src="/images/softlogic.png" alt="Softlogic Stockbrokers Logo" className="footer-logo" />
        <span className="footer-title">Softlogic Stockbrokers</span>
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Softlogic Stockbrokers Pvt. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
