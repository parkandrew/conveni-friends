import React from 'react';
import LoginScreen from 'client/app/screens/LoginScreen'
import HomeScreen from 'client/app/screens/HomeScreen'
import MakeRequestScreen from 'client/app/screens/MakeRequestScreen';
import AccountScreen from 'client/app/screens/AccountScreen';
import NearbyRequestsScreen from 'client/app/screens/NearbyRequestsScreen';
import SignupScreen from 'client/app/screens/SignupScreen';
import PersonalRequestsScreen from 'client/app/screens/PersonalRequestsScreen';
import RequestDetailsScreen from 'client/app/screens/RequestDetailsScreen';
import { StackNavigator } from 'react-navigation'; 




const ReactNavigation = StackNavigator({
	HomeScreen: { screen: HomeScreen },
	LoginScreen: { screen: LoginScreen },
	MakeRequestScreen: {screen: MakeRequestScreen},
	SignupScreen: {screen: SignupScreen},
	NearbyRequestsScreen: {screen: NearbyRequestsScreen},
	AccountScreen: {screen: AccountScreen},
	PersonalRequestsScreen: {screen: PersonalRequestsScreen},
	RequestDetailsScreen: {screen: RequestDetailsScreen},
})

export default ReactNavigation;