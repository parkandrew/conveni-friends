import React from 'react';
import { Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerLeft: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
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
        if (this.state.userId && this.state.password) {
            user = new User();
            user.login(this.state.userId, this.state.password).then(function(responseJSON) {
                //do stuff with the response
            });
            user.userId = 'sample'
            user.sessionKey = 'blank'
            this.props.navigation.navigate('HomeScreen', {user: user})
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
                onChangeText={(text) => this.setState({userId: text})}
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
