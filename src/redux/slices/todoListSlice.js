import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
	name: 'todoList',
	initialState: [
		{
			id: '0',
			userId: '0',
			title: 'item 1',
			completed: false,
		},
	],
	reducers: {
		addItem: (state, actions) => {
			return [...state, actions.payload];
		},
		editItem: (state, actions) => {
			return state.map((item) => {
				return item.id === actions.payload.id ? actions.payload : item;
			});
		},
		completeItem: (state, actions) => {
			return state.map((item) => {
				return item.id === actions.payload.id ? actions.payload : item;
			});
		},
		deleteItem: (state, actions) => {
			return state.filter((item) => item.id !== actions.payload.id);
		},
	},
});

export const { addItem, editItem, deleteItem } = todoListSlice.actions;
export default todoListSlice.reducer;
