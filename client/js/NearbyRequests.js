import React from 'react';
import { ListView, Alert, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class NearbyRequests extends React.Component {
    static navigationOptions = {
        //headerLeft: null,
    }
    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            sessionKey: '',
            currentLocation: '',
            dataSource: dataSource.cloneWithRows(['row 1', 'row 2']),            
        };
        //this._getNearbyRequests = this._getNearbyRequests.bind(this)
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ListView style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}>
            </ListView>
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
    },
  });