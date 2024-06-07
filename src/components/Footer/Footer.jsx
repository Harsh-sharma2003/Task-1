import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">

        <div className="footer-logo">
          <img src="https://scholarspace.in/SSL_files/ScholarSpace.png" alt="ScholarSpace Logo" />
          <br/>
          <br/>
          <p>A product of Cryptics India, is a comprehensive web and mobile application tailored for efficient<br/> study space management. From<br/> student details to subscription<br/> plans, seat management to real<br/> time analytics, ScholarSpace<br/>  coversit all.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p><strong >ADDRESS:</strong><br />Plot No 1, Balakund Main Road, Keshavpura, Kota 324010</p>
          <p><strong>EMAIL:</strong><br />Info@crypticsindia.com</p>
          <p><strong>PHONE:</strong><br />+91-7725955255</p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
