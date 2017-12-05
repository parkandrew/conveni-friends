import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapComponent from 'client/app/components/MapComponent';
import CustomButton from 'client/app/components/CustomButton';
import MapView from 'react-native-maps';


export default class MapScreen extends React.Component {
	static navigationOptions = {
		
	}

	render() {
		// const address = this.props.address;		
		const address = 'westwood village 90024';
		const buttonText = 'Confirm Location'
		return (
			<MapComponent address={address} buttonText={buttonText}/>
		);
	}
}

