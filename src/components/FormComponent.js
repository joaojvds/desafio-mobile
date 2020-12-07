import React, { useState } from 'react';
import { View, Button, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function FormComponent(props) {
	const [title, setTitle] = useState(props.title);
	const [completed, setCompleted] = useState(props.completed);

	return (
		<View style={styles.formContainer}>
			<Text style={styles.inputLabel}>Titulo:</Text>
			<TextInput
				style={styles.input}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>
			<Text style={styles.inputLabel}>Estado:</Text>
			<Picker
				selectedValue={completed}
				style={styles.picker}
				onValueChange={(itemValue) => setCompleted(itemValue)}
			>
				<Picker.Item label="Aberto" value={false} />
				<Picker.Item label="Completo" value={true} />
			</Picker>
			<Button
				title="salvar"
				onPress={() => props.onSubmit(title, completed)}
			/>
		</View>
	);
}

// Seta os props para esses em caso de não hover props passados
FormComponent.defaultProps = {
	title: '',
	completed: false,
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
