import React, { useEffect, useLayoutEffect } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import getRealm, { fetchAPI } from '../api/realm';
import { AntDesign } from '@expo/vector-icons';
import ItemList from '../components/ItemList';
import { fetchItem } from '../redux/slices/todoListSlice.js';

function MainScreen({ navigation }) {
	// Permite a utilização das funções da store
	const dispatch = useDispatch();
	// Pega o state da store
	const todoList = useSelector((state) => state.todoList);

	/** Função para filtrar as tarefas completas das abertas */
	const filterCompleted = (completed) => {
		return todoList.filter((item) => item.completed === completed);
	};

	// Popula a store quando a pagina é iniciada
	useEffect(() => {
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

/**
 * Popula a store com dados do banco de dados
 * @param {Function} dispatch Função para alterar executar os reducers
 */
async function fetchDB(dispatch) {
	try {
		const realm = await getRealm();

		// Popula o banco de dados com os dados da API
		await fetchAPI('todo', 'todos');

		// Pega os dados do banco de dados
		const data = realm.objects('todo').sorted('id', { ascending: true });

		// Os dados pegos pelo realm são salvos na store e exibido na tela
		dispatch(fetchItem(data));
	} catch (err) {
		console.log('Erro ao fazer fetch do banco de dados, Erro: ' + err);
	}
}

const styles = StyleSheet.create({
	headerButton: {
		padding: 20,
	},
});

export default MainScreen;
