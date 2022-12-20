import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='Home'>
      <div className='card'>
        <div className="column">
          <h1>Located in Bumbcombe & Haywood County</h1>
          <div className="divider"></div>
          <h1>Keeping Homes Beautiful and Maintained!</h1>
        </div>

        <div className="column2">
          <p>"We will bring fresh and innovative ideas and solutions, along with a variety of quality services, to help improve and polish your everyday life"</p>
          <div className="contact">
            <h3>Contact Us</h3>
            <p>Call Us: <a href="tel:8284050462" className="contactLink phone">(828) 405-0462</a></p>
            <p>Email Us: <a className='contactLink email' href="mailto: GT.Streamlined1@gmail.com">GT.Streamlined1@gmail.com</a></p>
          </div>
        </div>
        
        <button className='start'>GET STARTED</button>

      </div>
      

      {/* <div className="card">
        <h2>Services We Offer</h2>
        <div className="services">
          <p>Lawn Mowing</p>
          <p>Weedeating</p>
          <p>Leaf Blowing</p>
          <p>Hedge Trimming</p>
          <p>Mulching</p>
          <p>Yard Cleanup</p>
          <p>Outdoor Fireplace Installation</p>
          <p>Brush Removal</p>
          <p>Fire Wood</p>
          <p>Tree Removal</p>
          <p>Trash Removal</p>
          <p>Garden Bed Clearing</p>
          <p>Leaf Clearing</p>
          <p>Gutter Clearing</p>
          <p>Roof Cleaning</p>
          <p>Pressure Washing</p>
          <p>Snow Removal</p>
          <p>Irrigation Installation</p>
          <p>Car Audio Upgrades</p>
          <p>Porch Screening</p>
        </div>
      </div> */}

      {/* Contact Form */} 
    </div>
  );
};

export default Home;
