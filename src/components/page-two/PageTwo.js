import React from 'react';
import bike from '../../images/2.jpg';

import './PageTwo.css';

function PageTwo(props) {
  return (
    <div><img src={bike} alt="bike" onClick={() => props.onClick()} /></div>
  );
}

export default PageTwo;
