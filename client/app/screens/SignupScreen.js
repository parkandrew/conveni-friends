import React from 'react';
import { Alert, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';
import CustomButton from 'client/app/components/CustomButton';
import LoginFormInput from 'client/app/components/LoginFormInput';

const HttpStatus = require('http-status-codes');

export default class SignupScreen extends React.Component {
    static navigationOptions = {
      title: 'Sign Up',
    }
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            password2: '',
        };
        this._makeAccount = this._makeAccount.bind(this)
    }

    _signup() {
        this.props.navigation.navigate('LoginScreen')
    }

    _makeAccount() {
        //alphanumeric characters
        const alphanum = /[0-9a-zA-Z]+/g;
        //TODO: check w/backend that the user id does not already exist
        if (this.state.userId && alphanum.test(this.state.userId)) {
            if (this.state.password && this.state.password) {
                if (this.state.password === this.state.password2) {
                    //TODO: make account w/backend
                    //We can either navigate them back to the login screen
                    //or get the session key right here and navigate them to the
                    //"home" screen
                    let user = new User();
                    user.signup(this.state.userId, this.state.password).then(
                        (responseData) => {
                            if (responseData.status == HttpStatus.OK) {
                                this.props.navigation.goBack(null);
                            }
                            else {
                                Alert.alert("There was an error signing up, try again later.");
                            }
                        }
                    ).catch((error) => {
                        Alert.alert("There was an error signing up, try again later.");
                    });
                }
                else {
                    Alert.alert("Passwords do not match, please reenter.");
                }
            }
            else {
                Alert.alert("Password field(s) blank, please enter.");
            }
        }
        else {
            Alert.alert("Invalid/blank username. Please use alphanumeric characters");
        }
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
                    onChangeText={(text) => this.setState({userId: text})}
                    onSubmitEditing={() => {this._makeAccount();}}
                    placeholder={'User ID'}/>

                <LoginFormInput
                    setParentState={newState=>{this.setState(newState)}}
                    field={"password"}
                    secureTextEntry={true}
                    style={styles.makeLoginLine}
                    onChangeText={(text) => this.setState({password: text})}
                    onSubmitEditing={() => {this._makeAccount();}}
                    placeholder={'Password'} />

                <LoginFormInput
                    setParentState={newState=>{this.setState(newState)}}
                    field={"password"}
                    secureTextEntry={true}
                    style={styles.makeLoginLine}
                    onChangeText={(text) => this.setState({password2: text})}
                    onSubmitEditing={() => {this._makeAccount();}}
                    placeholder={'Confirm password'} />

                <CustomButton
                    onPressHandle={() => {this._signup();}}
                    text="Sign up"/>
            </View>




        </TouchableWithoutFeedback>
        );
    }
}
