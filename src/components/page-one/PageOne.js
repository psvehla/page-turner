import React from 'react';
import bike from '../../images/1.jpg';

import './PageOne.css';

function PageOne(props) {
  return (
    <div><img src={bike} alt="bike" onClick={() => props.onClick()} /></div>
  );
}

export default PageOne;
