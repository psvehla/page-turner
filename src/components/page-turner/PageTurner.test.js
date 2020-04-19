import React from 'react';
import renderer from 'react-test-renderer';
import PageTurner from './PageTurner';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageTurner />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
