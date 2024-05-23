import React, { useState } from 'react';
import logo from '../../Assets/logo192.png';
import "./NavBar.css"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='NavWrapper'>
      <img src={logo} alt="Logo" className="logo" />
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <button className='loginBtn'>Login</button>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
