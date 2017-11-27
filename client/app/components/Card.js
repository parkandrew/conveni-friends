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

	render() {
		return (
			<View >
				<TouchableOpacity style={styles.cardContainer}>
					<View style={styles.cardLeft}>
						<Text style={styles.cardTitle} numberOfLines={1} >{this.props.data.key}</Text>
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

