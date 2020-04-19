import React from 'react';

import {
  PAGE_ONE,
  PAGE_TWO,
  PAGE_THREE,
  PAGE_FOUR,
  PAGE_FIVE,
  PAGE_SIX,
  PAGE_SEVEN,
} from '../../pages.js';

import PageOne from '../page-one/PageOne';
import PageTwo from '../page-two/PageTwo';
import PageThree from '../page-three/PageThree';
import PageFour from '../page-four/PageFour';
import PageFive from '../page-five/PageFive';
import PageSix from '../page-six/PageSix';
import PageSeven from '../page-seven/PageSeven';

import './PageTurner.css';

function PageTurner(props) {
  switch (props.currentPage) {
    case PAGE_ONE:
      return (
        <PageOne onClick={props.onClick} />
      );
    case PAGE_TWO:
      return (
        <PageTwo onClick={props.onClick} />
      );
    case PAGE_THREE:
      return (
        <PageThree onClick={props.onClick} />
      );
    case PAGE_FOUR:
      return (
        <PageFour onClick={props.onClick} />
      );
    case PAGE_FIVE:
      return (
        <PageFive onClick={props.onClick} />
      );
    case PAGE_SIX:
      return (
        <PageSix onClick={props.onClick} />
      );
    case PAGE_SEVEN:
      return (
        <PageSeven onClick={props.onClick} />
      );
    default:
      return (
        <div>
          <p>Current page not recognised!</p>
          <PageOne onClick={props.onClick} />
        </div>
      );
  }
}

export default PageTurner;
