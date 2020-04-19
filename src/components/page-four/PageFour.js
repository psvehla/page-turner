import React from 'react';
import bike from '../../images/4.jpg';

import './PageFour.css';

function PageFour(props) {
  return (
    <div className="imgbox">
      <img className="centre-fit" src={bike} alt="bike" onClick={() => props.onClick()} />
    </div>
  );
}

export default PageFour;
