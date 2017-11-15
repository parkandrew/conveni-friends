import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import LoginScreen from './LoginScreen';
import Drawer from 'react-native-drawer';
import HamburgerMenu from './Common/HamburgerMenu';

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
            user_id: '',
            password: '',
            session_key: ''
        };

        this.closeDrawer = this.closeDrawer.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
        this._clearSessionKey = this._clearSessionKey.bind(this);
        this._getSessionKey = this._getSessionKey.bind(this);
        this._doNothing = this._doNothing.bind(this);
        this.provider = this.provider.bind(this);
        this.requester = this.requester.bind(this);
        this._setNavigationParams = this._setNavigationParams.bind(this);
    }
    _clearSessionKey() {
        this.setState({session_key: ''});
    }
    _getSessionKey() {
        console.log("test");
        //get key from storage somehow
        if (this.props.navigation.state.params) {
            this.setState({session_key: this.props.navigation.state.params.session_key});
        }
        else {
            console.log("empty")
        }
    }
    closeDrawer = () => {
        this._drawer.close()
    };
    openDrawer = () => {
        this._drawer.open()
    };
    _doNothing() {
        //put here so react can stop bitching
    }
    provider() {
        //load nearby requests screen
    }
    requester() {
        this.props.navigation.navigate('MakeRequest')
    }

    _setNavigationParams() {
        let headerLeft  = <Button
        //style={styles.button}
        title='Menu'
        onPress={()=>{this.openDrawer()}}
        />;          
        this.props.navigation.setParams({ 
          headerLeft,
        });
    }

    componentWillMount() {
        this._setNavigationParams();
      }

    render() {
        const drawerStyles = {
            drawer: { backgroundColor: '#000000',
                shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
            main: {paddingLeft: 3},
        }
        const { navigate } = this.props.navigation;
        // !this.state.session_key && this._getSessionKey();
        // if (!this.state.session_key) {
        //     navigate('LoginScreen');
        // }
        return (
                <Drawer
                    type='overlay'
                    content={<HamburgerMenu closeDrawer={() => {
                        this.closeDrawer();
                      }}/>}
                    ref={(ref) => this._drawer = ref}
                    openDrawerOffset={0.6}
                    style={drawerStyles}
                    tapToClose={true}
                    acceptPan={true}
                    panCloseMask={0.9}
                    panOpenMask={0}
                >   
                    <View
                    style={styles.container}
                    >
                        <Text>I am a...</Text>
                        <Button onPress={this.provider}
                        title='Provider' />
                        <Button onPress={this.requester}
                        title='Requester' />
                    </View>
                </Drawer>
        );
    
    }
}

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      color: 'red'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'flex-start',
    }
  });