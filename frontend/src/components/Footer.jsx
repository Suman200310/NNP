import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">🧭 NextStep<span>Nepal</span></div>
          <p className="footer-description">
            The most trusted career guidance platform for Nepali students. 
            From local degrees to global opportunities, we guide you every step of the way.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" title="Facebook">📘</a>
            <a href="#" className="social-link" title="Instagram">📸</a>
            <a href="#" className="social-link" title="LinkedIn">💼</a>
            <a href="#" className="social-link" title="TikTok">🎵</a>
          </div>
        </div>

        <div className="footer-nav">
          <div className="footer-column">
            <h4>Platform</h4>
            <Link to="/careers">Career Roadmaps</Link>
            <Link to="/skills">Skill Building</Link>
            <Link to="/blog">Latest Articles</Link>
            <Link to="/about">Our Story</Link>
          </div>
          
          <div className="footer-column">
            <h4>Education</h4>
            <Link to="/study-nepal">Study in Nepal</Link>
            <Link to="/study-abroad">Study Abroad</Link>
            <Link to="/scholarships">Scholarships</Link>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
            <div className="contact-info">
              <div className="contact-item">📧 hello@nextstepnepal.com</div>
              <div className="contact-item">📍 Kathmandu, Nepal</div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>© 2026 NextStep Nepal. All rights reserved.</p>
          <div className="footer-badges">
            <span className="footer-badge">🎓 30+ Careers</span>
            <span className="footer-badge">🌏 7 Countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
