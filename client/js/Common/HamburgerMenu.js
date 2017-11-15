import React, {Component} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

export default class HamburgerMenu extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Button onPress={() => {this.props.closeDrawer();}}
                    title='Close'/>
                <Text>{'\n\n'}</Text>
                <Text>Request List</Text>
                <Text>Settings</Text>
                <Text>Logout</Text>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0',
    }
  });