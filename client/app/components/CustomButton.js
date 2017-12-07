import React from 'react';
import {
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import styles from 'client/styles/style';

export default class CustomButton extends React.Component {

	render() {
		return (
			<View style={this.props.style}>
				<TouchableOpacity activeOpacity={0.4} style={styles.custom_button} onPress={this.props.onPressHandle}>
					<Text style={styles.custom_button_font}>{this.props.text}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
