import React, {Component} from 'react';
import {Text, View,Button, StyleSheet} from 'react-native';
import styles from 'client/styles/style';

export default class HamburgerMenu extends Component {
    render() {
        return(
            <View style={styles.hamburgerContainer}>
                <Text
                    onPress={() => {this.props.changePass();}}
                    style={styles.hamburgerItem}>
                    Change Password
                </Text>
                <Text
                    onPress={() => {this.props.history();}}
                    style={styles.hamburgerItem}>
                    Request History
                </Text>
                <Text
                    onPress={() => {this.props.logout();}}
                    style={styles.hamburgerItem}>
                    Logout
                </Text>
            </View>
        );
    }
}
