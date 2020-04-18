import React from 'react';
import logo from '../../images/logo.svg';

import './PageOne.css';

function PageOne(props) {
  return (
    <div><img src={logo} alt="logo" onClick={() => props.onClick()} /></div>
  );
}

export default PageOne;
