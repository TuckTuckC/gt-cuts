import React from 'react';

import weedeater from '../../images/Weedeaters.jpg';

import './Lawncare.css';

function Lawncare() {
  return (
    <div className='Lawncare'>
      <p>This is all about lawncare</p>
      <img src={weedeater} alt="Two men with weedeaters" />
    </div>
  );
};

export default Lawncare;