import React from 'react';
import renderer from 'react-test-renderer';
import PageSeven from './PageSeven';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageSeven />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
