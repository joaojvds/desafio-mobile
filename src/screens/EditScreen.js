import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { editItem, deleteItem } from '../redux/slices/todoListSlice';
import FormComponent from '../components/FormComponent';

function EditScreen({ route, navigation }) {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todoList);

	let todo = todoList.find((todo) => todo.id === route.params.id);

	if (!todo) {
		todo = {
			id: '',
			userId: 1,
			title: '',
			completed: false,
		};
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity
					style={styles.headerButton}
					onPress={() => {
						dispatch(deleteItem({ id: todo.id }));
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
