import React, { useEffect, useLayoutEffect } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../api/axios';
import getRealm from '../api/realm';
import { AntDesign } from '@expo/vector-icons';
import ItemList from '../components/ItemList';
import { fetchItem } from '../redux/slices/todoListSlice.js';

function MainScreen({ navigation }) {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todoList);

	/**Função para filtrar as tarefas completas das abertas */
	const filterCompleted = (completed) => {
		return todoList.filter((item) => item.completed === completed);
	};

	useEffect(() => {
		fetchData();

		fetchDB(dispatch);
	}, []);

	useLayoutEffect(() => {
		//Função para alterar o header da tela
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
				<ItemList name="Abertas" data={filterCompleted(false)} />
				<ItemList name="Completadas" data={filterCompleted(true)} />
			</ScrollView>
		</>
	);
}

/** Faz o fetch dos dados salvos na localstorage */
async function fetchDB(dispatch) {
	try {
		const realm = await getRealm();
		const data = realm.objects('todo').sorted('id');
		// os dados pegos pelo realm são salvos na store e exibido na tela
		dispatch(fetchItem(data));
		return realm.close;
	} catch (err) {
		console.log('linha 33 ' + err);
	}
}

async function fetchData() {
	try {
		const { data } = await axios.get();
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
