import React from 'react';
import {
	Text,
	TextInput,
	View
} from 'react-native';
import styles from 'client/styles/style';

export default class FormInput extends React.Component {
	render() {
		return (
			<View style={[styles.formContainer, this.props.style]}>
				<Text style={styles.formInputHeader}>{this.props.title}</Text>
				<TextInput style={this.props.multiLine ? [styles.formInput, styles.formMultiLine] : styles.formInput }
					placeholder={this.props.placeholder} multiline={this.props.multiLine}
					onSubmitEditing={this.props.onSubmitEditing} secureTextEntry={this.props.secureTextEntry}
					onChangeText={(text) => {this.props.setParentState({[this.props.field]: text})}}/>
			</View>
		);
	}
}
