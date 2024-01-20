import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
// Add a scroll event listener
useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20; // Adjust the scroll threshold as needed
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

const handleHomeClick = () => {
    // Scroll to the top when the "Home" link is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    // Close the overlay menu if it's open
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src="/assets/logo.png" alt="Logo" />
      </div>
      {/* Show normal nav links on larger screens */}
      <div className="nav-links">
        <ul>
          <li>
            <a href="#hero" onClick={handleHomeClick}>Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Apply the menu-button class only on smaller screens */}
      <button className={`menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className={`overlay ${isMenuOpen ? 'show' : ''}`} onClick={toggleMenu}></div>
      <div className={`overlay-menu ${isMenuOpen ? 'show' : ''}`}>
        {/* Show menu links on smaller screens */}
        <ul>
          <li>
            <a href="#hero" onClick={handleHomeClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={toggleMenu}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
