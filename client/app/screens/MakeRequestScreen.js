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
import CustomButton from 'client/app/components/CustomButton';


import "prop-types"; // 15.6.0


export default class MakeRequest extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			location: '',
			startTime: new Date(),
			endTime: new Date(),
			description: '',
		}

		this._onPressHandle = this._onPressHandle.bind(this);
		this._getTitle = this._getTitle.bind(this);
		this._getLocation = this._getLocation.bind(this);
		this._getStartTime = this._getStartTime.bind(this);
		this._getEndTime = this._getEndTime.bind(this);
		this._getDescription = this._getDescription.bind(this);
	}

	static navigationOptions = {
		title: 'Make a Request',
	};

	_getTitle(text) {
		this.setState({title: text});
	}

	_getLocation(text) {
		this.setState({location: text});
	}

	_getStartTime(text) {
		this.setState({startTime: text});
	}

	_getEndTime(text) {
		this.setState({endTime: text});
	}

	_getDescription(text) {
		this.setState({description: text});
	}

	_onPressHandle() {
		console.log('Request data here: ');
		console.log(this.state);
	}


	render() {
		function onPressHandle() {
			console.log("Pressed!");
		}
		return (
			<View style={styles.makeContainer}>
				<View style={styles.makeInputView}>
					<FormInput onType={this._getTitle} style={styles.makeSingleLine} title={'Title'} placeholder={'Your short title'} />
					<FormInput onType={this._getLocation} style={styles.makeSingleLine} title={'Location'} placeholder={'123 Bruin Ave'} />
					<View style={[styles.makeDateContainer, styles.makeSingleLine]}>
						<DateTimePicker onChange={this._getStartTime} style={styles.makeSingleLine} type='Start'/>
						<DateTimePicker onChange={this._getEndTime} style={styles.makeSingleLine} type='End'/>
					</View>
					<FormInput onType={this._getDescription} title={'Description'} placeholder={'Some other details would include...'} multiLine={true} />
				</View>
				<CustomButton onPressHandle={this._onPressHandle} text={'Make Request'}/>
			</View>
		);
	}
}
