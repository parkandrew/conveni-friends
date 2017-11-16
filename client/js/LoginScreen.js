import React from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerLeft: null,
    }
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            password: '',
            sessionKey: ''
        };
        this._login = this._login.bind(this)
        this._signup = this._signup.bind(this)
    }
    _login() {
        //TODO: validate login info with backend server and navigate to
        //Select screen if credentials are correct
        if (this.state.userID && this.state.password) {
            this.props.navigation.navigate('Home', {sessionKey: 'ayy'})
        }
        else {
            Alert.alert("User ID or password is blank.")
        }
    }
    _signup() {
        //TODO: Show signup screen
        this.props.navigation.navigate('Signup')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
            <Text style={styles.title}>Conveni-friends</Text>
            <TextInput 
                placeholder="User ID"
                onChangeText={(text) => this.setState({userID: text})}
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

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      color: 'red'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });