import React from 'react';
import App from './App';

import Login from 'client/app/screens/LoginScreen'
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
	expect(Login.validateUsername(username).to.equal(false));
})

it('does accept username input without special characters', () => {
	const username = 'brandon23';
	expect(Login.validateUsername(username).to.equal(false));
})