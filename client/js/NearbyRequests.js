import React from 'react';
import { ListView, Alert, Text, View, TextInput, Button } from 'react-native';
import styles from './style'

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
            <ListView style={styles.nearbyContainer}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}>
            </ListView>
        );
    }
}
