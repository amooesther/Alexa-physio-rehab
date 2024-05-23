import React, { useState } from 'react';
import logo from '../../Assets/logo192.png';
import "./NavBar.css"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='NavWrapper'>
      <img src={logo} alt="Logo" className="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#" onClick={closeMenu}>Home</a></li>
          <li><a href="#" onClick={closeMenu}>About</a></li>
          <li><a href="#" onClick={closeMenu}>Services</a></li>
          <li><a href="#" onClick={closeMenu}>Contact</a></li>
          <button className='loginBtn'>Login</button>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
