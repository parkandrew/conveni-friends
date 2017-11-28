import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RequestInfoLine from 'client/app/components/RequestInfoDetails';
import CustomButton from 'client/app/components/CustomButton';
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
			details: 'like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eould like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplantsome rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eggplants, 2 oranges, and some rice. I would like 3 eould like 3 eggplants, 2 oranges, and some rice. I would like '
		}
		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={reqStyles.makeContainer}>
					<View style={reqStyles.makeInputView}>
						<RequestInfoLine primary={'Request'} secondary={requestDetails.title} />
						<RequestInfoLine primary={'Location'} secondary={requestDetails.location} />
						<RequestInfoLine primary={'Start Time'} secondary={requestDetails.startTime} />
						<RequestInfoLine primary={'End Time'} secondary={requestDetails.endTime} />
						<Text style={reqStyles.key}>Details: <Text style={reqStyles.value}>{requestDetails.details}</Text></Text>
					</View>
					<CustomButton style={reqStyles.buttonContainer} text={'Message Requester'}/>
				</ScrollView>
			</View>
		);
	}
}

// move to styles when it gets cleaned up
const reqStyles = {
	makeContainer: {
		backgroundColor: 'white',
		paddingRight: 10,
		paddingLeft: 10,
		paddingTop: 25,

	},
	buttonContainer: {
		alignItems: 'center',
	},
	key: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#3D95DA',
	},
	value: {
		fontWeight: 'normal'
	},
};