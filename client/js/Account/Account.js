import React from 'react';
import { List, ListItem } from 'react-native-elements'; // 0.18.2
import styles from '../style'


export default class Account extends React.Component {

  static navigationOptions = {
	  title: 'Account Settings',
	//headerLeft: null,
  };

  render () {
    return (
      // todo: bind to other screens later
      <List>
        <ListItem title='Change Name' />
        <ListItem title='Request History' />
        <ListItem title='Logout' />
      </List>
    )
  }
}
