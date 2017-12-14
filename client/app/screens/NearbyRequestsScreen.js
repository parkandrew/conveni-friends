import React from 'react';
import { ListView, Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';
import Request from 'client/app/Common/Request';
import RequestListComponent from 'client/app/components/RequestListComponent';

export default class NearbyRequestsScreen extends React.Component {
    static navigationOptions = {
        title: 'Nearby'
    }
    constructor(props) {
        super(props);
        state = {
            data: [],
            user: null
        };
        this.fetchNearbyRequests = this.fetchNearbyRequests.bind(this);
    }

    fetchNearbyRequests() {
        if (this.props.navigation.state.params) {
            this.setState({user: this.props.navigation.state.params.user}, () => {
                this.state.user.getNearbyRequests(this.props.navigation.state.params.latitude,
                    this.props.navigation.state.params.longitude).then(data => {
                        this.setState({ data });
                    });
            });
        }
    }

    componentWillMount() {
        this.fetchNearbyRequests();
    }
	render() {
        if (this.state.data) {
            return (
              <View style={styles.simpleContainer}>
                <RequestListComponent data={this.state.data} navigation={this.props.navigation}/>
              </View>
            );
        }
        else {
            return (
            <View>
                <Text>No requests found.</Text>
            </View>
            );
        }
    }
}
