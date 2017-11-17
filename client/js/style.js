import { StyleSheet } from 'react-native';

// consts
  let screenWidth = 350;
  let fontSize = 16;

const styles = StyleSheet.create({

// HomeScreen
    homeTitle: {
      fontSize: 40,
      color: 'red'
    },
    homeContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    homeButton: {
      alignItems: 'flex-start',
    },


// LoginScreen
    loginTitle: {
      fontSize: 40,
      color: 'red'
      },
    loginContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },


// NearbyRequests
    nearbyTitle: {
      fontSize: 20,
      color: 'red'
    },
    nearbyContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },

// SignupScreen

    signupTitle: {
      fontSize: 20,
      color: 'red'
    },
    signupContainer: {
      flex: 1,
      backgroundColor: '#fff',
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
      backgroundColor: '#FFF',
      height: fontSize + 16,
      fontSize: fontSize,
      padding: 5,
      paddingLeft: 10,
      borderColor: '#3D95DA',
      borderWidth: 2,
      borderRadius: 6,
      overflow: 'hidden'
    },
    dtpInputHeader: {
      fontSize: fontSize,
      marginBottom: 1
    },


// MakeRequestScreen/FormInput

	formContainer: {
		alignItems: 'flex-start',
	},
	formInput: {
		backgroundColor:'#FFF',
		padding: 10,
		width: screenWidth,
		height: fontSize + 26,
		fontSize: fontSize,
		borderColor: '#3D95DA',
		borderWidth: 2,
		borderRadius: 6
	},
	formInputHeader: {
		fontSize: fontSize,
		marginBottom: 1
	},
	formMultiLine: {
		height: fontSize * 6,
	},

// MakeRequestScreen/MakeRequest

	makeContainer: {
		flex: 1,
		backgroundColor: '#ADD8E6',
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
