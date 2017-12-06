import React from 'react';
import { Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';

export default class SignupScreen extends React.Component {
    static navigationOptions = {
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
                            console.log(responseData);
                            this.props.navigation.navigate('LoginScreen');
                        }
                    ).catch((error) => {
                        console.log(error)
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
            <View style={styles.signupContainer}>
            <Text style={styles.signupTitle}>Sign-up</Text>
            <TextInput
                placeholder="User ID"
                onChangeText={(text) => this.setState({userId: text})}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={(text) => this.setState({password: text})}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Confirm Password"
                onChangeText={(text) => this.setState({password2: text})}
            />
            <Button
                onPress={this._makeAccount}
                title="Sign up"
            />
        </View>
        );
    }
}
