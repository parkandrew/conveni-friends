import React, { Component } from 'react';
import { View, Text } from 'react-native';

import config from 'client/config';

import MessageScreen from 'client/app/screens/MessageScreen';

export default class MessagesScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // messageSession = { messageSessionId, userId1, userId2 }
            messageSessions: [],
        };
    }

    componentWillMount() {
        // Grab active messageSessions
        fetch(config.API_URL + `/v1/user/${userId}/messageSessions`)
            .then(response => {
                if (!response.ok) {
                    // TODO: Handle errors
                }

                return response.json()
            })
            .then(messageSessions => this.setState({ messageSessions }))
            .catch(error => {
                // TODO: Handle network errors
            });
    }

    render() {
        const { messageSessions } = this.state;

        // TODO: List messageSessions, route to MessageScreen with
        // messageSessionId, userId, and otherUserId
        return (
            <MessageScreen
                userId="userId"
                otherUserId="someOtherUserId"
            />
        );
    }
}
