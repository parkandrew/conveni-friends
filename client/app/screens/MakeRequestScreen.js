import React from 'react';
import {
	Text,
	TextInput,
	Button,
	View,
	Alert
} from 'react-native';
import styles from 'client/styles/style';

import moment from 'moment'; // 2.19.2
import Moment from 'react-moment'; // 0.6.8
import Request from 'client/app/Common/Request';
import FormInput from 'client/app/components/FormInput';
import DateTimePicker from 'client/app/components/DateTimePicker';
import User from 'client/app/Common/User';
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

<<<<<<< HEAD
	state = {
		user: new User(),
		isDateTimePickerVisible: false,
		startTime: new Date(),
		endTime: new Date(),
		title: '',
		location: '',
		description: ''
	}

	onPressHandle() {
		if (this.state.title && this.state.location && this.state.description) {
			console.log(this);
			//get latitude and longitude from address?
			timeStart = this.state.startTime.toISOString().slice(0, 19).replace('T', ' ');;
			timeEnd = this.state.endTime.toISOString().slice(0, 19).replace('T', ' ');;
			let request = new Request(this.state.user.userId, null, this.state.title, 
				this.state.description, '5.5', '5.5', this.state.location, timeStart, timeEnd);
			this.state.user.createRequest(request).then((responseStatus) => {
				this.props.navigation.navigate('HomeScreen', {user: this.state.user});
			});
		}
		else {
			Alert.alert("Please fill in all the fields.");
		}
=======
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
>>>>>>> upstream/master
	}

	updateText(field, value) {
		stateObject = {field, value};
		this.setState(stateObject);
	}

	_getUser() {
        //TODO: get key from storage somehow
        if (this.props.navigation.state.params) {
            this.setState({user: this.props.navigation.state.params.user});
        }
	}
	
	componentWillMount() {
        this._getUser();
	}
	  
	updateValue(field, value) {
		stateObject = { field: value };
		this.setState(stateObject);
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.makeContainer}>
				<View style={styles.makeInputView}>
<<<<<<< HEAD
					<FormInput setParentState={newState=>{this.setState(newState)}} field={"title"} 
						style={styles.makeSingleLine} input={this.state.title} title={'Title'} placeholder={'Your short title'}/>
					<FormInput setParentState={newState=>{this.setState(newState)}} field={"location"} 
						style={styles.makeSingleLine} input={this.state.location} title={'Location'} placeholder={'123 Bruin Ave'} />
					<View style={[styles.makeDateContainer, styles.makeSingleLine]}>
						<DateTimePicker setParentState={newState=>{this.setState(newState)}} field={"startTime"} style={styles.makeSingleLine} type='Start'/>
						<DateTimePicker setParentState={newState=>{this.setState(newState)}} field={"endTime"} style={styles.makeSingleLine} type='End'/>
					</View>
					<FormInput setParentState={newState=>{this.setState(newState)}} 
						style={styles.formMultiLine} field={"description"} title={'Description'} placeholder={'Some other details would include...'} multiLine={true}/>
				</View>
				<CustomButton text={'Make Request'} onPressHandle={() => {this.onPressHandle();}} />
=======
					<FormInput onType={this._getTitle} style={styles.makeSingleLine} title={'Title'} placeholder={'Your short title'} />
					<FormInput onType={this._getLocation} style={styles.makeSingleLine} title={'Location'} placeholder={'123 Bruin Ave'} />
					<View style={[styles.makeDateContainer, styles.makeSingleLine]}>
						<DateTimePicker onChange={this._getStartTime} style={styles.makeSingleLine} type='Start'/>
						<DateTimePicker onChange={this._getEndTime} style={styles.makeSingleLine} type='End'/>
					</View>
					<FormInput onType={this._getDescription} title={'Description'} placeholder={'Some other details would include...'} multiLine={true} />
				</View>
				<CustomButton onPressHandle={this._onPressHandle} text={'Make Request'}/>
>>>>>>> upstream/master
			</View>
		);
	}
}
