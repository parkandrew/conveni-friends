import React from 'react';
import {
	Text,
	TextInput,
	View
} from 'react-native';
import styles from 'client/styles/style';

export default class LoginFormInput extends React.Component {
	render() {
		return (
			<View style={[styles.loginFContainer, this.props.style]}>
				<Text style={styles.loginFormInputHeader}>{this.props.title}</Text>
				<TextInput style={ styles.loginFormInput }
					placeholder={this.props.placeholder}
					onSubmitEditing={this.props.onSubmitEditing}
					secureTextEntry={this.props.secureTextEntry}
					onChangeText={(text) => {this.props.setParentState({[this.props.field]: text})}}/>
			</View>
		);
	}
}
