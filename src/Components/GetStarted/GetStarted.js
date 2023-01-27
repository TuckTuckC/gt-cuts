import React from 'react';

import './GetStarted.css';

function GetStarted({opened, setOpened}) {
  return (
    <div className={opened ? 'GetStarted opened' : 'GetStarted'}>
        <button className="close" onClick={() => setOpened(false)}>Close</button>
        <div className="startInfo email">Email us here!</div>
        <div className="startInfo call">Call us!</div>
        <div className="startInfo schedule">Schedule a consultation with us!</div>
    </div>
  );
};

export default GetStarted;