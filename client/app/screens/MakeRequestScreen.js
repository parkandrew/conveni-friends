import React from 'react';
import {
	Text,
	TextInput,
	Button,
	View
} from 'react-native';
import styles from 'client/styles/style';

import moment from 'moment'; // 2.19.2
import Moment from 'react-moment'; // 0.6.8

import FormInput from 'client/app/components/FormInput';
import DateTimePicker from 'client/app/components/DateTimePicker';
import User from 'client/app/Common/User';
import CustomButton from 'client/app/components/CustomButton';


import "prop-types"; // 15.6.0


export default class MakeRequest extends React.Component {

	static navigationOptions = {
		title: 'Make a Request',
	};

	state = {
		user: null,
		isDateTimePickerVisible: false,
		startTime: new Date(),
		endTime: new Date(),
	}


	render() {
		function onPressHandle() {
			let request = new Request();
			user.createRequest(request).then(function(responseJSON) {
				//do stuff with the response
			});
		}
		return (
			<View style={styles.makeContainer}>
				<View style={styles.makeInputView}>
					<FormInput style={styles.makeSingleLine} title={'Title'} placeholder={'Your short title'} />
					<FormInput style={styles.makeSingleLine} title={'Location'} placeholder={'123 Bruin Ave'} />
					<View style={[styles.makeDateContainer, styles.makeSingleLine]}>
						<DateTimePicker style={styles.makeSingleLine} type='Start'/>
						<DateTimePicker style={styles.makeSingleLine} type='End'/>
					</View>
					<FormInput title={'Description'} placeholder={'Some other details would include...'} multiLine={true} />
				</View>
				<CustomButton text={'Make Request'}/>
			</View>
		);
	}
}
