import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders login screen', () => {
	const rendered = renderer.create(<Login />).toJSON();
	expect(rendered).toBeTruthy();
})

it('does not accept username input with special characters', () => {
	const username = 'brandon/';
	expect(validateUsername(username).to.equal(false));
})

it('does accept username input without special characters', () => {
	const username = 'brandon23';
	expect(validateUsername(username).to.equal(false));
})