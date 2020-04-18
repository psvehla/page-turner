import React from 'react';
import logo from '../../images/logo.svg';

import './PageFive.css';

function PageFive(props) {
  return (
    <div><img src={logo} alt="logo" onClick={() => props.onClick()} /></div>
  );
}

export default PageFive;
