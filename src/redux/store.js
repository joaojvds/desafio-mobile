import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoListReducer from './slices/todoListSlice';

export default store = configureStore({
	reducer: combineReducers({
		todoList: todoListReducer,
	}),
});
