import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {

  const tree = renderer
    .create(<App page="https://localhost:3000">AnimalSentences</App>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
