import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RequestInfoLine from 'client/app/components/RequestInfoDetails';
import CustomButton from 'client/app/components/CustomButton';
import styles from 'client/styles/style';
export default class RequestDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Request Details',
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={reqStyles.makeContainer}>
					<View style={reqStyles.makeInputView}>
						<RequestInfoLine primary={'Request'} secondary={this.props.navigation.state.params.data.title} />
						<RequestInfoLine primary={'Location'} secondary={this.props.navigation.state.params.data.location} />
						<RequestInfoLine primary={'Start Time'} secondary={this.props.navigation.state.params.data.startTime} />
						<RequestInfoLine primary={'End Time'} secondary={this.props.navigation.state.params.data.endTime} />
						<Text style={reqStyles.key}>Details: <Text style={reqStyles.value}>{this.props.navigation.state.params.data.details}</Text></Text>
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
