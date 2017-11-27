import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import AcceptedRequestsScreen from 'client/app/screens/AcceptedRequestsScreen';
import YourRequestsScreen from 'client/app/screens/YourRequestsScreen';

import { StyleSheet } from 'react-native';

// TODO: Style for android too (tint color)
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
		labelStyle: {
			fontSize: 20,
			paddingBottom: 10,
			color: '#3D95DA',
		},
		tabStyle: {
			borderColor: '#3D95DA',
			borderWidth: 2
		}
	},
});
export default Tabs;