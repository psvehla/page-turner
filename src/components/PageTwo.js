import React from 'react';
import logo from '../images/logo.svg';

import './PageTwo.css';

function PageTwo(props) {
  return (
    <div><img src={logo} alt="logo" onClick={() => props.onClick()} /></div>
  );
}

export default PageTwo;
