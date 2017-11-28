import React from 'react';
import { ListView, Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';
import Request from 'client/app/Common/Request';

export default class NearbyRequests extends React.Component {
    static navigationOptions = {
        //headerLeft: null,
    }
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            sessionKey: '',
            user: new User(),
            dataSource: dataSource.cloneWithRows(['row 1', 'row 2']),
        };
        //this._getNearbyRequests = this._getNearbyRequests.bind(this)
    }
    fetchNearbyRequests() {
        if (this.props.navigation.state.params) {
            this.setState({sessionKey: this.props.navigation.state.params.sessionKey});
            this.setState({user: this.props.navigation.state.params.user});
        }
        //this.setState({dataSource: this.state.user.getNearbyRequests()})
    }
    componentWillMount() {
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
