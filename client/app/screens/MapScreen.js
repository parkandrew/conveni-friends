import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapComponent from 'client/app/components/MapComponent';
import CustomButton from 'client/app/components/CustomButton';
import MapView from 'react-native-maps';


export default class MapScreen extends React.Component {
	static navigationOptions = {
		title: 'Choose Location'
	}

	render() {
		// const address = this.props.address;
		const address = 'westwood village 90024'; // TODO: replace this w/ props.address
		const buttonText = 'Confirm Location' // TODO: replace this based on requester/provider
		return (
			<MapComponent address={address} buttonText={buttonText}/>
		);
	}
}
