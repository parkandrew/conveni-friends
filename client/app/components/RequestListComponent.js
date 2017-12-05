import React from 'react';
import { StyleSheet, FlatList, ListView, Alert, Text, View, TextInput, Button } from 'react-native';
// import styles from 'client/styles/style';
import Card from 'client/app/components/Card';
import RenderSeparator from 'client/app/components/ListSeparator';

export default class RequestListComponent extends React.Component {
	static navigationOptions = {
	}
	constructor(props) {
		super(props);
		this._renderItem = this._renderItem.bind(this);
	}


	_renderItem = ({ item }) => (
		<Card data={item} />
	);

	_renderSeparator = () => (
		<RenderSeparator/>
	);

	render() {
		const ITEM_HEIGHT = 400;
		return (
			<FlatList
			// TODO: getItemLayout may have to be implemented to render large lists
				// getItemLayout={(data, index) => ({
				// 	length: 500, offset: 500 * index, index})
				// }
				ItemSeparatorComponent={this._renderSeparator}
				data={this.props.data}
				renderItem={this._renderItem}
			/>
		);
	}
}
