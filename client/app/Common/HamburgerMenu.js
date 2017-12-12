import React, {Component} from 'react';
import {Text, View,Button, StyleSheet} from 'react-native';
import styles from 'client/styles/style';

export default class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
    }
    
    history() {
        this.props._drawer.close();
        this.props.navigation.navigate('RequestHistory', {user:this.props.user});
    }
    changePass(){
        this.props._drawer.close();
        this.props.navigation.navigate('ChangePassword', {user: this.props.user});
    }
    logout() {
        this.props._drawer.close();
        this.props.navigation.navigate('LoginScreen');
    }
    messages() {
        this.props._drawer.close();
        this.props.navigation.navigate('LoginScreen', {userId: this.props.user.userId});
    }

    render() {
        return(
            <View style={styles.hamburgerContainer}>
                <Button title='Change Password' onPress={() => {this.changePass();}}/>
                <Button title='Request History' onPress={() => {this.history();}}/>
                <Button title='Messages' onPress={() => {this.messages();}}/>
                <Button title='Logout' onPress={() => {this.logout();}}/>
            </View>
        );
    }
}
