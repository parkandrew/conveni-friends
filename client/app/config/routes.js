import React from 'react';
import LoginScreen from 'client/app/screens/LoginScreen'
import HomeScreen from 'client/app/screens/HomeScreen'
import MakeRequestScreen from 'client/app/screens/MakeRequestScreen';
import AccountScreen from 'client/app/screens/AccountScreen';
import NearbyRequestsScreen from 'client/app/screens/NearbyRequestsScreen';
import SignupScreen from 'client/app/screens/SignupScreen';
import { StackNavigator } from 'react-navigation'; 

import PersonalRequestsScreen from 'client/app/screens/PersonalRequestsScreen';


const ReactNavigation = StackNavigator({
	HomeScreen: { screen: HomeScreen },
	LoginScreen: { screen: LoginScreen },
	MakeRequestScreen: {screen: MakeRequestScreen},
	SignupScreen: {screen: SignupScreen},
	NearbyRequestsScreen: {screen: NearbyRequestsScreen},
	AccountScreen: {screen: AccountScreen},
	PersonalRequestsScreen: {screen: PersonalRequestsScreen},
})

export default ReactNavigation;