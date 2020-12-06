import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function FormComponent(props) {
	const [title, setTitle] = useState(props.title);
	const [content, setContent] = useState(props.content);
	const [priority, setPriority] = useState(props.priority);

	return (
		<View style={styles.formContainer}>
			<Text style={styles.inputLabel}>Titulo:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.inputLabel}>Descrição:</Text>
			<TextInput
				style={styles.input}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Text style={styles.inputLabel}>Prioridade:</Text>
			<Picker
				selectedValue={priority}
				style={styles.picker}
				onValueChange={(itemValue) => setPriority(itemValue)}
			>
				<Picker.Item label="Alta prioridade" value={0} />
				<Picker.Item label="Media prioridade" value={1} />
				<Picker.Item label="Baixa prioridade" value={2} />
			</Picker>
			<Button
				title="salvar"
				onPress={() => props.onSubmit(title, content, priority)}
			/>
		</View>
	);
}

FormComponent.defaultProps = {
	title: '',
	content: '',
	priority: 0,
};

const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		margin: 20,
	},
	inputLabel: {
		fontSize: 18,
	},
	input: {
		borderWidth: 1,
		borderColor: '#dfe1e5',
		borderRadius: 5,
		padding: 10,
		height: 40,
		margin: 10,
		backgroundColor: '#e3e3e3',
	},
	picker: {
		height: 50,
		marginBottom: 10,
	},
});

export default FormComponent;
