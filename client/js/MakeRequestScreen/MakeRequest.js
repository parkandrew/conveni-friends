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

import SingleLineInput from './SingleLineInput';
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
				<SingleLineInput title={'Title'} placeholder={'Your short title'} />
				<SingleLineInput title={'Location'} placeholder={'123 Bruin Ave'} />
				<View style={[styles.dateContainer, styles.oneLine]}>
					<DateTimePicker type='Start'/>
					<DateTimePicker type='End'/>
				</View>
				<View style={styles.multiLine}>
					<Text style={styles.inputHeader}>Description</Text>
					<TextInput style={[styles.input, styles.description]}placeholder="Some other details would include..." multiline={true} />
				</View>
				<Button style={styles.reqButton} title="Make Request" onPress={onPressHandle} />
			</View>
    	);
	}
}
// port this to styles file
let screenWidth = 350;
let fontSize = 20;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ADD8E6',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: 20,
	},
	input: {
		backgroundColor:'#FFF',
		width: screenWidth,
		height: fontSize + 4,
		fontSize: fontSize
	},
	dateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: screenWidth,
	},
	oneLine: {
		flex: 0.12
	},
	multiLine: {
		flex: 0.7,
	},
	description: {
		height: 80
	},
	inputHeader: {
		fontSize: fontSize
	},
	reqButton: {
		height: 30,
		width: screenWidth-100,
		backgroundColor: '#FFFFFF'
	}
});
