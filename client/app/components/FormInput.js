import React from 'react';
import {
	Text,
	TextInput,
	View
} from 'react-native';
import styles from 'client/styles/style';

export default class FormInput extends React.Component {

	render() {
		console.log(this.props.style);
		return (
			<View style={[styles.formContainer, this.props.style]}>
				<Text style={styles.formInputHeader}>{this.props.title}</Text>
				<TextInput style={this.props.multiLine ? [styles.formInput, styles.formMultiLine] : styles.formInput } placeholder={this.props.placeholder} multiline={this.props.multiLine}/>
			</View>
		);
	}
}
