import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './js/Login'
import Select from './js/Select'
import { StackNavigator } from 'react-navigation';

const ReactNavigation = StackNavigator({
	Home: { screen: Login },
	Select: { screen: Select},
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
