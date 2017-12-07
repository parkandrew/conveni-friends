import React from 'react';
import { ListView, Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import User from 'client/app/Common/User';
import Request from 'client/app/Common/Request';
import RequestListComponent from 'client/app/components/RequestListComponent';

export default class NearbyRequestsScreen extends React.Component {
    static navigationOptions = {
        title: 'Nearby Requests'
    }
    constructor(props) {
        super(props);
        state = {
            data: [],
            user: null
        };
        this.fetchNearbyRequests = this.fetchNearbyRequests.bind(this);
        this.createDataCell = this.createDataCell.bind(this);
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

    createDataCell(request, distance) {
      let str = distance + ' mi';
        timeStart = new Date(request.timeStart).toLocaleTimeString();
        timeEnd = new Date(request.timeEnd).toLocaleTimeString();
        return { title: request.title, distance: str, startTime: timeStart, endTime: timeEnd };
    }

    fetchNearbyRequests() {
        if (this.props.navigation.state.params) {
            this.setState({user: this.props.navigation.state.params.user}, () => {
                this.state.user.getNearbyRequests(5.5, 5.5).then((response) => {
                    //put data in array
                    dataSource = [];
                    response.forEach(element => {
                        let request = this.parseSQLData(element.request);
                        if (request.userId !== this.state.user.userId)
                            dataSource.push(this.createDataCell(request, element.distance));
                    });
                    console.log(dataSource);
                    this.setState({data: dataSource});
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
                <RequestListComponent data={this.state.data} navigation={this.props.navigation}/>
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
