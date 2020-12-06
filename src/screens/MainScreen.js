import React, { useEffect, useLayoutEffect } from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../api/axios';
import { AntDesign } from '@expo/vector-icons';
import ItemList from '../components/ItemList';

function MainScreen({ navigation }) {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todoList);

	const filterPriority = (priority) => {
		return todoList.filter((item) => item.priority === priority);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				//Botão para criar novos itens
				<TouchableOpacity
					style={styles.headerButton}
					onPress={() => navigation.navigate('Create')}
				>
					<AntDesign name="pluscircleo" size={24} color="black" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	return (
		<>
			<ScrollView>
				<ItemList name="Abertas" data={filterPriority(0)} />
				<ItemList name="Completadas" data={filterPriority(1)} />
			</ScrollView>
		</>
	);
}

async function fetchData() {
	try {
		const { data } = await axios.get(
			'https://jsonplaceholder.typicode.com/todos/1'
		);
	} catch (err) {
		console.log(err);
	}
}

const styles = StyleSheet.create({
	headerButton: {
		padding: 20,
	},
});

export default MainScreen;
