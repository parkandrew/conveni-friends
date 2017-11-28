import React from 'react';
import {
	Text,
	StyleSheet,
} from 'react-native';
import styles from 'client/styles/style'

export default class RequestInfoDetails extends React.Component {
	render() {
		return (
			<Text style={[reqStyles.key]}>{this.props.primary}: <Text style={reqStyles.value}>{this.props.secondary}</Text></Text>
		);
	}
}

// move to styles when it gets cleaned up
const reqStyles = {
	makeContainer: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		padding: 10,
		paddingTop: 70,
	},
	key: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#3D95DA',
		marginBottom: 20
	},
	value: {
		fontWeight: 'normal'
	}
};