import React from 'react';
import renderer from 'react-test-renderer';
import PageThree from './PageThree';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageThree />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
