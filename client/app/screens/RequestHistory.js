import React from 'react';
import { ListView, Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';
import Request from 'client/app/Common/Request';
import RequestListComponent from 'client/app/components/RequestListComponent';
import CustomButton from 'client/app/components/CustomButton';

export default class RequestHistory extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Request History'
    }
    constructor(props) {
        super(props);
        state = {
            data: [],
            user: null
        };
        this.fetchMyRequests = this.fetchMyRequests.bind(this);
        this.createDataCell = this.createDataCell.bind(this);
        this.getDistance = this.getDistance.bind(this);
    }

    parseSQLData(data) {
        let request = new Request(
            data.requesterId,
            data.providerId,
            data.title,
            data.description,
            data.latitude,
            data.longitude,
            data.address,
            data.timeStart,
            data.timeEnd
        )
        return request;
    }

    createDataCell(request) {
        distance = this.getDistance(request.latitude, request.longitude);
        timeStart = new Date(request.timeStart).toLocaleTimeString();
        timeEnd = new Date(request.timeEnd).toLocaleTimeString();
        return { title: request.title, distance: '0.01 mi', startTime: timeStart, endTime: timeEnd };
    }

    getDistance(latitude, longitude) {
        //get current location: currentLocation = blah()

    }

    fetchMyRequests() {
        if (this.props.navigation.state.params) {
            this.setState({user: this.props.navigation.state.params.user}, () => {
                this.state.user.getMyRequests().then((response) => {
                    //put data in array
                    dataSource = [];
                    response.forEach(element => {
                        let request = this.parseSQLData(element);
                        dataSource.push(this.createDataCell(request));
                    });
                    this.setState({data: dataSource});
                });
            });
        }
    }

    componentWillMount() {
        this.fetchMyRequests();
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
            <View style={styles.genericContainer}>
                <Text>No requests found.</Text>
            </View>
            );
        }
    }
}
