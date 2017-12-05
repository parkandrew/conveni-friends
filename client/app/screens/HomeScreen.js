import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import LoginScreen from 'client/app/screens/LoginScreen';
import Drawer from 'react-native-drawer'; // 2.5.0
import HamburgerMenu from 'client/app/Common/HamburgerMenu';
import Hamburger from 'client/app/Common/Hamburger';
import styles from 'client/styles/style';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};
        return {
            headerLeft:  params.headerLeft,
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            sessionKey: '',
            active: false
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.logout = this.logout.bind(this);
        this._getSessionKey = this._getSessionKey.bind(this);
        this.provider = this.provider.bind(this);
        this.requester = this.requester.bind(this);
        this._setNavigationParams = this._setNavigationParams.bind(this);
        this.account = this.account.bind(this); // TODO: remove later
    }
    logout() {
        this.setState({session_key: ''});
        this.props.navigation.navigate('LoginScreen');
    }
    _getSessionKey() {
        //TODO: get key from storage somehow
        if (this.props.navigation.state.params) {
            this.setState({sessionKey: this.props.navigation.state.params.sessionKey});
        }
        else {
        }
    }
    toggleDrawer = () => {
        if (!this._drawer._open) {
            this._drawer.open();
        }
        else {
            this._drawer.close();
        }
    };
    provider() {
        //TODO: load nearby requests screen
        this.props.navigation.navigate('NearbyRequestsScreen');
    }
    requester() {
        this.props.navigation.navigate('MakeRequestScreen');
    }

    // TODO: remove later
    account() {
        this.props.navigation.navigate('AccountScreen');
    }


    _setNavigationParams() {
        let headerLeft =
        <Hamburger
            onPress={()=>{this.toggleDrawer()}}
        />;
        this.props.navigation.setParams({
          headerLeft,
        });
    }

    componentWillMount() {
        this._setNavigationParams();
        this._getSessionKey();
      }

    render() {
        const drawerStyles = {
            drawer: { backgroundColor: '#000000',
                shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
        }
        const { navigate } = this.props.navigation;
        //TODO: either create a splash screen to navigate
        //to the loginscreen/homescreen or navigate from homescreen
        //to loginscreen (prefer splash screen)

        if (!this.state.sessionKey) {
            navigate('Login');
        }
        return (
                <Drawer type='overlay'
                    content={<HamburgerMenu
                        logout={() => {
                            this.logout();
                        }}
                        />}
                    ref={(ref) => this._drawer = ref}
                    openDrawerOffset={0.6}
                    style={drawerStyles}
                    tapToClose={true}
                    acceptPan={true}
                    panCloseMask={0.6}
                    panOpenMask={0}>
                    <View style={styles.homeContainer}>
                        <Text>I am a...</Text>
                        <Button onPress={this.provider}
                            title='Provider' />
                        <Button onPress={this.requester}
                            title='Requester' />
                        <Button onPress={this.account}  // TODO:remove later
                            title='Account Settings' />
                        <Button onPress={() => navigate('MessagesScreen', { userId: 'userId' })}  // TODO:remove later
                            title='Messages' />
                    </View>
                </Drawer>
        );

    }
}
