import { createSlice } from '@reduxjs/toolkit';
import { saveData, deleteData } from '../../api/realm';

const todoListSlice = createSlice({
	name: 'todoList',
	initialState: [],
	reducers: {
		/** Função para popular a store */
		fetchItem: (state, actions) => {
			return [...actions.payload];
		},
		/** Adiciona um item no array da store */
		addItem: (state, actions) => {
			// Salva o objeto no banco de dados
			saveData('todo', actions.payload);
			return [...state, actions.payload];
		},
		/** Atualiza um item da store pelo id */
		editItem: (state, actions) => {
			// Salva o objeto no banco de dados
			saveData('todo', actions.payload, 'modified');
			return state.map((item) => {
				return item.id === actions.payload.id ? actions.payload : item;
			});
		},
		/** Deleta um item da store pelo id */
		deleteItem: (state, actions) => {
			// Deleta o objeto no banco de dados
			deleteData('todo', actions.payload.id);
			return state.filter((item) => item.id !== actions.payload.id);
		},
	},
});

// Exportando as funções para a alteração da store
export const {
	addItem,
	editItem,
	deleteItem,
	fetchItem,
} = todoListSlice.actions;
export default todoListSlice.reducer;
