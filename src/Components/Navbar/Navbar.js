import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <a href="/">GT</a>
      <div className="divider"></div>
      <a href="/lawncare">Lawn Care</a>
      <div className="divider"></div>
      <a href="/">Yard Clean Up</a>
      <div className="divider"></div>
      <a href="/">Tree Services</a>
      <div className="divider"></div>
      <a href="/">Pressure Washing</a>
      <div className="divider"></div>
      <a href="/">Plumbing</a>
      <div className="divider"></div>
      <a href="/">Electrical</a>
      <div className="divider"></div>
      <a href="/">Our Crew</a>
    </div>
  );
};

export default Navbar;