import React, {Component} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

export default class HamburgerMenu extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>User ID</Text>
                <Button title='Request List' onPress={()=>console.log("request list")}/>
                <Button title='Settings' onPress={() => {this.props.account();}}/>
                <Button title='Logout' onPress={() => {this.props.logout();}}/>
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
