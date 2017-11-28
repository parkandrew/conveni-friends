import React from 'react';
import {View, Text} from 'react-native';
import styles from 'client/styles/style';
export default class RequestDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Request Details',
	}

	constructor(props) {
		super(props);
	}
	render() {
		const requestDetails = {
			title: 'Groceries from Ralph\'s',
			location: '1000 Tiverton Ave',
			distance: '0.5 mi',
			startTime: '9:00 am',
			endTime: '10:00 pm',
			details: 'I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. '
		}
		return (
			<View style={styles.makeContainer}>
				<View style={styles.makeInputView}>
					<Text style={[styles.makeSingleLine, reqStyles.key]}>Request: <Text style={styles.value}>{requestDetails.title}</Text></Text>
					<Text style={[styles.makeSingleLine, reqStyles.key]}>Location: <Text>{requestDetails.location}</Text><Text> ({requestDetails.distance})</Text></Text>
					<View style={[styles.makeDateContainer, styles.makeSingleLine]}>
						<Text style={reqStyles.key}>Start Time: {requestDetails.startTime}</Text>
						<Text style={reqStyles.key}>End Time: {requestDetails.endTime}</Text>
					</View>
					<Text style={reqStyles.key}>Details: <Text>{requestDetails.details}</Text></Text>
				</View>
			</View>
		);
	}
}

const reqStyles = {
	outerContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	innerContainer: {
		flex: .8,
		justifyContent: 'space-between'

	},
	key: {
		fontSize: 20
	},
	value: {
		fontSize: 16
	}
}