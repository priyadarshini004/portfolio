import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navigation.css';
import { Link as ScrollLink } from 'react-scroll';

function Navigation() {
  const [isNavVisible, setNavVisible] = useState(false);

  const closeNavBar = () => {
    setNavVisible(false);
  };

  return (
    <div>
      <header>
        <nav className={isNavVisible ? "responsive_nav" : ""}>
          <h2>
            <ScrollLink to="home" smooth={true} duration={500} onClick={closeNavBar}>Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} onClick={closeNavBar}>About</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={closeNavBar}>Skills</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={closeNavBar}>Projects</ScrollLink>
          </h2>

          <button className="nav-btn nav-close-btn" onClick={() => setNavVisible(false)}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn nav-open-btn" onClick={() => setNavVisible(!isNavVisible)}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navigation;



