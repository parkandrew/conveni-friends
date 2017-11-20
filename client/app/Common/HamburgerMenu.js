import React, {Component} from 'react';
import {Text,View,Button,StyleSheet} from 'react-native';

export default class HamburgerMenu extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>User ID</Text>
                <Button title='Request List' onPress={()=>console.log()}/>
                <Button title='Settings' onPress={()=>console.log()} />
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
