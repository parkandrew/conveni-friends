import React, { Component } from 'react';
import { Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

import config from 'client/config';

export default class MessageScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };

        this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
        const { messageSessionId } = this.props;

        // Get messages with otherUserId
        fetch(config.API_URL + `/v1/message/session/${messageSessionId}`)
            .then(response => {
                if (!response.ok) {
                    // TODO: Handle errors
                }

                return response.json()
            })
            .then(messages => this.setState({ messages }))
            .catch(error => {
                // TODO: Handle network errors
            });
    }

    onSend(messages) {
        const { userId, otherUserId } = this.props;

        // Update locally
        this.setState({
            messages: GiftedChat.append(this.state.messages, messages),
        });

        // TODO: Send message to server websocket.

        // Send message to server
        fetch(config.API_URL + `/v1/message/send/?senderId=${userId}` +
                               `&receiverId=${otherUserId}&message=${JSON.stringify(messages)}`,
             { method: 'POST' })
            .then(response => {
                if (!response.ok) {
                    // TODO: Handle errors
                }
            })
            .catch(error => {
                // TODO: Handle network errors
            });
    }

    render() {
        const { userId } = this.props;
        const { messages } = this.state;

        return (
            <GiftedChat
                messages={ messages }
                onSend={ messages => this.onSend(messages) }
                user={{ _id: userId }}
            />
        );
    }
};
