import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './js/LoginScreen'
import HomeScreen from './js/HomeScreen'
import MakeRequest from './js/MakeRequestScreen/MakeRequest';
import { StackNavigator } from 'react-navigation';

const ReactNavigation = StackNavigator({
	Home: { screen: HomeScreen },
	Login: { screen: LoginScreen },
	MakeRequest: {screen: MakeRequest},
})

export default class App extends React.Component {
	render() {
		return <ReactNavigation/>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
