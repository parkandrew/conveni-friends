import React from 'react';
import { TabNavigator } from 'react-navigation';

import AcceptedRequestsScreen from 'client/app/screens/AcceptedRequestsScreen';
import YourRequestsScreen from 'client/app/screens/YourRequestsScreen';
import styles from 'client/styles/style'

import { StyleSheet } from 'react-native';

// TODO: Style for android too (tint color) and maybe move styles away?
const Tabs = TabNavigator({
	AcceptedRequests: {
		screen: AcceptedRequestsScreen,
	},
	YourRequests: {
		screen: YourRequestsScreen,
	},
}, {
	tabBarPosition: 'top',
	tabBarOptions: {
		activeBackgroundColor: '#ADD8E6',
		inactiveBackgroundColor: '#D3D3D3',
		labelStyle: styles.labelStyle,
		tabStyle: styles.tabStyle,
	},
});
export default Tabs;
