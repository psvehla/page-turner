import React from 'react';
import logo from '../../images/logo.svg';

import './PageSix.css';

function PageSix(props) {
  return (
    <div><img src={logo} alt="logo" onClick={() => props.onClick()} /></div>
  );
}

export default PageSix;
