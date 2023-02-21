import React from 'react';

import './About.css';

function About() {
  return (
    <div id='section3' className='component about'>
      <h1 className='title'>About Us</h1>
      <div className="info">
        <h2 className='infoTitle title'>What We Are</h2>
        <p className='info'>We are a sub-contracting business specializing in the Plumbing and Electrical trades</p>
        <h2 className='infoTitle title'>Why We Started</h2>
        <p className='info'>This company started from two brothers who love problem-solving and working together, and what better way to do so than finding the best and most efficient solutions to modern housing developments.</p>
        <h2 className='infoTitle title'>The Shape of this Company</h2>
        <p className='info'>We aim to build homes that look fantastic, from the plumbing fittings inside the walls, to the structure itself. We are very system-oriented, we check everything, and check it twice.</p>
        <h2 className='infoTitle title'>Our Values</h2>
        <p className='info'>We want you to choose us becuase we want you to have the safest and most reliable home.</p>
      </div>
    </div>
  );
};

export default About;