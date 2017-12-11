import { StyleSheet } from 'react-native';
import { Button, Image, Dimensions } from 'react-native';

// consts
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const screenWidth = 350;
const $font__large = 45;
const $font__medium = 20;
const $font__small = 16;
const $fontSize = 16;

// iOS colors
// refer to http://www.colourlovers.com/palette/3888271/IOS_9_Colors
const $white = '#FFFFFF';
const $loving_blue = '#0076FF';
const $ios_blue = '#54C7FC';
const $ip = '#8E8E93';


const styles = StyleSheet.create({

	labelStyle: {
		fontSize: 20,
		paddingBottom: 10,
		color: $loving_blue,
	},

	tabStyle: {
		borderColor: $loving_blue,
		borderWidth: 2
	},

	listSeparatorContainer: {
		height: 1,
		backgroundColor: '#000',
	},

	cardContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 65,
		paddingRight: 6,
		paddingLeft: 6,
		backgroundColor: $white,
	},
	cardLeft: {
		flex: 0.8,
		paddingRight: 16,
		justifyContent: 'center',
	},
	cardTitle: {
		fontSize: $font__medium,
	},
	cardSubTitle: {
		fontSize: $font__small,
		marginTop: 4
	},
	cardRight: {
		flex: 0.2,
		justifyContent: 'center',
		paddingLeft: 6,
	},
	cardDistance: {
		fontSize: $font__small
	},


// Generic styling
	titleLarge: {
		fontSize: $font__large,
		fontWeight: 'bold',
	  color: $loving_blue,
	},

	titleMedium: {
		fontSize: $font__medium,
	  color: $loving_blue,
	},

	titleSmall: {
		fontSize: $font__small,
		color: $loving_blue,
	},

	genericContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: $ios_blue,
	},


	homeButton: {
	  alignItems: 'flex-start',
	},

// HamburgerMenu
	hamburgerContainer: {
		flex: 1,
		backgroundColor: $white,
	},


// NearbyRequests
    nearbyContainer: {
      flex: 1,
      backgroundColor: $white,
    },


// MakeRequestScreen/DateTimePicker
    dtpContainer: {
      //flex: .12,
      alignItems: 'flex-start',
    },
    dtpDatePicker: {
      width: screenWidth/2.1,
			padding: 10,
      backgroundColor: $white,
      height: $font__small + 26,
      fontSize: $font__small,
      paddingLeft: 15,
      borderColor: $loving_blue,
      borderWidth: 2,
      borderRadius: 6,
      overflow: 'hidden'
    },
    dtpInputHeader: {
      fontSize: $font__small,
      marginBottom: 1,
    },


// MakeRequestScreen/FormInput

	formContainer: {
		alignItems: 'flex-start',
	},
	formInput: {
		backgroundColor:$white,
		padding: 10,
		width: screenWidth,
		height: $font__small + 26,
		fontSize: $font__small,
		borderColor: $loving_blue,
		borderWidth: 2,
		borderRadius: 6
	},
	formInputHeader: {
		fontSize: $font__small,
		marginBottom: 1
	},
	formMultiLine: {
		height: $font__small * 6,
	},


// LoginScreen

	loginContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: $white,
	},
	loginFormInput: {
		justifyContent: 'space-around',
		alignItems: 'center',
		borderColor: $loving_blue,
		height: $font__small + 26,
		fontSize: $font__small,
		paddingBottom: 0,
		paddingLeft: 8,
		width: screenWidth/1.618,
		borderWidth: 2,
		backgroundColor: $white,
		borderRadius: 10,
	},
	loginFormInputHeader: {
		fontSize: $font__small,
		marginBottom: 1
	},
	makeLoginLine: {
		flex: 0.11,
		marginBottom: 5,

	},
	loginDisplay: {
		flex: 0.5,
		width: deviceWidth,
		height: deviceHeight/3,
	},

// MakeRequestScreen/MakeRequest

	makeContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: $ios_blue,
		justifyContent: 'center',
		paddingTop: 20,
	},
	makeInputView: {
		flex: .9,
	},
	makeSingleLine: {
		flex: 0.17,
		marginBottom: 24,
	},
	makeDateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: screenWidth,
		marginBottom: 10,
	},


// CustomButton StyleSheet
	customButton: {
		justifyContent: 'space-around',
		alignItems: 'center',
		marginTop: 15,
		borderColor: $loving_blue,
		height: $font__small + 26,
		paddingTop: 5,
		paddingBottom: 5,
		width: screenWidth/1.618,
		borderWidth: 2,
		backgroundColor: $white,
		borderRadius: 10,
	},
	customButtonFont: {
		fontSize: 20,
		fontWeight: 'bold',
		color: $loving_blue,
	},

});



export default styles;
