import { StyleSheet } from 'react-native';
import { Button } from 'react-native';

// consts
const screenWidth = 350;
const $font__large = 45;
const $font__medium = 20;
const $font__small = 16;
const $fontSize = 16;

// iOS colors
const $white = '#FFFFFF';
const $loving_blue = '#0076FF';
const $ios_blue = '#54C7FC';

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
		backgroundColor: $ios_blue,
		alignItems: 'center',
		justifyContent: 'center',
	},


	homeButton: {
	  alignItems: 'flex-start',
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
custom_button: {
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: 5,
		marginBottom: 5,
		borderColor: $loving_blue,
		height: 40,
		paddingBottom: 5,
		width: screenWidth/1.618,
		borderWidth: 2,
		backgroundColor: $white,
		borderRadius: 6
	},
	custom_button_font: {
		fontSize: 20,
		fontWeight: 'bold',
		color: $loving_blue,
	},

});



export default styles;
