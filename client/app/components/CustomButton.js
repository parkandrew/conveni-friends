import React from 'react';
import {
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';

export default class CustomButton extends React.Component {

	render() {
		return (
			<View style={this.props.style}>
				<TouchableOpacity activeOpacity={0.4} style={styles.button} onPress={this.props.onPressHandle}>
					<Text style={styles.font}>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = {
	button: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: 45,
		marginBottom: 65,
		borderColor: '#3D95DA',
		height: 40,
		paddingBottom: 5,
		width: 300,
		borderWidth: 2,
		backgroundColor: 'white',
		borderRadius: 6
	},
	font: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#3D95DA',
	},
}