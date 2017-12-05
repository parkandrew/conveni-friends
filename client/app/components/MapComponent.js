import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import MapComponent from 'client/app/components/MapComponent';
import CustomButton from 'client/app/components/CustomButton';
import MapView from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

Geocoder.setApiKey('AIzaSyAIeqOoRZvPs8_nFQEkf8GzrKw-VhE_fDo');

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;
const WESTWOOD_DEFAULT_REGION = {
	latitude: 34.0635,
	longitude: -118.4455,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
}

export default class MapScreen extends React.Component {
	static navigationOptions = {
		
	}
	constructor(props) {
		super(props);
		this.state = {
			region: WESTWOOD_DEFAULT_REGION,
		}
		this._onPressHandle = this._onPressHandle.bind(this);
		this.onRegionChange = this.onRegionChange.bind(this);
		this.notifyMapReady = this.notifyMapReady.bind(this);
	}

	componentWillMount() {
		Geocoder.getFromLocation(this.props.address).then((json) => {
				let firstResult = json.results[0].geometry;
				let location = firstResult.location;
				let region = {
					latitude: location.lat,
					longitude: location.lng,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA,
				}
				this.setState({region: region})
			},
			error => {
				console.log('Error getting address');
				this.setState({region: WESTWOOD_DEFAULT_REGION});
			}
		)
	}

	getInitialRegion() {
		return WESTWOOD_DEFAULT_REGION;
	}
	
	onRegionChange(region) {
		if(!this.state.regionSet) {
			return;
		}
		this.setState({region: region})
	}
	
	/* Required because a bug in react-native maps that sets your location to initial 
	blank state. See: https://github.com/airbnb/react-native-maps/issues/1338*/
	notifyMapReady() {
		this.setState({regionSet: true});
	}

	_onPressHandle() {
		let curLatitude = this.state.region.latitude;
		let curLongitude = this.state.region.longitude;
		// TODO: Make your request here...
		console.log(curLatitude + ', ' + curLongitude);
	}

	render() {
		return (
			<View style={styles.container}>
				 <MapView 
					style={styles.map}
					initialRegion={this.getInitialRegion()}
					onRegionChange={this.onRegionChange}
					region={this.state.region}
					onMapReady={this.notifyMapReady}
				/>
				<Image style={styles.marker} pointerEvents="none" source={require('client/app/config/mapMarker.png')}/>
				<CustomButton style={styles.button} onPressHandle={this._onPressHandle} text={this.props.buttonText}/>
			</View>
		);
	}
}

// These styles are necessary! See: https://github.com/airbnb/react-native-maps/issues/118
const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		position: 'absolute',
		bottom: 40,
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	marker: {
		width: 45,
		height: 45,
		marginBottom: 100,
		justifyContent: 'flex-start',
		alignItems: 'center',
	}
});
