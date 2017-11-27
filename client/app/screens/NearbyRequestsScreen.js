import React from 'react';
import { StyleSheet, FlatList, ListView, Alert, Text, View, TextInput, Button } from 'react-native';
// import styles from 'client/styles/style';
import RequestListComponent from 'client/app/components/RequestListComponent';

export default class NearbyRequests extends React.Component {
	static navigationOptions = {
		//headerLeft: null,
	}
	constructor(props) {
		super(props);
	}
	render() {
		// const { navigate } = this.props.navigation;
		const data = [
			{ key: 'In-n-out', distance: '0.6 mi', startTime: '9:00am', endTime: '10:00pm' },
			{ key: 'Ride to Ralph\'s', distance: '1.4 mi', startTime: '1:00am', endTime: '2:00am'},
			{ key: 'Need to use a printer for essayasdfasdf asdfasdf sad', distance: '1000 mi', startTime: '9:00am', endTime: '10:00pm'}
		];

		return (
			<RequestListComponent data={data}/>
		);
	}
}
