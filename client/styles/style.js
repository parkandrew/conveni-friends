import { StyleSheet } from 'react-native';

// consts
let screenWidth = 350;
let $font__large = 40;
let $font__medium = 20;
let $font__small = 16;
let $fontSize = 16;

let $white = '#FFFFFF';
let $blue__primary = '#ADD8E6';
let $blue__secondary = '#3D95DA';

const styles = StyleSheet.create({

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

// HomeScreen
    homeTitle: {
      fontSize: $font__large,
      color: 'red'
    },
    homeContainer: {
      flex: 1,
      backgroundColor: $white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeButton: {
      alignItems: 'flex-start',
    },


// LoginScreen
    loginTitle: {
      fontSize: $font__large,
      color: 'red'
      },
    loginContainer: {
      flex: 1,
      backgroundColor: $white,
      alignItems: 'center',
      justifyContent: 'center',
    },


// NearbyRequests
    nearbyTitle: {
      fontSize: $font__medium,
      color: 'red'
    },
    nearbyContainer: {
      flex: 1,
      backgroundColor: $white,
    },

// SignupScreen

    signupTitle: {
      fontSize: $font__medium,
      color: 'red'
    },
    signupContainer: {
      flex: 1,
      backgroundColor: $white,
      alignItems: 'center',
      justifyContent: 'center',
    },

// MakeRequestScreen/DateTimePicker

    dtpContainer: {
      flex: .12,
      alignItems: 'flex-start',
    },
    dtpDatePicker: {
      width: screenWidth/2.4,
      backgroundColor: $white,
      height: $font__small + 16,
      fontSize: $font__small,
      padding: 5,
      paddingLeft: 10,
      borderColor: $blue__secondary,
      borderWidth: 2,
      borderRadius: 6,
      overflow: 'hidden'
    },
    dtpInputHeader: {
      fontSize: $font__small,
      marginBottom: 1
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
		borderColor: $blue__secondary,
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
		backgroundColor: $blue__primary,
		alignItems: 'center',
		paddingTop: 20,
	},
	makeInputView: {
		flex: .9
	},
	makeSingleLine: {
		flex: 0.14,
		marginBottom: 24
	},
	makeDateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: screenWidth,
		marginBottom: 10
	},

});

export default  styles;
