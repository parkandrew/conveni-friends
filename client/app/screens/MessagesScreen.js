import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import Drawer from 'react-native-drawer';
import { View } from 'react-native';
import styles from 'client/styles/style';
import config from 'client/config';
import MessageScreen from 'client/app/screens/MessageScreen';

export default class MessagesScreen extends Component {
    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};
        return {
            headerRight: params.headerRight,
            title: 'Messages',
        }
    };
    constructor(props) {
        super(props);

        this.state = {
            // messageSession = { messageSessionId, userId1, userId2 }
            messageSessions: [],
        };

        this.getMessageSession = this.getMessageSession.bind(this);
        this._setNavigationParams = this._setNavigationParams.bind(this);        
    }

    toggleDrawer = () => {
        if (!this._drawer._open) {
            this._drawer.open();
        }
        else {
            this._drawer.close();
        }
    }

    _setNavigationParams() {
        let headerRight =
        <Hamburger
            onPress={()=>{this.toggleDrawer()}}
        />;
        this.props.navigation.setParams({
          headerRight,
        });
    }

    componentWillMount() {
        const { userId } = this.props.navigation.state.params;
        _this._setNavigationParams();
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
        const drawerStyles = {
            drawer: { backgroundColor: '#000000',
                shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
        }
        const { userId } = this.props.navigation.state.params;
        const { messageSessions } = this.state;

        // TODO: Sort by most recent messages
        // TODO: Display most recent message
        return (
            <Drawer type='overlay'
<<<<<<< HEAD
                content={<HamburgerMenu
                    user={this.state.user}
                    navigation={this.props.navigation}
                    _drawer={this._drawer}
                    />}
                ref={(ref) => this._drawer = ref}
                openDrawerOffset={0.6}
                style={drawerStyles}
                tapToClose={true}
                acceptPan={true}
                side={'right'}
                panCloseMask={0.6}
                panOpenMask={0}>
                <View style={styles.messageContainer}>
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
                </View>
            </Drawer>
=======
            content={<HamburgerMenu
                user={this.state.user}
                navigation={this.props.navigation}
                _drawer={this._drawer}
                />}
            ref={(ref) => this._drawer = ref}
            openDrawerOffset={0.6}
            style={drawerStyles}
            tapToClose={true}
            acceptPan={true}
            side={'right'}
            panCloseMask={0.6}
            panOpenMask={0}>
          <View style={styles.messageContainer}>
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
          </View>
        </Drawer>
>>>>>>> 3d71e855426d0cf4892b1ebab87816a26891623a
        );
    }
}
