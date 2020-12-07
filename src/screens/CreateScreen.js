import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/todoListSlice';
import FormComponent from '../components/FormComponent';

function CreateScreen({ navigation }) {
	const dispatch = useDispatch();

	return (
		<FormComponent
			onSubmit={(title, completed) => {
				// Adiciona no state o novo item
				dispatch(
					addItem({
						id: +new Date(),
						userId: 1,
						title,
						completed,
					})
				);
				// Ao terminar retorna para a pagina anterior
				navigation.pop();
			}}
		/>
	);
}

export default CreateScreen;
