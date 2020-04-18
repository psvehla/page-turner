import React from 'react';

import { PAGE_ONE, PAGE_TWO, PAGE_THREE, PAGE_FOUR } from '../../pages.js';
import PageOne from '../page-one/PageOne';
import PageTwo from '../page-two/PageTwo';
import PageThree from '../page-three/PageThree';
import PageFour from '../page-four/PageFour';

import './PageTurner.css';

function PageTurner(props) {
  switch (props.currentPage) {
    case PAGE_ONE:
      return (
        <div>
          <p>Current page: {props.currentPage}</p>
          <PageOne onClick={props.onClick} />
        </div>
      );
      case PAGE_TWO:
        return (
          <div>
            <p>Current page: {props.currentPage}</p>
            <PageTwo onClick={props.onClick} />
          </div>
        );
        case PAGE_THREE:
          return (
            <div>
              <p>Current page: {props.currentPage}</p>
              <PageThree onClick={props.onClick} />
            </div>
          );
          case PAGE_FOUR:
            return (
              <div>
                <p>Current page: {props.currentPage}</p>
                <PageFour onClick={props.onClick} />
              </div>
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
