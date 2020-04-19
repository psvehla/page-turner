import React from 'react';
import renderer from 'react-test-renderer';
import PageTwo from './PageTwo';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageTwo />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
