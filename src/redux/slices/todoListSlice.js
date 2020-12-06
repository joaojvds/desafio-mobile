import { createSlice } from '@reduxjs/toolkit';
import { saveData, deleteData } from '../../api/realm';

const todoListSlice = createSlice({
	name: 'todoList',
	initialState: [],
	reducers: {
		fetchItem: (state, actions) => {
			return [...actions.payload];
		},
		addItem: (state, actions) => {
			saveData('todo', actions.payload);
			return [...state, actions.payload];
		},
		editItem: (state, actions) => {
			saveData('todo', actions.payload, 'modified');
			return state.map((item) => {
				return item.id === actions.payload.id ? actions.payload : item;
			});
		},
		deleteItem: (state, actions) => {
			deleteData('todo', actions.payload.id);
			return state.filter((item) => item.id !== actions.payload.id);
		},
	},
});

export const {
	addItem,
	editItem,
	deleteItem,
	fetchItem,
} = todoListSlice.actions;
export default todoListSlice.reducer;
