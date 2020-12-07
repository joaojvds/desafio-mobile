import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { editItem, deleteItem } from '../redux/slices/todoListSlice';
import FormComponent from '../components/FormComponent';

function EditScreen({ route, navigation }) {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todoList);

	// Faz uma uma busca pelo no array de state pelo id
	let todo = todoList.find((todo) => todo.id === route.params.id);

	/**
	 * Caso não encontre nenhum item no state,
	 * ele seta todo com um objeto com um objeto com os campos vazio
	 */
	if (!todo) {
		todo = {
			id: '',
			userId: 1,
			title: '',
			completed: false,
		};
	}

	// Botão de deletar, localizado no header
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity
					style={styles.headerButton}
					onPress={() => {
						dispatch(deleteItem({ id: todo.id }));
						// retorna para a tela anterior
						navigation.pop();
					}}
				>
					<AntDesign name="delete" size={24} color="black" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	return (
		<FormComponent
			title={todo.title}
			completed={todo.completed}
			onSubmit={(title, completed) => {
				dispatch(
					editItem({
						id: todo.id,
						userId: 1,
						title,
						completed,
					})
				);
				navigation.pop();
			}}
		/>
	);
}

const styles = StyleSheet.create({
	headerButton: {
		padding: 20,
	},
});

export default EditScreen;
