import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapComponent from 'client/app/components/MapComponent';
import CustomButton from 'client/app/components/CustomButton';
import MapView from 'react-native-maps';


export default class ProviderLocation extends React.Component {
    constructor(props) {
        super(props);
        state = {
            user: null,
            latitude: 34.0635,
            longitude: -118.4455
        };
        this.goToNearbyRequests = this.goToNearbyRequests.bind(this);
    }
	static navigationOptions = {
		
    }
    
    goToNearbyRequests(latitude, longitude) {
        this.props.navigation.navigate("NearbyRequestsScreen", 
        {user: this.state.user,
        latitude: latitude, 
        longitude: longitude});
    }

    _getUser() {
        if (this.props.navigation.state.params) {
            this.setState({user: this.props.navigation.state.params.user});
        }
    }

    componentWillMount() {
        this._getUser();
    }

	render() {
		// const address = this.props.address;
		const address = 'westwood village 90024'; // TODO: replace this w/ props.address
		const buttonText = 'Confirm Location' // TODO: replace this based on requester/provider
		return (
			<MapComponent address={address} buttonText={buttonText}
                setParentState={newState=>{this.setState(newState)}}
                goTo={this.goToNearbyRequests}/>
		);
	}
}

