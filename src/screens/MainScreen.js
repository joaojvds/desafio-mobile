import React, { useLayoutEffect } from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import ItemList from '../components/ItemList';

function MainScreen({ navigation }) {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todoList);

	const filterPriority = (priority) => {
		return todoList.filter((item) => item.priority === priority);
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				//Botão para criar novos itens
				<TouchableOpacity onPress={() => navigation.navigate('Create')}>
					<AntDesign name="pluscircleo" size={24} color="black" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	return (
		<>
			<ScrollView>
				<ItemList name="Alta prioridade" data={filterPriority(0)} />
				<ItemList name="Media prioridade" data={filterPriority(1)} />
				<ItemList name="Baixa prioridade" data={filterPriority(2)} />
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({});

export default MainScreen;
