import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';

import config from 'client/config';

import MessageScreen from 'client/app/screens/MessageScreen';

export default class MessagesScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // messageSession = { messageSessionId, userId1, userId2 }
            messageSessions: [],
        };

        this.getMessageSession = this.getMessageSession.bind(this);
    }

    componentWillMount() {
        const { userId } = this.props.navigation.state.params;

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

    getMessageSession(messageSessionId, otherUserId) {
        const { navigation } = this.props;
        const { userId } = this.props.navigation.state.params;

        navigation.navigate('MessageScreen', {
            messageSessionId,
            userId,
            otherUserId
        });
    }

    render() {
        const { userId } = this.props.navigation.state.params;
        const { messageSessions } = this.state;

        // TODO: Sort by most recent messages
        // TODO: Display most recent message
        return (
            <List>
                { messageSessions.map( messageSession => {
                    const { messageSessionId, userId1, userId2 } = messageSession;
                    const otherUserId = userId == userId1 ? userId2 : userId1;

                    return (
                        <ListItem
                            key={ messageSessionId }
                            title={ otherUserId }
                            onPress={ () => this.getMessageSession(messageSessionId, otherUserId) }
                        />
                    );
                })}
            </List>
        );
    }
}
