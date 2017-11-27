import React from 'react';
import { StyleSheet, FlatList, ListView, Alert, Text, View, TextInput, Button } from 'react-native';
import RequestListComponent from 'client/app/components/RequestListComponent';

export default class PersonalAcceptScreen extends React.Component {
	static navigationOptions = {
		//headerLeft: null,
		tabBarLabel: 'Accepted Requests'
	}
	constructor(props) {
		super(props);
	}
	render() {
		// const { navigate } = this.props.navigation;
		const data = [
			{ key: 'Another one', distance: '1.6 mi', startTime: '9:00am', endTime: '10:00pm' },
			{ key: 'Ride to Von\'s', distance: '1.4 mi', startTime: '1:00am', endTime: '2:00am'},
			{ key: 'I really want you to drive me to costco', distance: '20 mi', startTime: '9:00am', endTime: '10:00pm'}
		];

		return (
			<RequestListComponent data={data}/>
		);
	}
}
