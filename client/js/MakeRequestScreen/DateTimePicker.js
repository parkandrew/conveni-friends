import React from 'react';
import { 
	StyleSheet,
	Text, 
	TextInput, 
	View 
} from 'react-native';	
import moment from 'moment';
import Moment from 'react-moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class DateTimePicker extends React.Component {

	state = {
		isDateTimePickerVisible: false,
		time: new Date(),
	}

	_showDateTimePicker = (selected) => {
		this.setState({ isDateTimePickerVisible: true });
	}
	
	_hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

	_handleDatePicked = (date) => {
		this.setState({time: date});
		this._hideDateTimePicker();
		// console.log(this.state.active + ' has been set to: ' + date);
	};

	formatDate(date) {
		return moment(date).format("MM/DD, hh:mm A");
	}

	_changeText() {
		console.log("DONEEEEE")
	}

  	render() {
		/*
			on some after confirm, we should pass in a function that is called that sets some state in the parent for form submission.
		*/
		return (
			<View>
				{<Text style={styles.inputHeader}>{this.props.type} Date</Text>}
				<Text style={styles.datePicker}onPress={() => {
					this._showDateTimePicker(this.props.type)
				}
				}>{this.formatDate(this.state.time)}</Text>
				<DateTimePickerModal
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
// port this to styles file
let screenWidth = 350;
let fontSize = 20;
const styles = StyleSheet.create({
	container: {
		flex: .12,
		alignItems: 'flex-start',
	},
	datePicker: {
		width: screenWidth/2.1,
		backgroundColor: '#FFF',
		height: fontSize + 16,
		fontSize: fontSize,
		padding: 5,
		paddingLeft: 10,
		borderColor: '#3D95DA',
		borderWidth: 2,
		borderRadius: 6,
		overflow: 'hidden'
	},
	inputHeader: {
		fontSize: fontSize,
		marginBottom: 1
	},
});
