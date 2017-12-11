import React from 'react';
import axios from 'axios';
import moment from 'moment';

import { Button, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RequestInfoLine from 'client/app/components/RequestInfoDetails';
import CustomButton from 'client/app/components/CustomButton';
import styles from 'client/styles/style';
import config from 'client/config';

export default class RequestDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Request Details',
	}

	constructor(props) {
		super(props);

		this.state = {
		};

		this.accept = this.accept.bind(this);
		this.complete = this.complete.bind(this);
	}

	accept() {
		const { requesterId, requestId } = this.props.navigation.state.params.data;

		axios.post(`${config.API_URL}/v1/request/${requestId}/accept`, {
			userId: requesterId,
			time: moment().format('YYYY-MM-DD HH:MM:SS')
		});
	}

	complete() {
		const { requesterId, requestId } = this.props.navigation.state.params.data;

		axios.post(`${config.API_URL}/v1/request/${requestId}/complete`, {
			userId: requesterId,
			time: moment().format('YYYY-MM-DD HH:MM:SS')
		});
	}

	render() {
		const { title, location, details } = this.props.navigation.state.params.data;
		const { startTime, endTime } = this.props.navigation.state.params.data;
		const { accepted, confirmed, completed } = this.props.navigation.state.params.data;

		return (
			<View style={styles.simpleContainer}>
				<ScrollView style={styles.detailsMakeContainer}>
					<View style={styles.makeInputView}>
						<RequestInfoLine primary={'Request'} secondary={' ' + title} />
						<RequestInfoLine primary={'Location'} secondary={' ' + location} />
						<RequestInfoLine primary={'Start Time'} secondary={' ' + startTime} />
						<RequestInfoLine primary={'End Time'} secondary={' ' + endTime} />
						<Text style={styles.key}>Details: <Text style={styles.value}>{' ' + details}</Text></Text>
					</View>
					<CustomButton style={styles.buttonContainer} text={'Message Requester'}/>
					{ accepted
						? <CustomButton
								onPressHandle={() => {this.accept()}}
								style={styles.buttonContainer}
								text={'Accept'}
							/>
						: <CustomButton
								onPressHandle={() => {this.complete()}}
								style={styles.buttonContainer}
								text={'Complete'}
							/>
					}
				</ScrollView>
			</View>
		);
	}
}
