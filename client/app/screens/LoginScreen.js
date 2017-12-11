import React from 'react';
import { Alert, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';
import CustomButton from 'client/app/components/CustomButton';
import LoginFormInput from 'client/app/components/LoginFormInput';

const HttpStatus = require('http-status-codes');

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerLeft: null,
        gesturesEnabled: false,
        title: 'Login',
    }
    constructor(props) {
        super(props);
        this.state = {
            userIdInput: '',
            password: '',
            user: null
        };
        this._login = this._login.bind(this);
        this._signup = this._signup.bind(this);
    }
    _login() {
        //TODO: validate login info with backend server and navigate to
        //Select screen if credentials are correct
        const alphanum = /[0-9a-zA-Z]+/g;
        if (this.state.userIdInput && this.state.password) {
            this.state.user = new User();
            this.state.user.login(this.state.userIdInput, this.state.password).then((responseCode) => {
                if (responseCode == HttpStatus.OK) {
                    this.state.user.userId = this.state.userIdInput;
                    this.props.navigation.navigate('HomeScreen', {user: this.state.user});
                }
                else {
                    Alert.alert("Incorrect username or password");
                }
            }).catch((error) => {
                Alert.alert("There was an issue with logging in.");
            });
        }
        else {
            Alert.alert("User ID or password is blank.");
        }
    }
    _signup() {
        //TODO: Show signup screen
        this.props.navigation.navigate('SignupScreen')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.loginContainer}>
                <Image
                  style={styles.loginDisplay}
                  source={require('client/styles/logo.png')}
                  resizeMode='center'
                />
                <LoginFormInput
                    setParentState={newState=>{this.setState(newState)}}
                    field={"userIdInput"}
                    style={styles.makeLoginLine}
                    onSubmitEditing={() => {this._login();}}
                    placeholder={'User ID'}/>

                <LoginFormInput
                    setParentState={newState=>{this.setState(newState)}}
                    field={"password"}
                    secureTextEntry={true}
                    style={styles.makeLoginLine}
                    onSubmitEditing={() => {this._login();}}
                    placeholder={'Password'} />

                <CustomButton
                    onPressHandle={() => {this._login();}}
                    text="Login"/>

                <CustomButton
                    onPressHandle={() => {this._signup();}}
                    text="Sign up"/>
            </View>
          </TouchableWithoutFeedback>
        );
    }
}
