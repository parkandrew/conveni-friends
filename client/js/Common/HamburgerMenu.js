import React, {Component} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

export default class HamburgerMenu extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>User ID</Text>
                <Button title='Request List'/>
                <Button title='Settings' />
                <Button title='Logout'
                    onPress={() => {this.props.logout();}}/>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2f1',
    }
  });