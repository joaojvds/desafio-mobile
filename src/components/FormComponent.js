import React, { useState } from 'react';
import { Button, Text, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function FormComponent(props) {
	const [title, setTitle] = useState(props.title);
	const [content, setContent] = useState(props.content);
	const [priority, setPriority] = useState(props.priority);

	return (
		<>
			<Text>Titulo:</Text>
			<TextInput value={title} onChangeText={(text) => setTitle(text)} />
			<Text>Descrição:</Text>
			<TextInput
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<Text>Prioridade:</Text>
			<Picker
				selectedValue={priority}
				style={{ height: 50 }}
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
		</>
	);
}

FormComponent.defaultProps = {
	title: '',
	content: '',
	priority: 0,
};

const styles = StyleSheet.create({});

export default FormComponent;
