import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class SignupScreen extends React.Component {
    static navigationOptions = {
        //headerLeft: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            password: '',
            password2: '',
            sessionKey: ''
        };
        this._makeAccount = this._makeAccount.bind(this)
    }
    _makeAccount() {
        //alphanumeric characters
        const re = /[0-9a-zA-Z]+/g;
        //TODO: check w/backend that the user id does not already exist
        if (this.state.userId && re.test(this.state.userId)) {
            if (this.state.password && this.state.password) {
                if (this.state.password === this.state.password2) {
                    //TODO: make account w/backend
                    //We can either navigate them back to the login screen
                    //or get the session key right here and navigate them to the
                    //"home" screen
                    this.props.navigation.navigate('Login')
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
            <View style={styles.container}>
            <Text style={styles.title}>Sign-up</Text>
            <TextInput 
                placeholder="User ID"
                onChangeText={(text) => this.setState({userID: text})}
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

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      color: 'red'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });