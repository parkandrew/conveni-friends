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

        this.initWs = this.initWs.bind(this);
        this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
        const { messageSessionId } = this.props.navigation.state.params;

        this.initWs();

        // Get messages with otherUserId
        fetch(config.API_URL + `/v1/message/session/${messageSessionId}`)
            .then(response => response.json())
            .then(messages => this.setState({ messages }))
            .catch(error => {
                // TODO: Handle network errors
            });
    }

    componentWillUnmount() {
        this.ws.close();
    }

    initWs() {
        const { userId, otherUserId } = this.props.navigation.state.params;

        this.ws = new WebSocket(`${config.WS_URL}/?userId=${userId}` +
                                 `&otherUserId=${otherUserId}`);

        // NOTE: I think that we don't need to worry about messages from other
        // websockets because the message includes the otherUserId which
        // GiftedChat uses to determine whether to display the message or not.
        // NOTE: MessageEvent e = { data, ... }
        this.ws.onmessage = e => {
            const messages = JSON.parse(e.data);

            // Update locally
            this.setState({
                messages: GiftedChat.append(this.state.messages, messages),
            });
        };
    }

    onSend(messages) {
        const { messageSessionId } = this.props.navigation.state.params;
        const { userId, otherUserId } = this.props.navigation.state.params;

        // Update locally
        this.setState({
            messages: GiftedChat.append(this.state.messages, messages),
        });

        // Send through websocket
        this.ws.send(JSON.stringify(messages));

        // Send message to server
        fetch(config.API_URL + `/v1/message/send/?messageSessionId=${messageSessionId}` +
                               `&senderId=${userId}` +
                               `&receiverId=${otherUserId}` +
                               `&content=${JSON.stringify(messages)}`,
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
        const { userId } = this.props.navigation.state.params;
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
