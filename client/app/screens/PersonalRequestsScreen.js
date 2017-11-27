import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import AcceptedRequestsScreen from 'client/app/screens/AcceptedRequestsScreen';
import YourRequestsScreen from 'client/app/screens/YourRequestsScreen';

const Tabs = TabNavigator({
	AcceptedRequestsScreen: {
		screen: AcceptedRequestsScreen,
	},
	YourRequestsScreen: {
		screen: YourRequestsScreen,
	},
}, {
	tabBarPosition: 'top',
});
export default Tabs;