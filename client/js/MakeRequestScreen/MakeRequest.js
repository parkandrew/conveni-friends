import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	Button,
	View
} from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Moment from 'react-moment';

import FormInput from './FormInput';
import DateTimePicker from './DateTimePicker';


export default class MakeRequest extends React.Component {

	static navigationOptions = {
		title: 'What would you like to request?',
		headerLeft: null,
	};

	state = {
		isDateTimePickerVisible: false,
		startTime: new Date(),
		endTime: new Date(),
	}


	render() {
		function onPressHandle() {
			console.log("Pressed!");
		}
		return (
			<View style={styles.container}>
				<View style={styles.inputView}>
					<FormInput style={styles.singleLine} title={'Title'} placeholder={'Your short title'} />
					<FormInput style={styles.singleLine} title={'Location'} placeholder={'123 Bruin Ave'} />
					<View style={[styles.dateContainer, styles.singleLine]}>
						<DateTimePicker style={styles.singleLine} type='Start'/>
						<DateTimePicker style={styles.singleLine} type='End'/>
					</View>
					<FormInput title={'Description'} placeholder={'Some other details would include...'} multiline={true} />
				</View>
				<Button title="Make Request" onPress={onPressHandle} />
			</View>
		);
	}
}
// TODO: port this to styles file
let screenWidth = 350;
let fontSize = 20;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ADD8E6',
		alignItems: 'center',
		paddingTop: 20,
	},
	inputView: {
		flex: .9
	},
	singleLine: {
		flex: 0.14,
		marginBottom: 24
	},
	dateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: screenWidth,
		marginBottom: 10
	},
});
