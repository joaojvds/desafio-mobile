import React from 'react';
import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/slices/todoListSlice';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ItemList({ name, data }) {
	const navigation = useNavigation();
	const dispatch = useDispatch();

	return (
		<View style={styles.listContainer}>
			<Text style={styles.listTitle}>{name}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) =>
					renderItem(item, dispatch, navigation)
				}
			/>
		</View>
	);
}

/** Itens que serão renderizados na lista */
function renderItem(item, dispatch, navigation) {
	return (
		<View style={styles.itemContainer}>
			<TouchableOpacity
				style={styles.detailsButton}
				onPress={() => navigation.navigate('Edit', { id: item.id })}
			>
				<Text style={styles.itemTitle}>{item.title}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.deleteButton}
				onPress={() =>
					dispatch(
						editItem({
							id: item.id,
							userId: item.userId,
							title: item.title,
							completed: !item.completed,
						})
					)
				}
			>
				<MaterialCommunityIcons
					name={
						item.completed
							? 'checkbox-marked-outline'
							: 'checkbox-blank-outline'
					}
					size={24}
					color="white"
				/>
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
		backgroundColor: '#24a0ed',
		flex: 3,
	},
});

export default ItemList;
