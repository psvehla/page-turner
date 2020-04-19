import React from 'react';
import renderer from 'react-test-renderer';
import PageSix from './PageSix';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageSix />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
