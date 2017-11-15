import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class Login extends React.Component {
	static navigationOptions = {
		title: 'Welcome',
	};

  	render() {
		const { navigate } = this.props.navigation;
		function onPressHandle() {
			console.log("Pressed!");
			navigate('MakeRequest');
		}
		return (
			<View style={styles.container}>
				<Text>Welcome to Conveni-friends</Text>
				<TextInput placeholder="Username"/>
				<TextInput placeholder="Password"/>
				<Button title="Login" onPress={onPressHandle} />
				<Button title="Sign Up" onPress={onPressHandle}/>
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
