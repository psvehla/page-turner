import React from 'react';
import renderer from 'react-test-renderer';
import PageOne from './PageOne';

it('renders correctly', () => {

  const tree = renderer
    .create(<PageOne />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
