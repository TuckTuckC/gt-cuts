import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <a href="/">GT</a>
      <div className="divider"></div>
      <a href="/lawn-care">Lawn Care</a>
      <div className="divider"></div>
      <a href="/">Yard Clean Up</a>
      <div className="divider"></div>
      <a href="/">Tree Services</a>
      <div className="divider"></div>
      <a href="/">Plumbing</a>
      <div className="divider"></div>
      <a href="/">Electrical</a>
    </div>
  );
};

export default Navbar;