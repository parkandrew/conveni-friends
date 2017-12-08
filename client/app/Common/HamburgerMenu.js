import React, {Component} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';
import styles from 'client/styles/style';

export default class HamburgerMenu extends Component {
    render() {
        return(
            <View style={styles.hamburgerContainer}>
                <Button title='Change Password' onPress={() => {this.props.changePass();}}/>
                <Button title='Request History' onPress={() => {this.props.history();}}/>
                <Button title='Logout' onPress={() => {this.props.logout();}}/>
            </View>
        );
    }
}
