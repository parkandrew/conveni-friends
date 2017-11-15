import React from 'react';
import { 
	StyleSheet,
	Text, 
	TextInput, 
	View 
} from 'react-native';	

export default class SingleLineInput extends React.Component {

  	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.inputHeader}>{this.props.title}</Text>
				<TextInput style={styles.input} placeholder={this.props.placeholder}/>
			</View>
    	);
	}
}
// port this to styles file
let screenWidth = 350;
let fontSize = 20;
const styles = StyleSheet.create({
	container: {
		flex: .12,
		alignItems: 'flex-start',
	},
	input: {
		backgroundColor:'#FFF',
		width: screenWidth,
		height: fontSize + 4,
		fontSize: fontSize
	},
	inputHeader: {
		fontSize: fontSize
	},
});
