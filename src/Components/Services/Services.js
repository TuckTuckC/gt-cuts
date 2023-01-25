import React from 'react'

import './Services.css';

function Services() {
  return (
    <div className='component services'>
      <h1 className="title">Services</h1>
      <div className="categories">
        <div className="serviceList">
          <div className="serviceTitle title">Landscaping</div>
          <div className="serviceItem">Lawn Mowing</div>
          <div className="serviceItem">Leaf Blowing</div>
          <div className="serviceItem">Landscape Rock Installation</div>
          <div className="serviceItem">Mulching</div>
          <div className="serviceItem">Yard Cleanup</div>
          <div className="serviceItem">Tree Removal</div>
        </div>
        <div className="serviceList">
          <div className="serviceTitle title">Plumbing</div>
          <div className="serviceItem">New-Construction Water Lines</div>
          <div className="serviceItem">New-Construction Drain Lines</div>
          <div className="serviceItem">Bathroom Remodeling</div>
          <div className="serviceItem">Showers / Toilets</div>
          <div className="serviceItem">Leak Repair</div>
          <div className="serviceItem">Quality of Life Improvements</div>
        </div>
        <div className="serviceList">
          <div className="serviceTitle title">Electrical</div>
          <div className="serviceItem">Lawn Mowing</div>
          <div className="serviceItem">Leaf Blowing</div>
          <div className="serviceItem">Pressure Washing</div>
          <div className="serviceItem">Mulching</div>
          <div className="serviceItem">Yard Cleanup</div>
          <div className="serviceItem">Tree Removal</div>
        </div>
        <div className="more">And more, just ask!!</div>
      </div>
    </div>
  )
}

export default Services;