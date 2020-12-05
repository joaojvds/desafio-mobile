import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/todoListSlice';
import FormComponent from '../components/FormComponent';

function CreateScreen({ navigation }) {
	const dispatch = useDispatch();
	return (
		<FormComponent
			onSubmit={(title, content, priority) => {
				dispatch(
					addItem({ id: `${+new Date()}`, title, content, priority })
				);
				navigation.navigate('Main');
			}}
		/>
	);
}

const styles = StyleSheet.create({});

export default CreateScreen;
