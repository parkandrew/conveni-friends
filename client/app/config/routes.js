import React from 'react';
import LoginScreen from 'client/app/screens/LoginScreen'
import HomeScreen from 'client/app/screens/HomeScreen'
import MakeRequestScreen from 'client/app/screens/MakeRequestScreen';
import AccountScreen from 'client/app/screens/Settings/AccountScreen';
import ChangePassword from 'client/app/screens/Settings/ChangePassword';
import NearbyRequestsScreen from 'client/app/screens/NearbyRequestsScreen';
import SignupScreen from 'client/app/screens/SignupScreen';
import PersonalRequestsScreen from 'client/app/screens/PersonalRequestsScreen';
import RequestDetailsScreen from 'client/app/screens/RequestDetailsScreen';
import MessageScreen from 'client/app/screens/MessageScreen';
import MessagesScreen from 'client/app/screens/MessagesScreen';
import MapScreen from 'client/app/screens/MapScreen';
import { StackNavigator } from 'react-navigation';

const ReactNavigation = StackNavigator({
	HomeScreen: { screen: HomeScreen },
	LoginScreen: { screen: LoginScreen },
	MakeRequestScreen: {screen: MakeRequestScreen},
	SignupScreen: {screen: SignupScreen},
	NearbyRequestsScreen: {screen: NearbyRequestsScreen},
	AccountScreen: {screen: AccountScreen},
	ChangePassword: {screen: ChangePassword},
	PersonalRequestsScreen: {screen: PersonalRequestsScreen},
	RequestDetailsScreen: {screen: RequestDetailsScreen},
	MessageScreen: {screen: MessageScreen},
	MessagesScreen: {screen: MessagesScreen},
	MapScreen: {screen: MapScreen} // maybe a requester map and a provider map screen? or just use props to pass in properly.
})

export default ReactNavigation;
