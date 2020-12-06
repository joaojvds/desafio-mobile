import React from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/slices/todoListSlice';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ItemList({ name, data }) {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	console.log(name);
	console.log(data);
	return (
		<View style={styles.listContainer}>
			<Text style={styles.listTitle}>{name}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) =>
					renderItem(item, dispatch, navigation)
				}
			/>
		</View>
	);
}

function renderItem(item, dispatch, navigation) {
	return (
		<View style={styles.itemContainer}>
			<TouchableOpacity
				style={styles.detailsButton}
				onPress={() => navigation.navigate('Details', { id: item.id })}
			>
				<Text style={styles.itemTitle}>{item.title}</Text>
				<Text style={styles.itemContent}>{item.content}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.deleteButton}
				onPress={() => dispatch(deleteItem({ id: item.id }))}
			>
				<AntDesign name="delete" size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginBottom: 10,
	},
	listTitle: {
		fontSize: 20,
		marginHorizontal: 10,
		marginVertical: 5,
		fontWeight: 'bold',
	},
	itemContainer: {
		borderWidth: 1,
		height: 170,
		width: 230,
		borderRadius: 7,
		marginHorizontal: 15,
		marginVertical: 5,
		justifyContent: 'space-between',
	},
	itemTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	itemContent: {
		fontSize: 14,
	},
	detailsButton: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		flex: 7,
	},
	deleteButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
		flex: 3,
	},
});

export default ItemList;
