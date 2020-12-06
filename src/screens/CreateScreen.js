import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/todoListSlice';
import FormComponent from '../components/FormComponent';

function CreateScreen({ navigation }) {
	const dispatch = useDispatch();

	return (
		<FormComponent
			onSubmit={(title, completed) => {
				dispatch(
					addItem({
						id: +new Date(),
						userId: 1,
						title,
						completed,
					})
				);
				navigation.navigate('Main');
			}}
		/>
	);
}

const styles = StyleSheet.create({});

export default CreateScreen;
