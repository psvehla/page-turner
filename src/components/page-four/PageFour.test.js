import React from 'react';
import renderer from 'react-test-renderer';
import PageFour from './PageFour';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageFour />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
