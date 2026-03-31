import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/careers', label: 'Careers' },
  { path: '/skills', label: 'Skills' },
  { path: '/study-nepal', label: 'Study Nepal' },
  { path: '/study-abroad', label: 'Study Abroad' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo" aria-label="NextStep Nepal home">
          <span className="logo-icon">🧭</span>
          <span className="logo-main">NextStep <span>Nepal</span></span>
          <span className="logo-sub">Career guidance</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <NavLink to={path} className={({ isActive }) => isActive ? 'active-link' : ''}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/careers" className="btn-nav-primary">Explore Now →</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
