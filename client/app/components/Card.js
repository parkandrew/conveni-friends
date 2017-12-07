import React from 'react';
import {
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from 'react-native';
import styles from 'client/styles/style';

export default class Card extends React.Component {
	static navigationOptions = {
		// title: 'Home',
	}

	constructor(props) {
		super(props);
		this._onClickHandle = this._onClickHandle.bind(this);
	}

	_onClickHandle(e) {
		console.log('Data to display in next screen: ', this.props.data);
		this.props.navigation.navigate('RequestDetailsScreen', {data: this.props.data});
	}

	render() {
		return (
			<View >
				<TouchableOpacity onPress={this._onClickHandle}style={styles.cardContainer}>
					<View style={styles.cardLeft}>
						<Text style={styles.cardTitle} numberOfLines={1} >{this.props.data.title}</Text>
						<Text style={styles.cardSubTitle} numberOfLines={1}>{this.props.data.startTime} - {this.props.data.endTime}</Text>
					</View>
					<View style={styles.cardRight}>
						<Text style={styles.cardDistance}>{this.props.data.distance}</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
