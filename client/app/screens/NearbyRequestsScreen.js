import React from 'react';
import RequestListComponent from 'client/app/components/RequestListComponent';

export default class NearbyRequests extends React.Component {
	static navigationOptions = {
		title: 'Nearby Requests'
	}
	constructor(props) {
		super(props);
	}
	render() {
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
