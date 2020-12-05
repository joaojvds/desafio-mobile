import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';

function DetailsScreen({ route, navigation }) {
	const todoList = useSelector((state) => state.todoList);
	/*Faz uma busca na store pelo o item*/
	const item = todoList.find((item) => item.id === route.params.id);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity
					onPress={() => navigation.navigate('Edit', item)}
				>
					<AntDesign name="edit" size={24} color="black" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	return (
		<>
			<Text>{item.title}</Text>
			<Text>{item.content}</Text>
		</>
	);
}

const styles = StyleSheet.create({});

export default DetailsScreen;
