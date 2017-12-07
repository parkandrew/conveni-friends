import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import LoginScreen from 'client/app/screens/LoginScreen';
import Drawer from 'react-native-drawer'; // 2.5.0
import HamburgerMenu from 'client/app/Common/HamburgerMenu';
import Hamburger from 'client/app/Common/Hamburger';
import styles from 'client/styles/style';
import CustomButton from 'client/app/components/CustomButton';
import User from 'client/app/Common/User';

export default class HomeScreen extends React.Component {
    static navigationOptions = ({navigation, screenProps}) => {
        const params = navigation.state.params || {};
        return {
            headerLeft: params.headerLeft,
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            user: new User()
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.logout = this.logout.bind(this);
        this.provider = this.provider.bind(this);
        this.requester = this.requester.bind(this);
        this._setNavigationParams = this._setNavigationParams.bind(this);
        this.account = this.account.bind(this);
<<<<<<< HEAD
        this.map = this.map.bind(this);
=======
        this._getUser = this._getUser.bind(this);

>>>>>>> upstream/master
    }


    logout() {
        this.props.navigation.navigate('LoginScreen');
    }

    _getUser() {
            if (this.props.navigation.state.params) {
                this.setState({user: this.props.navigation.state.params.user});
            }
    }

    toggleDrawer = () => {
        if (!this._drawer._open) {
            this._drawer.open();
        }
        else {
            this._drawer.close();
        }
    }

    provider() {
        //TODO: load nearby requests screen
        this.props.navigation.navigate('NearbyRequestsScreen', {user:this.state.user});
    }
    requester() {
        this.props.navigation.navigate('MakeRequestScreen', {user:this.state.user});
    }

    account() {
        this.props.navigation.navigate('AccountScreen', {user:this.state.user});
    }
    map() {
        this.props.navigation.navigate('MapScreen', {user: this.state.user});
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
        this._getUser();
        this._setNavigationParams();
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
        if (!this.state.user.userId) {
            navigate('LoginScreen');
        }

        return (
                <Drawer type='overlay'
                    content={<HamburgerMenu
                        logout={() => {
                            this.logout();
                        }}
                        account={() => {
                            this.account();
                        }}
                        />}
                    ref={(ref) => this._drawer = ref}
                    openDrawerOffset={0.6}
                    style={drawerStyles}
                    tapToClose={true}
                    acceptPan={true}
                    panCloseMask={0.6}
                    panOpenMask={0}>
<<<<<<< HEAD
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
                        <Button onPress={this.map}  // TODO:remove later
                            title='Map' />
                    </View>
=======
                    <View style={styles.genericContainer}>
                       <Text style={styles.titleLarge}>I am a...</Text>
                       <CustomButton
                            onPressHandle={() => {this.provider();}}
                            text='Provider'/>

                        <CustomButton
                            onPressHandle={() => {this.requester();}}
                            text='Requester' />

                        <CustomButton onPressHandle={() => navigate('MessagesScreen', { userId: 'userId' })}  // TODO:remove later
                            text='Messages' />

                        <CustomButton onPressHandle={() => navigate('RequestHistory', { user: this.state.user })}  // TODO:remove later
                            text='history' />
                   </View>
>>>>>>> upstream/master
                </Drawer>
        );

    }
}
