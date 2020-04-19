import React from 'react';
import bike from '../../images/7.jpg';

import './PageSeven.css';

function PageSeven(props) {
  return (
    <div><img src={bike} alt="bike" onClick={() => props.onClick()} /></div>
  );
}

export default PageSeven;
