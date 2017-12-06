import React from 'react';
import { ListView, Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';
import Request from 'client/app/Common/Request';

export default class NearbyRequests extends React.Component {
    static navigationOptions = {
        title: 'Nearby Requests'
    }
    constructor(props) {
        super(props);
        this.state = {
            user: new User(),
        };
        //this._getNearbyRequests = this._getNearbyRequests.bind(this)
    }
    fetchNearbyRequests() {
        if (this.state.user.userId) {
            data = []
            this.state.user.getNearbyRequests().then(function(response) {
                //put data in array
            });
        }
    }
    _getUser() {
        //TODO: get key from storage somehow
        if (this.props.navigation.state.params) {
            this.setState({user: this.props.navigation.state.params.user});
        }
	}
	
    componentWillMount() {
        this._getUser();
        this.fetchNearbyRequests();
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
