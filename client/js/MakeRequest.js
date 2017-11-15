import React from 'react';
import { 
	StyleSheet,
	DatePickerIOS,
	Text, 
	TextInput, 
	Button, 
	View 
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
// import Moment from 'react-moment';
	

export default class MakeRequest extends React.Component {

	static navigationOptions = {
		title: 'Make Request',
		headerLeft: null,
	};

	state = {
		isDateTimePickerVisible: false,
		startTime: new Date(),
		endTime: new Date(),
		active: null,
	}

	_showDateTimePicker = (selected) => {
		this.setState({ isDateTimePickerVisible: true });
		this.setState({active: selected});
	}
	
	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePicked = (date) => {
		this.state.active === 'start' ? this.setState({startTime: date}) : this.setState({endTime: date})
		this._hideDateTimePicker();
		console.log(this.state.active + ' has been set to: ' + date);
	};

	formatDate(date) {
		this.state.startTime.toString()

		return this.state.startTime.toString()
	}

  	render() {
		function onPressHandle() {
			console.log("Pressed!");
		}
		return (
			<View style={styles.container}>
				<Text>What would you like to request?</Text>
				<TextInput placeholder="Short Title"/>
				<TextInput placeholder="Location"/>
				<Text onPress={() => {
					this._showDateTimePicker('start')}
				}>{this.formatDate(this.state.startTime)}</Text>

				<Text onPress={() => {
					this._showDateTimePicker('end')}
				}>{this.state.endTime.toString()}</Text>
				
				<TextInput placeholder="Description" multiline={true} />

				{<Button title="Make Request" onPress={onPressHandle} />}

				<DateTimePicker
					onConfirm={this._handleDatePicked}
					onCancel={this._hideDateTimePicker}
					isVisible={this.state.isDateTimePickerVisible}
					onHideAfterConfirm={this._changeText}
					mode={'datetime'}
				/>

			</View>
    	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ADD8E6',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
