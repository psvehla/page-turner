import React from 'react';
import bike from '../../images/5.jpg';

import './PageFive.css';

function PageFive(props) {
  return (
    <div><img src={bike} alt="bike" onClick={() => props.onClick()} /></div>
  );
}

export default PageFive;
