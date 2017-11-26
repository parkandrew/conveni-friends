import React from 'react';
import {
	Text,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import styles from 'client/styles/style';

export default class FormInput extends React.Component {

	render() {
		return (
			<View>
				<TouchableOpacity>
					<Text>{this.props.data.key}{this.props.data.info}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
