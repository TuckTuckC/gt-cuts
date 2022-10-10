import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <a href="/">Home</a>
      <a href="/lawn-care">Lawn Care</a>
      <a href="/">Yard Clean Up</a>
      <a href="/">Tree Services</a>
      <a href="/">Concrete</a>
      <a href="/">Snow Removal</a>
    </div>
  );
};

export default Navbar;