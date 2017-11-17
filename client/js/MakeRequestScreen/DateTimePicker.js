import React from 'react';
import styles from '../style'
import {
	Text,
	TextInput,
	View
} from 'react-native';
import moment from 'moment';
import Moment from 'react-moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker'; // 4.13.0

import "prop-types";

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
	};

	formatDate(date) {
		return moment(date).format("MM/DD, hh:mm A");
	}

	_alertParent() {
		// Instead of this function, we should pass in a function from MakeRequest.js as a prop so we can set the state of start date/time properly (that way we have all our data in one central location)
		//The same needs to be done for all input...
	}

	render() {
		/*
			on some after confirm, we should pass in a function that is called that sets some state in the parent for form submission.
		*/
		return (
			<View>
				<Text style={styles.dtpInputHeader}>{this.props.type} Date</Text>
				<Text style={styles.dtpDatePicker}onPress={() => {
					this._showDateTimePicker(this.props.type)
				}
				}>{this.formatDate(this.state.time)}</Text>
				<DateTimePickerModal
					onConfirm={this._handleDatePicked}
					onCancel={this._hideDateTimePicker}
					isVisible={this.state.isDateTimePickerVisible}
					onHideAfterConfirm={this._alertParent}
					mode={'datetime'}
				/>
			</View>
		);
	}
}
