import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		increment: (state, actions) => state + actions.payload.num,
		decrement: (state) => state - 1,
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
