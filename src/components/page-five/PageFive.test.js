import React from 'react';
import renderer from 'react-test-renderer';
import PageFive from './PageFive';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageFive />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
