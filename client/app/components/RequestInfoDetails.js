import React from 'react';
import {
	Text,
	StyleSheet,
} from 'react-native';
import styles from 'client/styles/style'

export default class RequestInfoDetails extends React.Component {
	render() {
		return (
				<Text style={styles.primary}>{this.props.primary}:
					<Text style={styles.secondary}>{this.props.secondary}
					</Text>
				</Text>
		);
	}
}
