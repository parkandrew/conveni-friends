import React from 'react';
import { Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';

const HttpStatus = require('http-status-codes');

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerLeft: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            userIdInput: '',
            password: '',
            user: null
        };
        this._login = this._login.bind(this)
        this._signup = this._signup.bind(this)
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
            });
        }
        else {
            Alert.alert("User ID or password is blank.")
        }
    }
    _signup() {
        //TODO: Show signup screen
        this.props.navigation.navigate('SignupScreen')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Conveni-friends</Text>
            <TextInput
                placeholder="User ID"
                onChangeText={(text) => this.setState({userIdInput: text})}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => this.setState({password: text})}
            />
            <Button
                onPress={this._login}
                title="Login"
            />
            <Button
                onPress={this._signup}
                title="Sign up"
            />
        </View>
        );
    }
}
