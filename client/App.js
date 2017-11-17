import React from 'react';
//import { Stylesheet, Text, View } from 'react-native';
import LoginScreen from './js/LoginScreen'
import HomeScreen from './js/HomeScreen'
import MakeRequest from './js/MakeRequestScreen/MakeRequest';
import Account from './js/Account/Account';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.19
 // 1.0.0-beta.19./


 // ERROR. The Expo team has been notified.


 // 1.1.1
import SignupScreen from './js/SignupScreen';
import NearbyRequests from './js/NearbyRequests';

const ReactNavigation = StackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: LoginScreen },
	MakeRequest: {screen: MakeRequest},
	Signup: {screen: SignupScreen},
	NearbyRequests: {screen: NearbyRequests},
	Account: {screen: Account}
})

export default class App extends React.Component {
	render() {
		return <ReactNavigation/>;
	}
}
