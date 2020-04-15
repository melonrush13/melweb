import React from 'react';
import './Travel.css';


function Travel() {
  return (
    <div className="Travel">
        <div className="wrapper">
        <div>
          <h1>Places</h1>
          <h3>New Zealand</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XALp4EHlPuA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gzoum6EGSUA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <h3> Boulder</h3>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/YGMn4vOzBBg"allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        </div>
    </div>
  );
}

export default Travel;
