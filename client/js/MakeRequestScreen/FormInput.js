import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native';

export default class FormInput extends React.Component {

	render() {
		console.log(this.props.style);
		return (
			<View style={[styles.container, this.props.style]}>
				<Text style={styles.inputHeader}>{this.props.title}</Text>
				<TextInput style={this.props.multiline ? [styles.input, styles.multiline] : styles.input } placeholder={this.props.placeholder} multiline={this.props.multiline}/>
			</View>
		);
	}	
}
// port this to styles file
let screenWidth = 350;
let fontSize = 20;
const styles = StyleSheet.create({
	container: {
		alignItems: 'flex-start',
	},
	input: {
		backgroundColor:'#FFF',
		padding: 10,
		width: screenWidth,
		height: fontSize + 16,
		fontSize: fontSize,
		borderColor: '#3D95DA',
		borderWidth: 2,
		borderRadius: 6
	},
	inputHeader: {
		fontSize: fontSize,
		marginBottom: 1
	},
	multiline: {
		height: fontSize * 6,
	}
});
