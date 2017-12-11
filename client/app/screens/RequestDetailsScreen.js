import React from 'react';
import axios from 'axios';
import moment from 'moment';

import { AsyncStorage, Button, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import RequestInfoLine from 'client/app/components/RequestInfoDetails';
import CustomButton from 'client/app/components/CustomButton';

import { getUser } from 'client/app/utils';
import styles from 'client/styles/style';
import config from 'client/config';

export default class RequestDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Request Details',
	}

	constructor(props) {
		super(props);

		this.state = {
			userId: '',
		};

		this.getButtons = this.getButtons.bind(this);
		this.accept = this.accept.bind(this);
		this.complete = this.complete.bind(this);
	}

	componentWillMount() {
		AsyncStorage.getItem('userId')
			.then(userId => this.setState({ userId }));
	}

	getButtons() {
		const { userId } = this.state;
		const { accepted, requesterId } = this.props.navigation.state.params.data;

		if (!userId || userId == requesterId) {
			return;
		}

		return accepted
			? <Button title="Accept" onPress={() => this.accept()} />
			: <Button title="Complete" onPress={() => this.complete()} />;
	}

	accept() {
		const { userId } = this.state;
		const { requesterId, requestId } = this.props.navigation.state.params.data;

		axios.post(`${config.API_URL}/v1/request/${requestId}/accept`, {
			userId,
			time: moment().format('YYYY-MM-DD HH:MM:SS')
		});
	}

	complete() {
		const { userId } = this.state;
		const { requesterId, requestId } = this.props.navigation.state.params.data;

		axios.post(`${config.API_URL}/v1/request/${requestId}/complete`, {
			userId,
			time: moment().format('YYYY-MM-DD HH:MM:SS')
		});
	}

	render() {
		const request = this.props.navigation.state.params.data;
		const { requesterId, title, location, details } = request;
		const { startTime, endTime, accepted, confirmed, completed } = request;
		const { userId } = this.state;

		return (
			<View style={{ flex: 1 }}>
				<ScrollView style={styles.detailsMakeContainer}>
					<View style={styles.makeInputView}>
						<RequestInfoLine primary={'Request'} secondary={' ' + title} />
						<RequestInfoLine primary={'Location'} secondary={' ' + location} />
						<RequestInfoLine primary={'Start Time'} secondary={' ' + startTime} />
						<RequestInfoLine primary={'End Time'} secondary={' ' + endTime} />
						<Text style={styles.key}>Details: <Text style={styles.value}>{' ' + details}</Text></Text>
					</View>
					<CustomButton style={styles.buttonContainer} text={'Message Requester'}/>
					{ this.getButtons() }
				</ScrollView>
			</View>
		);
	}
}
