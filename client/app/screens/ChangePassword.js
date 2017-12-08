import React from 'react';
import { Alert, Text, View, TextInput, Button } from 'react-native';
import styles from 'client/styles/style';
import CustomButton from 'client/app/components/CustomButton';

export default class ChangePassword extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Change Password'
    }
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: '',
            password: '',
            password2: '',
        };
        this._changePass = this._changePass.bind(this)
        this._getUser = this._getUser.bind(this);
    }
    _changePass() {
        //alphanumeric characters
        const alphanum = /[0-9a-zA-Z]+/g;
            if (this.state.oldPassword && this.state.password && this.state.password2) {
                if (this.state.password === this.state.password2) {
                  this.state.user.changePassword(this.state.oldPassword, this.state.password).then(
                    (response) => {this.props.navigation.navigate('LoginScreen')}
                  ).catch((error) => {Alert.alert("There was an error changing your password.")});


                }
                else {
                    Alert.alert("Passwords do not match, please reenter.");
                }
            }
            else {
                Alert.alert("Password field(s) blank, please enter.");
            }
    }
    componentWillMount() {
        this._getUser();
    }
    _getUser() {
            if (this.props.navigation.state.params) {
                this.setState({user: this.props.navigation.state.params.user});
            }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.signupContainer}>
            <Text style={styles.signupTitle}>Change Password</Text>
            <TextInput
                secureTextEntry={true}
                placeholder="Old Password"
                onChangeText={(text) => this.setState({oldPassword: text})}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="New Password"
                onChangeText={(text) => this.setState({password: text})}
            />
            <TextInput
                secureTextEntry={true}
                placeholder="Confirm Password"
                onChangeText={(text) => this.setState({password2: text})}
            />
            <CustomButton
                onPressHandle={this._changePass}
                text="Confirm"
            />
        </View>
        );
    }
}
