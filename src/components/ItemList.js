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
		<>
			<Text>{name}</Text>
			<FlatList
				horizontal
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) =>
					renderItem(item, dispatch, navigation)
				}
			/>
		</>
	);
}

function renderItem(item, dispatch, navigation) {
	return (
		<View>
			<TouchableOpacity
				onPress={() => navigation.navigate('Details', { id: item.id })}
			>
				<Text>{item.title}</Text>
				<Text>{item.content}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => dispatch(deleteItem({ id: item.id }))}
			>
				<AntDesign name="delete" size={24} color="black" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({});

export default ItemList;
