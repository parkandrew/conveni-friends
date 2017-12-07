import React from 'react';
import { Alert, List, ListItem } from 'react-native-elements'; // 0.18.2
import styles from 'client/styles/style';


export default class Account extends React.Component {

  static navigationOptions = {
  };

  constructor(props) {
      super(props);
      this.state = {
          userId: '',
          password: ''
      };
      this.changepass = this.changepass.bind(this)
  }

  changepass(){
      this.props.navigation.navigate('ChangePassword');
  }

  requesthist(){
      this.props.navigation.navigate('RequestHistory');
  }

  render () {
    return (
      <List>
        <ListItem onPress={() => this.changepass() }
                  title='Change Name'/>
        <ListItem onPress={() => this.changepass() }
                  title='Request History'/>
      </List>
    )
  }
}