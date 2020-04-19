import React from 'react';
import bike from '../../images/6.jpg';

import './PageSix.css';

function PageSix(props) {
  return (
    <div><img src={bike} alt="bike" onClick={() => props.onClick()} /></div>
  );
}

export default PageSix;
