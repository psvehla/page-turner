import React from 'react';
import logo from '../../images/logo.svg';

import './PageSeven.css';

function PageSeven(props) {
  return (
    <div><img src={logo} alt="logo" onClick={() => props.onClick()} /></div>
  );
}

export default PageSeven;
