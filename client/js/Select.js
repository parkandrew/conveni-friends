import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Select extends React.Component {
	static navigationOptions = {
		title: 'Select request or provide.',
	};
  	render() {
		function onPressHandle() {
			console.log("Pressed!");
		}
		return (
			<View style={styles.container}>
				<Text>I am a...</Text>
				<Button title="Requester" onPress={onPressHandle} />
				<Button title="Provider" onPress={onPressHandle}/>
			</View>
    	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ADD8E6',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
