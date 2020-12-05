import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { editItem } from '../redux/slices/todoListSlice';
import FormComponent from '../components/FormComponent';

function EditScreen({ route, navigation }) {
	console.log(route.params);
	const dispatch = useDispatch();
	return (
		<FormComponent
			title={route.params.title}
			content={route.params.content}
			priority={route.params.priority}
			onSubmit={(title, content, priority) => {
				dispatch(
					editItem({ id: route.params.id, title, content, priority })
				);
				navigation.pop();
			}}
		/>
	);
}

const styles = StyleSheet.create({});

export default EditScreen;
