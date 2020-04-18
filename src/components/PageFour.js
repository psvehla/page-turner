import React from 'react';
import logo from '../images/logo.svg';

import './PageFour.css';

function PageFour(props) {
  return (
    <div><img src={logo} alt="logo" onClick={() => props.onClick()} /></div>
  );
}

export default PageFour;
