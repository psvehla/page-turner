import React from 'react';
import bike from '../../images/3.jpg';

import './PageThree.css';

function PageThree(props) {
  return (
    <div><img src={bike} alt="bike" onClick={() => props.onClick()} /></div>
  );
}

export default PageThree;
