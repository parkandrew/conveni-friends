import React from 'react';
import {
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import styles from 'client/styles/style'

export default class ListSeparator extends React.Component {
	render() {
		return (
			<View
			style={styles.listSeparatorContainer}
		/>
		);
	}
}